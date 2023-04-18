import bcrypt from 'bcrypt'
import express, { Express, Request, Response } from 'express'
import { uuid } from "uuidv4";
import Customers from './repositories/Customers'
import { Countries } from './repositories/Countries'
import { CountryT } from './models/Country'
import { isValidishEmail } from './validations/email'
import { CustomerT } from './models/Cutomers'
import { isValidishNames } from './validations/Names'
import { isValidishPassword } from './validations/Password'
import { writeFile, readFile, appendFile } from 'fs'
import fs from 'fs'
import { json } from 'stream/consumers';
import session from 'express-session';
const app: Express = express()
const port = 8081

declare module 'express-session' {
  interface SessionData {
    authentication: boolean
  }
}
const sessionConfig = {
  secret: 'ffghj8yg89',
  saveUninitialized: true,

}
app.use(express.json());
app.use(session(sessionConfig))
Customers.init()

app.get('/', (req: Request, res: Response,next) => {
  // res.header("Location", "https://http.cat/400").send(":|");
  if (req.session.authentication) {
    res.status(200).send(req.body.email)
  }
  else{
    res.status(407).json({type:"MissingAuthentication"})
  }
  
})
app.get("/countries", (req: Request, res: Response) => {
  res.json(Countries);
});

app.post('/customers', async (req: Request, res: Response, next) => {

  const givennames: string | undefined = req.body.givennames
  if (!givennames) {
    return res.status(404).json({ type: "MissingGivennames" })
  }
  if (!isValidishNames(givennames)) {
    return res.status(400).json({ type: "InvalidGivennames" })
  }

  const lastname: string | undefined = req.body.lastname
  if (!lastname) {
    return res.status(404).json({ type: 'MissingLastname' })
  }
  if (!isValidishNames(lastname)) {
    return res.status(400).json({ type: 'Invalidlastname' })
  }

  const email = req.body.email
  if (!email) {
    return res.status(404).json({ type: "MissingEmailAddress" })
  }
  if (!isValidishEmail(email)) {
    return res.status(400).json({ type: "InvalidEmail" })
  }
  if (await Customers.findByEmail(email)) {
    res.status(409).json({ type: "EmailAlreadyInUse" })
  }

  const password: string | undefined = req.body.password
  if (!password) {
     return res.status(404).json({ type: 'MissingPassword' }) 
  }
  if (!isValidishPassword(password)) { 
    return res.status(406).json({ type: 'WeakPassword' }) 
  }
  const CryptedPassword = await bcrypt.hash(password, 10)

  const countrycode: string | undefined = req.body.countrycode;
  if(!countrycode){
    return res.status(400).json({ type: 'MissingCountrycode' })
  }
  const Country_info: CountryT | undefined = Countries.find((Countries) => Countries.code === countrycode)
  if (!Country_info) {
    return res.status(400).json({ type: 'UnknownCountry' });
  }
  if (Country_info.isSupported != `Supported`) {
    return res.status(400).json({ type: `${Country_info.isSupported}` })
  }

  const customerId = uuid();
  //res.status(200).json({type : customerId,email,CryptedPassword,givennames,lastname, countrycode})
  const Customer = await Customers.add_new_customer({
    id: customerId,
    email,
    password: CryptedPassword,
    givennames,
    lastname,
    countrycode,
  })
  req.session.authentication = true;
  res.json(Customer)



})
app.post("/login", async (req: Request, res: Response) => {
  const Input = req.body
  if (!Input) { 
    return res.status(400).json({ type: "NoPayLoad" }) 
  }
  const Valid = await Customers.findByEmail(Input.email);
  if (!Valid) {
     return res.status(404).json({ type: "TheEmailDoesNotExist" }) 
    }
  if (await bcrypt.compare(Valid.password, Input.password)) {
    return res.status(400).json({ type: "WrongPassword" })
  }
  req.session.authentication=true;
  res.status(200).json({ type: "Ok"})

})
app.listen(port, () => {
  console.log(
    `⚡️[server]: Customer Service is running at http://localhost: ${port}`
  )
})

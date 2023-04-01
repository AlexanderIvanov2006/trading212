import { promises } from "dns";
import { CustomerT } from "../models/Cutomers";
import fs from "fs"
interface InterfaceforCustomers{
    fetchAll(): Promise<CustomerT[]>
    findByEmail(email:string): Promise<CustomerT | undefined>
    findByID(id:string): Promise<CustomerT | undefined>
    add_new_customer(customer: CustomerT): Promise<CustomerT | undefined>
   }
class Customers implements InterfaceforCustomers{
    private customers: CustomerT[]=[]
    
    async init(){
        const raw_customers_data= fs.readFileSync('./Fake_DB/customers_data.json','utf8')
        this.customers= JSON.parse(raw_customers_data)
        

    }
    fetchAll(): Promise<CustomerT[]>{
        return Promise.resolve(this.customers)
    }

    findByEmail(email: string): Promise<CustomerT | undefined> {
        const already_existing: CustomerT| undefined=this.customers.find((customer)=>customer.email===email)
        return Promise.resolve(already_existing)
    }
     findByID(id: string): Promise<CustomerT | undefined> {
        const already_existing: CustomerT| undefined=this.customers.find((customer)=> customer.id===id)
        return Promise.resolve(already_existing)
    }
    async add_new_customer(customer: CustomerT): Promise<CustomerT | undefined> {
        if(await this.findByID(customer.id)){
            throw new Error(`Existing customer ID ${customer.id}`)
        }
        this.customers.push(customer)
        fs.writeFileSync('./Fake_DB/customers_data.json',JSON.stringify(this.customers))
        return Promise.resolve(customer)
    }
}
export default new Customers();


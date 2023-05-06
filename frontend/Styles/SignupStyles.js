import { StyleSheet } from "react-native"
export const SignupStyleAddInfo = StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
    //justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // padding: 50 - 0 - 0,
    paddingTop: "50px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    gap: 30,
    isolation: "isolate",
    width: 390,
    //height: 450,
    height: 450,
    top: 90,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  Title: {
    width: 120,
    height: 50,
    top: 50,
    left: 135,
    fontFamily: "Poppins-Tabular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "50px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
    flex: 0,
    order: 0,
    flexGrow: 0,
    zIndex: 0,

    position: "absolute",
  },
  Inputs: {
    width: 390,
    height: 320,
    flex: 0,
    order: 1,
    alignSelf: "stretch",
    flexGrow: 0,
    zIndex: 1,
    top: 130,
    position: "absolute",
  },
  CountryofResidence: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    position: "absolute",
    width: 390,
    height: 70,
    left: 0,
    top: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    border: "none",
  },
  CountryInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    //padding: 13px 19px 0px 20px;
    paddingTop: "13px",
    paddingRight: "19px",
    paddingBottom: "0px",
    paddingLeft: "20px",
    gap: 10,
    width: 390,
    height: 70,
    flex: 0,
    order: 0,
    flexGrow: 0,
    //backgroundColor: "white",
  },
  CountryDropDownMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: 351,
    height: 46,
    flex: 0,
    order: 0,
    alignSelf: "stretch",
    flexGrow: 0,
    top: 13,
    left: 20,
    position: "absolute",
  },
  CountryFrame: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 2,
    width: 319,
    height: 46,
    flex: 0,
    order: 0,
    flexGrow: 1,
  },
  CountryLable: {
    display: "flex",
    width: 319,
    height: 19,
    fontFamily: "Poppins-Tabular",
    fontStyle: "normal",
    fontWeight: "500px",
    fontSize: "12px",
    lineHeight: "19px",
    textTransform: "uppercase",
    color: "#747980",
    flex: 0,
    order: 0,
    alignSelf: "stretch",
    flexGrow: 0,
  },
  CountryValue: {
    display: "flex",
    width: 319,
    height: 25,
    fontFamily: "Poppins-Tabular",
    fontStyle: "normal",
    fontWeight: "300px",
    fontSize: "17px",
    lineHeight: "25px",
    color: "#000000",
    flex: 0,
    order: 1,
    alignSelf: "stretch",
    flexGrow: 0,
  },
  CountryList: {
    display: "flex",
    flexDirection: "column",
    //alignItems: "flex-start",
    padding: 0,
    isolation: "isolate",
    //display: 0,
    width: 390,
    height: 250,
    flex: 0,
    order: 1,
    flexGrow: 0,
    top: 70,
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    backgroundColor: "#FFFFFF",
  },
  CountryListEl: {
    display: "flex",
    flexDirection: "row",
    //alignItems: "flex-start",
    //padding: 10px 20px;
    paddingTop: "10px",
    paddingRight: "20px",
    paddingBottom: "10px",
    paddingLeft: "20px",
    gap: 15,
    isolation: "isolate",
    width: 390,
    height: 50,
    borderRadius: 5,
    flex: 0,
    order: 1,
    flexGrow: 0,
    zIndex: 0,
  },
  CountryListElText: {
    top: 10,
    left: 20,
    width: 350,
    height: 30,
    fontFamily: "Poppins-Tabular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    color: "#747980",
    flex: 0,
    order: 0,
    flexGrow: 1,
  },

  NameInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    //padding: 35px 20px 0px;
    paddingTop: "35px",
    paddingRight: "20px",
    paddingBottom: "0px",
    paddingLeft: "20px",
    gap: 15,
    position: "absolute",
    width: 390,
    height: 70,
    left: 0,
    backgroundColor: "#FFFFFF",
  },
  NameLabel: {
    width: 350,
    height: 19,
    fontFamily: "Poppins-Tabular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineheight: "19em",
    textTransform: "uppercase",
    color: "#747980",
    flex: 0,
    order: 0,
    alignSelf: "stretch",
    flexGrow: 0,
    top: 35,
    left: 20,
    position: "absolute",
  },
  NextButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //padding: 30px 20px 20px;
    paddingTop: "30px",
    paddingRight: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    gap: 20,
    backgroundColor: "white",
    position: "absolute",
    width: 390,
    height: 110,
    left: 0,
    top: 210,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  NextButton: {
    position: "absolute",
    //justifyContent:"center"
    width: 350,
    height: 60,
    left: 20,
    right: 0,
    top: 30,
    bottom: 0,
    backgroundColor: "#00A7E1",
    borderRadius: 10,
    flex: 0,
    order: 1,
    flexGrow: 0,
    zIndex: 1,
    border: "none",
  },
  NextButtonText: {
    width: 42,
    height: 30,
    fontFamily: "Poppins-Tabular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "19px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    flex: 0,
    order: 2,
    flexGrow: 0,
    zIndex: 2,
    top: 15,
    left: 154,
    position: "absolute",
  },
  Separator: {
    height: StyleSheet.hairlineWidth,
    width: 351,
    position: "absolute",
    left: 20,
    right: 0,
    top: 69,
    bottom: 0,
    backgroundColor: "#747980",
  },
})

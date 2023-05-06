import { Dimensions, StyleSheet, View } from "react-native"
import { CustomSignup } from "./signup/CustomSignup"
export default function App() {
  return (
    <View style={{ height: ScreenHeight,width:ScreenWidth, backgroundColor:"#ECEDF1" }} >
    <View style={[styles.container,{zIndex:1}]}>
      <CustomSignup />
    </View></View>
  )
}
const ScreenHeight = Dimensions.get("window").height
const ScreenWidth= Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 40,
    position: "absolute",
    width: 390,
    height: 540,
    left: ScreenWidth/2 - 390/2,
    top:  ScreenHeight/2 - 540/2 - 0.5,
    
  },
})

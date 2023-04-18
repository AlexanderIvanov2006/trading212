import { StyleSheet, View } from "react-native"
import { CustomSighup } from "./signup/CustomSighup"
export default function App() {
  return (
    <View style={styles.container}>
      <CustomSighup />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   /* flexBasis:"content",
    alignItems: "center",
    justifyContent: "center",
    height: 450,
    width: 390,*/
    //alignContent:"center",
    //alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flex: 1,
    width: 390,
    height: 450,

    
  },
})

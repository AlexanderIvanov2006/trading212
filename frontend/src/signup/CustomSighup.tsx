import React, { useCallback, useMemo, useRef, useState } from "react"
import { Animated, Pressable, StyleSheet, TextInput, View } from "react-native"
import { CountriesInfo } from "../../assets/CountriesInfo"


export function CustomSighup() {
  const [getFirstName, setFirstName] = useState("")
  const [getLastName, setLastName] = useState("")
  const [selectedCode, setSelectedCode] = useState("")
  const FadeAnim = useRef(new Animated.Value(0)).current
  const [CurrFlatListState, setCurrFlatListState] = useState(false)
  const ButtonAction = useCallback(() => {
    
   (!CurrFlatListState)? Animated.timing(FadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start():
    Animated.timing(FadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start()  
    setCurrFlatListState(!CurrFlatListState)
  }, [CurrFlatListState])
  const CountryListScrolling = useCallback(() => {
            // Optional async listener
    
    
  }, []) 
  
  const CountryList = useMemo(() => {
    
    return (
     <Animated.FlatList
        style={[{ opacity: FadeAnim }]}
        scrollEnabled={true}
        data={CountriesInfo}
        //onScroll={}
        initialNumToRender={1}
        windowSize={1}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => {
              setSelectedCode(item.code)
            }}
          >
            <text>{item.name}</text>
          </Pressable>
        )}
      />
      
    )
  }, [CountriesInfo, FadeAnim])
  //console.log({CountryList})
  return (
    <View style={CustomSighupStyle.Container}>
      <button onClick={ButtonAction} style={CustomSighupStyle.CountryButton}>
        <text>Country</text>
      </button>
      <View>{CountryList}</View>
      <text>First name</text>
      <TextInput
        id="FirstName"
        placeholder="Alexander"
        placeholderTextColor="#838383"
        onChangeText={(value) => {
          setFirstName(value)
        }}
        style={CustomSighupStyle.FirstName}
      />
      <text>Last name</text>
      <TextInput
        placeholder="Ivanov"
        placeholderTextColor="#838383"
        onChangeText={(value) => {
          setLastName(value)
        }}
        style={CustomSighupStyle.FirstName}
      />
      <button
        type="button"
        onClick={() => {
          console.log(getFirstName)
        }}
        style={CustomSighupStyle.NextButton}
      >
        Next
      </button>
    </View>
  )
}
const CustomSighupStyle = StyleSheet.create({
  CountryButton: {
    display: "flex",
    flexdirection: "column",
    alignitems: "flex-start",
    padding: 0,

    position: "absolute",
    width: 390,
    height: 70,
    left: 0,
    top: 0,

    background: "#FFFFFF",
    borderradius: 10,
  },
  Container: {
    display: "flex",
    flexBasis: 1,
    alignItems: "center",
    justifyContent: "center",
    flexdirection: "column",
    alignitems: "center",
    padding: 50 - 0 - 0,
    gap: 30,
    isolation: "isolate",
    width: 390,
    height: 450,
    //position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  NextButton: {
    /* position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#00A7E1",
    borderradius: 10,
    flex: 0,
    order: 1,
    flexgrow: 0,
    zindex: 1,*/
  },
  FirstName: {
    display: "flex",
    flexdirection: "column",
    alignitems: "flex-start",
    padding: 35 - 20 - 0,
    gap: 15,

    position: "absolute",
    width: 390,
    height: 70,
    left: 0,
    top: 70,

    background: "#FFFFFF",
  },
  lastname: {},
})

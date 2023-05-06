import React, {
  CSSProperties,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  Animated,
  Image,
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native"
import { SignupStyleAddInfo } from "../../Styles/SignupStyles"
import { CountriesInfo } from "../../assets/CountriesInfo"
import { url } from "inspector"
export function CustomSignup() {
  const [getSignupStage, setSignupStage] = useState<1 | 2>(1)
  return getSignupStage === 1 ? (
    <CustomSignupAddInfo ChangingSignupStage={setSignupStage} />
  ) : (
    <CustomSignupLoginInfo />
  )
}
function CustomSignupLoginInfo() {
  return <View></View>
}

export function CustomSignupAddInfo(props: {
  ChangingSignupStage: React.Dispatch<React.SetStateAction<1 | 2>>
}) {
  const [getFirstName, setFirstName] = useState("")
  const [getSurname, setSurname] = useState("")
  const [selectedCode, setSelectedCode] = useState("")
  const FadeAnim = useRef(new Animated.Value(0)).current
  const [CurrFlatListState, setCurrFlatListState] = useState<0 | 1>(1)
  const ChangingCountryListState = useCallback(() => {
    CurrFlatListState === 1
      ? (Animated.timing(FadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start(),
        setCurrFlatListState(0))
      : (Animated.timing(FadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(),
        setCurrFlatListState(1))
    //setCurrFlatListState(!CurrFlatListState)
  }, [CurrFlatListState])

  const CountryList = useMemo(() => {
    //console.log(200)
    return (
      <Animated.FlatList
        style={[SignupStyleAddInfo.CountryList, { opacity: FadeAnim }]}
        scrollEnabled={true}
        data={CountriesInfo}
        //onScroll={}
        //windowSize={2}
        contentContainerStyle={{ alignItems: "flex-start" }}
        renderItem={({ item }) => (
          <Pressable
            style={SignupStyleAddInfo.CountryListEl}
            onPress={() => {
              setSelectedCode(item.code)
              ChangingCountryListState()
              //   console.log(2)
            }}
          >
            <text style={SignupStyleAddInfo.CountryListElText}>
              {item.name}
            </text>
          </Pressable>
        )}
      />
    )
  }, [CountriesInfo, FadeAnim, CurrFlatListState])

  const ExtractingFirstName = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setFirstName(e.nativeEvent.text)
    },
    [getFirstName]
  )
  //console.log(getFirstName)
  const ExtractingSurname = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSurname(e.nativeEvent.text)
    },
    [getSurname]
  )

  const NextButtonAction = useCallback(() => {
    props.ChangingSignupStage(2)
  }, [])

  return (
    <View style={[SignupStyleAddInfo.Container]}>
    
      <View style={[SignupStyleAddInfo.Title]}>Sign up</View>
      <View style={[SignupStyleAddInfo.Inputs, { zIndex: CurrFlatListState }]}>
        <button
          onClick={ChangingCountryListState}
          style={SignupStyleAddInfo.CountryofResidence as CSSProperties}
        >
          <View style={SignupStyleAddInfo.CountryInput}>
            <View style={SignupStyleAddInfo.CountryDropDownMenu}>
            
              <View style={SignupStyleAddInfo.CountryFrame}>
                <text style={SignupStyleAddInfo.CountryLable as CSSProperties}>
                  Country of residence
                </text>
                <text style={SignupStyleAddInfo.CountryValue as CSSProperties}>
                  Select Country
                </text>
              </View>
            </View>
            <View style={SignupStyleAddInfo.Separator}></View>
          </View>
        </button>
        <View style={{ zIndex: CurrFlatListState === 1 ? 0 : 1 }}>
          {CountryList}
        </View>
        <View style={[SignupStyleAddInfo.NameInput, { top: 70 }]}>
          <TextInput
            placeholder="First Name"
            onChange={ExtractingFirstName}
            style={SignupStyleAddInfo.NameLabel}
          />
          <View style={SignupStyleAddInfo.Separator}></View>
        </View>
        
        <View style={[SignupStyleAddInfo.NameInput, { top: 140 }]}>
         
          <TextInput
            placeholder="Surname"
            onChange={ExtractingSurname}
            style={[SignupStyleAddInfo.NameLabel]}
          />
          <View style={SignupStyleAddInfo.Separator}></View>
        </View>
        <View style={SignupStyleAddInfo.NextButtonContainer}>
          <button
            style={SignupStyleAddInfo.NextButton}
            onClick={NextButtonAction}
          >
            <text style={SignupStyleAddInfo.NextButtonText}>Next</text>
          </button>
        </View>
      </View>
    </View>
  )
}

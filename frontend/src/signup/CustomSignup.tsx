import React, {
  CSSProperties,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  Animated,
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native"
import { SignupStyleAddInfo } from "../../Styles/SignupStyles"
import { CountriesInfo } from "../../assets/CountriesInfo"
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
  const [selectedCode, setSelectedCode] = useState("Select Country")
  const FadeAnim = useRef(new Animated.Value(0)).current
  const FirstNameArea = useRef<TextInput | null>(null)
  const SurnameArea = useRef<TextInput | null>(null)
  const [CurrFlatListState, setCurrFlatListState] = useState<0 | 1>(1)

  interface ListElColorT {
    [index: string]: HTMLDivElement
  }
  const ListElColor = useRef<ListElColorT>({})
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
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={SignupStyleAddInfo.CountryListEl}
              onPress={(e) => {
                setSelectedCode(item.code)
                ChangingCountryListState()

                //   console.log(2)
              }}
              onHoverIn={() => {
                //if (ListElColor.current[index] === null) {return console.log(1)}
                ListElColor.current[`${item.code}`].style.backgroundColor =
                  "#F4F4F6"
              }}
              onHoverOut={() =>
                (ListElColor.current[`${item.code}`].style.backgroundColor =
                  "#FFFFFF")
              }
            >
              <div
                ref={(el) => {
                  if (el != null) ListElColor.current[`${item.code}`] = el
                }}
                style={SignupStyleAddInfo.CountryListElTextContainer}
              >
                <text style={SignupStyleAddInfo.CountryListElText}>
                  {item.name}
                </text>
              </div>
            </Pressable>
          )
        }}
      />
    )
  }, [CountriesInfo, FadeAnim, CurrFlatListState, ListElColor])

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
                  {selectedCode}
                </text>
              </View>
            </View>
            <View style={SignupStyleAddInfo.Separator}></View>
          </View>
        </button>
        <View style={{ zIndex: CurrFlatListState === 1 ? 0 : 1 }}>
          {CountryList}
        </View>
        <Pressable
          style={[SignupStyleAddInfo.NameInput, { top: 70 }]}
          onPress={() => {
            FirstNameArea.current?.focus()
          }}
        >
          <TextInput
            ref={FirstNameArea}
            placeholder="First Name"
            onChange={ExtractingFirstName}
            style={SignupStyleAddInfo.NameLabel}
          />
          <View style={SignupStyleAddInfo.Separator}></View>
        </Pressable>

        <Pressable
          style={[SignupStyleAddInfo.NameInput, { top: 140 }]}
          onPress={() => {
            SurnameArea.current?.focus()
          }}
        >
          <TextInput
            ref={SurnameArea}
            placeholder="Surname"
            onChange={ExtractingSurname}
            style={[SignupStyleAddInfo.NameLabel]}
          />
          <View style={SignupStyleAddInfo.Separator}></View>
        </Pressable>
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

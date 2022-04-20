import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import StickyHeaderFooterScrollView from "react-native-sticky-header-footer-scroll-view";
import uuid from "react-native-uuid";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

interface field {
  id: any;
  COURSE: string;
  GRADE: string;
  CREDIT: string;
}

export default function Main() {
  const [field, setField] = useState<field[]>([
    { id: uuid.v4(), COURSE: "", GRADE: "", CREDIT: "" },
    { id: uuid.v4(), COURSE: "", GRADE: "", CREDIT: "" },
  ]);

  function getTotalCredit() {
    const totalCredits = field.reduce(
      (total, data) => total + parseInt(data.CREDIT),
      0
    );
    return totalCredits;
  }

  function getPoints(points: string) {
    switch (points) {
      case "A":
        return 5.0;
      case "a":
        return 5.0;

      case "B":
        return 4.0;
      case "b":
        return 4.0;

      case "C":
        return 3.0;
      case "c":
        return 3.0;

      case "D":
        return 2.0;
      case "d":
        return 2.0;

      case "E":
        return 1.0;
      case "e":
        return 1.0;

      case "F":
        return 0.0;
      case "f":
        return 0.0;

      default:
        return 0.0;
    }
  }

  function get_All_GRADE_X_CREDIT() {
    const cal = field.reduce(
      (total, data) => total + getPoints(data.GRADE) * parseInt(data.CREDIT),
      0
    );
    return cal;
  }

  const getGPA = () => get_All_GRADE_X_CREDIT() / getTotalCredit();

  // console.log(getGPA());

  const TabView = () => {
    return (
      <View style={styles.tab}>
        <Pressable
          style={{
            marginBottom: 20,
            marginLeft: 100,
            width: 100,
            height: 50,
            borderBottomStartRadius: 5,
            borderBottomEndRadius: 5,
            borderTopEndRadius: 5,
            borderTopStartRadius: 5,
            backgroundColor: "#b804a6",
            alignItems: "center",
            justifyContent: "center",
            elevation: 10,
          }}
          onPress={() => console.log(getGPA())}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            CALCULATE
          </Text>
        </Pressable>
        <View
          style={{
            marginBottom: 20,
            marginLeft: 100,
            marginRight: 10,
          }}
        >
          <Pressable
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: "#b804a6",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              setField((currentField) => [
                ...currentField,
                {
                  id: uuid.v4(),
                  COURSE: "",
                  GRADE: "",
                  CREDIT: "",
                },
              ])
            }
          >
            <Image
              source={require("../../assets/icons/add.png")}
              style={{
                width: 100,
                height: 22,
                resizeMode: "contain",
                tintColor: "#2fed39",
              }}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StickyHeaderFooterScrollView
          renderStickyHeader={() => (
            <View style={styles.header}>
              <View style={{ marginTop: 40 }}>
                <Text style={styles.text}>YOUR CURRENT GPA IS</Text>
                <Text style={styles.text2}>5.0</Text>
              </View>
            </View>
          )}
          renderStickyFooter={() => (
            <View>
              <TabView />
            </View>
          )}
          additionalHeightReserve={0}
        >
          {/* <View>
          <Text>
            {JSON.stringify(usefulData)}
          </Text>
        </View> */}

          <View style={{ height: windowHeight / 1.3, backgroundColor: "#eee" }}>
            {field.map((d) => {
              return (
                <View key={d.id}>
                  <ScrollView key={d.id}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                        marginBottom: 2,
                        marginRight: 5,
                        marginLeft: 5,
                      }}
                    >
                      <TextInput
                        style={{
                          fontSize: 18,
                          color: "black",
                          textAlign: "center",
                          borderWidth: 2,
                          width: 110,
                          borderColor: "#b804a6",
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                        value={d.COURSE}
                        placeholder={"COURSE"}
                        keyboardType="default"
                        onChangeText={(text) =>
                          setField((currentField: any) =>
                            currentField.map((x: any) =>
                              x.id === d.id
                                ? {
                                    ...x,
                                    COURSE: text,
                                  }
                                : x
                            )
                          )
                        }
                      />
                      <TextInput
                        style={{
                          fontSize: 18,
                          color: "black",
                          textAlign: "center",
                          borderWidth: 2,
                          width: 110,
                          borderColor: "#b804a6",
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                        value={d.GRADE}
                        placeholder={"GRADE"}
                        keyboardType="default"
                        onChangeText={(text) =>
                          setField((currentField) =>
                            currentField.map((x) =>
                              x.id === d.id
                                ? {
                                    ...x,
                                    GRADE: text,
                                  }
                                : x
                            )
                          )
                        }
                      />
                      <TextInput
                        style={{
                          fontSize: 18,
                          color: "black",
                          textAlign: "center",
                          borderWidth: 2,
                          width: 110,
                          borderColor: "#b804a6",
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                        value={d.CREDIT}
                        placeholder={"CREDIT"}
                        keyboardType="numeric"
                        onChangeText={(text) =>
                          setField((currentField) =>
                            currentField.map((x) =>
                              x.id === d.id
                                ? {
                                    ...x,
                                    CREDIT: text,
                                  }
                                : x
                            )
                          )
                        }
                      />
                    </View>
                    <Pressable
                      style={{
                        height: 34,
                        width: 40,
                        borderRadius: 50,
                        backgroundColor: "#b804a6",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onPress={() =>
                        setField((currentField) =>
                          currentField.length > 2
                            ? currentField.filter((x) => x.id !== d.id)
                            : currentField
                        )
                      }
                    >
                      <Image
                        source={require("../../assets/icons/substrate.png")}
                        style={{
                          width: 40,
                          height: 34,
                          resizeMode: "contain",
                          tintColor: "#2fed39",
                        }}
                      />
                    </Pressable>
                  </ScrollView>
                </View>
              );
            })}
          </View>
        </StickyHeaderFooterScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: windowWidth,
    height: windowHeight / 6,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  header: {
    marginTop: 0,
    width: windowWidth,
    height: windowHeight / 6,
    backgroundColor: "#b804a6",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 15,
  },
});

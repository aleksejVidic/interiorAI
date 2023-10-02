import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from '../components/Fonts';
export default function Onboarding() {

  const navigation = useNavigation();

  const toChooseScreen = () => {
    navigation.navigate("Onboarding2")
  }
  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#6db4b4", "#0c575f"]}
          style={{
            flex: 1,
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <View style={styles.content}>
        <Text style={[styles.title, fonts.bold700]}>
          Interiors designed to enjoy
        </Text>
        <Image
          style={styles.img}
          source={require("../assets/onboaridingImg1.png")}
          resizeMode='contain'
        />
        <Pressable style={styles.btn} onPress={toChooseScreen}>
          <Text style={[styles.btnTxt, fonts.bold700]}>
            Continue
          </Text>
        </Pressable>
      </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: "#041a29",
    justifyContent: "center",
    //paddingTop: StatusBar.currentHeight
  },
  content: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flex: 1,
      marginTop: "80@vs",
      marginBottom: "40@vs"
  },
  title: {
    fontSize: "24@ms",
    color: "white",
    marginTop: StatusBar.currentHeight
  },
  img: {
    width: "500@s",
    height: "400@vs",
    aspectRatio: 16 / 9,
    marginBottom: "5@vs"
  },
  btn: {
    width: "90%",
    alignItems: "center",
    paddingHorizontal: "50@s",
    paddingVertical: "15@vs",
    borderRadius: "10@ms",
    backgroundColor: "white",
  },
  btnTxt: {
    fontSize: "17@ms",
    color: "#0c575f",
  }
})
import { SafeAreaView, StyleSheet, Text, View, Pressable, StatusBar, Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from '../components/Fonts';
export default function Onboarding2() {

    const navigation = useNavigation();

    const toChooseScreen = () => {
        navigation.navigate("ChooseScreen");
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
                Create authentic design using power of AI
            </Text>
            <Image
            style={styles.img}
            source={require("../assets/onboarding2.png")}
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
      textAlign: "center",
      color: "white",
      marginTop: StatusBar.currentHeight
    },
    img: {
    //   width: "400@s",
      height: "340@vs",
      width: "100%",
      aspectRatio: 1 / 1,
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
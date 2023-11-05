import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Feather } from '@expo/vector-icons';
import {fonts} from "../components/Fonts";
export default function ConnectionLost() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <Feather name="wifi-off" size={160} color="black" /> */}
        <Image 
          source={require("../assets/connection-lost.png")}
          resizeMode='contain'
          style={styles.img}
        />
        <Text style={[fonts.bold700, styles.title]}>
          Connection Lost
        </Text>
        <Text style={[fonts.semibold600, styles.substitle]}>
          Oops, it seems like you're not connected to Wi-Fi. Please connect to a mobile or Wi-Fi network.
        </Text>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    img: {
      width: "400@s",
      height: "400@vs",
      marginTop: "10@vs"
    },
    title: {
        fontSize: "30@ms",
        textAlign: "center",
        marginVertical: "15@vs"
    },
    substitle: {
      fontSize: "18@ms",
      textAlign: "center",
      maxWidth: "90%",
      lineHeight: "23@vs"
    }
})
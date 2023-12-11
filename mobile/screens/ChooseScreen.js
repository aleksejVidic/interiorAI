import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import Options from '../components/ChooseScreen/Options';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from '../components/Fonts';
export default function ChooseScreen() {

    const navigation = useNavigation();
    const [roomOpt, setRoomOpt] = useState("");

    const toNotification = () => {
        navigation.navigate("Notifications");
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
                What room you want to change?
            </Text>
            <Text style={[styles.subtitle, fonts.regular400]}>
                We'll personalized style based on your room choice.
            </Text>
            <Options roomOpt={roomOpt} setRoomOpt={setRoomOpt} />
        </View>
        <Pressable onPress={toNotification} style={styles.btn}>
            <Text style={[styles.btnTxt, fonts.bold700]}>
                Continue
            </Text>
        </Pressable>
        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#041a29",
        alignItems: "center"
    },
    content: {
        width: "90%",
    },
    title: {
        color: "white",
        fontSize: "24@ms",
        paddingTop: "50@vs",
    },
    subtitle: {
        color: "white",
        fontSize: "14@ms",
        marginTop: "10@vs"
    },
    btn: {
        width: "90%",
        borderRadius: "10@ms",
        paddingVertical: "15@vs",
        backgroundColor: "white",
        marginTop: "auto",
        marginBottom: "40@vs"
    },
    btnTxt: {
        color: "#0c575f",
        fontSize: "17@ms",
        fontWeight: "bold",
        textAlign: "center"
    }
})
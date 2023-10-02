import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useRef, lazy, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../components/Fonts';
import storage from "@react-native-async-storage/async-storage";
export default function Discount() {

    const confettiRef = useRef();
    const navigation = useNavigation();
    const backHome = async () => {
        navigation.goBack();
        await storage.removeItem("openDiscount");
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={[styles.title, fonts.bold700]}>
                Gift for YOU
            </Text>
            <Pressable onPress={backHome} style={{
                position: "absolute",
                right: 10,
                top: 5
            }}>
                <AntDesign name="close" size={24} color="black" />
            </Pressable>
        </View>
        <Image 
            source={require("../assets/discountImg.png")}
            resizeMode='contain'
            style={styles.img}
        />
        <Text style={[styles.discountTitle, fonts.semi]}>
            50% discount!
        </Text>
        <Text style={[styles.subtitle, fonts.regular400]}>
            Only $19.99/year
        </Text>
        <Pressable style={styles.btn}>
            <Text style={[styles.btnTxt, fonts.bold700]}>
                get offer now
            </Text>
        </Pressable>
        <ConfettiCannon 
            ref={confettiRef}
            count={100}
            origin={{x: -10, y: 0}}
            autoStart={true}
            fadeOut={true}
            autoStartDelay={-2} />
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: StatusBar.currentHeight
    },
    header: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: "24@ms",
        textAlign: "center"
    },
    img: {
        width: "300@s",
        height: "300@vs",
        marginVertical: "15@vs"
    },
    discountTitle: {
        fontSize: "40@ms",
        marginVertical: "30@vs",
    },
    subtitle: {
        fontSize: "18@ms",
        marginBottom: "auto"
    },
    btn: {
        borderRadius: "10@ms",
        width: "90%",
        backgroundColor: "#0c575f",
        paddingVertical: "15@vs",
        marginBottom: "20@vs"
    },
    btnTxt: {
        textTransform: "uppercase",
        color: "white",
        fontSize: "20@ms",
        textAlign: "center"
    }
})
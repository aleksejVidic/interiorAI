import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Feather } from '@expo/vector-icons';
import {fonts} from "../components/Fonts";
export default function ConnectionLost() {
  return (
    <SafeAreaView style={styles.container}>
        <Feather name="wifi-off" size={44} color="black" />
        <Text style={[fonts.bold700, styles.title]}>

        </Text>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: "24@ms",
        textAlign: "center"
    }
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { MaterialIcons } from '@expo/vector-icons';
import { fonts } from '../Fonts';
export default function SourceBtn({ iconName, text, action, disable }) {
  return (
    <Pressable style={styles.btn} onPress={action} disabled={disable}>
        <MaterialIcons name={iconName} size={24} color="#0c575f" />
        <Text style={[styles.btnTxt, fonts.regular400]}>
            {text}
        </Text>
    </Pressable>
  )
}

const styles = ScaledSheet.create({
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "14@s",
        paddingVertical: "20@vs",
        borderRadius: "10@ms",
        backgroundColor: "white",
        width: "30%"
    },
    btnTxt: {
        marginLeft: "5@s",
        color: "#0c575f",
    }
})
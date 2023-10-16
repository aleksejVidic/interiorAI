import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons';
import { fonts } from '../Fonts';
export default function OptionBtn({iconName, txt, action, disable}) {
  return (
    <Pressable style={styles.option} onPress={action} disabled={disable}>
        <FontAwesome name={iconName} size={24} color="#0c575f" />
        <Text style={[styles.optionTxt, fonts.regular400]}>
            {txt}
        </Text>
    </Pressable>
  )
}

const styles = ScaledSheet.create({
    option: {
        alignItems: "center",
        paddingVertical: "5@vs",
        width: "60@s",
        borderRadius: "10@ms",
        backgroundColor: "#c5d8da",
    },
    optionTxt: {
        fontSize: "14@ms",
        color: "#0c575f"
    }
})
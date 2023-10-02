import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FontAwesome5 } from '@expo/vector-icons';
export default memo(function OptionBtn({iconName, txt, action, index, length}) {
  return (
    <>
        <Pressable onPress={action} style={[styles.optionBtn, {
            
        }]}>
            <Text style={styles.optionTxt}>
                {txt}
            </Text>
            {iconName !== "none" && <FontAwesome5 name={iconName} size={24} color="white" />}
        </Pressable>
    </>
  )
});

const styles = ScaledSheet.create({
    optionBtn: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "gray",
        paddingHorizontal: "15@s",
        paddingVertical: "15@vs",
        alignSelf: "center",
        borderBottomWidth: 1,
    },
    optionTxt: {
        fontSize: "18@ms",
        color: "white"
    }
})
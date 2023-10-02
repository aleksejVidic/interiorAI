import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons';
import { fonts } from '../Fonts';
export default function SettingsHeader({setIsVisible}) {
  return (
    <View style={styles.modalHeader}>
      <Text style={[styles.modalTitle, fonts.bold700]}>
        Settings
      </Text>
      <Pressable onPress={() => setIsVisible(false)}>
        <AntDesign name="close" size={30} color="black" />
      </Pressable>
    </View>
  )
}

const styles = ScaledSheet.create({
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "15@s",
    paddingVertical: "15@vs",
    backgroundColor: "#c5d8da"
},
modalTitle: {
    fontSize: "25@ms",
},
})
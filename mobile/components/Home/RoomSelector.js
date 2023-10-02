import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { fonts } from '../Fonts'
export default function RoomSelector({room, setRoom}) {
  const rooms = [
    "Living room",
    "Bedroom",
    "Bathroom",
    "Attic",
    "Kitchen",
    "Dinning room",
    "Study room",
    "Home office",
    "Gaming room",
    "Fittnes gym",
    "Coffee shop",
    "Clothing store",
    "Restaurant",    
  ]
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{
      width: "100%",
      flexGrow: 0
    }} contentContainerStyle={styles.scroll} horizontal>
      {
        rooms.map(r => (
          <Pressable onPress={() => setRoom(r)} key={r} style={[styles.option, {backgroundColor: room === r ? "white" : "#0c575f"}]}>
            <Text style={[styles.optionTxt, {color: room === r ? "#0c575f" : "white"}, fonts.regular400]}>
              {r}
            </Text>
          </Pressable>
        )) 
      }
    </ScrollView>
  )
}

const styles = ScaledSheet.create({
    scroll: {
      paddingHorizontal: "15@s",
      paddingBottom: "10@vs"
    },
    option: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: "10@vs",
      paddingHorizontal: "50@s",
      borderRadius: "10@ms",
      marginRight: "10@vs"
    },
    optionTxt: {
      fontSize: "14@ms"
    }
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fonts } from '../Fonts';
export default function Options({roomOpt, setRoomOpt}) {

    const roomOptions = [
        {
            iconName: "sofa-single",
            roomName: "Living room"
        },
        {
            iconName: "fridge",
            roomName: "Kitchen"
        },
        {
            iconName: "bed-king",
            roomName: "Bedroom"
        },
        {
            iconName: "bathtub",
            roomName: "Bathroom"
        },
    ]
  return (
    <View style={styles.optionContainer}>
      {roomOptions.map(roomOptiom => (
        <Pressable 
            onPress={() => setRoomOpt(roomOptiom.roomName)} key={roomOptiom.roomName} 
            style={
                [styles.option, 
                    {borderColor: roomOpt === roomOptiom.roomName ? "white" : "#c5d8da"}
                ]}>
            <MaterialCommunityIcons name={roomOptiom.iconName} size={24} color="white" />
            <Text style={[styles.optionTxt, fonts.regular400]}>
                {roomOptiom.roomName}
            </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = ScaledSheet.create({
    optionContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: "25@vs"
    },
    option: {
        width: "95%",
        borderRadius: "50@ms",
        backgroundColor: "#4e797d",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "15@vs",
        paddingVertical: "15@vs",
        marginBottom: "15@vs",
        borderWidth: 2
    },
    optionTxt: {
        color: "white",
        fontSize: "16@ms",
        marginLeft: "5@ms"
    }
})
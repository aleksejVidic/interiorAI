import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { fonts } from '../Fonts'

export default function StyleSelector({roomStyle, setStyle}) {

    const roomStyles = [
        {
          name: "Barbie",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Christmas",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Modern",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Halloween",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Minimalist",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Maximalist",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Cyberpunk",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Gaming",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Scandinavian",
          img: require("../../assets/roomStyles/christmas.jpg")
        },
        {
          name: "Tropical",
          img: require("../../assets/roomStyles/christmas.jpg")
        }
    ]
  return (
    <ScrollView style={{
      width: "100%",
      flexGrow: 0,
    }}
      contentContainerStyle={styles.scrollContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
       {roomStyles.map(room => (
        <Pressable onPress={() => setStyle(room.name)} style={styles.styleOption} key={room.name}>
          <Text style={[styles.styleTxt, room.name === roomStyle ? fonts.bold700 : fonts.regular400]}>
            {room.name}
          </Text>
          {/* <View style={styles.imgContainer}>
            <Image 
              source={room.img}
              resizeMode='stretch'
              style={styles.styleImg}
            />
          </View> */}
          <Image 
            source={room.img}
            style={[styles.styleImg1, {borderColor: room.name === roomStyle ? "white" : "#c5d8da"}]}
          />
          <View style={[styles.styleCheckBox, {backgroundColor: room.name === roomStyle ? "white" : "#37838c"}]} />
        </Pressable>
      ))}
    </ScrollView>
  )
}
const styles = ScaledSheet.create({
  scrollContainer: {
    paddingHorizontal: "15@s",
    paddingBottom: "10@vs",
  },
  styleOption: {
    alignItems: "center",
    marginRight: "10@s",
  },
  styleTxt: {
    fontSize: "13@ms",
    marginVertical: "5@vs",
    color: "white"
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100@s",
    height: "20@vs",
    borderWidth: 1
  },
  styleImg1: {
    width: "150@s",
    height: "80@vs",
    borderRadius: "5@ms",
    aspectRatio: 16 / 9,
    borderWidth: 2,
  },
  styleImg: {
    width: "100%",
    height: "100%",
    aspectRatio: 16 / 9,
    borderRadius: "5@ms"
  },
  styleCheckBox: {
    borderRadius: "50@ms",
    width: "15@s",
    height: "5@vs",
    marginVertical: "5@vs"
  }
})
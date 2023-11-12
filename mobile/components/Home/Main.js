import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState, useEffect, memo } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import SourceBtn from './SourceBtn'
import { fonts } from '../Fonts'
import { Camera } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import storage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
export default memo(function Main({ photo, setPhoto, setExampleModal, setShowCamera, disable }) {

  const [cameraPerm, setCameraPerm] = Camera.useCameraPermissions();
  const [filePerm, setFilePerm] = MediaLibrary.usePermissions();
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const cameraBtn = async () => {
      try {
        const photo =  await ImagePicker.launchCameraAsync({
          quality: 1,
          base64: true,
          aspect: [1, 1]
        })
        if(!photo.canceled) {
          setPhoto(photo.assets[0].base64);
        }
      } catch(err) {
        console.log(err);
      }
  }
  const filesBtn = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      base64: true
    })
    if(!image.canceled) {
      setPhoto(image.assets[0].uri);
    }

  }
  const tipsBtn = () => {
    setExampleModal(true);
  }
  return (
    <Pressable style={styles.mainContainer}>
      <Text style={[styles.txt, fonts.regular400]}>
        Selct
      </Text>
      <View style={styles.source}>
        <SourceBtn iconName="lightbulb" text="Tips" action={tipsBtn} disable = {disable} />
        <SourceBtn iconName="photo" text="Photos" action={filesBtn} disable={disable} />
        <SourceBtn iconName="photo-camera" text="Camera" action={cameraBtn} disable={disable} />
      </View>
    </Pressable>
  )
})

const styles = ScaledSheet.create({
    mainContainer: {
        width: "95%",
        borderRadius: "20@ms",
        height: "370@vs",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "rgba(197, 216, 218, 1)",
    },
    txt: {
      color: "black",
      fontSize: "14@ms"
    },
    source: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "5@s",
        width: "95%",
        position: "absolute",
        bottom: "15@vs",
    }
})
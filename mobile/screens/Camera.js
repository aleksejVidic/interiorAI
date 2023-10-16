import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
export default function Camera() {

    const navigation = useNavigation();
    const cameraRef = useRef();

    const takePicture = async () => {
        const options = {
            quality: 1,
            exif: false
        };
        const newPhoto = await cameraRef.current.takePictureAsync(options);
        backHome(newPhoto)
    }
    const backHome = (photo) => {
        navigation.replace("Home", {
            photo
        });
    }
  return (
    <Camera ref={cameraRef} style={styles.container}>
        <Pressable onPress={takePicture} style={styles.btnBorder}>
            <View style={styles.cameraBtn} />
        </Pressable>
    </Camera>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    btnBorder: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50@ms",
        borderColor: "white",
        borderWidth: "5@ms",
        marginBottom: "50@vs",
        width: "80@s",
        height: "80@vs",
    },
    cameraBtn: {
        backgroundColor: "white",
        borderRadius: "50@ms",
        width: "80%",
        height: "80%"
    }
})
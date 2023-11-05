import { Modal, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Camera } from 'expo-camera';

export default function CameraModel({visible, setVisible, setPhoto}) {

    const cameraRef = useRef();

    const takePicture = async () => {
        const options = {
            quality: 1,
            exif: false
        };
        const newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto.uri);
        backHome();
    }
    const backHome = () => {
        setVisible(false);
    }
  return (
    <Modal 
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType='none'
    >
            <Camera ref={cameraRef} style={styles.container}>
                <Pressable onPress={takePicture} style={styles.btnBorder}>
                    <View style={styles.cameraBtn} />
                </Pressable>
            </Camera>
    </Modal>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "black"
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
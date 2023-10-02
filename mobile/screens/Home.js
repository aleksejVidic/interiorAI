import { Button, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RoomSelector from '../components/Home/RoomSelector';
import Main from '../components/Home/Main';
import StyleSelector from '../components/Home/StyleSelector';
import { useNavigation } from '@react-navigation/native';
import Settings from '../components/Settings/Settings';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../components/Fonts';
import storage from "@react-native-async-storage/async-storage";
import ExampleModal from '../components/Home/ExampleModal';
import { Camera } from 'expo-camera';
export default function Home() {

  const cameraRef = useRef();
  const navigation = useNavigation();
  const [room, setRoom] = useState("Living room");
  const [style, setStyle] = useState("Barbie");
  const [photo, setPhoto] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [exampleModal, setExampleModal] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  useEffect(() => {
    const showExampleModal = async () => {
      if(await storage.getItem("firstTimeHome") === null) {
        await storage.setItem("firstTimeHome", "false");
        setExampleModal(true);
      }
    }
    const showDiscount = async () => {
      if(await storage.getItem("openDiscount")) {
        navigation.navigate("Discount");
      }
    }
    showDiscount();
    showExampleModal();
  }, []);
  const toGeneratedDesign = () => {
    navigation.replace("GeneratedDesign");
  }
  const toPaywall = () => {
    navigation.navigate("Paywall");
  }
  const takePicture = async () => {
    const options = {
      quality: 1,
      exif: false
    }
    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    setShowCamera(false);
    console.log(newPhoto);
  }

  if(!showCamera) {
    return (
      <SafeAreaView style={{
        flex: 1,
        alignItems: "center",
      }}>
        <LinearGradient
          colors={["#6db4b4", "#0c575f"]}
          style={{
              flex: 1,
              alignItems: "center",
              width: "100%",
          }}
        >
          <ExampleModal exampleModal={exampleModal} setExampleModal={setExampleModal} />
          {isVisible && <Settings isVisible={isVisible} setIsVisible={setIsVisible} />}
          <View style={styles.header}>
          
          <Text style={[styles.title, fonts.bold700]}>
            Your Current Interior
          </Text>
          <Pressable onPress={toPaywall} style={styles.proContainer}>
            <FontAwesome5 name="crown" size={24} color="yellow" />
            <Text style={[styles.pro, fonts.semibold600]}>
              gift
            </Text>
          </Pressable>
          <Pressable onPress={() => setIsVisible(true)} style={styles.settings}>
            <Ionicons name="settings" size={24} color="white" />
          </Pressable>
        </View>
        <RoomSelector room={room} setRoom={setRoom} />
        <Main photo={photo} setPhoto={setPhoto} setExampleModal={setExampleModal} setShowCamera={setShowCamera} />
        <StyleSelector roomStyle={style} setStyle={setStyle} />
        <Pressable style={styles.btn} onPress={toGeneratedDesign}>
          <Text style={[styles.btnTxt, fonts.bold700]}>
            Render new idea
          </Text>
        </Pressable>
        </LinearGradient>
      </SafeAreaView>
    )
  }
  return (
    <Camera ref={cameraRef} style={styles.cameraContainer}>
      <Pressable onPress={takePicture} style={styles.btnContainer}>
        <View style={styles.btnCamera} />
      </Pressable>
    </Camera>
  )
}

const styles = ScaledSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10@s",
    paddingVertical: "15@vs",
  },
  title: {
    fontSize: "18@ms",
    marginRight: "auto",
    color: "white",
  },
  proContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "50@ms",
    paddingHorizontal: "10@s",
    paddingVertical: "5@vs",
    backgroundColor: "#041a29",
    marginRight: "10@s"
  },
  pro: {
    textTransform: "uppercase",
    color: "white",
    fontSize: "14@ms",
    marginLeft: "10@s",
  },
  settings: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: "50@ms",
    paddingHorizontal: "5@s",
    paddingVertical: "5@vs"
  },
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "12@vs",
    backgroundColor: "white",
    borderRadius: "15@ms",
  },
  btnTxt: {
    fontSize: "18@ms",
    color: "#0c575f",
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnContainer: {
    borderRadius: "50@ms",
    borderWidth: "5@ms",
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "80@s",
    height: "80@vs",
    marginBottom: "50@vs"
  },
  btnCamera: {
    backgroundColor: "white",
    borderRadius: "50@ms",
    width: "80%",
    height: "80%",

  }
})
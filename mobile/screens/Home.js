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
import axios from "axios";
import CameraModel from '../components/Home/CameraModel';
export default function Home() {

  const cameraRef = useRef();
  const navigation = useNavigation();
  const [room, setRoom] = useState("Living room");
  const [style, setStyle] = useState("Barbie");
  const [photo, setPhoto] = useState("https://huggingface.co/lllyasviel/sd-controlnet-mlsd/resolve/main/images/room.png");
  const [isVisible, setIsVisible] = useState(false);
  const [exampleModal, setExampleModal] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [disable, setDisable] = useState(false);
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
  const toGeneratedDesign = (genPhoto) => {
    navigation.replace("GeneratedDesign", {
      genPhoto
    });
  }
  const generateDesign = async () => {
    // const {data} = await axios.post('https://stablediffusionapi.com/api/v5/interior', {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     key: "Ru9PaqdoFwYIOL0WNjrIqWDYo5DDcLM4RBKaU6hc81HYROPhmWeOm9uIiLPa",
    //     init_image : "https://huggingface.co/lllyasviel/sd-controlnet-mlsd/resolve/main/images/room.png",
    //     prompt : "room",
    //     steps : 50,
    //     guidance_scale : 7
    //   }
    // });
    try {
      if(photo == null) {
        return;
      }
      setDisable(true);
      const jsonData = JSON.stringify({
          key: process.env.EXPO_PUBLIC_API_KEY,
          init_image : photo,
          prompt : `${room}, ${style} style`,
          steps : 50,
          guidance_scale : 7,

      })
      console.log(jsonData);
      // const {data} = await axios({
      //   url: 'https://stablediffusionapi.com/api/v5/interior',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: jsonData
      // })
      const fetchData = await fetch(process.env.EXPO_PUBLIC_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonData
      });
      
      const data = await fetchData.json();
      console.log(data);
      setDisable(false);
      toGeneratedDesign(data.output[0]);
    } catch(err) {
      console.log(err);
      setDisable(false);
    }
    
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
          <CameraModel visible={showCamera} setVisible={setShowCamera} setPhoto={setPhoto} />
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
        <Main 
          photo={photo} 
          setPhoto={setPhoto} 
          setExampleModal={setExampleModal} 
          setShowCamera={setShowCamera} 
          disable={disable} />
        <StyleSelector roomStyle={style} setStyle={setStyle} />
        <Pressable style={styles.btn} onPress={generateDesign} disabled={disable}>
          <Text style={[styles.btnTxt, fonts.bold700]}>
            Render new idea
          </Text>
        </Pressable>
        </LinearGradient>
      </SafeAreaView>
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
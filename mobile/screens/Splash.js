import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, Animated } from 'react-native'
import React, {useEffect, useRef} from 'react'
import {ScaledSheet} from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';
import storage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
export default function Splash() {

  const imgOpacity = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const checkNetwork = NetInfo.addEventListener(state => {
    if(!state.isConnected) {
      navigation.replace("ConnectionLost");
    }
  })
  useEffect(() => {
    let id;
    Animated.timing(imgOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      id = setTimeout(async () => {
        if(await storage.getItem("firstOpen") !== "false") {
          await storage.setItem("firstOpen", "false");
          navigation.replace("Onboarding");
          return;
        }
        await storage.setItem("openDiscount", "true");
        navigation.replace("Home");
      }, 1000);
    });
    return () => {
      clearTimeout(id);
      checkNetwork();
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
        <Animated.Image 
          source={require("../assets/image-2.png")}
          resizeMode='contain'
          style={[styles.logo, { opacity: imgOpacity }]}
        />
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: "250@s",
    height: "250@vs",
    borderRadius: "15@ms",
  }
})
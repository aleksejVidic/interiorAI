import { ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Animated, useWindowDimensions, BackHandler } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ScaledSheet } from 'react-native-size-matters'
import Headline from '../components/Paywall/Headline'
import PricingTable from '../components/Paywall/PricingTable'
import Benefits from '../components/Paywall/Benefits'
import Header from '../components/Paywall/Header'
import Content from '../components/Paywall/Content'
import  Constants  from 'expo-constants'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
export default function Paywall() {

  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      let timer;
      const id = BackHandler.addEventListener("hardwareBackPress", () => {
        navigation.goBack();
        timer = setTimeout(() => {
          navigation.navigate("Discount");
        }, 100)
        return true;
        
      }) 
  
      return () => {
        clearTimeout(timer);
        id.remove();
      };
    }, []));
  const offset = useRef(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>
      <Content offset={offset} />
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnTxt}>
            Try for FREE & Subscribe
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    flexGrow: 1,
  },
  headlineContainer: {
    width: "100%",
    flex: 1,
  },
  subBtn: {
    width: "90%",
    borderRadius: "20@ms",
    backgroundColor: "white",
    paddingVertical: "15@vs",
    alignItems: "center",
    marginBottom: "25@vs"
  },
  subBtnTxt: {
    color: "#0c575f",
    fontSize: "18@ms",
    fontWeight: "bold"
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "15@vs",
    paddingHorizontal: "20@s",
    backgroundColor: "#042c34"
  },
  btn: {
    width: "100%",
    borderRadius: "10@ms",
    backgroundColor: "#6db4b4",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "10@vs"
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: "24@ms"
  }
})
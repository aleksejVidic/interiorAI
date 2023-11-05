import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons';
import Main from '../components/GeneratedDesign/Main';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../components/Fonts';
import Settings from '../components/Settings/Settings';

export default function GeneratedDesign({route, navigation}) {

  const [isVisible, setIsVisible] = useState(false);
  const { genPhoto } = route.params;
  console.log(genPhoto);
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
        {isVisible && <Settings isVisible={isVisible} setIsVisible={setIsVisible} />}
        <View style={styles.header}>
          <Text style={[styles.headerTxt, fonts.bold700]}>
            Your new interior
          </Text>
          <View style={styles.settings}>
            <Ionicons name="settings" size={24} color="white" onPress={() => setIsVisible(true)} />
          </View>
        </View>
        <Main photo={genPhoto} />
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10@s",
    paddingVertical: "15@vs",
  },
  headerTxt: {
    fontSize: "18@ms",
    color: "white",
  },
  settings: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: "50@ms",
    paddingHorizontal: "5@s",
    paddingVertical: "5@vs"
  },
})
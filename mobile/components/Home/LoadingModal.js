import { Modal, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { fonts } from '../Fonts'

export default function LoadingModal({ setLoading, loading}) {
  return (
    <Modal
      transparent
      animationType='none'
      visible={loading}
      onRequestClose={() => setLoading(false)}
    >
      <View style={styles.container}>
        <Image 
          source={require("")}
          resizeMode='contain'
          style={styles.image}
        />
        <Text style={[styles.title, fonts.bold700]}>
          Processing...
        </Text>      
      </View>
      <Text style={[styles.message, fonts.regular400]}>
        Please don't close the app or lock your device
      </Text>
    </Modal>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  image: {
    width: "100@s",
    height: "100@vs",
  }, 
  title: {
    fontSize: "18@ms",
    color: "#ffffff",
    marginTop: "15@vs",
    textAlign: "center"
  },
  message: {
    textAlign: "center",
    fontSize: "15@ms",
    color: "#808080",
    position: "absolute",
    bottom: "15@vs",
  }
})
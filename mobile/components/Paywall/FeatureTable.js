import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FontAwesome5 } from '@expo/vector-icons';
export default function FeatureTable() {

  return (
    <View style={styles.container}>
      <Text style={styles.featureTitle}>
        Unlock your potential with Premium
      </Text>
      <View style={styles.featureContainer}>
        <View style={[styles.feature, { backgroundColor: "#c5d8da" }]}>
            <FontAwesome5 name="grin" size={40} color="white" style={styles.featureEmoji} />
            <Text style={styles.featureTxt}>
                Basic
            </Text>
            <Text style={styles.featureDesc}>
                Up to 5 credits, limited access
            </Text>
        </View>
        <View style={[styles.feature, { backgroundColor: "#6db4b4", borderWidth: 2, borderColor: "white" }]}>
            <FontAwesome5 name="grin-stars" size={40} color="white" style={styles.featureEmoji} />
            <Text style={styles.featureTxt}>
                PRO
            </Text>
            <Text style={styles.featureDesc}>
                Full access, unlimited number of generations
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    featureTitle: {
        fontSize: "24@ms",
        color: "white",
        fontWeight: "bold",
        marginVertical: "20@vs",
        textAlign: "center"
    },
    featureContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    feature: {
        alignItems: "center",
        borderRadius: "20@ms",
        width: "45%",
        minHeight: "150@vs"
    },
    featureTxt: {
        fontSize: "18@ms",
        color: "white",
        fontWeight: "bold"
    },
    featureDesc: {
        color: "white",
        maxWidth: "90%",
        textAlign: "center",
        marginTop: "15@vs",
        marginBottom: "5@vs",
    },
    featureEmoji: {
        marginVertical: "10@vs"
    }
})
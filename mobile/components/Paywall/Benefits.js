import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {fonts} from "../Fonts";
export default function Benefits() {

    const benefits = [
        {
            title: "All room styles",
            desc: "You can access all room styles for better more personalized interior"
        },
        {
            title: "Unlimited creation",
            desc: "You can create your new room all day and night"
        },
        {
            title: "No watermarks",
            desc: ""
        },
    ]
  return (
    <View style={styles.benefit}>
        <View style={styles.benefitContainer}>
      {
        benefits.map(benefit => (
            <View key={benefit.title} style={styles.listContainer}>
                <FontAwesome5 name="check-circle" size={24} color="white" />
                <View style={{
                    flex: 1,
                    marginLeft: 5
                }}>
                    <Text style={[styles.benefitTitle, fonts.bold700]}>
                        {benefit.title}
                    </Text>
                    {benefit.desc !== "" && <Text style={[styles.benefitDesc, fonts.regular400]}>
                        {benefit.desc}
                    </Text>}
                </View>
            </View>
        ))
      }
        </View>
    </View>
  )
}

const styles = ScaledSheet.create({
    benefitContainer: {
        //alignItems: "center",
    },
    listContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "15@vs"
    },
    benefitTitle: {
        fontSize: "18@ms",
        color: "white",
        //marginLeft: "5@s",
    },
    benefitDesc: {
        fontSize: "14@ms",
        color: "white"
    },
    benefit: {
        //alignItems: "center",
        paddingLeft: "20@s",
        paddingTop: "20@vs",
        width: "90%"
    }
})
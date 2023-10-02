import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import Benefits from './Benefits';
export default function PricingTable() {

    const {height} = Dimensions.get("window");
    const prices = [
        {
            title: "1",
            price: "$9.99",
            perMonth: "$9.99",
            trial: "No trial"
        },
        {
            title: "12",
            price: "$29.99",
            perMonth: "$2.49",
            trial: "7-day trial"
        },
        {
            title: "6",
            price: "$19.99",
            perMonth: "$3.49",
            trial: "3-day trial"
        },
    ]
  return (
    <View style={{
        width: "100%",
        alignItems: "center",
    }}>
        <View style={styles.pricingContainer}>
      {prices.map(price => (
        <Pressable
            style={styles.priceOption}
            key={price.title}
          >
            <Text style={styles.priceTitle}>
                {price.title}
            </Text>
            <Text style={styles.priceSubtitle}>
                Month
            </Text>
            <Text style={styles.price}>
                {price.price}
            </Text>
            <Text style={styles.monthlyPrice}>
                {price.perMonth}/month
            </Text>
            <View style={styles.trialContainer}>
                <Text style={styles.trialTitle}>
                    {price.trial}
                </Text>
            </View>
        </Pressable>
      ))}
    </View>
    </View>
  )
}

const styles = ScaledSheet.create({
    pricingContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "30@vs"
    },
    title: {
        color: "white",
        fontSize: "30@ms",
        textAlign: "center",
        fontWeight: "bold",
    },
    subtitle: {
        color: "white",
        fontSize: "14@ms",
        textAlign: "center",
    },
    priceOption: {
        alignItems: "center",
        borderRadius: "20@ms",
        backgroundColor: "#4e797d",
        borderWidth: 1,
        borderColor: "#c5d8da"
    },
    priceTitle: {
        color: "white",
        fontSize: "34@ms",
        fontWeight: "bold",
        marginHorizontal: "40@s",
    },
    priceSubtitle: {
        color: "white",
        fontSize: "16@ms",
        fontWeight: "bold"
    },
    price: {
        fontSize: "24@ms",
        fontWeight: "bold",
        color: "white",
    },
    monthlyPrice: {
        fontSize: "14@ms",
        color: "white",
        marginBottom: "5@vs"
    },
    trialContainer: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        borderBottomLeftRadius: "19@ms",
        borderBottomRightRadius: "19@ms"
    },
    trialTitle: {
        fontSize: "14@ms",
        color: "#4e797d",
        marginVertical: "3@vs"
    }
})
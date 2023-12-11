import { ScrollView, StyleSheet, Text, View, Animated, Dimensions, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import Constants from "expo-constants"
import PricingTable from './PricingTable'
import Header from './Header'
import Benefits from './Benefits'
import FeatureTable from './FeatureTable'
import FAQ from './FAQ'
import { fonts } from '../Fonts'

const { height } = Dimensions.get("window");
export default function Content({ offset }) {
  return (
    <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        onScroll={(e) => {
            offset.current.setValue(e.nativeEvent.contentOffset.y);
        }}
    >
        <Header offset={offset} />
        <View style={styles.titleContainer}>
            <Text style={[styles.title, fonts.bold700]}>
                RoomGPT PRO
            </Text>
            <Text style={[styles.subtitle, fonts.regular400]}>
                Unleash your creativity with PRO exprerience
            </Text>
        </View>
        <PricingTable />
        <Benefits />
        <FeatureTable />
        <FAQ />
    </ScrollView>
  )
}

const styles = ScaledSheet.create({
    scroll: {
        alignItems: "center",
        flexGrow: 1,
        paddingBottom: "60@vs"
    },
    container: {
        width: "100%",
        backgroundColor: "#0c575f",
        paddingBottom: "20@vs"
    },
    gradient: {
        width: "100%",
    },
    titleContainer: {
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: "30@ms",
        marginTop: -Constants.statusBarHeight
    },
    subtitle: {
        fontSize: "13@ms",
        color: "white",
    }
})
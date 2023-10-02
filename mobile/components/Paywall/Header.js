import { StyleSheet, Text, View, Dimensions, Image, Pressable, Animated } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get("window");
export default function Header({offset}) {

    const navigation = useNavigation();
    const gradientHeight = offset.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["75%", "100%"],
        extrapolate: "clamp"
    })
    const opacity = offset.current.interpolate({
        inputRange: [80, 300],
        outputRange: [1, 0]
    })

    const backHome = () => {
        navigation.goBack();
        setTimeout(() => {
            navigation.navigate("Discount");
        }, 100)
    }
  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require("../../assets/slikaPaywall.jpg")}
        style={[styles.img, { opacity }]}
      />
        {/* <View style={styles.headlineContainer}>
                <View style={styles.header}>
                    <Pressable style={styles.restore}>
                        <Text style={styles.restoreTxt}>
                            Restore
                        </Text>
                    </Pressable>
                    <Pressable style={styles.closeBtn}>
                        <AntDesign name="close" size={20} color="white" />
                    </Pressable>
                </View>
        </View>
        <View style={styles.content}>
            <Animated.View style={styles.gradient}>
                <LinearGradient 
                    colors={["transparent", "#0c575f"]}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
                <View style={{
                    width: "100%",
                }}>
                    <Text style={styles.title}>
                    DecorGPT PRO
                    </Text>
                    <Text style={styles.subtitle}>
                        Unleash your creativity with PRO exprerience
                    </Text>
                </View>
            </Animated.View> 
        </View> */}
        <View style={{
            ...StyleSheet.absoluteFill,
            justifyContent: "space-between",
        }}>
            <View style={styles.header}>
            <Pressable style={styles.restore}>
                        <Text style={styles.restoreTxt}>
                            Restore
                        </Text>
            </Pressable>
            <Pressable style={styles.closeBtn} onPress={backHome}>
                    <AntDesign name="close" size={20} color="white" />
            </Pressable>
        </View>
        <View style={styles.cover}>
            <Animated.View style={[styles.content, { height: gradientHeight }]}>
                    <LinearGradient 
                        colors={["transparent", "#0c575f"]}
                        style={StyleSheet.absoluteFill}
                        // start={[0, 0.3]}
                        // end={[0, 1]}
                    />
                    {/* <View style={{
                        width: "100%",
                    }}>
                        <Text style={styles.title}>
                        DecorGPT PRO
                        </Text>
                        <Text style={styles.subtitle}>
                            Unleash your creativity with PRO exprerience
                        </Text>
                    </View> */}
            </Animated.View>
        </View>
        </View>
    </View>
  )
}

const styles = ScaledSheet.create({
    container: {
        width: "100%",
        height: height / 2,
    },
    img: {
        width: "100%",
        height: "100%"
    },
    content: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        // height: "60%",
        //borderWidth: 1,
        position: "absolute",
        left: 0,
        bottom: -10,
        right: 0,
    },
    cover: {
        height: "80%",
        width: "100%",
        justifyContent: "flex-end",
        //borderWidth: 1,
        //borderColor: "red"
    },
    headlineContainer: {
        width: "100%",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "blue"
    },
    txt: {
        marginBottom: "100@vs"
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
    gradient: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "60%",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "10@s",
        paddingVertical: "35@vs", 
    },
    restore: {
        borderRadius: "50@ms",
        paddingHorizontal: "10@s",
        paddingVertical: "5@vs",
        backgroundColor: "rgba(4, 26, 41, 0.6)",
    },
    restoreTxt: {
        color: "white",
        fontSize: "12@ms",
    },
    closeBtn: {
        borderRadius: "50@ms",
        paddingHorizontal: "5@s",
        paddingVertical: "5@vs",
        backgroundColor: "rgba(4, 26, 41, 0.6)"
    },
})
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons';
export default function Headline() {

  return (
    <View style={styles.headlineContainer}>
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
        {/* <View style={styles.txt}>
            <Text style={styles.title}>
                DecorGPT PRO
            </Text>
            <Text style={styles.subtitle}>
                Unleash your creativity with PRO experience
            </Text>
        </View> */}
    </View>
  )
}

const styles = ScaledSheet.create({
    headlineContainer: {
        width: "100%",
        justifyContent: "space-between"
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
        backgroundColor: "rgba(4, 26, 41, 0.6)"
    },
    restoreTxt: {
        color: "white",
        fontSize: "12@ms"
    },
    closeBtn: {
        borderRadius: "50@ms",
        paddingHorizontal: "5@s",
        paddingVertical: "5@vs",
        backgroundColor: "rgba(4, 26, 41, 0.6)"
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
    }
})
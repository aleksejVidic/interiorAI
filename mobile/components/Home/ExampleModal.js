import { Modal, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons';
import { fonts } from '../Fonts';
export default function ExampleModal({ exampleModal, setExampleModal}) {
  return (
    <Modal
        visible={exampleModal}
        animationType='fade'
        onRequestClose={() => setExampleModal(false)}
        transparent
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalCart}>
                <View style={styles.header}>
                    <Text style={[styles.modalTitle, fonts.bold700]}>
                        Snap Tips
                    </Text>
                    <Pressable onPress={() => {
                        setExampleModal(false)
                    }}
                        style={styles.headerBtn}
                    >
                        <AntDesign name="close" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={styles.bigImgContainer}>
                    <Image
                        source={require("../../assets/image-2.png")}
                        resizeMode='contain'
                        style={styles.bigImg}
                    />
                    <View style={[styles.tipsCheck, { backgroundColor: "#60d19b" }]}>
                        <AntDesign name="check" size={30} color="white" />
                    </View>
                </View>
                <Text style={[styles.subtitle, fonts.regular400]}>
                    The following will lead to poor results
                </Text>
                <View style={styles.tipsContainer}>
                    <View style={styles.tipsContent}>
                        <Image 
                            source={require("../../assets/image-2.png")}
                            resizeMode='contain'
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 5
                            }}
                        />
                        <View 
                            style={[styles.tipsCheck, {  backgroundColor: "#ee4766" }]}
                        ><AntDesign name="close" size={15} color="white" /></View>
                    </View>
                    <View style={styles.tipsContent}>
                        <Image 
                            source={require("../../assets/image-2.png")}
                            resizeMode='contain'
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 5
                            }}
                        />
                        <View 
                            style={[styles.tipsCheck, {  backgroundColor: "#ee4766" }]}
                        ><AntDesign name="close" size={15} color="white" /></View>
                    </View>
                    <View style={styles.tipsContent}>
                        <Image 
                            source={require("../../assets/image-2.png")}
                            resizeMode='contain'
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 5,
                                borderWidth: 1,
                            }}
                        />
                        <View 
                            style={[styles.tipsCheck, {  backgroundColor: "#ee4766" }]}
                        ><AntDesign name="close" size={15} color="white" /></View>
                    </View>
                    <View style={styles.tipsContent}>
                        <Image 
                            source={require("../../assets/image-2.png")}
                            resizeMode='contain'
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 5
                            }}
                        />
                        <View 
                            style={[styles.tipsCheck, {  backgroundColor: "#ee4766" }]}
                        ><AntDesign name="close" size={15} color="white" /></View>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => setExampleModal(false)}>
                    <Text style={[styles.btnTxt, fonts.bold700]}>
                        Got it!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

const styles = ScaledSheet.create({
    modalContainer: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalCart: {
        width: "85%",
        borderRadius: "10@ms",
        backgroundColor: "white",
        alignItems: "center",
    },
    modalTitle: {
        fontSize: "20@ms",
        textAlign: "center"
    },
    header: {
        width: "100%",
        paddingVertical: "15@ms",
        paddingHorizontal: "10@s",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerBtn: {
        position: "absolute", 
        right: "15@s"
    },
    subtitle: {
        fontSize: "14@ms",
        textAlign: "center"
    }, 
    bigImg: {
        width: "100%",
        height: "100%",
        borderRadius: "5@ms",
    },
    tipsContainer: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginVertical: "20@vs",
    },
    tipsContent: {
        width: "49%",
        height: "70@vs",
        borderWidth: 1,
        marginTop: "10@vs"
    },
    tipsCheck: {
        position: "absolute",
        right: "3@s",
        bottom: "5@vs",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50@ms",
        // width: "30@s",
        // height: "30@vs",
        paddingHorizontal: "1@s",
        paddingVertical: "1@s"
    },
    btn: {
        width: "90%",
        borderRadius: "50@ms",
        paddingVertical: "15@vs",
        backgroundColor: "#0c575f",
        marginBottom: "10@vs"
    },
    btnTxt: {
        color: "white",
        fontSize: "16@ms",
        textAlign: "center"
    },
    bigImgContainer: {
        width: "70%",
        height: "200@vs",
    }
})
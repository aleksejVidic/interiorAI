import { StyleSheet, Text, View, Modal, Platform, SectionList, StatusBar, Pressable, Share, Animated, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import React, {Fragment, useEffect, useRef} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import * as Linking from "expo-linking";
import * as Sharing from "expo-sharing";
import * as StoreReview from "expo-store-review";
import {openBrowserAsync} from "expo-web-browser";
import { FontAwesome5 } from '@expo/vector-icons';
import SettingsHeader from './SettingsHeader';
import OptionBtn from './OptionBtn';
import {useNavigation} from "@react-navigation/native"
import { fonts } from '../Fonts';
export default function Settings({isVisible, setIsVisible}) {

    const navigation = useNavigation();
    const {height} = Dimensions.get("window");
    const tranformAnimation = useRef(new Animated.Value(height)).current;
    useEffect(() => {
        Animated.timing(tranformAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);
    const moveDown = () => {
        Animated.timing(tranformAnimation, {
            toValue: height,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            setIsVisible(false);
        })
    }
    const optionsList = useRef([
        {
            title: "Follow us",
            data: [
                {
                    optionName: "TikTok",
                    optionIcon: "tiktok",
                    action() {
                        openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                    }
                },
                {
                    optionName: "Instagram",
                    optionIcon: "instagram",
                    action() {
                        openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                    }
                },
                {
                    optionName: "Facebook",
                    optionIcon: "facebook",
                    action() {
                        openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                    }
                },
                {
                    optionName: "Pinterest",
                    optionIcon: "pinterest",
                    action() {
                        openBrowserAsync("https://www.tiktok.com/@volleyball.university");
                    }
                }
            ]
        },
        {
            title: "Support us",
            data: [
                {
                    optionName: "Share us",
                    optionIcon: "share",
                    async action() {
                        await Share.share({
                            message: `Give your room a new charm
https://play.google.com/store/apps/details?id=com.interiordesignai.homedecor
                            `
                        });
                        
                    }
                },
                {
                    optionName: "Like us, rate us",
                    optionIcon: "star",
                    action() {
                        const itunesItemId = 982107779;
                        const androidPackageName = 'host.exp.exponent';
                        Linking.openURL(Platform.OS === "ios" ? 
                        `https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review` 
                        : `market://details?id=${androidPackageName}&showAllReviews=true`);
                    }
                },
                {
                    optionName: "Restore",
                    optionIcon: "none",
                    action() {

                    }
                },
            ]
        },
        {
            title: "Other",
            data: [
                {
                    optionName: "Privacy Policy",
                    optionIcon: "none",
                    action() {
                        navigation.navigate("PdfDoc", {
                            docID: "privacyPolicy"
                        })
                    }
                },
                {
                    optionName: "Terms of Service",
                    optionIcon: "none",
                    action() {
                        navigation.navigate("PdfDoc", {
                            docID: "termsOfService"
                        })
                    }
                },
                {
                    optionName: "Rights Policy",
                    optionIcon: "none",
                    action() {
                        navigation.navigate("PdfDoc", {
                            docID: "rightsPolicy"
                        })
                    }
                },
                {
                    optionName: "Community Guidelines",
                    optionIcon: "none",
                    action() {
                        navigation.navigate("PdfDoc", {
                            docID: "communityGuidelines"
                        })
                    }
                }
            ]
        }
    ]).current;
    const toPaywallScreen = () => {
        navigation.navigate("Paywall")
    }
  return (
    <Animated.View style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        transform: [{translateY: tranformAnimation}],
        flex: 1,
        position: "absolute",
        zIndex: 1000,
    }}>
        <View style={styles.modalContainer}>
            <SettingsHeader setIsVisible={moveDown} />
            <ScrollView style={{
               width: "100%",
               flex: 1,
            }}
                contentContainerStyle={styles.options}
                showsVerticalScrollIndicator={false}
            >
                <Pressable onPress={toPaywallScreen} style={styles.freeBtn}>
                    <FontAwesome5 name="crown" size={24} color="yellow" />
                    <Text style={[styles.btn, fonts.bold700]}>
                        Try it FREE
                    </Text>
                </Pressable>
                {optionsList.map(optionList => (
                    <Fragment key={optionList.title}>
                        <Text style={[styles.headerTitle, fonts.semibold600]}>
                            {optionList.title}
                        </Text>
                        {optionList.data.map((option, index) => {
                            const topRadius = index === 0 ? styles.borderTop : null;
                            const bottomRadius = index === optionList.data.length - 1 ? styles.borderBottom : null;
                            return (
                                <Pressable key={index} onPress={option.action} style={[styles.optionBtn, topRadius, bottomRadius, {borderBottomWidth: index === optionList.data.length - 1 ? 0 : 1}]}>
                                    <Text style={[styles.optionTxt, fonts.regular400]}>
                                        {option.optionName}
                                    </Text>
                                    {option.optionIcon !== "none" && <FontAwesome5 name={option.optionIcon} size={24} color="black" />}
                                </Pressable>
                            )
                        })}
                    </Fragment>
                ))}
            </ScrollView>
        </View>
    </Animated.View>
  )
}

const styles = ScaledSheet.create({
    modalContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
    },
    btn: {
        color: "white",
        fontSize: "18@ms",
        marginLeft: "5@s"
    },
    options: {
        flexGrow: 1,
        alignItems: "center",
        paddingTop: "15@vs",
        paddingBottom: "50@vs",
        width: "100%",
        backgroundColor: "#c5d8da"
    },
    freeBtn: {
        backgroundColor: "#0c575f",
        width: "80%",
        borderRadius: "15@ms",
        paddingHorizontal: "30@s",
        paddingVertical: "10@vs",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    optionList: {
        width: "100%",
        paddingHorizontal: "15@s",
        paddingVertical: "15@vs"
    },
    borderBottom: {
        borderBottomLeftRadius: "15@ms",
        borderBottomRightRadius: "15@ms",
    },
    borderTop: {
        borderTopLeftRadius: "15@ms",
        borderTopRightRadius: "15@ms",
    },
    headerTitle: {
        fontSize: "14@ms",
        textTransform: "uppercase",
        alignSelf: "flex-start",
        paddingLeft: "15@s",
        marginVertical: "10@vs"
    },
    optionBtn: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingHorizontal: "15@s",
        paddingVertical: "15@vs",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: "#c5d8da"
    },
    optionTxt: {
        fontSize: "18@ms",
        color: "black"
    },
    optionContainer: {

    }
})
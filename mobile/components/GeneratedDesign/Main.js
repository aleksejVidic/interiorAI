import { Image, Pressable, StyleSheet, Text, View ,Share } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FontAwesome5 } from '@expo/vector-icons';
import OptionBtn from './OptionBtn';
import { fonts } from '../Fonts';
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from '@react-navigation/native';
export default function Main() {

    const navigation = useNavigation();
    const [disable, setDisable] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const backHome = () => {
        navigation.replace("Home");
    }
    const sharePicture = async () => {
        let value = await Share.share({
            url: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmobile-1710fd3c-1f6d-4c37-84a3-4f64bca05a0a/ImagePicker/f6854524-a7e7-4bc1-99d4-05bd6bf182cb.png",
            message: "Share your impressions with your friend!",
            
            
        })
        console.log(value);
    }
    const savePicture = async () => {
        let value = await MediaLibrary.saveToLibraryAsync("file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmobile-1710fd3c-1f6d-4c37-84a3-4f64bca05a0a/ImagePicker/f6854524-a7e7-4bc1-99d4-05bd6bf182cb.png");
        console.log(value);
    }
    const generateOtherIdea = async () => {
        const {data} = await axios.post("https://stablediffusionapi.com/api/v5/interior", {
            key: "",
            init_image: "https://huggingface.co/lllyasviel/sd-controlnet-mlsd/resolve/main/images/room.png",
            prompt: "room",
            steps: 50,
            guidance_scale: 7
            }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
  return (
    <>
        <View style={styles.mainContainer}>
            <Image 
                source={require("../../assets/roomStyles/christmas.jpg")}
                resizeMode='contain'
                style={styles.generatedImg}
            />
        </View>
        <Pressable style={styles.regenerate} onPress={generateOtherIdea} disabled={disable}>
            <Text style={[styles.regenerateTxt, fonts.bold700]}>
                Render other idea
            </Text>
        </Pressable>
        <View style={styles.optionContainer}>
            <OptionBtn iconName="download" txt="Save" action={savePicture} disable={disable} />
            <OptionBtn iconName="home" txt="Home" action={backHome} disable={disable} />
            <OptionBtn iconName="share-alt" txt="Share" action={sharePicture} disable={disable} />
        </View>
    </>
  )
}

const styles = ScaledSheet.create({
    mainContainer: {
        width: "95%",
        borderRadius: "20@ms",
        height: "370@vs",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c5d8da"
    },
    generatedImg: {
        width: "100%",
        height: "100%",
    },
    regenerate: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: "30@s",
        paddingVertical: "15@vs",
        marginVertical: "25@vs",
        backgroundColor: "white",
        borderRadius: "20@ms"
    },
    regenerateTxt: {
        color: "#0c575f",
        fontSize: "20@ms",
    },
    optionContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical: "20@vs"
    }
})
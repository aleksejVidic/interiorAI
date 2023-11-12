import { Image, Pressable, StyleSheet, Text, View, Share } from 'react-native'
import React, {useState} from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FontAwesome5 } from '@expo/vector-icons';
import OptionBtn from './OptionBtn';
import { fonts } from '../Fonts';
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { shareAsync } from 'expo-sharing';
import * as ImagePicker from "expo-image-picker";
export default function Main({ photo }) {

    const navigation = useNavigation();
    const [disable, setDisable] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [permission, setPermission] = MediaLibrary.usePermissions();
    const backHome = () => {
        navigation.replace("Home");
    }
    const sharePicture = async () => {
        let value = await Share.share({
            message: photo
        })
        console.log(value);
    }
    const savePicture = async () => {
        try {
            // const album = await MediaLibrary.getAlbumAsync("Download");
            // console.log(album);
            // await MediaLibrary.addAssetsToAlbumAsync(photo, album.id, false);
            const downImg = await FileSystem.downloadAsync(photo, FileSystem.documentDirectory + "image.png");
            console.log(downImg);
            await MediaLibrary.saveToLibraryAsync(downImg.uri);
            
        }catch(err) {
            console.log(err);
        }
    }
    const generateOtherIdea = async () => {
        try {
            const jsonData = JSON.stringify({
                  key: process.env.EXPO_PUBLIC_API_KEY,
                  init_image : "https://huggingface.co/lllyasviel/sd-controlnet-mlsd/resolve/main/images/room.png",
                  prompt : "room",
                  steps : 50,
                  guidance_scale : 7
              })
            const fetchData = await fetch(process.env.EXPO_PUBLIC_API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: jsonData
            });
            const data = await fetchData.json();
            setImageUrl(data.output[0]);
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <>
        <View style={styles.mainContainer}>
            <Image 
                source={{uri: photo}}
                resizeMode='cover'
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
        borderRadius: "20@ms"
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
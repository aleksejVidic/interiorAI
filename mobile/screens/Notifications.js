import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, Pressable, Platform, Linking } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import * as Notification from 'expo-notifications';
import storage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../components/Fonts';

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});
export default function Notifications() {
    const navigation = useNavigation();
    const notificationListener = useRef();
    const responseListener = useRef();
    const triggerNotification = async () => {
        await Notification.scheduleNotificationAsync({
        content: {
          title: "Hi",
          body: "Body",
          data: {data: "Data notifikacije"}
        },
        trigger: {
          repeats: true,
          seconds: 2 * 24 * 60 * 60
        }
      })
    }
    const toPaywall = () => {
        triggerNotification();
        navigation.replace("Home");
    }
    const getPermission = async () => {
        if (Platform.OS === 'android') {
          await Notification.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notification.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
          const { status } = await Notification.getPermissionsAsync();
          let finalStatus = status;
          if (status !== 'granted') {
            finalStatus = (await Notification.requestPermissionsAsync()).status;
          }
          if (finalStatus !== 'granted') {
            await storage.setItem("notifToken", "");
            return;
          }
          let {data: token} = await Notification.getExpoPushTokenAsync({
            projectId: "de5ac479-aa0a-4384-9383-0f8e0d1a414f"
          });
          await storage.setItem("notifToken", token);
        }
    }
    useEffect(() => {
      getPermission();
      notificationListener.current = Notification.addNotificationReceivedListener(notification => console.log(notification));
      responseListener.current = Notification.addNotificationResponseReceivedListener(notification => {
        
      });
      return () => {
        if (notificationListener.current?.remove) {
          notificationListener.current.remove();
        }
        if (responseListener.current?.remove) {
          responseListener.current.remove();
        }
      }
    }, []);
  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#6db4b4", "#0c575f"]}
          style={{
              flex: 1,
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
          }}
        >
          <View style={styles.content}>
            <View>
              <Text style={[styles.title, fonts.bold700]}>
                  Enable push notifications
              </Text>
              <Text style={[styles.subtitle, fonts.regular400]}>
                  Allow us to send notifications, so you wouldn't miss anything
              </Text>
            </View>
            <Image
            style={styles.img}
            source={require("../assets/pngwing.com.png")}
            resizeMode='contain'
            />
            <Pressable onPress={toPaywall} style={styles.btn}>
            <Text style={[styles.btnTxt, fonts.bold700]}>
                Agree & Continue
            </Text>
            </Pressable>
        </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#041a29"
    },
    content: {
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flex: 1,
        marginTop: "80@vs",
        marginBottom: "40@vs"
    },
    title: {
      fontSize: "24@ms",
      textAlign: "center",
      color: "white",
      marginTop: StatusBar.currentHeight
    },
    subtitle: {
      fontSize: "14@ms",
      color: "#c5d8da",
      textAlign: "center",
      maxWidth: "90%",
      marginTop: "5@vs"
    },
    img: {
       width: "100%",
       height: "300@vs",
       aspectRatio: 1 / 1,
       marginBottom: "5@vs"
    },
    btn: {
      width: "90%",
      alignItems: "center",
      paddingHorizontal: "50@s",
      paddingVertical: "15@vs",
      borderRadius: "10@ms",
      backgroundColor: "white",
    },
    btnTxt: {
      fontSize: "17@ms",
      color: "#0c575f",
    }
})
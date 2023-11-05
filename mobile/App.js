
import { StyleSheet, Text, View, StatusBar, Easing } from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import GeneratedDesign from './screens/GeneratedDesign';
import Paywall from './screens/Paywall';
import PdfDoc from './screens/PdfDoc';
import Onboarding from './screens/Onboarding';
import ChooseScreen from './screens/ChooseScreen';
import Onboarding2 from './screens/Onboarding2';
import Notifications from "./screens/Notifications";
import AppLoading from 'expo-app-loading';
import NetInfo from '@react-native-community/netinfo';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import Discount from './screens/Discount';
import ConnectionLost from './screens/ConnectionLost';
const Stack = createStackNavigator();
export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const config = {
    animation: "timing",
    config: {
      duration: 500,
      easing: Easing.linear
    },
  }
  useEffect(() => {
    const checkNetwork = NetInfo.addEventListener(state => {
      if(!state.isConnected) {
        navigation.replace("ConnectionLost");
      }
    })
    
    checkNetwork();
  }, []);
  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar 
          barStyle={"light-content"}
        />
        <Stack.Navigator initialRouteName='Splash' screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
          <Stack.Screen 
            name="Splash"
            component={Splash}
          />
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="GeneratedDesign"
            component={GeneratedDesign}
          />
          <Stack.Screen 
            name="Paywall"
            component={Paywall}
            options={{
              transitionSpec: {
                open: config,
                close: config
              },
              cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
              // cardStyleInterpolator: ({next, current, layouts}) => {
              //   return {
              //     cardStyle: {
              //       transform: [
              //         {
              //           translateY: current.progress.interpolate({
              //             inputRange: [0, 1],
              //             outputRange: [layouts.screen.height, 0]
              //           })
              //         }
              //       ]
              //     }
              //   }
              // },
              animationEnabled: true
            }}
          />
          <Stack.Screen 
            name="PdfDoc"
            component={PdfDoc}
          />
          <Stack.Screen 
            name="Onboarding"
            component={Onboarding}
          />
          <Stack.Screen 
            name="ChooseScreen"
            component={ChooseScreen}
          />
          <Stack.Screen 
            name="Onboarding2"
            component={Onboarding2}
          />
          <Stack.Screen 
            name="Notifications"
            component={Notifications}
          />
          <Stack.Screen 
            name="Discount"
            component={Discount}
            options={{
              animationEnabled: true,
              transitionSpec: {
                open: config,
                close: config
              },
              cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
              // cardStyleInterpolator: ({next, current, layouts}) => {
              //   return {
              //     cardStyle: {
              //       transform: [
              //         {
              //           translateY: current.progress.interpolate({
              //             inputRange: [0, 1],
              //             outputRange: [layouts.screen.height, 0]
              //           })
              //         }
              //       ]
              //     }
              //   }
              // }
            }}
          />
          <Stack.Screen 
            name="ConnectionLost"
            component={ConnectionLost}
          />
        </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
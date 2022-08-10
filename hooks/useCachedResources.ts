import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import {
  RobotoMono_600SemiBold,
  RobotoMono_600SemiBold_Italic,
} from "@expo-google-fonts/roboto-mono";

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // const imageAssets = cacheImages([
        //   require("../assets/images/landing.jpg"),
        // ]);

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          // roboto
          Roboto_100Thin,
          Roboto_100Thin_Italic,
          Roboto_300Light,
          Roboto_300Light_Italic,
          Roboto_400Regular,
          Roboto_400Regular_Italic,
          Roboto_500Medium,
          Roboto_500Medium_Italic,
          Roboto_700Bold,
          Roboto_700Bold_Italic,
          Roboto_900Black,
          Roboto_900Black_Italic,
          // roboto mono
          RobotoMono_600SemiBold,
          RobotoMono_600SemiBold_Italic,
          Roboto: Roboto_500Medium,
          RobotoCondensedbold: require("../assets/fonts/RobotoCondensed-Bold.ttf"),
          RobotoCondensedlight: require("../assets/fonts/RobotoCondensed-Light.ttf"),
          Robotomid: require("../assets/fonts/Roboto-Medium.ttf"),
          RobotoCondensedregular: require("../assets/fonts/RobotoCondensed-Regular.ttf"),
        });

        // load images
        // await Promise.all([...imageAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    "PlaywriteDEGrund-ExtraLight": require("../assets/fonts/PlaywriteDEGrund-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return fontsLoaded;
}

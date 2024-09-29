import { useFonts } from "expo-font";

export default function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    "PlaywriteDEGrund-ExtraLight": require("../assets/fonts/PlaywriteDEGrund-ExtraLight.ttf"),
  });

  return fontsLoaded;
}

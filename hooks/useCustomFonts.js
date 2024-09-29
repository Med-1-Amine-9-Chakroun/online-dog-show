import { useFonts } from "expo-font";

export default function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    "PlaywriteDEGrund-ExtraLight": require("../assets/fonts/playwrite/PlaywriteDEGrund-ExtraLight.ttf"),
    "fredoka-bold": require("../assets/fonts/fredoka/Fredoka-Bold.ttf"),
    "fredoka-regular": require("../assets/fonts/fredoka/Fredoka-Regular.ttf"),
    "fredoka-light": require("../assets/fonts/fredoka/Fredoka-Light.ttf"),
  });

  return fontsLoaded;
}

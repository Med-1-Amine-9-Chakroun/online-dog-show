import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function GetStartedScreen() {
  let [fontsLoaded] = useFonts({
    "PlaywriteDEGrund-ExtraLight": require("../assets/fonts/PlaywriteDEGrund-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/dog.png")}
          style={styles.image}
        />
        <Text style={styles.desc}>Explore the wonderful world of dogs!</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Explore Now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#dce6f2",
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 10,
  },
  desc: {
    width: "90%",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 40,
    fontSize: 20,
    fontFamily: "PlaywriteDEGrund-ExtraLight",
  },
  button: {
    padding: 20,
    backgroundColor: "#cfb0d4",
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "PlaywriteDEGrund-ExtraLight",
  },
});

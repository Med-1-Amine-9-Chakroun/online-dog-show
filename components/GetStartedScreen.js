import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AppLoading from "expo-app-loading";
import useCustomFonts from "../assets/useCustomFonts";
import { useNavigation } from "@react-navigation/native";

export default function GetStartedScreen() {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePress = () => {
    navigation.navigate("DogsList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/dog.png")}
          style={styles.image}
        />
        <Text style={styles.desc}>Explore the wonderful world of dogs!</Text>
        <Text style={{ fontFamily: "System", fontSize: 20 }}>
          Test System Font
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.buttonText}>Explore Now</Text>
      </TouchableOpacity>
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
    backgroundColor: "#cfb0d4",
    borderRadius: 50,
    paddingVertical: 15,

    alignItems: "center",
    fontSize: 20,
    width: 200,
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

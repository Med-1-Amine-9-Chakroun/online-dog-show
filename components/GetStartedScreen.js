import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles/GetStartedScreenStyles";

import { useNavigation } from "@react-navigation/native";

export default function GetStartedScreen() {
  const navigation = useNavigation();

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
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.buttonText}>Explore Now</Text>
      </TouchableOpacity>
    </View>
  );
}

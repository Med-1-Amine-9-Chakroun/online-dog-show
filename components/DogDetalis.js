import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DogDetalis({ route }) {
  const { dogData } = route.params;
  const [id, setId] = useState(dogData?.id ?? "");
  const [breedName, setBreedName] = useState(
    dogData?.breeds?.[0]?.name ?? "Unknown Breed"
  );
  const [breedGroup, setBreedGroup] = useState(
    dogData?.breeds?.[0]?.breed_group ?? "Unknown Group"
  );
  const [bredFor, setBredFor] = useState(
    dogData?.breeds?.[0]?.bred_for ?? "Unknown Purpose"
  );
  const [height, setHeight] = useState(
    dogData?.height ? (dogData.height / 1000).toFixed(2) : "--"
  );
  const [width, setWidth] = useState(
    dogData?.width ? (dogData.width / 1000).toFixed(2) : "--"
  );
  const [weight, setWeight] = useState(
    dogData?.breeds?.[0]?.weight?.metric ?? "--"
  );
  const [temperament, setTemperament] = useState(
    dogData?.breeds?.[0]?.temperament ?? "Unknown Temperament"
  );
  const [urlImage, setUrlImage] = useState(dogData?.url ?? "");

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("DogsList");
  };

  return (
    <View style={styles.container}>
      {/* Dog details card */}
      <View style={styles.card}>
        <View style={styles.bar}></View>
        <Image source={{ uri: urlImage }} style={styles.image} />
        <View style={styles.bar_2}></View>
        <View style={styles.dogData}>
          <Text style={styles.title}>Breed name:</Text>
          <Text style={styles.textValue}>{breedName}</Text>
          <Text style={styles.title}>Breed group:</Text>
          <Text style={styles.textValue}>{breedGroup}</Text>
          <Text style={styles.title}>Bred for:</Text>
          <Text style={styles.textValue}>{bredFor}</Text>

          <View style={styles.mesurmentView}>
            <View style={styles.mesurmentValue}>
              <Text style={styles.title}>Height</Text>
              <View style={styles.hr}></View>
              <Text style={styles.textValue}>{height} m</Text>
            </View>
            <View style={styles.mesurmentValue}>
              <Text style={styles.title}>Width</Text>
              <View style={styles.hr}></View>
              <Text style={styles.textValue}>{width} m</Text>
            </View>
            <View style={styles.mesurmentValue}>
              <Text style={styles.title}>Weight</Text>
              <View style={styles.hr}></View>
              <Text style={styles.textValue}>{weight} Kg</Text>
            </View>
          </View>

          <Text style={styles.title}>
            This dog has a wonderful temperament:
          </Text>
          <Text style={styles.textValue}>{temperament}</Text>
        </View>
        <View style={styles.bar_1}></View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <View style={styles.buttonContent}>
          <Ionicons
            style={styles.buttonText}
            name="chevron-back-outline"
            size={24}
            color="white"
          />
          <Text style={styles.buttonText}>Back to list</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#dce6f2",
    width: "100%",
  },
  bar: {
    height: 5,
    width: 50,
    backgroundColor: "#a2a2a4",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  bar_1: {
    height: 4,
    width: 50,
    backgroundColor: "#a2a2a4",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  card: {
    marginTop: 50,
    backgroundColor: "#fcfcff",
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 5,
  },
  bar_2: {
    height: 1,
    width: "100%",
    backgroundColor: "#c7c7ca",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    backgroundColor: "#e7f0ff",
    fontFamily: "fredoka-regular",
    fontSize: 18,
    padding: 5,
    borderRadius: 15,
    textAlign: "center",
  },
  textValue: {
    fontFamily: "fredoka-regular",
    textAlign: "center",
    padding: 10,
    fontSize: 16,
  },
  mesurmentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 20,
  },
  mesurmentValue: {
    textAlign: "center",
    backgroundColor: "#e7f0ff",
    padding: 5,
    borderRadius: 10,
  },
  hr: {
    height: 2,
    width: 20,
    backgroundColor: "#a2a2a4",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 10,
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
    marginBottom: 10,
    marginTop: 30,
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "PlaywriteDEGrund-ExtraLight",
  },
});

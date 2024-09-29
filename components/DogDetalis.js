import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/DogDetailsStyles";

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

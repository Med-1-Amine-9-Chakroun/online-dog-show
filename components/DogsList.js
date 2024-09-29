import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/DogListStyles";

export default function DogsList() {
  const [listDogs, setListDogs] = useState([]);

  const navigation = useNavigation();

  const handlePress = (dogData) => {
    navigation.navigate("DogDetails", { dogData });
  };

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setListDogs(result);
        console.log(result[0].breeds[0].weight.metric);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navText}>Dogs List</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={listDogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* image devision */}
            <Image source={{ uri: item.url }} style={styles.image} />
            {/* Dog data devision (name, height, width, ...) */}
            <View style={styles.dataCard}>
              {/* Name */}
              <Text style={styles.dataDogText}>Breed name:</Text>
              <Text style={styles.dataDogTextBreedValue}>
                {item.breeds[0]?.name || "Unknown Breed"}
              </Text>
              {/* Mesures data */}
              <View style={styles.dogData}>
                <View>
                  <Text style={styles.dataDogTextTitles}>Height</Text>
                  <Text style={styles.dataDogTextValues}>
                    {(item.height / 1000).toFixed(2)} m
                  </Text>
                </View>
                <View>
                  <Text style={styles.dataDogTextTitles}>Width</Text>
                  <Text style={styles.dataDogTextValues}>
                    {(item.width / 1000).toFixed(2)} m
                  </Text>
                </View>
                <View>
                  <Text style={styles.dataDogTextTitles}>weight</Text>
                  <Text style={styles.dataDogTextValues}>
                    {item.breeds[0].weight.metric} kg
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress(item)}
              >
                <Text style={styles.buttonText}>More details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

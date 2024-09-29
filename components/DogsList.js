import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import useCustomFonts from "../hooks/useCustomFonts";
import AppLoading from "expo-app-loading";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function DogsList() {
  const [listDogs, setListDogs] = useState([]);
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("GetStartedScreen");
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
        console.log(result[0].breeds[0]);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={listDogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* image devision */}
            <Image source={{ uri: item.url }} style={styles.image} />
            {/* Dog data devision (name, height, width, ...) */}
            <View style={styles.dataCard}>
              {/* Name */}
              <Text style={styles.dataDogText}>Name:</Text>
              <Text style={styles.dataDogTextValues}>
                {item.breeds[0]?.name || "Unknown Breed"}
              </Text>
              {/* Mesures data */}
              <View style={styles.dogData}>
                <View>
                  <Text style={styles.dataDogTextTitles}>Height</Text>
                  <Text style={styles.dataDogTextValues}>100</Text>
                </View>
                <View>
                  <Text style={styles.dataDogTextTitles}>Width</Text>
                  <Text style={styles.dataDogTextValues}>60</Text>
                </View>
                <View>
                  <Text style={styles.dataDogTextTitles}>weight</Text>
                  <Text style={styles.dataDogTextValues}>100</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress()}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#dce6f2",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    width: "100%",
  },
  dataCard: {
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: "50%",
  },
  text: {
    padding: 10,
    fontSize: 16,
  },
  dogData: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    display: "flex",
    backgroundColor: "#e7f0ff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataDogText: {
    color: "#2d2e30",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "#e7f0ff",
    fontFamily: "fredoka-bold",
    letterSpacing: 1,
  },
  dataDogTextTitles: {
    color: "#2d2e30",
    textAlign: "center",
    fontFamily: "fredoka-bold",
    letterSpacing: 1,
  },
  dataDogTextValues: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "fredoka-regular",
  },
  button: {
    backgroundColor: "#cfb0d4",
    borderRadius: 50,

    alignItems: "center",
    fontSize: 20,
    padding: 7,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",

    fontFamily: "fredoka-regular",
  },
});

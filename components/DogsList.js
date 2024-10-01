import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/DogListStyles";

export default function DogsList() {
  const [listDogs, setListDogs] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  const handlePress = (dogData) => {
    navigation.navigate("DogDetails", { dogData });
  };

  const fetchDogsData = (currentPage) => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    setLoadingMore(true);
    fetch(
      `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${currentPage}&limit=20`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched result: ", result);
        setListDogs((prevDogs) => [...prevDogs, ...result]); // Append new data
        setLoading(false);
        setLoadingMore(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setLoadingMore(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchDogsData(page);
  }, [page]);

  const loadMoreDogs = () => {
    if (!loadingMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

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
            {/* Log to check what item is being rendered */}
            {console.log("Rendering dog item: ", item)}

            <Image source={{ uri: item.url }} style={styles.image} />
            <View style={styles.dataCard}>
              <Text style={styles.dataDogText}>Breed name:</Text>
              <Text style={styles.dataDogTextBreedValue}>
                {item.breeds[0]?.name || "Unknown Breed"}
              </Text>

              <View style={styles.dogData}>
                <View>
                  <Text style={styles.dataDogTextTitles}>Height</Text>
                  <Text style={styles.dataDogTextValues}>
                    {item.height
                      ? `${(item.height / 1000).toFixed(2)} m`
                      : "N/A"}
                  </Text>
                </View>

                <View>
                  <Text style={styles.dataDogTextTitles}>Width</Text>
                  <Text style={styles.dataDogTextValues}>
                    {item.width ? `${(item.width / 1000).toFixed(2)} m` : "N/A"}
                  </Text>
                </View>

                <View>
                  <Text style={styles.dataDogTextTitles}>Weight</Text>
                  <Text style={styles.dataDogTextValues}>
                    {item.breeds[0]?.weight.metric || "Unknown"} kg
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
        onEndReached={loadMoreDogs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loadingMore ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : null
        }
      />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}

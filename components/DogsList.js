import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function DogsList() {
  const [listDogs, setListDogs] = useState([]);
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
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setListDogs(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <View>
      <Text>azer</Text>
    </View>
  );
}

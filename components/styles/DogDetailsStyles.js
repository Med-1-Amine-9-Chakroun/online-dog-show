// DogDetailsStyles.js

import { StyleSheet } from "react-native";

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
    marginBottom: 20,
    marginTop: 20,
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

export default styles;

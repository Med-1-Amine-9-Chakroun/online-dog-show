import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#dce6f2",
    width: "100%",
  },
  flatList: { padding: 20, width: "100%" },
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
    paddingVertical: 8,
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
    fontSize: 13,
    letterSpacing: 1,
  },
  dataDogTextValues: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 13,
    fontFamily: "fredoka-regular",
  },
  dataDogTextBreedValue: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "fredoka-regular",
    fontSize: 14,
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
  nav: {
    height: 90,
    backgroundColor: "#fff",
  },
  navText: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 50,
    fontFamily: "fredoka-regular",
  },
  // loader: {
  //   verticalAlign: "center",
  // },
});

export default styles;

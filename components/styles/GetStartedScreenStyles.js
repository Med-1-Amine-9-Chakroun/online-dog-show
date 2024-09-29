import { StyleSheet } from "react-native";

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

export default styles;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GetStartedScreen from "./components/GetStartedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <GetStartedScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

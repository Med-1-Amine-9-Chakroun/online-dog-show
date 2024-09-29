import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import GetStartedScreen from "./components/GetStartedScreen";
import DogsList from "./components/DogsList";
import DogDetalis from "./components/DogDetalis";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStartedScreen">
          <Stack.Screen
            name="GetStartedScreen"
            component={GetStartedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DogsList"
            component={DogsList}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DogDetails"
            component={DogDetalis}
            // options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

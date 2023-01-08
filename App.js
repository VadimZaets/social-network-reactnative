import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        <HomeNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

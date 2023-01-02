import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import RegistrationScreen from "../../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

const MainStack = createStackNavigator();

const AuthNavigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

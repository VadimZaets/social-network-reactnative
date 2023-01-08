import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "../../screens/AuthScreens/RegistrationScreen";
import LoginScreen from "../../screens/AuthScreens/LoginScreen";

const MainStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
    </MainStack.Navigator>
  );
};

export default AuthNavigation;

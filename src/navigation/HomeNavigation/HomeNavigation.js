import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PostsScreen from "../../screens/MainScreens/PostsScreen";
import ProfileScreen from "../../screens/MainScreens/ProfileScreen";
import CreatePostsScreen from "../../screens/MainScreens/CreatePostsScreen";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PostsNavigation from "../PostsNavigation/PostsNavigation";
import { Link } from "@react-navigation/native";
const MainTabs = createBottomTabNavigator();
const HomeNavigation = ({ navigation }) => {
  return (
    <MainTabs.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: Platform.OS == "ios" ? 20 : 10,
          height: Platform.OS == "ios" ? 80 : 70,
        },
      }}
    >
      <MainTabs.Screen
        name="PostsNav"
        component={PostsNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                focused={true}
                name="grid-outline"
                size={24}
                style={
                  focused
                    ? { color: "#FF6C00" }
                    : { color: "rgba(33, 33, 33, 0.8)" }
                }
              />
            );
          },
        }}
      />
      <MainTabs.Screen
        name="Create posts"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => {
            return (
              <Link
                to={{ screen: "Posts" }}
                style={{
                  marginLeft: 20,
                }}
              >
                <AntDesign name="arrowleft" size={24} color="BDBDBD" />
              </Link>
            );
          },
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.plus}>
                <Entypo name="plus" size={24} color={"#fff"} />
              </View>
            );
          },
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather
                name="user"
                size={24}
                style={
                  focused
                    ? { color: "#FF6C00" }
                    : { color: "rgba(33, 33, 33, 0.8)" }
                }
              />
            );
          },
        }}
      />
    </MainTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  plus: {
    flex: 1,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});

export default HomeNavigation;

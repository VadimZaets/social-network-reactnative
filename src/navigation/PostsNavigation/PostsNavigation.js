import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../../screens/MainScreens/PostsScreen";
import { Feather } from "@expo/vector-icons";
const MainStack = createStackNavigator();

const PostsNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <MainStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.logOut}
                onPress={() => {
                  alert("exit");
                }}
              >
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default PostsNavigation;

const styles = StyleSheet.create({
  logOut: {
    flex: 1,
    justifyContent: "center",
    marginRight: 20,
  },
});

import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Platform,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import * as Font from "expo-font";
import { Link } from "@react-navigation/native";
const Login = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
      "Roboto-Medium": require("../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
      "Roboto-Bold": require("../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    });
  };
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/background.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : null}
          >
            <View style={styles.formContainer}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                placeholder="Адреса електронної пошти"
                value={value}
                onChangeText={inputHandler}
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <TextInput
                placeholder="Пароль"
                value={value}
                onChangeText={inputHandler}
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />

              <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Увійти</Text>
              </Pressable>
              <Link to={{ screen: "Registration" }} style={styles.link}>
                Немає акаунту? Зареєструватись
              </Link>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    height: Platform.OS === "ios" ? "auto" : 800,
  },
  formContainer: {
    position: "relative",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
  },

  input: {
    backgroundColor: "#F6F6F6",
    width: "90%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 28,
    marginBottom: 16,
  },
  btnText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  link: {
    marginBottom: 132,
  },
});

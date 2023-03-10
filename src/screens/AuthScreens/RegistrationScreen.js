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

import * as ImagePicker from "expo-image-picker";

import { AntDesign } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
  avatarImage: null,
};

const RegistrationScreen = ({ navigation }) => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [form, setForm] = useState(initialState);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setForm((prev) => ({
        ...prev,
        avatarImage: result.uri,
      }));
    }
  };
  const delImage = () => {
    setForm((prev) => ({
      ...prev,
      avatarImage: null,
    }));
  };
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
              <View style={styles.uploadContainer}>
                {form.avatarImage ? (
                  <>
                    <Image
                      source={{ uri: form.avatarImage }}
                      style={{ width: 120, height: 120, borderRadius: 16 }}
                    />
                    <TouchableOpacity
                      style={styles.imgWrap}
                      onPress={() => delImage()}
                    >
                      <AntDesign
                        name="closecircleo"
                        size={24}
                        color="grey"
                        style={styles.pluscircleo}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    style={styles.imgWrap}
                    onPress={() => pickImage()}
                  >
                    <AntDesign
                      name="pluscircleo"
                      size={24}
                      color="#FF6C00"
                      style={styles.pluscircleo}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.title}>????????????????????</Text>

              <TextInput
                placeholder="??????????"
                value={form.login}
                onChangeText={(value) =>
                  setForm((prevState) => ({ ...prevState, login: value }))
                }
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <TextInput
                placeholder="???????????? ?????????????????????? ??????????"
                value={form.email}
                onChangeText={(value) =>
                  setForm((prevState) => ({ ...prevState, email: value }))
                }
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <TextInput
                placeholder="????????????"
                value={form.password}
                onChangeText={(value) =>
                  setForm((prevState) => ({ ...prevState, password: value }))
                }
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>??????????????????????????????</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.link}
              >
                <Text> ?????? ?? ?????????????????? ??????????? ????????????</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

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
  uploadContainer: {
    position: "absolute",
    top: -60,
    marginBottom: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  imgWrap: {
    zIndex: 4,
    position: "absolute",
    right: -15,
    bottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 92,
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
    marginBottom: 60,
  },
});

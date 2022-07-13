import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import urlBack from "../Variables";

function Signup() {
  const navigation = useNavigation();

  const actionNavigationLogin = () => {
    navigation.navigate("Login");
  };

  const incorrectionInputs = () =>
    Alert.alert(
      "Register error",
      "Sorry, your inputs are incorrect. Please try again.",
      [{ text: "Continue" }]
    );

  const [textUsername, setTextUsername] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [textEmail, setTextEmail] = useState("");

  const createUserInDB = async () => {
    const result = await fetch(urlBack + "users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: textUsername,
        email: textEmail,
        password: textPassword,
        privacy: "false",
        profilePicture: "",
      }),
    });

    const resultAlbum = await fetch(urlBack + "album/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 10000000,
        users: {
          username: textUsername,
        },
        name: "default",
        visibility: "false",
      }),
    });
    actionNavigationLogin();
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgba(108, 122, 137, 0.95)",
      }}
    >
      <View
        style={{
          marginTop: 120,
          width: 300,
          height: 150,
          alignItems: "center",
        }}
      >
        <Text style={[styles.textTitle, styles.shadowProp]}>Register</Text>
        <Text style={styles.textSubTitle}>Let introduce yourself!</Text>
      </View>
      <View>
        <Text style={styles.textAccountInformation}>ACCOUNT INFORMATION</Text>
        <TextInput
          onChangeText={(newText) => setTextUsername(newText)}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          onChangeText={(newText) => setTextEmail(newText)}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          onChangeText={(newText) => setTextPassword(newText)}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableHighlight
          onPress={() => {
            createUserInDB();
          }}
          activeOpacity={1}
          underlayColor="white"
          style={[styles.item, styles.shadowProp]}
        >
          <Text>Register</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.signUpButon}
          onPress={actionNavigationLogin}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Go to login page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Signup;

const styles = StyleSheet.create({
  signUpButon: {
    alignSelf: "flex-end",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  textTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textSubTitle: {},
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255, 0.3)",
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 3,
    fontSize: 13,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  imageStyle: {
    marginTop: 10,
    flex: 1,
  },
  imageProfile: {
    height: 40,
    width: 40,
    flex: 1,
    marginRight: 10,
    borderRadius: 100,
  },
  userInfoText: {
    justifyContent: "center",
  },
  logoEmoji: {
    fontSize: 100,
  },
  textAccountInformation: {
    fontSize: 13,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 12,
  },
  profileInformations: {
    flexDirection: "row",
  },
  item: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
    backgroundColor: "rgba(355, 355, 355, 0.3)",
    borderRadius: 3,
    marginBottom: 20,
  },
});

import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import urlBack, {
  eraseMailUser,
  erasePasswordUser,
  erasePrivacyUser,
  mailUserGlobal,
  passwordUserGlobal,
  privacyUserGlobal,
  usernameGlobal,
} from "../Variables";

function UpdateProfile() {
  const [textPassword, setTextPassword] = useState(passwordUserGlobal);
  const [textEmail, setTextEmail] = useState(mailUserGlobal);

  const [text, setText] = useState(() => {
    if (privacyUserGlobal == (null || false)) {
      return "🔓";
    }
    if (privacyUserGlobal == true) {
      return "🔒";
    }
  });

  const changePrivacy = () => {
    if (text == "🔓") {
      setText("🔒");
      erasePrivacyUser(true);
    } else {
      setText("🔓");
      erasePrivacyUser(false);
    }
  };

  const editUserInDB = async () => {
    const result = await fetch(urlBack + "users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameGlobal,
        email: textEmail,
        password: textPassword,
        privacy: privacyUserGlobal,
        profilePicture: "",
      }),
    });
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Update Profile"} functionSave={editUserInDB} />
      <KeyboardAvoidingView behavior="position">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 120,
            alignItems: "center",
          }}
        >
          <Image
            style={[styles.imageProfile, styles.shadowProp]}
            source={{
              uri: "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium",
            }}
            resizeMode="contain"
            resizeMethod="resize"
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            {usernameGlobal.trim().replace(/^\w/, (c) => c.toUpperCase())}
          </Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={styles.textAccountInformation}>
              UPDATE INFORMATIONS
            </Text>

            <TextInput
              onChangeText={(newText) => {
                setTextEmail(newText);
                eraseMailUser(newText);
              }}
              placeholder="Change email"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <TextInput
              onChangeText={(newText) => {
                setTextPassword(newText);
                erasePasswordUser(newText);
              }}
              placeholder="Change password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 50,
                paddingRight: 50,
              }}
            >
              <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
                Private profile
              </Text>
              <TouchableOpacity
                style={[
                  styles.shadowProp,
                  {
                    marginTop: 5,
                    borderRadius: 30,
                    backgroundColor: "white",
                    width: 80,
                    height: 40,
                    justifyContent: "center",
                  },
                ]}
                onPress={changePrivacy}
              >
                <Text style={{ alignSelf: "center", fontSize: 30 }}>
                  {text}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <BottomBar namePage={"Profile"} />
    </View>
  );
}
export default UpdateProfile;

const styles = StyleSheet.create({
  imageProfile: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 50,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
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
});

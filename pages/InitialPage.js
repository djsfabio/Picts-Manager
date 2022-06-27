import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";

function InitialPage() {
  const navigation = useNavigation();

  const actionNavigationLogin = () => {
    navigation.navigate("Login");
  };
  const actionNavigationSignup = () => {
    navigation.navigate("SignUp");
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
          marginTop: 100,
          marginBottom: 80,
          width: 300,
          height: 200,
          alignItems: "center",
        }}
      >
        <Text style={[styles.textTitle, styles.shadowProp]}>📸</Text>
        <Text style={styles.textSubTitle}>Picts Manager</Text>
      </View>
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text style={styles.textAccountInformation}>
          Welcome to Picts Manager
        </Text>
        <Text style={{ fontStyle: "italic" }}>
          Join us to share with other users your best pictures.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={actionNavigationSignup}
          style={[styles.item, styles.shadowProp, { backgroundColor: "white" }]}
        >
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={actionNavigationLogin} style={[styles.item]}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default InitialPage;

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
    fontSize: 150,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textSubTitle: {
    fontSize: 40,
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

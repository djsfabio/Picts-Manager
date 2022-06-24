import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function Login() {
  const navigation = useNavigation();
  const actionNavigationHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <View
        style={{
          marginTop: 120,
          width: 200,
          height: 200,
          alignItems: "center",
        }}
      >
        <Text style={styles.logoEmoji}>📸</Text>
        <Text style={styles.textTitle}>Picts Manager</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{ backgroundColor: "white", height: 200, width: 200 }}
          onPress={actionNavigationHome}
        />
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
  textTitle: {
    marginTop: 5,
    fontSize: 20,
    color: "white",
  },
  textLocation: {
    fontSize: 12,
  },
  profileInformations: {
    flexDirection: "row",
  },
});

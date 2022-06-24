import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function BottomBar(props) {
  const navigation = useNavigation();

  const actionNavigationHome = () => {
    navigation.navigate("Home");
  };

  const actionNavigationCamera = () => {
    navigation.navigate("Camera");
  };

  const actionNavigationProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={[styles.item, props.butonHome]}
          onPress={actionNavigationHome}
        >
          <Text style={styles.textInButton}>🏠</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.item, props.butonCamera]}
          onPress={actionNavigationCamera}
        >
          <Text style={styles.textInButton}>📸</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.item, props.butonProfile]}
          onPress={actionNavigationProfile}
        >
          <Text style={styles.textInButton}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default BottomBar;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(108, 122, 137, 0.95)",
  },
  item: {
    marginTop: 10,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    backgroundColor: "rgba(355, 355, 355, 0.3)",
    borderRadius: 30,
    marginBottom: 20,
  },
  textInButton: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

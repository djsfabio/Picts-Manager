import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HeaderBar(props) {
  const navigation = useNavigation();

  const actionNavigationSearch = () => {
    navigation.navigate("Search");
  };

  const DisplaySearchButon = () => {
    switch (props.namePage) {
      case "Home":
        return (
          <TouchableOpacity
            style={styles.butonTopRight}
            onPress={actionNavigationSearch}
          >
            <Text style={styles.textInButton}>🔍</Text>
          </TouchableOpacity>
        );
        break;
      case "Camera":
        return (
          <TouchableOpacity
            onPress={() => props.functionReturnCamera()}
            style={styles.butonTopRight}
          >
            <Text style={styles.textInButton}>🔃</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textInHeader}>{props.namePage}</Text>
      </View>

      <DisplaySearchButon />
    </View>
  );
}
export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 90,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(108, 122, 137, 0.95)",
  },
  butonTopRight: {
    top: 42,
    position: "absolute",
    width: 80,
    height: 40,
    backgroundColor: "white",
    borderRadius: 100,
    right: 0,
    marginRight: 15,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  textInButton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  textInHeader: {
    marginTop: 35,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});

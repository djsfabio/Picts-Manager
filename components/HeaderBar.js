import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CustomButon from "./CustomButon";

function HeaderBar(props) {
  const navigation = useNavigation();

  const actionNavigationSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textInHeader}>{props.namePage}</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonItem}
        onPress={actionNavigationSearch}
      >
        <Text style={styles.textInButton}>🔍</Text>
      </TouchableOpacity>
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
  buttonItem: {
    top: 45,
    position: "absolute",
    width: 50,
    height: 30,
    backgroundColor: "white",
    borderRadius: 30,
    right: 0,
    marginRight: 20,
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

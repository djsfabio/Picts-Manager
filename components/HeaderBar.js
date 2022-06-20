import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function HeaderBar(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textInButton}>{props.namePage}</Text>
    </View>
  );
}
export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "grey",
  },
  item: {
    marginTop: 10,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 20,
  },
  textInButton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

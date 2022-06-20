import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function BottomBar(props) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={props.actionNavigationHome}
        >
          <Text style={styles.textInButton}>🏠</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={props.actionNavigationCamera}
        >
          <Text style={styles.textInButton}>📸</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={props.actionNavigationProfile}
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
    fontSize: 30,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

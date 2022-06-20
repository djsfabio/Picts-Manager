import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function BottomBar(props) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={props.actionNavigationHome}
        >
          <Text style={styles.textInButton}>Home</Text>
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
          <Text style={styles.textInButton}>Profile</Text>
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
    flex: 0.28,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "100%",
    backgroundColor: "grey",
  },
  item: {
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
    fontSize: 18,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

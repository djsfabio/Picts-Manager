import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

  const actionNavigationTest = (imageVar) => {
    navigation.navigate("Test", { imageVar: imageVar });
  };

  var uriImage;

  const ActualButonNavigation = () => {
    switch (props.namePage) {
      case "Home":
        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.item, styles.actualPage]}
              onPress={actionNavigationHome}
            >
              <Text style={styles.textInButton}>🏠</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationCamera}
            >
              <Text style={styles.textInButton}>📸</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationProfile}
            >
              <Text style={styles.textInButton}>👤</Text>
            </TouchableOpacity>
          </View>
        );
      case "Camera":
        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationHome}
            >
              <Text style={styles.textInButton}>🏠</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.cameraButonSpecial, styles.actualPage]}
              onPress={() => {
                props.functionTakePicture();
              }}
            >
              <Text style={styles.textInButonCamera}>📸</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationProfile}
            >
              <Text style={styles.textInButton}>👤</Text>
            </TouchableOpacity>
          </View>
        );
      case "Profile":
        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationHome}
            >
              <Text style={styles.textInButton}>🏠</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationCamera}
            >
              <Text style={styles.textInButton}>📸</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item, styles.actualPage]}
              onPress={actionNavigationProfile}
            >
              <Text style={styles.textInButton}>👤</Text>
            </TouchableOpacity>
          </View>
        );
      case "Test":
        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationHome}
            >
              <Text style={styles.textInButton}>🏠</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item, styles.actualPage]}
              onPress={actionNavigationCamera}
            >
              <Text style={styles.textInButton}>📸</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.item]}
              onPress={actionNavigationProfile}
            >
              <Text style={styles.textInButton}>👤</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };
  return <ActualButonNavigation />;
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
  actualPage: {
    backgroundColor: "#F8F8F8",
  },
  imageProfile: {
    height: 40,
    width: 40,
    flex: 1,
    marginRight: 10,
    borderRadius: 300,
  },
  currentButton: {
    marginTop: 10,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "rgba(355, 355, 355, 0.3)",
    borderRadius: 30,
    marginBottom: 20,
  },
  cameraButonSpecial: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 10,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "rgba(108, 122, 137, 0.95)",
    marginBottom: 50,
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
  textInButonCamera: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textInButton: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

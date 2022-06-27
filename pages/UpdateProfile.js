import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function UpdateProfile() {
  const navigation = useNavigation();
  //Déclaration des données de l'utilisateur à init ensuite avec la BDD
  const testUserName = "Test User Name";
  const testUserLocation = "Test User Location";
  const userProfilePicture =
    "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium";

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Update Profile"} />

      <BottomBar namePage={"Profile"} />
    </View>
  );
}
export default UpdateProfile;

const styles = StyleSheet.create({
  textInActionButton: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  actionButton: {
    backgroundColor: "rgba(108, 122, 137, 0.95)",
    borderRadius: 20,
    padding: 10,
    width: 80,
    justifyContent: "center",
  },
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
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  userInfoText: {
    justifyContent: "center",
    marginLeft: 10,
  },
  textUserName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textLocation: {
    marginTop: 5,
    fontSize: 15,
  },
  profileInformations: {
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 20,
  },
});

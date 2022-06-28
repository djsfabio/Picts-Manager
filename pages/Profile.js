import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Album from "../components/Album";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function Profile() {
  //Fonctions de navigations
  const navigation = useNavigation();

  const actionNavigationUpdateProfile = () => {
    navigation.navigate("UpdateProfile");
  };

  const actionNavigationCamera = () => {
    navigation.navigate("Camera");
  };

  //Déclaration des données de l'utilisateur à init ensuite avec la BDD
  const testUserName = "Test User Name";
  const testUserLocation = "Test User Location";
  const userProfilePicture =
    "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium";

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Profile"} />
      <View style={{ flex: 1 }}>
        <View style={[styles.profileInformations]}>
          <View>
            <TouchableOpacity onPress={actionNavigationUpdateProfile}>
              <Image
                style={styles.imageProfile}
                source={{
                  uri: userProfilePicture,
                }}
                resizeMode="contain"
                resizeMethod="resize"
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.userInfoText]}>
            <Text style={styles.textUserName}>{testUserName}</Text>
            <Text style={styles.textLocation}>{testUserLocation}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <TouchableOpacity style={[styles.actionButton, styles.shadowProp]}>
            <Text style={styles.textInActionButton}>Albums</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.shadowProp]}
            onPress={actionNavigationCamera}
          >
            <Text style={styles.textInActionButton}>Post</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 260,
              alignItems: "center",
            }}
          >
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </ScrollView>
        </View>

        <BottomBar namePage={"Profile"} />
      </View>
    </View>
  );
}
export default Profile;

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
  imageProfile: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(108, 122, 137, 0.95)",
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

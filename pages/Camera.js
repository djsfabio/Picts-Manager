import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function Camera() {
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
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <HeaderBar namePage={"Camera"} />
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <BottomBar
          actionNavigationHome={actionNavigationHome}
          actionNavigationCamera={actionNavigationCamera}
          actionNavigationProfile={actionNavigationProfile}
        />
      </View>
    </View>
  );
}
export default Camera;

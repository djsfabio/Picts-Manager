import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";

function Home() {
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
      <HeaderBar namePage={"Home"} />
      <PictureComponent
        uriImage={"https://cdn-icons-png.flaticon.com/512/2659/2659360.png"}
      />
      <PictureComponent
        uriImage={"https://cdn-icons-png.flaticon.com/512/2659/2659360.png"}
      />
      <PictureComponent
        uriImage={"https://cdn-icons-png.flaticon.com/512/2659/2659360.png"}
      />
      <BottomBar
        actionNavigationHome={actionNavigationHome}
        actionNavigationCamera={actionNavigationCamera}
        actionNavigationProfile={actionNavigationProfile}
      />
    </View>
  );
}
export default Home;

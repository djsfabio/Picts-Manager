import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";
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
      <PictureComponent
        uriImage={
          "https://drek4537l1klr.cloudfront.net/dabit/Figures/c04_10.png"
        }
      />
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
export default Home;

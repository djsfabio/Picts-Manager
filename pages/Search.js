import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function Search() {
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
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Search"} />
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      ></View>
    </View>
  );
}
export default Search;

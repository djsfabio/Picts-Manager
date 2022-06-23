import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function Profile() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Profile"} />
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <BottomBar />
      </View>
    </View>
  );
}
export default Profile;

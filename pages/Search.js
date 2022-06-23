import { View } from "react-native";
import HeaderBar from "../components/HeaderBar";

function Search() {
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

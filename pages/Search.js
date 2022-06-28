import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Album from "../components/Album";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function Search() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Search"} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <TextInput
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            style={[styles.input, styles.shadowProp]}
          />
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
      </View>
      <BottomBar namePage={"Search"} />
    </View>
  );
}
export default Search;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255, 0.3)",
    padding: 15,
    marginBottom: 10,
    width: 350,
    height: 50,
    backgroundColor: "white",
    borderRadius: 3,
    fontSize: 13,
  },
});

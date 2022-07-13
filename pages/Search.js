import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";
import urlBack from "../Variables";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const [listImage, setListImage] = useState([]);

  const searchPicturesByHashtag = async (inputUserSearch) => {
    const responseFetchImage = await fetch(urlBack + "search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tags: [inputUserSearch],
      }),
    }).then((response) => response.json());

    setListImage(responseFetchImage);
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Search"} />
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            onChangeText={(newText) => setSearchInput(newText)}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            style={[styles.shadowProp, styles.input]}
          />
          <TouchableOpacity
            style={[styles.buttonStyle, styles.shadowProp]}
            onPress={() => searchPicturesByHashtag(searchInput)}
          >
            <Text style={{ alignSelf: "center", fontSize: 25 }}>🔍</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 150,
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            {listImage.length > 0 &&
              listImage.map((item) => {
                return (
                  <PictureComponent
                    customFirstMargin={{ marginTop: 0 }}
                    uriImage={urlBack + item.picture.id + ".JPEG"}
                    uriImageProfile={
                      "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
                    }
                    userName={item.users}
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
export default Search;

const styles = StyleSheet.create({
  buttonStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: "white",
    width: 350,
    height: 50,
    justifyContent: "center",
  },
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
    width: 350,
    height: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 13,
  },
});

import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";

function PictureTakenPage({ route, navigation }) {
  const { imageVar } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar namePage={"Your Picture !"} />

      <PictureComponent
        customFirstMargin={{ marginTop: 16, marginBottom: 120 }}
        uriImage={imageVar}
        uriImageProfile={
          "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
        }
        userName={"Test Name"}
        location={"Test Paris"}
      />
      <TouchableOpacity
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: 100,
          height: 50,
          backgroundColor: "rgba(108, 122, 137, 0.95)",
          borderRadius: 30,
          marginBottom: 150,
        }}
        onPress={() => console.log("Saved")}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
          }}
        >
          💾
        </Text>
      </TouchableOpacity>
      <BottomBar namePage={"PictureTakenPage"} />
    </View>
  );
}
export default PictureTakenPage;

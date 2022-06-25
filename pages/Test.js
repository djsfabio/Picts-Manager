import { View, Image, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";

function Test({ route, navigation }) {
  const { imageVar } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar namePage={"Test"} />
      <ScrollView style={{ backgroundColor: "#F8F8F8" }}>
        <PictureComponent
          customFirstMargin={{ marginTop: 16, marginBottom: 120 }}
          uriImage={imageVar}
          uriImageProfile={
            "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
          }
          userName={"Test Name"}
          location={"Test Paris"}
        />
      </ScrollView>
      <BottomBar namePage={"Test"} />
    </View>
  );
}
export default Test;

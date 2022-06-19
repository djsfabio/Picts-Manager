import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import CustomButon from "../components/customButon";
import PictureComponent from "../components/pictureComponent";

function Home() {
  const navigation = useNavigation();

  const actionButon = () => {
    navigation.navigate("Librairie");
  };

  return (
    <View>
      <PictureComponent
        uriImage={
          "https://drek4537l1klr.cloudfront.net/dabit/Figures/c04_10.png"
        }
      />
      <CustomButon actionButon={actionButon} titleButon={"Hello"} />
    </View>
  );
}
export default Home;

import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import CustomButon from "../components/customButon";
import PictureComponent from "../components/pictureComponent";

function Home() {
  const navigation = useNavigation();

  const actionButon = () => {
    navigation.navigate("Librairie");
  };

  return (
    <View>
      <Text>Coucou</Text>
      <CustomButon actionButon={actionButon} titleButon={"Hello"} />
      <PictureComponent />
      <PictureComponent />
      <PictureComponent />
      <PictureComponent />
      <PictureComponent />
    </View>
  );
}
export default Home;

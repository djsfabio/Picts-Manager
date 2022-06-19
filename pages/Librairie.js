import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

function Librairie() {
  const navigation = useNavigation();
  const actionButon = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Button onPress={actionButon} title="Home" />
    </View>
  );
}
export default Librairie;

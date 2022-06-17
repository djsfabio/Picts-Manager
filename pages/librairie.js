import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from "react-native";

function Librairie() {
  const navigation = useNavigation();
  const actionButon = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Text>Coucou</Text>
      <Button onPress={actionButon} title="Home" />
    </View>
  );
}
export default Librairie;

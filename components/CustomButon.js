import { View } from "react-native";
import { Button } from "react-native";

function CustomButon(props) {
  return (
    <View>
      <Button onPress={props.actionButon} title={props.titleButon} />
    </View>
  );
}
export default CustomButon;

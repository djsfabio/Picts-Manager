import { View, Image } from "react-native";

function Test({ route, navigation }) {
  const { imageVar } = route.params;
  console.log(route.params);
  return (
    <View style={{ width: 500, height: 500 }}>
      <Image
        source={{ uri: imageVar }}
        style={{ width: "100%", height: "100%", flex: 1 }}
      />
    </View>
  );
}
export default Test;

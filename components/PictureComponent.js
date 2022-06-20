import { Image, StyleSheet, View } from "react-native";

function PictureComponent(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: props.uriImage,
        }}
        resizeMode="contain"
        resizeMethod="resize"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
export default PictureComponent;

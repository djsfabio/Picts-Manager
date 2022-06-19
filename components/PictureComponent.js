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
    marginBottom: 50,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});
export default PictureComponent;

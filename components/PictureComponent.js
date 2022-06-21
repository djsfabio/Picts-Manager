import { Image, StyleSheet, Text, View } from "react-native";

function PictureComponent(props) {
  return (
    <View
      style={[styles.container, props.customMargin, props.customFirstMargin]}
    >
      <Image
        style={styles.imageStyle}
        source={{
          uri: props.uriImage,
        }}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <Text style={styles.text}>Spider-Man into the Spider-Verse</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#CDCDCD",
  },
  containerLastChild: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    marginBottom: 100,
    borderRadius: 30,
    backgroundColor: "#CDCDCD",
  },
  imageStyle: {
    flex: 0.8,
    width: "100%",
    height: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PictureComponent;

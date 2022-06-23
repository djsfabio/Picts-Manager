import { Image, StyleSheet, Text, View } from "react-native";

function PictureComponent(props) {
  return (
    <View
      style={[
        styles.container,
        props.customLastMargin,
        props.customFirstMargin,
        styles.shadowProp,
      ]}
    >
      <View style={[styles.text]}>
        <Text style={styles.text}>{props.userName}</Text>
        <Text style={styles.text}>{props.location}</Text>
      </View>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: props.uriImage,
          }}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "rgba(189, 195, 199, 0.95)",
    justifyContent: "flex-start",
  },
  imageStyle: {
    marginTop: 10,
    height: 250,
    width: null,
    flex: 1,
  },
  userInfoText: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
export default PictureComponent;

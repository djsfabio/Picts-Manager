import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Album(props) {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if ("https://images3.alphacoders.com/977/thumbbig-977081.webp") {
      Image.getSize(
        "https://images3.alphacoders.com/977/thumbbig-977081.webp",
        (width, height) => {
          setRatio(width / height);
        }
      );
    }
  }, ["https://images3.alphacoders.com/977/thumbbig-977081.webp"]);

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={{ aspectRatio: ratio, width: 180 }}>
        <TouchableOpacity style={{ flex: 1 }}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: "https://images3.alphacoders.com/977/thumbbig-977081.webp",
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{ aspectRatio: ratio, width: 180 }}>
        <TouchableOpacity style={{ flex: 1 }}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: "https://images3.alphacoders.com/977/thumbbig-977081.webp",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Album;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  imageStyle: {
    marginTop: 10,
    flex: 1,
  },
  imageProfile: {
    flex: 1,
    margin: 5,
  },
  userInfoText: {
    justifyContent: "center",
  },
  textUserName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textLocation: {
    fontSize: 12,
  },
  profileInformations: {
    flexDirection: "row",
  },
});

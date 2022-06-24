import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function PictureComponent(props) {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (props.uriImage) {
      Image.getSize(props.uriImage, (width, height) => {
        setRatio(width / height);
      });
    }
  }, [props.uriImage]);

  return (
    <View
      style={[
        styles.container,
        props.customLastMargin,
        props.customFirstMargin,
        styles.shadowProp,
      ]}
    >
      <View style={[styles.profileInformations]}>
        <View>
          <Image
            style={styles.imageProfile}
            source={{
              uri: props.uriImageProfile,
            }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </View>
        <View style={[styles.userInfoText]}>
          <Text style={styles.textUserName}>{props.userName}</Text>
          <Text style={styles.textLocation}>{props.location}</Text>
        </View>
      </View>
      <View style={{ aspectRatio: ratio, width: 350 }}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: props.uriImage,
          }}
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
    borderRadius: 8,
  },
  imageStyle: {
    marginTop: 10,
    flex: 1,
  },
  imageProfile: {
    height: 40,
    width: 40,
    flex: 1,
    marginRight: 10,
    borderRadius: 100,
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
export default PictureComponent;

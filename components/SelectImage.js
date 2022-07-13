import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PictureComponent from "../components/PictureComponent";

function SelectImage(props) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={props.functionChangePrivacy}>
        <PictureComponent uriImage={props.picture} picturePage={false} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 5,
            backgroundColor: "rgba(108, 122, 137, 0.95)",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginBottom: 10,
          }}
        >
          <Text style={{ flex: 1, fontSize: 15, color: "white" }}>
            Select this image :
          </Text>
          <TouchableOpacity
            style={[
              styles.shadowProp,
              {
                marginTop: 5,
                borderRadius: 30,
                backgroundColor: "white",
                width: 80,
                height: 40,
                justifyContent: "center",
              },
            ]}
            onPress={props.functionChangePrivacy}
          >
            <Text style={{ alignSelf: "center", fontSize: 25 }}>
              {props.privacyButonText}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
});
export default SelectImage;

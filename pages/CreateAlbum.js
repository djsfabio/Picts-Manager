import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Tags from "react-native-tags";
import HeaderBar from "../components/HeaderBar";
import SelectImage from "../components/SelectImage";

function CreateAlbum() {
  const ref_input2 = useRef();

  const [text, setText] = useState("✅");

  const changePrivacy = () => {
    if (text == "✅") {
      console.log("Not selected");
      setText("❌");
    } else {
      console.log("Selected");
      setText("✅");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar namePage={"Create Album"} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 30,
            alignItems: "center",
          }}
        >
          <TextInput
            autoFocus={true}
            returnKeyType={"next"}
            onSubmitEditing={() => ref_input2.current.focus()}
            placeholder="Title"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            returnKeyType={"next"}
            placeholder="Localisation"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={ref_input2}
          />
          <Tags
            maxNumberOfTags={10}
            initialTags={["PictsManager"]}
            style={{ width: 350, marginBottom: 10 }}
            onChangeTags={(tags) => console.log(tags)}
            containerStyle={{ justifyContent: "center" }}
            inputStyle={{ backgroundColor: "white", height: 100 }}
            renderTag={({
              tag,
              index,
              onPress,
              deleteTagOnPress,
              readonly,
            }) => (
              <TouchableOpacity
                style={{
                  height: 40,
                  backgroundColor: "rgba(108, 122, 137, 0.95)",
                  padding: 5,
                  margin: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                key={`${tag}-${index}`}
                onPress={onPress}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  #{tag}
                </Text>
              </TouchableOpacity>
            )}
          />

          <SelectImage
            functionChangePrivacy={changePrivacy}
            privacyButonText={text}
            picture={
              "https://randomwordgenerator.com/img/picture-generator/tree-736885_640.jpg"
            }
          />
          <SelectImage
            functionChangePrivacy={changePrivacy}
            privacyButonText={text}
            picture={
              "https://images4.alphacoders.com/100/thumbbig-1009981.webp"
            }
          />
          <SelectImage
            functionChangePrivacy={changePrivacy}
            privacyButonText={text}
            picture={"https://images5.alphacoders.com/929/thumbbig-929203.webp"}
          />
          <SelectImage
            functionChangePrivacy={changePrivacy}
            privacyButonText={text}
            picture={
              "https://images4.alphacoders.com/100/thumbbig-1009981.webp"
            }
          />
          <SelectImage
            functionChangePrivacy={changePrivacy}
            privacyButonText={text}
            picture={
              "https://thumbs.dreamstime.com/b/panorama-vertical-de-route-de-campagne-9905521.jpg"
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
export default CreateAlbum;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255, 0.3)",
    padding: 15,
    marginBottom: 10,
    width: 350,
    height: 50,
    backgroundColor: "white",
    borderRadius: 3,
    fontSize: 13,
  },
});

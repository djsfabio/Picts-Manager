import { useNavigation } from "@react-navigation/native";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import { useEffect, useState } from "react";
import {
  Alert,
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
import PictureComponent from "../components/PictureComponent";
import urlBack, { albumsUserGlobal } from "../Variables";

function PictureTakenPage({ route }) {
  const navigation = useNavigation();

  const actionNavigationHome = () => {
    navigation.navigate("Home");
  };
  //
  const [tabTags, setTabTags] = useState(["PictsManager"]);

  const [titleImage, setTitleImage] = useState("title");

  const [imageCompressed, setImageCompressed] = useState(null);
  //Changement de privacy
  const [text, setText] = useState("🔓");

  //Permet de modifier le texte lors d'un appuie sur le bouton de changement d'état privacy
  const changePrivacy = () => {
    if (text == "🔓") {
      setText("🔒");
    } else {
      setText("🔓");
    }
  };

  //Permet de connaître l'état de privacy de l'image et de la retourner lors de l'appel au back
  const returnPrivacy = (text) => {
    if (text == "🔓") {
      return true;
    } else {
      return false;
    }
  };
  //Permission et fonction permettant la sauvegarde de la photo dans sa qualité originelle avant compression
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  let savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(imageVar.uri);
  };

  //Fonction permettant de partager la photo
  let sharePic = () => {
    shareAsync(imageVar.uri);
  };

  // Fonction de compression et d'envoie à la DB
  const compressImgAndSendToDB = async () => {
    let oldWidth = imageVar.width;
    let oldHeight = imageVar.height;

    let widthReduce = (50 * oldWidth) / 100;
    let heightReduce = (50 * oldHeight) / 100;
    let newWidth = oldWidth - widthReduce;
    let newHeight = oldHeight - heightReduce;

    const newImg = await manipulateAsync(
      imageVar.uri,
      [{ resize: { height: newHeight, width: newWidth } }],
      { compress: 0.1, format: SaveFormat.JPEG }
    );

    setImageCompressed(newImg);
    // saveImgCompressed(newImg)
    MediaLibrary.saveToLibraryAsync(newImg.uri);

    //Send image to db
    let formData = new FormData();
    formData.append("file", {
      uri: newImg.uri,
      name: "nameImageRandom.jpeg",
      type: "image/jpeg",
    });

    await fetch(
      urlBack +
        "picture/" +
        titleImage +
        "/" +
        albumsUserGlobal[0].id +
        "/" +
        returnPrivacy(text) +
        "/" +
        tabTags.join(","),
      {
        body: formData,
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log({
    //     json,
    //   });
    // })
    // .catch((err) => {
    //   console.log({
    //     err,
    //   });
    // });
  };

  //Fonction permettant d'afficher une alerte et de sauvegarder en local la photo
  const createTwoButtonAlert = async () =>
    Alert.alert(
      "Saved and posted",
      "Your photo is now available in your camera roll in the best quality and compressed on our service.",
      [
        {
          text: "Share",
          onPress: async () => {
            sharePic();
            await compressImgAndSendToDB();
            actionNavigationHome();
          },
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: async () => {
            await compressImgAndSendToDB();
            actionNavigationHome();
          },
        },
      ]
    );

  const saveImageAndAlert = async () => {
    savePhoto();
    await createTwoButtonAlert();
  };

  //Récupération de l'URI de l'image prise dans la page CameraPage.js grâce à react navigation
  const { imageVar } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar
        functionSaveAndAlter={saveImageAndAlert}
        namePage={"Your Picture !"}
      />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 30,
            alignItems: "center",
          }}
          style={{}}
        >
          <PictureComponent picturePage={true} uriImage={imageVar.uri} />
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              autoFocus={true}
              placeholder="Title"
              onChangeText={(newText) => setTitleImage(newText)}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <Tags
              maxNumberOfTags={10}
              initialTags={["PictsManager"]}
              style={{ width: 350, marginBottom: 10 }}
              onChangeTags={(tags) => setTabTags(tags)}
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
            <View
              style={{
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.shadowProp,
                  {
                    borderRadius: 10,
                    backgroundColor: "white",
                    width: 100,
                    height: 50,
                    justifyContent: "center",
                  },
                ]}
                onPress={changePrivacy}
              >
                <Text style={{ alignSelf: "center", fontSize: 40 }}>
                  {text}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
export default PictureTakenPage;

const styles = StyleSheet.create({
  imageProfile: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 50,
  },
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

import { ScrollView, View, TouchableOpacity, Text, Alert } from "react-native";
import { useEffect, useRef, useState } from "react";
import { shareAsync } from "expo-sharing";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";
import * as MediaLibrary from "expo-media-library";

function PictureTakenPage({ route, navigation }) {
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
    MediaLibrary.saveToLibraryAsync(imageVar);
  };

  //Fonction permettant de partager la photo
  let sharePic = () => {
    shareAsync(imageVar);
  };
  //Fonction permettant d'afficher une alerte et de sauvegarder en local la photo
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Picture saved",
      "Your photo is now available in your camera roll in the best quality.",
      [
        {
          text: "Share",
          onPress: () => sharePic(),
          style: "cancel",
        },
        { text: "Continue", onPress: () => console.log("Continue Pressed") },
      ]
    );

  const saveImageAndAlert = () => {
    savePhoto();
    createTwoButtonAlert();
  };

  //Récupération de l'URI de l'image prise dans la page Camera grâce à react navigation
  const { imageVar } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar namePage={"Your Picture !"} />

      <PictureComponent
        customFirstMargin={{ marginTop: 16, marginBottom: 120 }}
        uriImage={imageVar}
        uriImageProfile={
          "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
        }
        userName={"Test Name"}
        location={"Test Paris"}
      />
      <TouchableOpacity
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: 100,
          height: 50,
          backgroundColor: "rgba(108, 122, 137, 0.95)",
          borderRadius: 30,
          marginBottom: 150,
        }}
        onPress={saveImageAndAlert}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
          }}
        >
          💾
        </Text>
      </TouchableOpacity>
      <BottomBar namePage={"PictureTakenPage"} />
    </View>
  );
}
export default PictureTakenPage;

import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";

function CameraPage() {
  const navigation = useNavigation();

  const actionNavigationTest = (imageVar) => {
    navigation.navigate("Test", { imageVar: imageVar });
  };

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      setImage(data.uri);
      actionNavigationTest(data.uri);
    }
  };
  const returnUri = () => {
    return data.uri;
  };

  const turnCamera = async () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar namePage={"Camera"} functionReturnCamera={turnCamera} />
      <View style={styles.cameraContainer}>
        <Camera
          flashMode={"auto"}
          ref={(ref) => setCamera(ref)}
          type={type}
          style={{
            alignSelf: "center",
            height: 760,
            width: 570,
          }}
        />
      </View>
      <BottomBar
        namePage={"Camera"}
        functionTakePicture={takePicture}
        returnImageUri={returnUri}
      />
    </View>
  );
}
export default CameraPage;

const styles = StyleSheet.create({
  cameraContainer: {
    height: "100%",
    backgroundColor: "black",
  },
  fixedRatio: {
    aspectRatio: 1,
  },
  buttonStyle: {},
  textInButton: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

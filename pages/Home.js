import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";

function Home() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // const navigation = useNavigation();

  // const actionNavigationHome = () => {
  //   navigation.navigate("Home");
  // };

  // const actionNavigationCamera = () => {
  //   navigation.navigate("Camera");
  // };

  // const actionNavigationProfile = () => {
  //   navigation.navigate("Profile");
  // };

  const DisplayPictures = () => {
    let linksPictures = [
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images8.alphacoders.com/929/thumbbig-929202.webp",
      "https://images5.alphacoders.com/980/thumbbig-980843.webp",
      "https://images4.alphacoders.com/100/thumbbig-1009981.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
    ];

    // let tabFor = [];

    // for (let pas = 0; pas < 150; pas++) {
    //   tabFor.push(
    //     <PictureComponent uriImage={linksPictures[getRandomInt(8)]} />
    //   );
    // }
    // return tabFor;

    return linksPictures.map((item, key) => {
      if (key == 0) {
        return (
          <PictureComponent
            customFirstMargin={{ marginTop: 16 }}
            uriImage={item}
            key={key}
          />
        );
      }
      if (linksPictures.length - 1 == key) {
        return (
          <PictureComponent
            customMargin={{ marginBottom: 110 }}
            uriImage={item}
            key={key}
          />
        );
      }
      return <PictureComponent uriImage={item} key={key} />;
    });
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderBar namePage={"Home"} />
      <ScrollView style={{}}>
        <DisplayPictures />
      </ScrollView>
      <BottomBar />
    </View>
  );
}
export default Home;

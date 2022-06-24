import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import BottomBar from "../components/BottomBar";
import HeaderBar from "../components/HeaderBar";
import PictureComponent from "../components/PictureComponent";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Home() {
  const DisplayPictures = () => {
    let linksPictures = [
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://thumbs.dreamstime.com/b/panorama-vertical-de-route-de-campagne-9905521.jpg",
      "https://randomwordgenerator.com/img/picture-generator/54e5d5404a55ab14f1dc8460962e33791c3ad6e04e507440772872dc9244cc_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/54e2d7444355ad14f1dc8460962e33791c3ad6e04e507749742c78d6924bc2_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/52e1d2454e55b10ff3d8992cc12c30771037dbf852577148762c7ad2904e_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/53e0d5424b57b10ff3d8992cc12c30771037dbf85254794e732a7ddd9645_640.jpg",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://randomwordgenerator.com/img/picture-generator/bruce-warrington-PUyJaeKU990-unsplash.jpg",
      "https://randomwordgenerator.com/img/picture-generator/57e1d5434953aa14f1dc8460962e33791c3ad6e04e5074417d2c7ed1954dc2_640.jpg",
      "https://images4.alphacoders.com/100/thumbbig-1009981.webp",
      "https://randomwordgenerator.com/img/picture-generator/57e9d3414e54b10ff3d8992cc12c30771037dbf85254784a70287bd39144_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/57e1d14a4b52ac14f1dc8460962e33791c3ad6e04e50744074267bd6944bcc_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/57e9d1424853ac14f1dc8460962e33791c3ad6e04e5074417d2e72d3924bc0_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/54e7dc474f54a514f1dc8460962e33791c3ad6e04e50744077297bd5904ac0_640.jpg",
      "https://randomwordgenerator.com/img/picture-generator/tree-736885_640.jpg",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
    ];

    let listUser = [
      "Nathan Dupont",
      "Fabio De Jesus",
      "Gérard Verre",
      "Christophe Morice",
      "Jean-Jacques Lesg",
      "Jacques Russel",
      "Charles Leclerc",
      "Pierre Gasly",
      "Kévin Magnussen",
    ];

    let listLocation = [
      "Paris",
      "Colombes",
      "Courbevoie",
      "Nanterre",
      "Kremlin-le-Bicêtre",
      "Nice",
      "Marseille",
      "Rennes",
      "Nantes",
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
            uriImageProfile={
              "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
            }
            key={key}
            userName={listUser[getRandomInt(listUser.length - 1)]}
            location={listLocation[getRandomInt(listLocation.length - 1)]}
          />
        );
      }
      if (linksPictures.length - 1 == key) {
        return (
          <PictureComponent
            customLastMargin={{ marginBottom: 110 }}
            uriImage={item}
            uriImageProfile={
              "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
            }
            key={key}
            userName={listUser[getRandomInt(listUser.length - 1)]}
            location={listLocation[getRandomInt(listLocation.length - 1)]}
          />
        );
      }
      return (
        <PictureComponent
          uriImage={item}
          key={key}
          uriImageProfile={
            "https://www.adobe.com/fr/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium"
          }
          userName={listUser[getRandomInt(listUser.length - 1)]}
          location={listLocation[getRandomInt(listLocation.length - 1)]}
        />
      );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar namePage={"Home"} />
      <ScrollView
        style={{
          backgroundColor: "#F8F8F8",
        }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.scrollViewContainer}>
          <DisplayPictures />
        </View>
      </ScrollView>
      <BottomBar namePage={"Home"} />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("window").height,
  },
  mainContainer: {
    flex: 1,
  },
  scrollViewContainer: {},
});

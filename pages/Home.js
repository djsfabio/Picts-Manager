import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
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
      "https://www.tailorbrands.com/wp-content/uploads/2020/06/amazon-logo-a.png",
      "https://thumbs.dreamstime.com/b/panorama-vertical-de-route-de-campagne-9905521.jpg",
      "https://images8.alphacoders.com/929/thumbbig-929202.webp",
      "https://images5.alphacoders.com/980/thumbbig-980843.webp",
      "https://images4.alphacoders.com/100/thumbbig-1009981.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images8.alphacoders.com/929/thumbbig-929202.webp",
      "https://images5.alphacoders.com/980/thumbbig-980843.webp",
      "https://images4.alphacoders.com/100/thumbbig-1009981.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images8.alphacoders.com/929/thumbbig-929202.webp",
      "https://images5.alphacoders.com/980/thumbbig-980843.webp",
      "https://images4.alphacoders.com/100/thumbbig-1009981.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://images3.alphacoders.com/977/thumbbig-977081.webp",
      "https://images4.alphacoders.com/960/thumbbig-960281.webp",
      "https://images5.alphacoders.com/929/thumbbig-929203.webp",
      "https://www.tailorbrands.com/wp-content/uploads/2020/06/amazon-logo-a.png",
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
      <ScrollView style={{ backgroundColor: "#F8F8F8" }}>
        <DisplayPictures />
      </ScrollView>
      <BottomBar namePage={"Home"} />
    </View>
  );
}
export default Home;

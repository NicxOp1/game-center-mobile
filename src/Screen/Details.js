import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function Details() {
  return (
    <>
      <ScrollView style={styles.content}>
        <View>
          <View style={styles.titleContent}>
            <Text style={styles.title}>Counter-Strike: Global Offensive</Text>
          </View>
          <View style={styles.contentImage}>
            <Image
              source={{
                uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1668125812",
              }}
              style={{
                height: 230,
                width: 350,
                borderColor: "black",
                alignContent: "center",
                borderRadius: 20,
              }}
            />
          </View>
          <View tyle={styles.subTitleContent}>
            <Text style={styles.description}>
              Counter-Strike shocked the video game industry when the unlikely
              mod became the most played PC action game in the world almost
              immediately upon its release in August 1999, said Valve's Doug
              Lombardi. For the past 12 years, it has continued to be one of the
              most played games in the world, topping competitive gaming
              tournaments and selling more than 25 million copies of the
              franchise worldwide. CS:GO promises to expand the award-winning
              gameplay of CS and bring it to gamers on PC, next-gen consoles,
              and Mac.
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <View style={styles.infoGame}>
              <Text style={styles.subtitleInfo}>Category :</Text>
              <Text style={styles.subtitleInfo}>Date :</Text>
              <Text style={styles.subtitleInfo}>Price :</Text>
            </View>
            <View style={styles.infoGame}>
              <Text style={styles.subtitle}>FPS shooter</Text>
              <Text style={styles.subtitle}>2012-09-21</Text>
              <Text style={styles.subtitle}>$5</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>rate</Text>
        </View>
        <View style={styles.contentButton}>
          <Button style={styles.button} color="#5a3dcb" title="BUY" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#032b4f",
  },
  contentImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 260,
  },
  titleContent: {
    height: 80,
    margin: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    color: "white",
    fontWeight: "900",
  },
  subTitleContent: {
    height: 300,
    width: 400,
  },
  description: {
    color: "white",
    margin: 15,
    fontSize: 20,
  },
  contentInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    margin: 15,
    width: 400,
  },
  subtitle: {
    display: "flex",
    fontSize: 20,
    margin: 7,
    color: "white",
  },
  subtitleInfo: {
    display: "flex",
    fontSize: 20,
    margin: 7,
    color: "#5a3dcb",
  },
  infoGame: {},
  contentButton: {
    display: "flex",
    justifyContent: "center",
  },
});

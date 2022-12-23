import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

export default function Library() {
  return (
    <ScrollView style={styles.contentStore}>
      <Text style={styles.title}>Library of your Games</Text>
      <View style={styles.main}>
        <View>
          <View style={styles.contenTitle}>
            <Text style={styles.title}>My Favorites</Text>
          </View>
          <View style={styles.cardStore}>
            <View style={styles.contentImgStore}>
              <Text></Text>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
                }}
                style={{
                  height: 230,
                  width: 220,
                  borderColor: "black",
                  alignContent: "center",
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.contProfileText}>
              <Text style={styles.subtitle}>
                Counter-Strike:Global OfFensive
              </Text>
              <Text style={styles.subtitle}>FPS Shooter</Text>
              <Text style={styles.subtitle}>Price : 5 $</Text>
            </View>
          </View>

          <View style={styles.contenTitle}>
            <Text style={styles.title}>My Games</Text>
          </View>
          <View style={styles.cardStore}>
            <View style={styles.contentImgStore}>
              <Image
                source={{
                  uri: "https://i.blogs.es/ea7e11/valorantlaunch/840_560.jpeg",
                }}
                style={{
                  height: 230,
                  width: 220,
                  borderColor: "black",
                  alignContent: "center",
                  borderRadius: 20,
                }}
              />
              <View style={styles.contProfileText}>
                <Text style={styles.subtitle}>Valorant</Text>
                <Text style={styles.subtitle}>FPS Shooter</Text>
                <Text style={styles.subtitle}>Price : 1 $</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    margin: 5,
  },
  contentStore: {
    backgroundColor: "#070b15",
  },
  contentImgStore: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  cardStore: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: 350,
    width: 270,
    marginLeft: 85,
    padding: 10,
  },
  contProfileText: {
    width: 220,
    color: "white",
  },
  contenTitle: {
    textAlign: "center",
    margin: 15,
  },
  title: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    margin: 10,
  },
});

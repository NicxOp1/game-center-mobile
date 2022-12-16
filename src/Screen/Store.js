import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

export default function Store() {
  return (
    <ScrollView style={styles.contentStore}>
      <View style={styles.cardStore}>
        <View style={styles.contentImgStore}>
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
        <View style="contProfileText">
          <Text style="stiles.textProfile">
            Counter-Strike:Global OfFensive
          </Text>
          <Text style="stiles.textProfile">FPS Shooter</Text>
          <Text style="stiles.textProfile">Price : 5 $</Text>
        </View>
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
        </View>

        <View style="contProfileText">
          <Text style="stiles.textProfile">Valorant</Text>
          <Text style="stiles.textProfile">FPS Shooter</Text>
          <Text style="stiles.textProfile">Price : 1 $</Text>
        </View>
      </View>
      <View style={styles.cardStore}>
        <View style={styles.contentImgStore}>
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BYjBkNTJkOWUtNTg1ZS00NGZhLWIxMGUtOWE0ZDA0NzRkODM3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
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
        <View style="contProfileText">
          <Text style="stiles.textProfile">Over Watch</Text>
          <Text style="stiles.textProfile">FPS Shooter</Text>
          <Text style="stiles.textProfile">Price : 3 $</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentStore: {
    backgroundColor: "#070b15",
  },
  cardStore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 300,
    width: 250,
    margin: 10,
    padding: 10,
  },
  contProfileText: {
    width: 220,
  },
});

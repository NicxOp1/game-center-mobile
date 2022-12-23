import { View, Text, StyleSheet, Button, Image } from "react-native";
import React from "react";

export default function CardCart({ item }) {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.productDescription}>
        <Image
          style={{ height: 150, width: 300,borderRadius:10 }}
          source={{ uri: item.photo[0] }}
        />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
      <Button color={"red"} title="X"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "#201325e0",
    alignContent: "center",
    marginLeft:27,
    marginRight:27,
    marginTop:10,
    padding: 15,
    borderRadius: 20,
    flex: 1,
  },
  productDescription:{
    display:"flex",
    alignItems:"center"
  }
});

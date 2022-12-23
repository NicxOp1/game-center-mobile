import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import cartActions from "../Redux/Actions/cartActions";
export default function CardCart({ item }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.cartContainer}>
      <View style={styles.productDescription}>
        <Image
          style={{ width: 150, borderRadius: 10, resizeMode: "cover" }}
          source={{ uri: item.photo[0] }}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.cartDescriptionText}>{item.name}</Text>
          <Text style={styles.cartDescriptionText}>Price: ${item.price}</Text>
        </View>
        <View style={styles.btn}>
          <Button
            onPress={() => {
              dispatch(cartActions.deleteProduct(item));
            }}
            color={"red"}
            title="X"
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "#201325e0",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 27,
    marginRight: 27,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  cartDescriptionText: {
    display: "flex",
    fontSize: 10,
    color: "#cd1111",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  btn: {
    width: 30,
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  productDescription: {
    display: "flex",
    padding: 5,
    height:200,
    flexDirection: "row",
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

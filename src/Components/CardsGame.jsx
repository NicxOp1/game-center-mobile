import React from "react";
import { Image, View, Text, StyleSheet, Button } from "react-native";
import cartActions from "../Redux/Actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

export default function CardGame({ item }) {
    const dispatch = useDispatch();
    let products = useSelector((store) => store.cartReducer.products);
    let productOnCart = products.filter((e) => e._id === item._id);
    const addToCart = () => {
     let pepe = {
        ...item,
        unity: 1,
      };
      dispatch(cartActions.addGame(pepe));
    };
  
  
    const removeToCart = () => {
      dispatch(cartActions.deleteProduct(item));
    }
  return (
    <>
      <View style={styles.CardGame}>
        <Image
          source={{ uri: `${item.photo[0]}` }}
          style={styles.imgFlat}
          resizeMode="cover"
        />
        <View style={styles.CardGameDescription}>
          <Text style={styles.titleGame}>{item.name}</Text>
          <Text style={styles.category}>{item.category.join("  ")}</Text>
          {/*         <Text         
        style={styles.description}>
            {item.description}
        </Text> */}
          <Text style={styles.price}>Price :   {item.price}</Text>
         {productOnCart.length > 0 ? ( <Button
        title="Remove"
        color={"red"}
        onPress={() => removeToCart()}
      />) : ( <Button
        title="Buy"
        onPress={() => addToCart()}
      />)}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  CardGame: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent:"space-between",
    width: 300,
    height: 380,
    margin: 35,
    marginTop:-20
  },
  CardGameDescription: {
    flex: 1,
    height: 200,
    justifyContent: "space-between",
  },
  imgFlat: {
    height: 140,
    width: 280,
    margin: 30,
    borderRadius: 10,
  },
  titleGame: {
    textAlign: "center",
    fontSize: 19,
    color: "#fff",
  },
  category: {
    textAlign: "center",
    fontSize: 13,
    color: "#36ff",
  },
  price: {
    textAlign: "center",
    fontSize: 13,
    color: "#fff",
  },btnBuy:{
    
  }
});

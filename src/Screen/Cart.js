import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CardCart from "../Components/CardCart";
// import CardCart from "../Components/CardCart";

export default function Cart() {
  const { products } = useSelector((store) => store.cartReducer);
  const renderItemProducts = ({ item }) => {
    return <CardCart item={item} />;
  };
  let total = 0;
  if (products.length !== 0) {
    products.map((e) => (total = total + e.price * e.unity));
  }
  return (
    <ScrollView  style={style.bodyCart}>
      <View style={style.containerCart}>
        {products.length > 0 ? (
          <SafeAreaView>
            {products.map((e) => {
              return <CardCart key={e._id} item={e} />;
            })}
            <View style={style.totalContainer}>
              <Text style={style.totalDescription}>Total</Text>
              <Text style={style.totalDescription}>${total}</Text>
            </View>
          </SafeAreaView>
        ) : (
          <View style={style.notFound}>
            <Text style={style.notFoundTitle}>¡Ups! you don’t have games loaded to the cart...</Text>
            <Image
              style={{ height: 250, width: 400 }}
              source={{
                uri: "https://i.postimg.cc/XNpxgJGy/Sinm-removebg-preview.png",
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  text: {
    backgroundColor: "#2a363bff",
    padding: 5,
    borderRadius: 5,
    // width: "40%",
    textAlign: "center",
  },
  bodyCart: {
    backgroundColor: "grey",
    
  },
  containerCart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },
  totalDescription:{
    fontWeight:"bold",
    fontSize:20
  },
  notFound:{
    marginTop:20,
    padding:20,
    textAlign:"center"
  },
  notFoundTitle:{
    textAlign:"center"
  },


  totalContainer: {
    backgroundColor: "blue",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent:"center",
    paddingTop:15,
    marginTop:10,
    height:50,
    marginLeft:50
  },
});

import { View, Text, FlatList, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CardCart from "../Components/CardCart";
// import CardCart from "../Components/CardCart";

export default function Cart() {
  const { products } = useSelector((store) => store.cartReducer);
  const renderItemProducts = ({ item }) => {
    return <CardCart item={item}/>

  };
  let total = 0;
  if (products.length !== 0) {
    products.map((e) => (total = total + e.price * e.unity));
  }
  return (
    <ScrollView>
      {products.length > 0 ? (
        <SafeAreaView>
          {products.map(e =>{
            return <CardCart key={e._id} item={e} />
          })}
          <View>
            <Text>Total</Text>
            <Text>${total}</Text>
          </View>
        </SafeAreaView>
      ) : (
        <Text>No products</Text>
      )}
    </ScrollView>
  );
}


const style = StyleSheet.create({
    text: {
        backgroundColor: "#2a363bff",
        padding: 5,
        borderRadius: 5,
        width: "40%",
        textAlign: "center",
    }
})
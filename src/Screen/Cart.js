import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CardCart from "../Components/CardCart";
// import CardCart from "../Components/CardCart";

export default function Cart() {
  const { products } = useSelector((store) => store.cartReducer);
  const renderItemProducts = ({ item }) => {
    return <CardCart item={item}/>
  };
  return (
    <View>
      {products.length > 0 ? (
        <SafeAreaView>
          <FlatList
            data={products}
            renderItem={renderItemProducts}
            keyExtractor={item => item._id }
            
          />
        </SafeAreaView>
      ) : (
        <Text>No products</Text>
      )}
    </View>
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
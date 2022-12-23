import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import gameActions from '../Redux/Actions/gamesActions'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import BASE from '../Api/url'
import axios from "axios";
import cartActions from "../Redux/Actions/cartActions";

export default function Details({ navigation, route }) {
  let [game, setGame] = useState({})
  let [update, setUpdate] = useState(true)
  const dispatch = useDispatch();
  let products = useSelector((store) => store.cartReducer.products);
  let gameDetails = useSelector((store) => store.gamesReducer.gameDetails);



console.log(gameDetails);


  let productOnCart = products.filter((e) => e._id === gameDetails._id);
  const addToCart = () => {
    let pepe = {
      ...gameDetails,
      unity: 1,
    };
    dispatch(cartActions.addGame(pepe));
  };


  const removeToCart = () => {
    dispatch(cartActions.deleteProduct(gameDetails));
  }
  return (
    <>
      <ScrollView style={styles.content}>
      <View>
          <View style={styles.titleContent}>
            <Text style={styles.title}> {gameDetails.name}</Text>
          </View>
          <View style={styles.contentImage}>
            <Image
              source={{ uri: gameDetails.photo[0] }}
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
              {game.description}
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <View style={styles.infoGame}>
              <Text style={styles.subtitleInfo}>Category :</Text>
              <Text style={styles.subtitleInfo}>Date : </Text>
              <Text style={styles.subtitleInfo}>Price : </Text>
            </View>
            <View style={styles.infoGame}>
              <Text style={styles.subtitle}> {gameDetails.category.join(' - ')}</Text>
              <Text style={styles.subtitle}>{gameDetails.date.slice(0, 10)}</Text>
              <Text style={styles.subtitle}>{gameDetails.price}</Text> 

              
             

            </View>
          </View>

        </View>
        <View style={styles.contentButton}>
          {productOnCart.length > 0 ? (<Button
            title="Remove"
            color={"red"}
            onPress={() => removeToCart()}
          />) : (<Button
            title="Buy"
            onPress={() => addToCart()}
          />)}
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

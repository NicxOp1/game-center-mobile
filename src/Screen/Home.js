import {
  Button,
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  View,
  Alert,
  Dimensions
} from "react-native";
/* import { Swiper, SwiperSlide } from "react-native-swiper"; */
/* import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination"; */
import gamesActions from "../Redux/Actions/gamesActions";
import React, { /* useState, */ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
export default function Home( { navigation }) {
  const image = {
    uri: "../../assets/Rectangle19",
  };
  const imageRated = {
    uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1361210/header.jpg?t=1670979917",
  };

  /* logica home  */
  let dispatch = useDispatch();
  const game = useSelector((state) => state.gamesReducer.game);
  const bestGame = useSelector((state) => state.gamesReducer.bestGame);
  let dato = { rate: "desc" };
  useEffect(() => {
    dispatch(gamesActions.getGame());
    dispatch(gamesActions.filterGame(dato));
/*     console.log(game);
    console.log(bestGame); */
  }, []);
let gameSliced = game.slice(0,4)
/*   let breakpoints={
    300: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  } */
  const oneGame= ({item})=>(
  <View style={{marginBottom:40, alignItems:"center"}}>
         <Image source={{uri: `${item.photo[0]}`}} style={{
               width: 350,
               height:500,
               resizeMode:'contain',
               
         }} />
  </View>
  )
  return (
    <ScrollView >
      <ImageBackground
        source={require("../../assets/Rectangle19.png")}
        resizeMode="cover"
        style={styles.imageBackground}

      ><View>
        <Image
          source={require("../../assets/logoTitle.png")}

          style={styles.title}
        />
          <Text style={styles.subTitle}>Are you ready to play?</Text>
        <Pressable
          title="Go to store"
          onPress={() => navigation.navigate('Store')}
          style={styles.goToStore}>
          <Text style={styles.textBtnGoToStore}>Go to store</Text>
        </Pressable>
        </View>
        <View style={{height:500}} >
                <StatusBar hidden/>
        <FlatList
           data={game}
           renderItem={oneGame}
           keyExtractor={item=>item._id}
           horizontal
           pagingEnabled
           style={{
            height:500,
            width:350,}}
           />
           </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
  },
  title: {
    height: 70,
    width:300,
    marginLeft: -70,
    marginTop: -320,
    position: "absolute",
  },
  subTitle: {
    position:"absolute",
    textAlign: "center",
    marginLeft:-20,
    marginTop:-230,
    zIndex:20,
    color: "white",
    fontSize: 17,
    
    
  },
  goToStore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 4,
    elevation: 3,
    width: 150,
    height:50,
    marginTop: -160,
    backgroundColor: "black",
  },
  textBtnGoToStore: {
    color: "white",
  },
  imageBackground: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop:400,
    height: 700,
    width: 360,
  },
});

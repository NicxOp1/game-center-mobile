import {
  Button,
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert,
} from "react-native";
import { Swiper, SwiperSlide } from "react-native-swiper";
/* import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination"; */
import gamesActions from "../Redux/Actions/gamesActions";
import React, { /* useState, */ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
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
    console.log(game);
    console.log(bestGame);
  }, []);

  let breakpoints={
    300: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        source={require("../../assets/Rectangle19.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Image
          source={require("../../assets/logoTitle.png")}
          style={styles.title}
        ></Image>
        <Text style={styles.subTitle}>Are you ready to play?</Text>
        <Pressable
          title="Go to store"
          onPress={() => Alert.alert("Go to store")}
          style={styles.goToStore}
        >
          <Text style={styles.textBtnGoToStore}>Go to store</Text>
        </Pressable>
        <Image source={imageRated} style={styles.imageRated} />
        <Swiper
              style={{padding:"2rem 8rem"}}
              spaceBetween={5}
              slidesPerView={4}
              breakpoints={breakpoints}
              onSlideChange={()=>console.log('slide change')}
              onSwiper={(swiper)=>console.log(swiper)}
              >
               {game.map((e) => (
                <SwiperSlide id="sSlide" style={{
                  padding:"1rem",height:"16rem",
                  width:"25rem" ,minHeight:"20rem"}}> 
                   <FotoHome photo={e.photo} name={e.name} />
                </SwiperSlide>                
                ))} 
            </Swiper>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: 360,
  },
  title: {
    height: 70,
    width: "100%",
    marginTop: -30,
    position: "absolute",
  },
  subTitle: {
    /*     borderStyle:"solid",
    borderColor:"red",
    borderWidth:3, */
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 17,
    marginTop: 70,
    height: 40,
    marginTop: 40,
  },
  goToStore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 4,
    elevation: 3,
    width: 100,
    marginTop: -120,
    backgroundColor: "black",
  },
  textBtnGoToStore: {
    color: "white",
  },
  imageBackground: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 400,
    width: 360,
  },
});

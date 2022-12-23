import React, { useState,useEffect }  from "react";
import { SafeAreaView,View, StyleSheet, TextInput,ImageBackground,FlatList,Text,Image} from "react-native";
import gameActions from '../Redux/Actions/gamesActions'
import { useDispatch,useSelector } from "react-redux";
import CardGame from "../Components/CardsGame";

export default function Store() {
  const dispatch = useDispatch()
  const [text, setText] = useState('');
  const {getGame,filterGameInput} = gameActions
  const {game} = useSelector((state)=>state.gamesReducer)
  let [checketGame, setChecketGame] = useState([])
  useEffect(() => {
    dispatch(getGame())
  }, [])
/*   console.log(text)

console.log(game)     */

  handleChange=(e)=>{
  let valores = {
    category: "&category=",
    value: "&name="+e,
    order: "&price="
  }
    console.log(e)
   
  dispatch(filterGameInput(valores))
}



    const oneGame= ({item})=>(
      <CardGame item={item} />
    )
/* console.log(game.payload) */
    return (
    <SafeAreaView style={styles.container}>
            <ImageBackground
        source={require("../../assets/backgroundlinearblackblue.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
      <TextInput
        style={styles.inputSearch}
        onChangeText={handleChange}
        defaultValue={text}
        placeholder="Search your game"
        placeholderTextColor="#fff" 
        keyboardType="web-search"
        textAlign="center"
      />
      <SafeAreaView>
      <FlatList
      data={game}
      renderItem={oneGame}
      keyExtractor={item=>item._id}
      ItemSeparatorComponent = {()=><View style = {{marginBottom:10,marginTop:10,borderBottomColor:"#fff",borderBottomWidth:1,width:"70%",marginLeft:50}}/>}
      ListEmptyComponent={()=>(
       game.length<=0?(
        <View>
          <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUySJCYmyFRbpYRBJVbKvpAew8e5fLlIvhw&usqp=CAU' }}
          style={styles.imgFlat}
          resizeMode="cover"
        />
       <Text style={styles.text404}>We don't have that game brou</Text>
    
       </View>):(a)
    )}
      />
      
      </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  imageBackground:{
    flex:1,
  },
  inputSearch: {
    color:'white',
    height: 40,
    fontWeight:"bold",
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  imgFlat: {
    height: 240,
    width: 280,
    marginLeft: 30,
    borderRadius: 10,
  },
  text404:{
    textAlign:"center",
    fontSize:20,
    padding:100,
    color:"white"
  }
});


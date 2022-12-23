import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import BASE_URL from '../url'

const image = {
  uri: "https://i.gifer.com/origin/e2/e2aec645e3f805bfeef5468bc9bf3a34.gif",
};

export default function AddGame() {
  const [addGame, setaAddGame] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [video, setVideo] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState();

  async function saveData() {
    const addGame = {
      addGame: addGame,
      description: description,
      photo: photo,
      price: price,
      video: video,
      date: date,
      category: category,
    };
    try {
      let res = await axios.post(`${BASE_URL}/api/auth/`, addGame);
      console.log(addGame);
      if (res.data.success) {
        Alert.alert("check your mail");
      } else {
        Alert.alert("check mail or password");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Add Game</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Game Name"
          onChangeText={(text) => setaAddGame(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Photo"
          onChangeText={(text) => setPhoto(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Price"
          onChangeText={(text) => setPrice(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Video"
          onChangeText={(text) => setVideo(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Date"
          onChangeText={(text) => setDate(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Category"
          onChangeText={(text) => setCategory(text)}
        />

        <Button onChange={saveData} title="Create" color="#4c2882" />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: "black",
    fontSize: 30,
    backgroundColor: "white",
    padding: 2,
    margin: 15,
    borderRadius: 10,
    width: "60%",
    minHeight: "4%",
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 750,
    width: "100%",
  },
  text: {
    fontSize: 50,
    color: "black",
  },
});

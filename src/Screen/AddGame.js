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

const image = {
  uri: "https://i.gifer.com/origin/e2/e2aec645e3f805bfeef5468bc9bf3a34.gif",
};

export default function AddGame() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function saveData() {
    const userValue = {
      name: name,
      lastName: lastName,
      photo: photo,
      age: age,
      email: email,
      password: password,
      role: "user",
    };
    try {
      let res = await axios.post(`${BASE}/api/auth/`, userValue);
      console.log(userValue);
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
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Photo"
          onChangeText={(text) => setPhoto(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Price"
          onChangeText={(text) => setAge(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Video"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Date"
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Rate"
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Category"
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Category"
          onChangeText={(text) => setPassword(text)}
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

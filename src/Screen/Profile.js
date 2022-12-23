import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import userActions from "../Redux/Actions/userActions";
import { useSelector } from "react-redux";

export default function Profile() {
  let { photo, name, lastName, age, email } = useSelector(state => state.userReducer)
  console.log(name)
  const image = {
    uri: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/506524b5fe295a46bca10adb/vcvv-min.jpg",
  };
  return (
    <>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.contentProfileMain}>

            <View style={styles.editProfile}>
              <Image
                source={{ uri: photo }}
                style={{
                  height: 250,
                  width: 250,
                  borderColor: "black",
                  alignContent: "center",
                  borderRadius: 20,
                }}
              />
            </View>
            <StatusBar style="auto" />
            <View style={styles.inputProfile}>
              <Text style={styles.textName}>{name} {lastName}</Text>
              <Text
                style={styles.textInput}

              >{email}</Text>
              <Text style={styles.textInput}>{age} years</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 850,
  },
  contentProfileMain: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#201325b0",
    height: 700,
    borderRadius: 40,
    width: '90%'
  },
  contenText: {
    fontSize: 20,
  },
  textProfile: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    margin: 15,
  },

  textInput: {
    color: '#bababa',
    fontSize: 30,
    padding: 5,
    margin: 5,
    textAlign: "center",
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: "center",
  },
  inputProfile: {
    display: 'flex',

  }

});

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

export default function EditProfile() {
  const image = {
    uri: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/506524b5fe295a46bca10adb/vcvv-min.jpg",
  };
  return (
    <>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.contentProfileMain}>
            <View style={styles.contenText}>
              <Text style={styles.textProfile}>Account Settings</Text>
              <Text style={styles.textProfile}>Manage Your Account Data</Text>
            </View>
            <View style={styles.editProfile}>
              <Image
                source={{
                  uri: "https://avatars.cloudflare.steamstatic.com/ef59212b7234514cc64e2eece3af15baf6eface1_full.jpg",
                }}
                style={{
                  height: 150,
                  width: 150,
                  borderColor: "black",
                  alignContent: "center",
                  borderRadius: 20,
                }}
              />
              <View style={styles.contentProfile}>
                <Text style={styles.textProfile}>Your Profile</Text>
                <Button title="EDIT" color="#8a2be2" onPress={() => navigation.navigate("Profile")}/>
              </View>
            </View>
            <StatusBar style="auto" />
            <View style={styles.inputProfile}>
              <TextInput style={styles.textInput} placeholder="Gabriel" />
              <TextInput style={styles.textInput} placeholder="Cornide" />
              <TextInput
                style={styles.textInput}
                placeholder="gabricornidel@gmail.com"
              />
              <TextInput style={styles.textInput} placeholder="**********" />
              <TextInput
                style={styles.textInput}
                placeholder="https://avatars.cloudflare.steamstatic.com/ef59212b7234514cc64e2eece3af15baf6eface1_full.jpg"
              />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#201325b0",
    height: 700,
    borderRadius: 40,
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
  editProfile: {
    display: "flex",
    flexDirection: "row",
  },
  contentProfile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    height: 40,
    width: 250,
    backgroundColor: "#8c45da",
    padding: 5,
    margin: 15,
    textAlign: "center",
    color: "white",
    borderRadius: 10,
  },
});

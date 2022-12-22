import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Profile from "../Screen/Profile";
import { StyleSheet, Text } from "react-native";
import MenuButtonItem from "../Components/MenuButtonItem";
import Library from "../Screen/Library";
import SignIn from "../Components/SignIn";


const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <>
      <DrawerNav.Navigator drawerContent={(props) => <MenuItems {...props} />} >
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="Library" component={Library} />
        <DrawerNav.Screen name="Join" component={SignIn} />
      </DrawerNav.Navigator>
    </>
  );
}

const MenuItems = ({ navigation }) => {
  return (
    <>
      <DrawerContentScrollView style={StyleSheet.container} >
        <Text style={style.title}> Menu </Text>
        <Text style={style.title}> </Text>
        <MenuButtonItem
          text="Profile"
          onPress={() => navigation.navigate("Profile")}
        />

        <MenuButtonItem
          text="Store"
          onPress={() => navigation.navigate("Store")}
        />

        <MenuButtonItem
          text="Library"
          onPress={() => navigation.navigate("Library")}
        />
        <MenuButtonItem
          text="Join"
          onPress={() => navigation.navigate("Join")}
        />
      </DrawerContentScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: 'black',
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 25,
  },
  titleNav: {
    textAlign: "center",
  },
});

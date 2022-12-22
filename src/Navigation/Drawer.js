import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Profile from "../Screen/Profile";
import { StyleSheet, Text } from "react-native";
import MenuButtonItem from "../Components/MenuButtonItem";

import Store from "../Screen/Store";
import AddGame from "../Screen/AddGame";
import SignIn from "../Components/SignIn";
import Library from "../Screen/Library";


const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <>
      <DrawerNav.Navigator drawerContent={(props) => <MenuItems {...props} />}>
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="Store" component={Store} />
        <DrawerNav.Screen name="Join" component={SignIn} />
        <DrawerNav.Screen name="AddGame" component={AddGame} />
        <DrawerNav.Screen name="Library" component={Library} />
      </DrawerNav.Navigator>
    </>
  );
}

const MenuItems = ({ navigation }) => {
  return (
    <>
      <DrawerContentScrollView style={StyleSheet.container}>
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

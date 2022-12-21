import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Profile from "../Screen/Profile";
import { StyleSheet, Text } from "react-native";
import MenuButtonItem from "../Components/MenuButtonItem";
import Store from "../Screen/Store";
import Home from "../Screen/Home";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <>
      <DrawerNav.Navigator drawerContent={(props) => <MenuItems {...props} />}>
      <DrawerNav.Screen name="Home" component={Home} />
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="Store" component={Store} />
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
          text="Home"
          onPress={() => navigation.navigate("Home")}
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

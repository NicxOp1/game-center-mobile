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
import Home from "../Screen/Home";
import Details from "../Screen/Details";
import EditProfile from "../Screen/EditProfile"

import Cart from "../Screen/Cart";


const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <>
      <DrawerNav.Navigator drawerContent={(props) => <MenuItems {...props} />}>
        <DrawerNav.Screen name="Home" component={Home} />
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="Store" component={Store} />
        <DrawerNav.Screen name="Cart" component={Cart}/>
        <DrawerNav.Screen name="Join" component={SignIn} />
        <DrawerNav.Screen name="AddGame" component={AddGame} />
        <DrawerNav.Screen name="Library" component={Library} />
        <DrawerNav.Screen name="Details" component={Details} />
        <DrawerNav.Screen name="EditProfile" component={EditProfile} />
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
          text="Cart"
          onPress={() => navigation.navigate("Cart")}
        />

        <MenuButtonItem
          text="Library"
          onPress={() => navigation.navigate("Library")}
        />
        <MenuButtonItem
          text="Home"
          onPress={() => navigation.navigate("Home")}
          />
         <MenuButtonItem
          text="Join"
          onPress={() => navigation.navigate("Join")}
        />
        <MenuButtonItem
          text="Details"
          onPress={() => navigation.navigate("Details")}
        />
{/*         <MenuButtonItem
          text="Join"
          onPress={() => navigation.navigate("EditDetails")}
        /> */}
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
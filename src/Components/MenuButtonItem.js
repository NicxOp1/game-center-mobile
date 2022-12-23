import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const MenuButtonItem = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={style.buttonContainer} onPress={onPress}>
      <Text style={style.titleNav}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#1f074e",
    borderRadius: 15,
    width: "70%",
    height: 50,
    borderColor: "#7e03aa",
    borderWidth: 2,
    marginLeft: 38,
    marginBottom: 7,
  },
  titleNav: {
    color: "#afffff",
    textAlign: "center",
    fontSize: 30,
  },
});

export default MenuButtonItem;

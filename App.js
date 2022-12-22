import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import Drawer from "./src/Navigation/Drawer";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}

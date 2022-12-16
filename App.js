// import { Animated } from 'react-native-reanimated'
// import Join from './src/components/Join';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/components/SignIn';
export default function App() {
  return (
    <SignIn/>
    // <>
    // <Text> Hello</Text>
    // <Join/>
    // </>
  //  <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

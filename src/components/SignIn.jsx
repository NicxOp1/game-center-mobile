import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, Alert, ScrollView, Pressable, ImageBackground } from 'react-native'


export default function SignIn() {
    const [isRegistering, setIsRegistering] = useState(false)
    const [isLogin, setIsLogin]= useState(false)
    const backgroundImage = require('../../assets/backgroundJoin.gif')
    const {height, width}= Dimensions.get('window')
    const loginHandler = () => {
        setIsLogin(true)
        if( isLogin){
            setIsLogin(false)
        }
        // imagePosition.value = 0;
        // if (isRegistering) {
        //   runOnJS(setIsRegistering)(false);
        // }
      };
    
      const registerHandler = () => {
        setIsRegistering(true)
        if (isRegistering){
            setIsRegistering(false)
        }
        // imagePosition.value = 0;
        // if (!isRegistering) {
        //   runOnJS(setIsRegistering)(true);
        // }
      }


  return (

 
        <ImageBackground
            source={backgroundImage }
            href={require('../../assets/backgroundJoin.gif')}
            height={height + 100} width={width}
            style={StyleSheet.absoluteFill}>
            <View style={styles.container}>
            <Pressable style={styles.button} onPress={loginHandler}>
                    <Text style={styles.buttonText}>   LOG IN  </Text>
                </Pressable>
                
            </View>
        {isLogin &&(
 <ScrollView >
    <View style={styles.form}>
 <Text style={styles.titleform}>{isRegistering ? "Welcome" : "Welcome Back!"}</Text>

 <TextInput
     style={styles.input}
     isRequired
     // value={email}
     placeholder="Email"
     onChangeText={(mail) => setEmail(mail)} />

 <TextInput
     style={styles.input}
     isRequired
     // value={password}
     placeholder="Password"
     onChangeText={(pass) => setPassword(pass)}
     secureTextEntry />
     {isRegistering &&(
     <ScrollView>
     <TextInput
     style={styles.input}
     isRequired
     // value={email}
     placeholder="Email"
     onChangeText={(mail) => setEmail(mail)} />

 {/* <TextInput
     style={styles.input}
     isRequired
     // value={password}
     placeholder="Password"
     onChangeText={(pass) => setPassword(pass)}
     secureTextEntry /> */}
      <TextInput placeholder='Name'  style={styles.input} isRequired/>
      <TextInput placeholder='LastName'  style={styles.input} isRequired/>
      <TextInput placeholder='Photo'  style={styles.input} isRequired/>
      <TextInput placeholder='Age'  style={styles.input} isRequired/>
      </ScrollView>
   )}
 <Pressable onPress={() => handleSubmit()} style={styles.show}>

         <Text style={styles.buttonText}> {isRegistering ? "REGISTER" : "LOG IN"}</Text>

 </Pressable>
 <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={registerHandler}>  REGISTER  </Text>
                </Pressable>
                </View>
</ScrollView>




        )}

           
</ImageBackground>

       
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:10,
    },

    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
        color: 'black',
        padding: 10,
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 20,
    },
    titleform: {
        fontSize: 40,
        marginTop: 50,
        color: 'white'
    },
    show: {
        backgroundColor: "indigo",
        width: "80%",
        paddingHorizontal: 15,
        alignItems: "center",
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 15,

    },
    text: {
        width: '50%',
        padding: 4,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 40,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        
      },
      buttonText: {
        width:100,
        textAlign:'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        // letterSpacing: 0.5,
        
      },
});
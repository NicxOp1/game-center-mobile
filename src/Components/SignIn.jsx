import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,

} from "react-native";
import styles from "./stylesSignIn";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import { Alert } from "react-native-web";
import { Dispatch } from "react";

export default function App() {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);

  // form
  let{ name, lastName, age, photo, email, password}= React.useRef()
 

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-width / .6, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
        
     height: 900, 
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
   
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };
  const sendInfo=async()=>{
  
    if(isRegistering){
      let form={
        name: name.current.value,
        lastName: lastName.curent.value,
        email: email.current.value,
        photo: photo.current.value,
        age: age.current.value,
        password:password.current.value,
      }
      console.log(form);
  //     await axios.post(`${BASE}/auth/`, form)
  //  .then((res=>{
 
  //     try{
  //       if (res.data.success){
  //         Alert.arlet()
  //       }else{
  //         Alert.arlet()

  //       }

  //     }
  //     catch(error){
  //       Alert.arlet()

  //     }
  //   }))
   
  } else {
    let form={
      email: email.current.value,
      password:password.current.value,
    }
    console.log(form)
  }
//   const answer= await dispatch(SignIn(signIn))
// console.log(answer.payload)
//   if(answer.payload.success){
//    await Alert.alert( `${answer.payload.response}`)
    
//   } else {
//     Alert.alert(`${ answer.payload.response }`)
//     }
  

  }

  return (
    <ScrollView>
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height} />
          </ClipPath>
          <Image
            href={require("../../assets/backgroundSepia.png")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]} >
            <ScrollView   >
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            style={styles.textInput}
            ref={email}
            keyboardType={"email-address"}
          
          />
          {isRegistering && (
            <>
            <TextInput
              placeholder="Name"
              placeholderTextColor="white"
              style={styles.textInput}
              ref={name}
            />
            <TextInput
            placeholder="Last Name"
            placeholderTextColor="white"
            style={styles.textInput}
            ref={lastName}
             />
             <TextInput
            placeholder="Photo"
            placeholderTextColor="white"
            style={styles.textInput}
            ref={photo}

             />
             <TextInput
             type='number'
            placeholder="Age"
            placeholderTextColor="white"
            style={styles.textInput}
            ref={age}
            keyboardType={'numeric'}
             />
          </>)}
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry={true}
            ref={password}
          />
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={() => {formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)), sendInfo() }}>
              <Text style={styles.buttonText}>
                {isRegistering ? "REGISTER" : "LOG IN"}
              </Text>
            </Pressable>
          </Animated.View>
          </ScrollView>
        </Animated.View>
      </View>
    </Animated.View>
    </ScrollView>
  );
}

import React, { useState }  from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, Alert, Pressable } from 'react-native'
import styles from '../stylesJoin'
import Svg, {Image, Ellipse, ClipPath} from react-native-svg
import { Animated, useSharedValue, useAnimatedStyle, interpolate, withTiming,withDelay, runOnJS, withSequence, withSpring } from 'react-native-reanimated'


export default function Join() {

    const {height, width}= Dimensions.get('window')
    const imagePosition= useSharedValue(1)
    const formButtonScale = useSharedValue(1);
    const [isRegistering, setIsRegistering] = useState(false)

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
      }
  return (
    <Animated.View style={container}>
        <Animated.View style={StyleSheet.absoluteFill}>
            <Svg height={height + 100} width={width}>
            <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
               <Image
                 href={require('../../assets/backgroundJoin.gif')}
                 width={width}
                 height={height}
                 preserveAspectRatio='xMidYMid slice'
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
                    <Text style={styles.buttonText}> LOG IN</Text>
                </Pressable>
            </Animated.View >
            <Animated.View style={styles.bottomContainer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={registerHandler}> REGISTER</Text>
                </Pressable>
            </Animated.View>
            
            
           
            <Animated.View styles= {[styles.formInputContainer, formAnimatedStyle]}>
                  <TextInput placeholder='Email' placeholderTextColor='white' style={styles.textInput}/>
                  {isRegistering &&(
                    <>
                     <TextInput placeholder='Name' placeholderTextColor='white' style={styles.textInput} isRequired/>
                     <TextInput placeholder='LastName' placeholderTextColor='white' style={styles.textInput} isRequired/>
                     <TextInput placeholder='Photo' placeholderTextColor='white' style={styles.textInput} isRequired/>
                     <TextInput placeholder='Age' placeholderTextColor='white' style={styles.textInput} isRequired/>
                     </>
                  )}
                 <TextInput placeholder='Password' placeholderTextColor='white' style={styles.textInput} isRequired secureTextEntry/>
                 <Animated.View  style={[styles.formButton, formButtonAnimatedStyle]}>
                    <Pressable  onPress={() => formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))}>

                    <Text style={styles.buttonText}> {isRegistering ? "REGISTER" : "LOG IN"}</Text>
                    </Pressable>

                </Animated.View>
            </Animated.View> 
        </View>
    </Animated.View> 
  
  )
  //onPress={() => handleSubmit()}}
  
}

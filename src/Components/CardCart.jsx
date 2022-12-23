import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'

export default function CardCart({item}) {
    
  return (
    <View>
      <Image style={{ height: 100, width: 150, marginTop: 10 }} source={{uri: item.photo[0]}} />
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button  title='X'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
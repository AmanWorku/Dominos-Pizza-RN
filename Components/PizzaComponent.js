import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PizzaComponent = ({pizza}) => {
    const data = [pizza];
  return (
    <View>
        {data.map((item, index) => (
            <Pressable>
                <Image style={{height: 200, aspectRatio:5/5, resizeMode: 'cover'}}source={{uri:item.image}} />
                <View style>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                </View>
            </Pressable>
        ))}
    </View>
  )
}

export default PizzaComponent

const styles = StyleSheet.create({})
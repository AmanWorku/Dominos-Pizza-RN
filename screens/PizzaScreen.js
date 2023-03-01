import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import pizza from '../data/pizza'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import PizzaComponent from '../Components/PizzaComponent';

const PizzaScreen = () => {
    const data = pizza;
    const navigation = useNavigation();
  return (
    <SafeAreaView>
     <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle-sharp" size={24} color="black" />
     <FlatList showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
            <PizzaComponent pizza={item} />
        )}
     />
    </SafeAreaView>
  )
}

export default PizzaScreen

const styles = StyleSheet.create({})
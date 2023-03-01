import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import pizza from '../data/pizza'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PizzaScreen = () => {
    const data = pizza;
    const navigation = useNavigation();
  return (
    <SafeAreaView>
     <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle-sharp" size={24} color="black" />
    </SafeAreaView>
  )
}

export default PizzaScreen

const styles = StyleSheet.create({})
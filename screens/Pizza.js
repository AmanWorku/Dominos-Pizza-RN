import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import PizzaComponent from "../Components/PizzaComponent";
import pizzaMania from "../data/pizzaMania";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../Context";
const Pizza = () => {
	const data = pizzaMania;
	const navigation = useNavigation();
	const { cart, setCart } = useContext(CartItems);
	console.log(cart, "Cart items added");
	return (
		<SafeAreaView>
			<Ionicons
				onPress={() => navigation.goBack()}
				name="arrow-back-circle-sharp"
				size={24}
				color="black"
			/>
			<FlatList
				numColumns={2}
				showsVerticalScrollIndicator={false}
				data={data}
				renderItem={({ item }) => <PizzaComponent pizza={item} />}
			/>
		</SafeAreaView>
	);
};

export default Pizza;

const styles = StyleSheet.create({});

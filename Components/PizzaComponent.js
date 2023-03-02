import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { CartItems } from "../Context";

const PizzaComponent = ({ pizza }) => {
	const options = ["Regular", "Medium", "Large"];
	const data = [pizza];
	const { cart, setCart } = useContext(CartItems);
	return (
		<View>
			{data.map((item, index) => (
				<Pressable style={{ borderEndColor: "#AFD8F5", borderWidth: 0.1 }}>
					<Image
						style={{ height: 200, aspectRatio: 5 / 5, resizeMode: "cover" }}
						source={{ uri: item.image }}
					/>
					<View style={{ backgroundColor: "#006491", padding: 10 }}>
						<Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
							{item.name.substr(0, 14)}
						</Text>
						<Text style={{ color: "pink", marginTop: 4 }}>
							{item.description.substr(0, 25) + "..."}
						</Text>
						<Pressable style={styles.cartBottom}>
							<View>
								<Text style={{ color: "white", fontSize: 15 }}>Size</Text>
								<ModalDropdown
									dropdownStyle={{ width: 60, height: 100 }}
									style={{ width: 60 }}
									options={options}></ModalDropdown>
							</View>
							<Pressable
								onPress={() => setCart([...cart, item])}
								style={styles.cartButton}>
								<Text style={{ color: "white", fontWeight: "bold" }}>
									Add To Cart
								</Text>
							</Pressable>
						</Pressable>
					</View>
				</Pressable>
			))}
		</View>
	);
};

export default PizzaComponent;

const styles = StyleSheet.create({
	cartButton: {
		backgroundColor: "#03C03C",
		padding: 5,
		marginLeft: 15,
		borderRadius: 4,
	},
	cartBottom: {
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
	},
});

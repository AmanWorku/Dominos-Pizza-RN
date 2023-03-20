import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { CartItems } from "../Context";

const PizzaComponent = ({ pizza }) => {
	const options = ["Regular", "Medium", "Large"];
	const data = [pizza];
	const { cart, setCart } = useContext(CartItems);
	const [selected, setSelected] = useState(false);
	const [addItems, setAddItems] = useState(0);
	const addToCart = () => {
		setSelected(true);
		const ItemPresent = cart.find((item) => item.id === pizza.id);

		if (ItemPresent) {
			setCart(
				cart.map((x) =>
					x.id === pizza.id
						? { ...ItemPresent, quantity: ItemPresent.quantity + 1 }
						: x
				)
			);
		} else {
			setCart([...cart, { quantity: 1 }]);
		}
	};

	const removeFromCart = () => {
		if (addItems === 1) {
			setSelected(false);
			setCart(cart.filter((x) => x.id === pizza.id));
		} else {
			setCart(
				cart.map((x) =>
					x.id === pizza.id
						? { ...ItemPresent, quantity: ItemPresent.quantity + 1 }
						: x
				)
			);
		}
	};

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
							{selected ? (
								<Pressable
									style={{
										backgroundColor: "#03C03C",
										padding: 2,
										marginLeft: 15,
										borderRadius: 4,

										flexDirection: "row",
										alignItems: "center",
									}}>
									<Pressable onPress={removeFromCart}>
										<Text
											style={{
												fontSize: 20,
												color: "white",
												paddingHorizontal: 10,

												fontWeight: "600",
											}}>
											-
										</Text>
									</Pressable>

									<Pressable>
										<Text
											style={{
												fontSize: 18,
												color: "white",
												paddingHorizontal: 5,
												fontWeight: "600",
											}}>
											{addItems}
										</Text>
									</Pressable>

									<Pressable onPress={addToCart}>
										<Text
											style={{
												fontSize: 20,
												color: "white",
												paddingHorizontal: 10,
												fontWeight: "600",
											}}>
											+
										</Text>
									</Pressable>
								</Pressable>
							) : (
								<Pressable onPress={addToCart} style={styles.cartButton}>
									<Text style={{ color: "white", fontWeight: "bold" }}>
										Add To Cart
									</Text>
								</Pressable>
							)}
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

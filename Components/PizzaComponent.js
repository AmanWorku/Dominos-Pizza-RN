import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ModalDropdown from "react-native-modal-dropdown";

const PizzaComponent = ({ pizza }) => {
	const options = ["Regular", "Medium", "Large"];
	const data = [pizza];
	return (
		<View>
			{data.map((item, index) => (
				<Pressable>
					<Image
						style={{ height: 200, aspectRatio: 5 / 5, resizeMode: "cover" }}
						source={{ uri: item.image }}
					/>
					<View style={{ backgroundColor: "#006491", padding: 10 }}>
						<Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
							{item.name.substr(0, 15) + "..."}
						</Text>
						<Text style={{ color: "pink", marginTop: 4 }}>
							{item.description.substr(0, 25) + "..."}
						</Text>
						<Pressable
							style={{
								marginTop: 5,
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}>
							<ModalDropdown
								dropdownStyle={{ width: 60, height: 100 }}
								style={{ width: 60 }}
								options={options}></ModalDropdown>
							<Pressable
								style={{
									backgroundColor: "#03C03C",
									padding: 5,
									marginLeft: 15,
									borderRadius: 4,
								}}>
								<Text>Add To Cart</Text>
							</Pressable>
						</Pressable>
					</View>
				</Pressable>
			))}
		</View>
	);
};

export default PizzaComponent;

const styles = StyleSheet.create({});

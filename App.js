import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasketContext } from "./Context";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
	return (
		<BasketContext>
			<SafeAreaView style={styles.droidSafeArea}>
				<StackNavigator />
			</SafeAreaView>
		</BasketContext>
	);
}

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 15 : 0,
	},
});

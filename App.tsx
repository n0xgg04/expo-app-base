import * as Font from "expo-font";
import React from "react";
import { SafeAreaView, Text } from "react-native";

import Application from "@/main";
export default function App() {
	const [loadingFonts, setIsLoadingFont] = React.useState(true);
	React.useEffect(() => {
		Font.loadAsync({
			"Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
			"Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
			"Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
		}).then(() => setIsLoadingFont(false));
	}, []);
	if (loadingFonts)
		return (
			<SafeAreaView>
				<Text>Loading</Text>
			</SafeAreaView>
		);
	return <Application />;
}

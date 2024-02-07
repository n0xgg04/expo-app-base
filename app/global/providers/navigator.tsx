import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as React from "react";
import { Text } from "react-native";

const prefix = Linking.createURL("/");

type Props = {
	children: React.ReactNode;
};

export default function NavigatorProvider({ children }: Props) {
	const linking = {
		prefixes: [prefix],
	};
	return (
		<NavigationContainer
			linking={linking}
			fallback={<Text>Loading...</Text>}
		>
			{children}
		</NavigationContainer>
	);
}

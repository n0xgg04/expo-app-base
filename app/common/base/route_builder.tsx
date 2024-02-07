import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { screens } from "@/config/screen";

const Stack = createStackNavigator();
export default function RouteBuilder() {
	return (
		<Stack.Navigator
			initialRouteName={screens[0].name}
			screenOptions={{ headerShown: false }}
		>
			{screens.map((e, i) => (
				<Stack.Screen
					key={i}
					name={e.name}
					component={e.screen}
				/>
			))}
		</Stack.Navigator>
	);
}

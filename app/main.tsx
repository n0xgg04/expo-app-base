import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import RouteBuilder from "@/common/base/route_builder";
import ReduxProvider from "@/global/providers/redux";

export default function Application() {
	return (
		<ReduxProvider>
			<NavigationContainer>
				<RouteBuilder />
			</NavigationContainer>
		</ReduxProvider>
	);
}

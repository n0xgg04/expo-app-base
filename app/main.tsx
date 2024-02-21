import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import RouteBuilder from "@/common/base/route_builder";
import ReduxProvider from "@/global/providers/redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Application() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider>
        <NavigationContainer>
          <RouteBuilder />
        </NavigationContainer>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}

import React from "react";

import Application from "@/main";
import {
  useFonts,
  Rowdies_700Bold,
  Rowdies_400Regular,
  Rowdies_300Light,
} from "@expo-google-fonts/rowdies";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rowdies_700Bold,
    Rowdies_400Regular,
    Rowdies_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Application />;
}

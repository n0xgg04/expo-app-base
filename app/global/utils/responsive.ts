import { Dimensions } from "react-native";

export function wp(p: number) {
	return (Dimensions.get("window").width * p) / 100;
}

export function hp(p: number) {
	return Dimensions.get("screen").height * (p / 100);
}

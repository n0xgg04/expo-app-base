import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

import { hp, wp } from "@/global/utils/responsive";

type Props = ViewProps & {
	children?: React.ReactNode;
	type?: "full";
};
export default function Container({ children, type, ...props }: Props) {
	return (
		<View style={[type === "full" && styles.fullScreen, props.style]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	fullScreen: {
		width: wp(100),
		height: hp(100),
	},
});

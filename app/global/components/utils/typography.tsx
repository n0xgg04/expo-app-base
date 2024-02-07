import * as React from "react";
import {
	Text,
	TextProps,
	StyleSheet,
	StyleProp,
	TextStyle,
} from "react-native";

import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { hp } from "@/global/utils/responsive";

type Props = {
	children?: string;
	type: "h1" | "h2" | "h3" | "h4" | "content" | "label";
} & TextProps;
export default function Typography({ children, type, ...props }: Props) {
	return (
		<Text
			style={[styleText[type], props.style]}
			{...props}
		>
			{children}
		</Text>
	);
}

type StyleTextT<T = any> = {
	[K in Props["type"]]?: T;
};

const styles: StyleTextT = StyleSheet.create({
	h1: {
		fontSize: FontSizeConstants.xl,
		fontWeight: "bold",
		fontFamily: FontFamilyConstants.ManRope.semiBold,
	},
	h3: {
		fontSize: FontSizeConstants.lg,
		fontWeight: "bold",
		fontFamily: FontFamilyConstants.ManRope.semiBold,
	},
	label: {
		fontSize: hp(1.2),
		fontFamily: FontFamilyConstants.ManRope.regular,
	},
});

const styleText: StyleTextT<StyleProp<TextStyle>> = {
	h1: styles.h1,
	h3: styles.h3,
};

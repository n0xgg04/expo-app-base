import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
	TouchableOpacityProps,
	TouchableOpacity,
	Text,
	StyleSheet,
	TextStyle,
} from "react-native";

import Stack from "@/global/components/utils/stack";
import { BorderRadiusConstants } from "@/global/theme/border_radius";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { FontWeightConstants } from "@/global/theme/font_weight";
import { colors } from "@/global/theme/pallete";
import { hp, wp } from "@/global/utils/responsive";

type Props = {
	children?: string;
	backgroundColor?: string;
	textStyle?: TextStyle;
	leftIcon?: React.ReactElement;
} & TouchableOpacityProps;
export default function Button({
	backgroundColor,
	textStyle,
	children,
	leftIcon,
	...props
}: Props) {
	return (
		<TouchableOpacity
			{...props}
			style={[
				styles.btn,
				props.style,
				!backgroundColor
					? {
							borderWidth: 0,
						}
					: {},
			]}
		>
			{backgroundColor ? (
				<Stack
					direction='row'
					justifyContent='center'
					style={[
						styles.background,
						{
							backgroundColor,
						},
						!children && {
							gap: 0,
						},
					]}
				>
					{leftIcon}
					<Text style={[styles.text, textStyle]}>{children}</Text>
				</Stack>
			) : (
				<LinearGradient
					colors={colors.gradientColor.btn.getColor}
					start={{
						x: 0,
						y: 0,
					}}
					end={{
						x: 1,
						y: 1,
					}}
					style={styles.background}
				>
					<Text style={[styles.text, textStyle]}>{children}</Text>
				</LinearGradient>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btn: {
		width: "100%",
		height: hp(5.5),
		borderRadius: BorderRadiusConstants.md,
		overflow: "hidden",
		borderWidth: 0.8,
		shadowColor: colors.border.blue,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	background: {
		overflow: "hidden",
		width: "100%",
		height: "100%",
		display: "flex",
		gap: wp(2),
		justifyContent: "center",
		alignItems: "center",
		borderColor: colors.border.blue,
	},
	text: {
		fontSize: FontSizeConstants.lg,
		fontWeight: FontWeightConstants.btn,
		color: colors.textColor.white,
		fontFamily: FontFamilyConstants.ManRope.semiBold,
	},
});

import * as React from "react";
import { View, ViewProps, StyleSheet, Text } from "react-native";

import Stack from "@/global/components/utils/stack";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { colors } from "@/global/theme/pallete";
import { wp } from "@/global/utils/responsive";

type Props = {
	text?: string;
} & ViewProps;
export default function Divider({ text, ...props }: Props) {
	return (
		<Stack
			direction='row'
			alignItems='center'
			style={styles.stack}
		>
			{text ? (
				<>
					<View style={[styles.main, props.style]} />
					<Text style={styles.text}>{text}</Text>
					<View style={[styles.main, props.style]} />
				</>
			) : (
				<View style={[styles.main, props.style]} />
			)}
		</Stack>
	);
}

const styles = StyleSheet.create({
	main: {
		height: 1.5,
		flex: 1,
		backgroundColor: colors.backgroundColor.gray,
	},
	stack: {
		gap: 3,
	},
	text: {
		color: colors.textColor.gray,
		marginHorizontal: wp(3.5),
		fontFamily: FontFamilyConstants.ManRope.semiBold,
	},
});

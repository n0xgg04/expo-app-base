import * as React from "react";
import { ReactChild } from "react";
import { Text, StyleSheet } from "react-native";

import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { hp, wp } from "@/global/utils/responsive";

type Props = {
	left?: React.ReactNode;
	title?: string;
	rightTool?: React.ReactNode;
};

export default function AppBar({ rightTool, left, title }: Props) {
	return (
		<Stack
			direction='row'
			style={styles.container}
			alignItems='center'
			justifyContent='space-between'
		>
			<Stack
				direction='row'
				style={styles.part}
				alignItems='center'
				justifyContent='flex-start'
				gap={wp(1.2)}
			>
				{left}
				<Typography
					type='h3'
					style={styles.title}
				>
					{title}
				</Typography>
			</Stack>
			<Stack
				direction='row'
				justifyContent='flex-end'
				style={[styles.part]}
			>
				{rightTool}
			</Stack>
		</Stack>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: FontFamilyConstants.ManRope.bold,
		fontSize: FontSizeConstants.lg,
	},
	container: {
		width: "100%",
		minHeight: hp(5.5),
	},
	part: {
		flexGrow: 0,
	},
});

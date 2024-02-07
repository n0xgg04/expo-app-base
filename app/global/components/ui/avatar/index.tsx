import { Image, ImageProps } from "expo-image";
import * as React from "react";
import { StyleSheet } from "react-native";

import { BorderRadiusConstants } from "@/global/theme/border_radius";
import { colors } from "@/global/theme/pallete";
import { wp } from "@/global/utils/responsive";

type Props = { uri: string } & ImageProps;
export default function Avatar({ uri, ...props }: Props) {
	return (
		<Image
			{...props}
			style={[styles.avatar, props.style]}
			source={{ uri }}
		/>
	);
}

const styles = StyleSheet.create({
	avatar: {
		height: wp(6),
		overflow: "hidden",
		aspectRatio: "1/1",
		borderRadius: BorderRadiusConstants.full,
		borderColor: colors.border.gray,
		borderWidth: 0.5,
	},
});

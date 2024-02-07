import * as React from "react";
import { Text, TextProps } from "react-native";

import Typography from "@/global/components/utils/typography";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { hp, wp } from "@/global/utils/responsive";

type Props = {
	children: string;
	color?: string;
	textColor?: string;
} & TextProps;
export default function Chip({
	children,
	color = "rgba(51,140,241,0.42)",
	textColor = "rgba(14,54,100,0.89)",
	...props
}: Props) {
	return (
		<Typography
			type='content'
			style={{
				paddingHorizontal: wp(2.5),
				paddingVertical: hp(0.4),
				backgroundColor: color,
				borderRadius: 7,
				overflow: "hidden",
				fontSize: FontSizeConstants.xs,
				color: textColor,
				fontFamily: FontFamilyConstants.ManRope.semiBold,
			}}
			{...props}
		>
			{children}
		</Typography>
	);
}

import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";

import AppBar from "@/global/components/ui/appbar";
import Button from "@/global/components/ui/button";
import { FontSizeConstants } from "@/global/theme/font_size";
import { colors } from "@/global/theme/pallete";
import { hp, wp } from "@/global/utils/responsive";
import i18n from "@/localization/i18n";

type Props = {
	title: string;
};
export default function DefaultAppBar({ title }: Props) {
	return (
		<AppBar
			title={title}
			rightTool={
				<Button
					backgroundColor={colors.backgroundColor.donateBtn}
					textStyle={styles.donateBtnText}
					style={styles.donateBtn}
					leftIcon={
						<AntDesign
							name='staro'
							size={wp(4)}
							color={colors.textColor.primaryColor}
						/>
					}
				>
					{i18n.t("default_app_bar_donate_us_button")}
				</Button>
			}
		/>
	);
}

const styles = StyleSheet.create({
	donateBtn: {
		width: wp(30),
		height: hp(4),
		borderWidth: 0,
	},
	donateBtnText: {
		fontSize: FontSizeConstants.sm! - 0.5,
		color: colors.textColor.primaryColor,
	},
});

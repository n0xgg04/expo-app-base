import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";

import AppBar from "@/global/components/ui/appbar";
import Button from "@/global/components/ui/button";
import ScreenBase from "@/global/components/ui/screen_layout";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { colors } from "@/global/theme/pallete";
import { hp, wp } from "@/global/utils/responsive";
import i18n from "@/localization/i18n";

export default function HomeScreen() {
	return (
		<ScreenBase
			AppBar={
				<AppBar
					title={i18n.t("feed_screen_app_bar_title")}
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
							Donate us
						</Button>
					}
				/>
			}
		/>
	);
}

const styles = StyleSheet.create({
	infoName: {
		fontSize: FontSizeConstants.lg! - 2,
		fontFamily: FontFamilyConstants.ManRope.semiBold,
	},
	infoSub: {
		fontFamily: FontFamilyConstants.ManRope.regular,
		color: colors.textColor.secondaryColor,
		fontSize: FontSizeConstants.xs! + 1,
	},
	rightInfo: {
		height: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	infoContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		borderColor: colors.border.gray,
		borderWidth: 0.5,
		padding: wp(2),
		borderRadius: 10,
	},
	info: {
		display: "flex",
		flexDirection: "row",
		gap: wp(3),
		alignItems: "center",
	},
	avatar: {
		height: hp(5),
	},
	infoStack: {
		flexGrow: 1,
	},
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

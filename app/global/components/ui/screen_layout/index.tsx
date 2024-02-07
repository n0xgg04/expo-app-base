import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import * as React from "react";
import {
	SafeAreaView,
	View,
	StyleSheet,
	ScrollView,
	Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Divider from "@/global/components/ui/divider";
import Container from "@/global/components/utils/container";
import { colors } from "@/global/theme/pallete";
import { hp, wp } from "@/global/utils/responsive";

type Props = {
	AppBar?: React.ReactNode;
	children?: React.ReactNode;
	bottomSheetRef?: any;
};
export default function ScreenBase({ AppBar, children }: Props) {
	const safeInset = useSafeAreaInsets();
	const bottomPadding = useBottomTabBarHeight() - safeInset.bottom;

	return (
		<>
			{Platform.OS !== "ios" && (
				<ExpoStatusBar
					backgroundColor='white'
					translucent
				/>
			)}
			<Container
				style={[
					styles.container,
					{
						paddingTop: Platform.select({
							android: safeInset.top,
							default: undefined,
						}),
					},
				]}
			>
				<SafeAreaView style={[styles.col]}>
					<View style={styles.zone}>{AppBar}</View>
					<Divider style={styles.divider} />
					<ScrollView style={styles.content}>{children}</ScrollView>
					<View
						style={[
							styles.bnvSkip,
							{
								height: bottomPadding,
							},
						]}
					/>
				</SafeAreaView>
			</Container>
		</>
	);
}

const styles = StyleSheet.create({
	zone: {
		marginHorizontal: wp(3),
	},
	col: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		overflow: "hidden",
	},
	content: {
		flexGrow: 1,
		marginHorizontal: wp(3),
		paddingTop: hp(1.5),
	},
	divider: {},
	container: {
		width: "100%",
		overflow: "hidden",
		height: hp(100),
		backgroundColor: colors.backgroundColor.white,
	},
	bnvSkip: {
		width: "100%",
	},
});

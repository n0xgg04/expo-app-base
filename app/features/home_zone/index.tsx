import { MaterialIcons, FontAwesome6, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import * as React from "react";
import { Platform, StyleSheet } from "react-native";

import HomeScreen from "@/features/home_screen/index";
import Avatar from "@/global/components/ui/avatar";
import { SCREEN_NAME } from "@/global/constants/screens";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { colors } from "@/global/theme/pallete";
import { hp } from "@/global/utils/responsive";
import i18n from "@/localization/i18n";

const Tab = createBottomTabNavigator();

const tabElementStyle = {
	tabBarLabelStyle: {
		fontFamily: FontFamilyConstants.ManRope.bold,
		fontSize: FontSizeConstants.xs,
	},
};
export default function HomeZone() {
	return (
		<>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: colors.colors.bnv_active,
					tabBarInactiveTintColor: colors.colors.bnv_inactive,
					headerShown: false,
					tabBarStyle: {
						position: "absolute",
						backgroundColor: "transparent",
					},
					tabBarBackground: () => (
						<BlurView
							experimentalBlurMethod='dimezisBlurView'
							intensity={Platform.select({
								ios: 10,
								default: 60,
							})}
							style={{
								...StyleSheet.absoluteFillObject,
								overflow: "hidden",
								backgroundColor: "transparent",
							}}
						/>
					),
				}}
				initialRouteName={SCREEN_NAME.home_feed}
				safeAreaInsets={Platform.select({
					android: { bottom: hp(1) },
					ios: undefined,
				})}
			>
				<Tab.Screen
					name={SCREEN_NAME.home_feed}
					component={HomeScreen}
					options={{
						title: i18n.t("home_zone_bottom_nav_bar_feed"),
						tabBarIcon: ({ size, focused, color }) => {
							return (
								<MaterialIcons
									name='space-dashboard'
									size={hp(2.5)}
									color={color}
								/>
							);
						},
						...tabElementStyle,
					}}
				/>
				<Tab.Screen
					name='Settings'
					component={HomeScreen}
					options={{
						tabBarIcon: ({ size, focused, color }) => {
							return (
								<MaterialIcons
									name='history-edu'
									size={hp(2.5)}
									color={color}
								/>
							);
						},
						title: i18n.t("home_zone_bottom_nav_bar_story"),
						...tabElementStyle,
					}}
				/>
				<Tab.Screen
					name={SCREEN_NAME.home_resource}
					component={HomeScreen}
					options={{
						title: i18n.t("home_zone_bottom_nav_bar_resources"),
						tabBarIcon: ({ size, focused, color }) => {
							return (
								<Entypo
									name='folder-images'
									size={hp(2.6)}
									color={color}
								/>
							);
						},
						...tabElementStyle,
					}}
				/>
				//! TODO: Add here
			</Tab.Navigator>
		</>
	);
}

import { SCREEN_NAME } from "@/global/constants/screens";
import HomeScreen from "@/features/home_screen";
import HomeZone from "@/features/home_zone";

export const screens: ApplicationScreenElement[] = [
	{
		screen: HomeZone,
		name: SCREEN_NAME.home,
	},
];

import { SCREEN_NAME } from "@/global/constants/screens";
import HomeScreen from "@/features/home_screen";

export const screens: ApplicationScreenElement[] = [
	{
		screen: HomeScreen,
		name: SCREEN_NAME.login,
	},
	//TODO : Add here
];

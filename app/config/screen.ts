import { SCREEN_NAME } from "@/global/constants/screens";
import HomeScreen from "@/features/home_screen";
import HomeZone from "@/features/home_zone";
import GetStarted from "@/features/get_started";
import NavigationAlertScreen from "@/features/navigation_alert_screen";

//! TODO : Add new screen
export const screens: ApplicationScreenElement[] = [
  {
    screen: GetStarted,
    name: SCREEN_NAME.get_started,
  },
  {
    screen: HomeZone, //! Component của screen
    name: SCREEN_NAME.home, //! Tên => Gọi khi muốn navigate tới
  },
  {
    screen: NavigationAlertScreen,
    name: SCREEN_NAME.NavigationAlertScreen,
  },
];

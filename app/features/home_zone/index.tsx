import * as React from "react";
import { SCREEN_NAME } from "@/global/constants/screens";
import i18n from "@/localization/i18n";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoLocation from "./parts/cp_info";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import SettingsButton from "./parts/cp_settings_button";
import InfoBoardInsight from "./parts/cp_info_board_insight";
import DetailsInfoBoard from "./parts/cp_details_weather";
import FeatureBar from "./parts/cp_features";

const handleOnPressSettings = () => {
  console.log("Settings button pressed");
}

export default function HomeZone() {
	return (
    <ScrollView>
      <ImageBackground
        source={ImagesConstants.backgrounds.home.zone}
        style={styles.imgBackground}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <InfoLocation
            location="TT. THANH BÌNH"
            temperature="20°"
            weather="Nắng nhẹ • An toàn"
          />
          <View style={styles.buttonSettings}>
            <SettingsButton onPress={handleOnPressSettings}></SettingsButton>
          </View>
          <InfoBoardInsight />

          <DetailsInfoBoard />
          <FeatureBar isConnected={false} isNotificationOn={false} location={"TT. Thanh Bình"} />
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    width: wp(100),
  },
container: {
	  position: "relative",
  paddingTop: hp(5),
    paddingLeft: wp(5),
	},
	buttonSettings: {
		position: "absolute",
		top: hp(4),
    right: wp(6),
  }
});
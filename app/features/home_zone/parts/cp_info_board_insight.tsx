import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import * as React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import InfoBoardItem from "./cp_info_board_insight_items";
import i18n from "@/localization/i18n";

export default function InfoBoardInsight() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      style={styles.container}
    >
      <InfoBoardItem
        icon={ImagesConstants.icons.uv}
        title={i18n.t("home_screen.info_screen.weather.uv_title")}
        value="2"
        unit="Thấp"
      />
      <InfoBoardItem
        icon={ImagesConstants.icons.humidity}
        title={i18n.t("home_screen.info_screen.weather.humidity_title")}
        value="50"
        unit="%"
        sizeUnit="same_value"
      />

      <InfoBoardItem
        icon={ImagesConstants.icons.raincloud}
        title={i18n.t("home_screen.info_screen.weather.rain_amount_title")}
        value="0"
        unit="mm"
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.18)",
        width: wp(90),
        padding: hp(2),
        borderRadius: hp(3),
        marginTop: hp(2),
  },
});

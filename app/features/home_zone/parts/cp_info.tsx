import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import i18n from "@/localization/i18n";
import * as React from "react";
import { Image, StyleProp, StyleSheet, Text, Touchable, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";

type Props = {
  location: string,
  temperature: string,
  weather: string,
}

export default function InfoLocation({location, temperature, weather}: Props) {
    return (
      <Stack direction="column" alignItems="center">
        <Typography type="h4" style={styles.textNormal}>
          {i18n.t("home_screen.info_screen.location.my_location")}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Typography type="h1" style={styles.textBigger}>
            {location}
          </Typography>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={ImagesConstants.button.expandAll}
              style={styles.buttonExpand}
            />
          </TouchableOpacity>
        </Stack>
        <Typography type="h1" style={styles.textOversize}>
          {temperature}
        </Typography>
        <Typography type="h3" style={styles.textNormal}>
          {weather}
        </Typography>
      </Stack>
    );
}



const styles = StyleSheet.create({
  textOversize: {
    fontSize: hp(8),
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 3, height: 7 },
    textShadowRadius: 1,
  },
  textNormal: {
    fontSize: hp(2),
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginStart: wp(-2)
  },
  textBigger: {
    fontSize: hp(3.2),
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  buttonExpand: {
    width: hp(3),
    height: hp(3),
    marginLeft: hp(0.3),
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 3, height: 7 },
    textShadowRadius: 1,
  },
});
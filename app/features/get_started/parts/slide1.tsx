import * as React from "react";
import { ImagesConstants } from "@/global/constants/resources/images";
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Stack from "@/global/components/utils/stack";
import { hp, wp } from "@/global/utils/responsive";
import Typography from "@/global/components/utils/typography";
import { ImageBackground } from "expo-image";
import i18n from "@/localization/i18n";

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};
export default function Slide1({ onPress }: Props) {
  return (
    <ImageBackground
      style={styles.imageBg}
      source={ImagesConstants.backgrounds.intro.slide1}
    >
      <SafeAreaView>
        <Stack
          direction="column"
          style={styles.flx}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack direction="column" gap={hp(3)}>
            <Stack direction="column">
              <Typography type="h1" style={styles.title}>
                {i18n.t("intro_screen.step1.title.0")}
              </Typography>
              <Typography type="h1" style={styles.title}>
                {i18n.t("intro_screen.step1.title.1")}
              </Typography>
              <Typography type="h1" style={styles.title}>
                {i18n.t("intro_screen.step1.title.2")}
              </Typography>
            </Stack>
            <Typography type="h1" style={styles.sub}>
              {i18n.t("intro_screen.step1.content")}
            </Typography>
            <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
              <Typography type={"h1"} style={styles.btnTitle}>
                {i18n.t("intro_screen.step1.button")}
              </Typography>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#266A9C",
    height: hp(7),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(10),
    borderRadius: wp(10),
    borderColor: "rgba(255,255,255,0.33)",
    borderWidth: wp(0.5),
    borderStyle: "solid",
  },
  btnTitle: {
    color: "white",
    paddingHorizontal: wp(10),
    fontSize: hp(2),
    width: undefined,
  },
  sub: {
    color: "white",
    paddingHorizontal: wp(10),
    fontSize: hp(1.6),
  },
  flx: {
    height: "100%",
    paddingBottom: hp(7),
  },
  title: {
    paddingHorizontal: wp(10),
    fontSize: hp(4),
    color: "white",
  },
  imageBg: {
    width: wp(100),
    height: hp(100),
  },
});

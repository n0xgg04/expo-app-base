import * as React from "react";
import { ImagesConstants } from "@/global/constants/resources/images";
import {
  GestureResponderEvent,
  Image,
  LayoutChangeEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Stack from "@/global/components/utils/stack";
import { hp, wp } from "@/global/utils/responsive";
import Typography from "@/global/components/utils/typography";
import { ImageBackground } from "expo-image";
import { SCREEN_NAME } from "@/global/constants/screens";
import i18n from "@/localization/i18n"; // Import PanGestureHandler

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export default function Slide4({ onPress }: Props) {

 
  return (
    <ImageBackground
      style={styles.imageBg}
      source={ImagesConstants.backgrounds.intro.slide4}
    >
      <SafeAreaView>
        <Stack
          direction="column"
          style={styles.flx}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Image
            source={ImagesConstants.icons.navigation_wave_ahead}
            resizeMode="contain"
            style = {{height: wp(50)}}
          />
          <Stack direction="column" gap={hp(3)}>
            <Stack direction="column" alignItems="center">
              <Typography type="h1" style={styles.title}>
                {i18n.t("intro_screen.step4.title.0")}
              </Typography>
              <Typography type="h1" style={[styles.title]}>
                {i18n.t("intro_screen.step4.title.1")}
              </Typography>
              <Typography type="h1" style={styles.titlesub}>
                {i18n.t("intro_screen.step4.title.2")}
              </Typography>
              <Typography type="h1" style={[styles.title, styles.marginTitle]}>
                {i18n.t("intro_screen.step4.title.3")}
              </Typography>
              <Typography type="h1" style={styles.titlesub}>
                {i18n.t("intro_screen.step4.title.4")}
              </Typography>
            </Stack>
            <Typography type="h1" style={styles.sub}>
              {i18n.t("intro_screen.step4.content")}
            </Typography>

            <Stack direction="row" gap={wp(2)} justifyContent="center">
              <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
                <Typography type={"h1"} style={styles.btnTitle}>
                  {i18n.t("intro_screen.step4.buttons.description")}
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
                <Typography type={"h1"} style={styles.btnTitle}>
                  {i18n.t("intro_screen.step4.buttons.done")}
                </Typography>
              </TouchableOpacity>
            </Stack>
          </Stack>
        </Stack>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: "relative",
    backgroundColor: "#1A1A1A",
    height: hp(7),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(1),
    borderRadius: wp(10),
    borderColor: "rgba(255,255,255,0.33)",
    borderWidth: wp(0.2),
    borderStyle: "solid",
    marginEnd: 0,
    width: wp(40),
  },
  rowButton: {
    justifyContent: "center",
  },
  marginTitle: {
    marginTop: hp(2),
  },
  buttonArrow: {
    width: hp(3),
    height: hp(3),
  },
  btnTitle: {
    color: "white",
    paddingHorizontal: wp(0),
    fontSize: hp(2),
    paddingStart: wp(0),
  },
  sub: {
    color: "white",
    paddingHorizontal: wp(10),
    paddingBottom: wp(4),
    fontSize: hp(1.6),
  },
  flx: {
    height: "100%",
    paddingBottom: hp(7),
  },
  title: {
    paddingHorizontal: wp(10),
    fontSize: hp(5),
    color: "white",
  },
  titlesub: {
    paddingHorizontal: wp(10),
    fontSize: hp(3.5),
    color: "white",
  },
  title_darkbule: {
    color: "#20678E",
  },
  imageBg: {
    width: wp(100),
    height: hp(100),
  },
});

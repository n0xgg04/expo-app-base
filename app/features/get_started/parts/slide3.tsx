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
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { CommonActions, useNavigation } from "@react-navigation/native";
type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export default function Slide2({ onPress }: Props) {
  const [width, setWidth] = React.useState(0);

  const onLayoutHandle = React.useCallback((e: LayoutChangeEvent): void => {
    const {
      nativeEvent: {
        layout: { width },
      },
    } = e;
    setWidth(width);
  }, []);

  return (
    <ImageBackground
      style={styles.imageBg}
      source={ImagesConstants.backgrounds.intro.slide3}
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
                {i18n.t("intro_screen.step3.title.0")}
              </Typography>
              <Typography
                type="h1"
                style={[styles.title]}
              >
                {i18n.t("intro_screen.step3.title.1")}
              </Typography>
              <Typography type="h1" style={styles.title}>
                {i18n.t("intro_screen.step3.title.2")}
              </Typography>
              <Typography type="h1" style={styles.title}>
                {i18n.t("intro_screen.step3.title.3")}
              </Typography>
            </Stack>
            <Typography type="h1" style={styles.sub}>
              {i18n.t("intro_screen.step3.content")}
            </Typography>

            <Stack direction="row" gap={wp(3)}>
              <Stack
                direction="row"
                style={styles.btnContainer}
                onLayout={onLayoutHandle}
              >
                <Circle width={width} />
                <Typography
                  onPress={onPress}
                  type={"h1"}
                  style={styles.btnTitle}
                >
                  {i18n.t("intro_screen.step3.button")}
                </Typography>
              </Stack>
              <TouchableOpacity style={styles.btnCircle} onPress={onPress}>
                <Image
                  source={ImagesConstants.button.iconArrowRight}
                  style={styles.buttonArrow}
                ></Image>
              </TouchableOpacity>
            </Stack>
          </Stack>
        </Stack>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Circle({ width }: { width: number }) {
  const hpCir = hp(7);
  const pressed = useSharedValue(false);
  const [thisWidth, setThisWidth] = React.useState(0);
  const offset = useSharedValue(0);
  const wp2 = wp(1);
  const navigator = useNavigation();
  const [isDone, setDone] = React.useState(false);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      if (event.translationX < 0) {
        offset.value = 0;
        return;
      }
      if (event.translationX >= width - thisWidth - wp2) {
        offset.value = width - thisWidth - wp2;
        return;
      }
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      if (Math.trunc(hpCir + offset.value) >= Math.trunc(width - hpCir)) {
        //runOnJS(navigator.dispatch)(CommonActions.navigate(SCREEN_NAME.home));
        runOnJS(setDone)(true);
        return;
      }
      offset.value = withTiming(0, {
        easing: Easing.inOut(Easing.quad),
        duration: 500,
      });
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  React.useEffect(() => {
    if (isDone) {
      navigator.dispatch(CommonActions.navigate(SCREEN_NAME.home));
    }
  }, [isDone]);
  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        onLayout={(e) => {
          const {
            nativeEvent: {
              layout: { width },
            },
          } = e;
          setThisWidth(width);
        }}
        style={[
          {
            height: "100%",
            aspectRatio: 1,
            borderRadius: 999,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            left: 0,
          },
          animatedStyles,
        ]}
      ></Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: "relative",
    backgroundColor: "#BFAC00",
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
    width: wp(67),
    marginEnd: 0,
  },
  btnCircle: {
    position: "relative",
    backgroundColor: "#BFAC00",
    height: hp(7),
    width: hp(7),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(50),
    borderWidth: wp(0.6),
    borderStyle: "solid",
    borderColor: "#CCBF51",
  },
  buttonArrow: {
    width: hp(3),
    height: hp(3),
  },
  btnTitle: {
    color: "white",
    paddingHorizontal: wp(10),
    fontSize: hp(2),
    paddingStart: wp(15),
    width: undefined,
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
    fontSize: hp(4),
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

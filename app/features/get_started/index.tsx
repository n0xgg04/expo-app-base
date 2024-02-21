import * as React from "react";
import { ImageBackground } from "expo-image"; // Correct import
import { ImagesConstants } from "@/global/constants/resources/images";
import { LayoutChangeEvent, SafeAreaView, StyleSheet } from "react-native";
import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { hp, wp } from "@/global/utils/responsive";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Slide1 from "@/features/get_started/parts/slide1"; // Import PanGestureHandler
type Props = {};

export default function GetStarted(props: Props) {
  const translateX = useSharedValue(0);
  const handlePress = () => {
    translateX.value = withTiming(translateX.value - wp(100), {
      duration: 400,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });
  };

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
    <Animated.View
      style={{
        transform: [
          {
            translateX,
          },
        ],
      }}
    >
      <Stack direction="row">
        <Slide1 onPress={handlePress} />
        <ImageBackground
          style={styles.imageBg}
          source={ImagesConstants.icons.intro1}
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
                    Thời tiết cực đoan.
                  </Typography>
                  <Typography type="h1" style={styles.title}>
                    Địa điểm an toàn.
                  </Typography>
                  <Typography type="h1" style={styles.title}>
                    Ultra-Wide Band.
                  </Typography>
                </Stack>
                <Typography type="h1" style={styles.sub}>
                  {`Một ứng dụng tuyệt vời để phát hiện nguy cơ thiên tai tìm tàng xung quanh bạn.

Nhận thông báo ngay khi mối đe doạ sắp đến. Mau chóng tìm đến nơi tập trung tại địa phương một cách chính xác và hơn thế nữa.`}
                </Typography>
                <Stack
                  direction="row"
                  style={styles.btnContainer}
                  onLayout={onLayoutHandle}
                >
                  <Circle width={width} />
                  <Typography type={"h1"} style={styles.btnTitle}>
                    Bắt đầu khám phá
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </SafeAreaView>
        </ImageBackground>
      </Stack>
    </Animated.View>
  );
}

function Circle({ width }: { width: number }) {
  const pressed = useSharedValue(false);
  const [thisWidth, setThisWidth] = React.useState(0);
  const offset = useSharedValue(0);
  const wp2 = wp(1);

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
      offset.value = withTiming(0, {
        easing: Easing.inOut(Easing.quad),
        duration: 500,
      });
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

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
    paddingBottom: hp(5),
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

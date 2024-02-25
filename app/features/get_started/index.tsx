import * as React from "react";
import Stack from "@/global/components/utils/stack";
import { hp, wp } from "@/global/utils/responsive";
import Animated, {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Slide1 from "@/features/get_started/parts/slide1";
import Slide2 from "./parts/slide2";
import Slide3 from "./parts/slide3";
import Slide4 from "./parts/slide4";
import { SCREEN_NAME } from "@/global/constants/screens";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { PermissionsAndroid } from "react-native";
type Props = {};



export default function GetStarted(props: Props) {
  const translateX = useSharedValue(0);
  const navigator = useNavigation();

  const handlePress = () => {
    translateX.value = withTiming(translateX.value - wp(100), {
      duration: 400,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });
  };

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
        <Slide2 onPress={handlePress} />
        <Slide3 onPress={handlePress} />
        <Slide4 />
      </Stack>
    </Animated.View>
  );
}

import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp } from "@/global/utils/responsive";
import * as React from "react";
import {
    GestureResponderEvent,
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

type Props = {
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export default function SettingsButton({onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
              source={ImagesConstants.button.settings
              }
              resizeMode="contain"
                style={{
                    width: hp(5),
                    height: hp(5),
                }}
      />
    </TouchableOpacity>
  );
}

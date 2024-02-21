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

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};
export default function Slide1({ onPress }: Props) {
  return (
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
            <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
              <Typography type={"h1"} style={styles.btnTitle}>
                Bắt đầu khám phá
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

import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

type Props = {
  location: string;
  isConnected: boolean;
  isNotificationOn: boolean;
};

export default function FeatureBar(props: Props) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      style={styles.container}
    >
      <Stack direction="row" alignItems="center">
        <Stack direction="row" alignItems="center" style={styles.buttonHotspot}>
          <Image
            source={ImagesConstants.icons.hotspot}
            style={styles.imageIcon}
          />
          <Stack
            direction="column"
            justifyContent="space-between"
            style={styles.containerHotspot}
          >
            <Stack direction="row" alignItems="center">
              <TouchableOpacity>
                <Image
                  source={ImagesConstants.button.btnArrowUp}
                  style={[styles.buttonDistance, styles.buttonUp]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={ImagesConstants.button.btnHelp}
                  style={[styles.buttonHelp]}
                />
              </TouchableOpacity>
            </Stack>
            <Stack direction="row" alignItems="flex-end">
              <Text style={styles.textBigger}>15</Text>
              <Text style={styles.textUnit}>km</Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <TouchableOpacity>
                <Image
                  source={ImagesConstants.button.btnArrowDown}
                  style={[styles.buttonDistance, styles.buttonDown]}
                />
              </TouchableOpacity>
            </Stack>
          </Stack>
        </Stack>

        {/*  */}
        <Stack direction="column" style={styles.connectedContainer}>
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Typography type="h4" style={styles.textTitle}>
              Trạm Cơ sở dữ liệu
            </Typography>
            <TouchableOpacity>
              <Typography type="h4" style={styles.buttonTextOpa}>
                Đổi
              </Typography>
            </TouchableOpacity>
          </Stack>
          <Typography type="h4" style={styles.textTitle}>
            THỊ TRẤN THANH BÌNH
          </Typography>
          <Typography
            type="h4"
            style={[styles.textTitlesub, styles.marginButtonText]}
          >
            Kết nối trạm giúp nhận thông tin thời tiết địa phương chính xác hơn.
          </Typography>
          <Stack
            direction="row"
            alignItems="flex-end"
            style={styles.marginButtonText}
            justifyContent="space-between"
          >
            <Typography type="h4" style={styles.buttonTextBigger}>
              Đã kết nối
            </Typography>
            <TouchableOpacity>
              <Typography type="h4" style={styles.buttonText}>
                Ngắt kết nối
              </Typography>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Stack>

      {/*  */}
      <Stack direction="row" alignItems="center" style={styles.marginGroup}>
        <TouchableOpacity>
          <Image
            source={ImagesConstants.button.btnNotiOn}
            style={styles.buttonNoti}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={ImagesConstants.button.btnFindPoint}
            style={styles.buttonFindPoint}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Stack>
    </Stack>
  );
}

const styles = StyleSheet.create({
  marginGroup: {
    marginTop: hp(2),
    marginBottom: hp(7),
  },
  buttonNoti: {
    width: wp(20),
    height: wp(20),
  },
  buttonFindPoint: {
    width: wp(70),
    height: wp(20),
  },
  marginButtonText: {
    marginTop: hp(0.3),
  },
  buttonText: {
    color: "#FFF",
    fontSize: hp(1.3),
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginLeft: wp(3),
    textDecorationLine: "underline",
    marginBottom: hp(0.3),
  },
  buttonTextOpa: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: hp(1.3),
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginLeft: wp(3),
    marginBottom: hp(0.3),
  },
  buttonTextBigger: {
    color: "#45FF90",
    fontSize: hp(2),
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginRight: wp(3),
  },
  connectedContainer: {
    width: wp(45),
    paddingLeft: wp(3),
    paddingEnd: wp(2),
  },
  container: {
    marginTop: hp(2),
  },
  textTitle: {
    color: "#FFF",
    fontSize: hp(1.7),
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textTitlesub: {
    color: "#FFF",
    fontSize: hp(1.3),
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  buttonHelp: {
    width: wp(5),
    height: wp(5),
    position: "absolute",
    left: wp(7),
    top: wp(-2),
  },
  containerHotspot: {},
  buttonDistance: {
    width: hp(4),
    height: hp(4),
  },
  buttonUp: {
    marginBottom: hp(-1.5),
  },
  buttonDown: {
    marginTop: hp(-1.3),
  },
  buttonHotspot: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingTop: hp(1),
    paddingBottom: hp(1),
    paddingLeft: wp(5),
    paddingRight: wp(5),
    borderRadius: wp(6),
    position: "relative",
  },
  textOversize: {
    fontSize: hp(5),
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: hp(-0.8),
    paddingRight: hp(0.3),
  },
  textNormal: {
    fontSize: hp(1.7),
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textBigger: {
    fontSize: hp(4),
    fontWeight: "bold",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textUnit: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: hp(0.7),
    marginStart: wp(3),
  },
  imageIcon: {
    width: wp(13),
    height: wp(13),
    marginRight: wp(2),
  },
});

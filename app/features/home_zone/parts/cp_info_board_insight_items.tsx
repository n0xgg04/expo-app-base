import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp } from "@/global/utils/responsive";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    icon: ImageSourcePropType,
    title: string,
    value: string
    unit: string,
    sizeUnit?: string
}

export default function InfoBoardItem(props: Props) { 
    return (
      <Stack direction="column" alignItems="flex-start">
        <Image
          source={props.icon}
          style={styles.imageIcon}
          resizeMode="contain"
        />
        <Typography type="h3" style={styles.textBigger}>
          {props.title}
        </Typography>
        <Stack direction="row" alignItems="flex-end">
          <Typography type="h1" style={styles.textOversize}>
            {props.value}
          </Typography>
          <Typography
            type="h3"
            style={
              (props.sizeUnit == "same_value") ? styles.textOversize : styles.textNormal
            }
          >
            {props.unit}
          </Typography>
        </Stack>
      </Stack>
    );
}

const styles = StyleSheet.create({
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
    fontSize: hp(1.7),
    color: "#C9EBFF",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  imageIcon: {
    width: hp(3),
    height: hp(3),
  },
});

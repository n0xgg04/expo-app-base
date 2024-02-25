import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

const paddingDefault = hp(2);

const Line = () => {
  return <View style={styles.line}></View>;
};

type PropsWeatherItemInfo = {
  timeInfo: string;
  icon: ImageSourcePropType;
  value: string;
};

const WeatherItemInfo = ({
  timeInfo,
  icon,
  value,
}: PropsWeatherItemInfo): React.JSX.Element => {
  return (
    <Stack direction="column" alignItems="center">
      <Text style={styles.weatherItemInfo_title}>{timeInfo}</Text>
      <Image
        source={icon}
        style={styles.weatherItemInfo_image}
        resizeMode="contain"
      />
      <Text style={styles.weatherItemInfo_value}>{value}</Text>
    </Stack>
  );
};

const WeatherItemInfoNextDay = ({
  timeInfo,
  icon,
  value,
}: PropsWeatherItemInfo): React.JSX.Element => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      style={styles.containerWeatherItemInfoNextDay}
    >
      <View
        style={styles.containnerWeatherItemInfoNextDay_image}
      >
        <Image
          source={icon}
          style={styles.weatherItemInfoNextDay_image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.weatherItemInfoNextDay_value}>{value}</Text>
      <Text style={styles.weatherItemInfoNextDay_title}>{timeInfo}</Text>
    </Stack>
  );
};

export default function DetailsInfoBoard() {
  return (
    <Stack direction="column" style={styles.container}>
      <Typography type="h3" style={styles.textGeneral}>
        Có nắng từ 15:00 - 16:00, với dự báo trời quang vào 19:00, thời tiết trở
        nên mát mẻ hơn sau 20:00.
      </Typography>

      <Line />
      <Stack direction="row" style={styles.containerWeatherDetails}>
        {(() => {
          const test = [];
          for (let i = 0; i < 6; i++)
            test.push(
              <WeatherItemInfo
                timeInfo="Hiện tại"
                icon={ImagesConstants.weatherIcon.sunny}
                value="21°"
              />
            );
          return test;
        })()}
      </Stack>
      <Stack direction="column" style={styles.containerWeatherNextDay}>
        <Text style={styles.weatherNextDay_title}>NHỮNG NGÀY KẾ TIẾP</Text>
        <Line />
        {(() => {
          const test = [];
          for (let i = 0; i < 5; i++)
            test.push(
              <WeatherItemInfoNextDay
                timeInfo="Thứ Sáu, 5 tháng Hai"
                icon={ImagesConstants.weatherIcon.sunny}
                value="21°"
              />
            );
          return test;
        })()}
        
      </Stack>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: wp(90),
    padding: hp(2),
    borderRadius: hp(3),
    marginTop: hp(2),
    borderWidth: wp(0.3),
    borderColor: "rgba(255, 255, 255, 1)",
  },
  textGeneral: {
    fontSize: hp(1.7),
    color: "rgba(255, 255, 255, 1)",
    paddingBottom: paddingDefault,
  },
  line: {
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 1,
  },
  containerWeatherDetails: {
    justifyContent: "space-between",
  },

  weatherItemInfo_title: {
    paddingTop: hp(1),
    fontSize: hp(1.5),
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
  },
  weatherItemInfo_value: {
    fontSize: hp(2.3),
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
  },
  weatherItemInfo_image: {
    width: wp(10),
  },
  containerWeatherNextDay: {
    paddingTop: paddingDefault,
  },

  weatherNextDay_title: {
    fontSize: hp(1.7),
    color: "#C9EBFF",
    fontWeight: "bold",
    paddingBottom: hp(1),
  },

  weatherItemInfoNextDay_title: {
    fontSize: hp(2),
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "bold",
  },
  weatherItemInfoNextDay_value: {
    fontSize: hp(3),
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
    marginRight: wp(5),
  },
  weatherItemInfoNextDay_image: {
    width: wp(10),
    height: wp(10),
  },
  containerWeatherItemInfoNextDay: {
    //Have radius only on the left side, background color is transparent, padding hp(4)
    marginTop: hp(2),
    borderTopLeftRadius: hp(50),
    borderBottomLeftRadius: hp(50),
    borderTopRightRadius: hp(20),
    borderBottomRightRadius: hp(20),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: hp(0.1),
    borderColor: "rgba(255, 255, 255, 1)",
  },
  containnerWeatherItemInfoNextDay_image: {
    marginRight: wp(3),
    borderRadius: hp(50),
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    paddingStart: wp(3),
    paddingEnd: wp(3),
    paddingTop: wp(3),
    paddingBottom: wp(3),
    borderWidth: hp(0.2),
  },
});

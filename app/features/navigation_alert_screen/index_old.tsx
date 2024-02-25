import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "expo-image";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import i18n from "@/localization/i18n";

const buttonHeight = hp(7);
const buttonPadding = wp(10);
const buttonFontSize = hp(2.5);

function Button({ title, style, onPress }: { title: string, style: any, onPress: () => void }) {
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
            <Typography type={"h1"} style={styles.buttonTitle}>
                {title}
            </Typography>
        </TouchableOpacity>
    );
}

function Description({ text, style }: { text: string, style: any }) {
    return (
        <Typography type={"h2"} style={[styles.description, style]}>
            {text}
        </Typography>
    );
}
export default function NavigationAlertScreen() {
    const [description] = useState(i18n.t("feature.NavigationAlertScreen.description"));

    return (
      <ImageBackground
        style={styles.imageBackground}
        source={ImagesConstants.backgrounds.features.navigation_alert_bg}
      >
        <Stack
          direction="column"
          style={styles.container}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Image
            source={ImagesConstants.icons.wave}
            style={styles.imageIcon}
          ></Image>
          <Image
            source={ImagesConstants.icons.navigation}
            style={[styles.imageIcon, styles.marginTop]}
          ></Image>
          <Typography type={"h1"} style={styles.title}>
            {i18n.t("feature.NavigationAlertScreen.distance")}
          </Typography>
          <Typography type={"h1"} style={styles.title}>
            {i18n.t("feature.NavigationAlertScreen.ahead")}
          </Typography>
          <Typography type={"h1"} style={styles.subtitle}>
            {i18n.t("feature.NavigationAlertScreen.almost_there")}
          </Typography>
          <Typography type={"h1"} style={styles.title}>
            {i18n.t("feature.NavigationAlertScreen.findGatheringPoint")}
          </Typography>
          <Typography type={"h1"} style={styles.title}>
            {i18n.t("feature.NavigationAlertScreen.emergency")}
          </Typography>
          <Description text={description} style={undefined} />
          <Typography type={"h2"} style={styles.mainTitle}>
            {i18n.t("feature.NavigationAlertScreen.understandNavigation")}
          </Typography>
          <View style={styles.flexContainer}>
            <Button
              title={i18n.t(
                "feature.NavigationAlertScreen.button.viewDescription"
              )}
              onPress={() => {}}
              style={undefined}
            />
            <Button
              title={i18n.t("feature.NavigationAlertScreen.button.start")}
              onPress={() => {}}
              style={styles.startButton}
            />
          </View>
        </Stack>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: hp(3),
    },
    buttonContainer: {
        backgroundColor: "#1A1A1A",
        height: buttonHeight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp(2),
        borderRadius: wp(10),
        borderColor: "rgba(255,255,255,0.33)",
        borderWidth: wp(0.5),
        borderStyle: "solid",
    },
    buttonTitle: {
        color: "white",
        paddingHorizontal: buttonPadding,
        fontSize: buttonFontSize,
        width: undefined,
    },
    startButton: {
        paddingHorizontal: wp(3),
        backgroundColor: "#2E2E2E",
    },
    container: {
        height: "100%",
        paddingBottom: hp(5),
    },
    title: {
        fontSize: hp(4),
        color: "white",
    },
    subtitle: {
        fontSize: hp(3),
        color: "white",
        marginBottom: hp(3),
    },
    description: {
        fontWeight: "800",
        fontSize: hp(2.5),
        color: "white",
        marginTop: hp(2.5),
        paddingHorizontal: wp(6),
        textAlign: "left",
    },
    mainTitle: {
        fontWeight: "900",
        fontSize: hp(2.5),
        color: "white",
        marginTop: hp(2),
        paddingEnd: wp(9),
        textAlign: "left",
    },
    imageBackground: {
        width: wp(100),
        height: hp(100),
    },
    imageIcon: {
        width: wp(30),
        height: hp(20),
    },
    marginTop: {
        marginTop: hp(-8),
    }
});

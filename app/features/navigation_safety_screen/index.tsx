import React, { useEffect, useRef } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Animated } from "react-native";
import { ImageBackground } from "expo-image";
import { ImagesConstants } from "@/global/constants/resources/images";
import { hp, wp } from "@/global/utils/responsive";
import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import i18n from "@/localization/i18n";

export default function NavigationSafetyScreen() {
    const blinkAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(blinkAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(blinkAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();

        return () => {
            animation.stop();
        };
    }, []);
    const renderHeading = () => (
        <Stack style={styles.headingContainer} direction="column">
            <Typography type="h2" style={styles.subtitle}>
                {i18n.t("feature.NavigationSafetyScreen.findingTo")}
            </Typography>
            <Typography type="h2" style={styles.subtitle}>
                {i18n.t("feature.NavigationSafetyScreen.meetingPoint")}
            </Typography>
            <Typography type="h1" style={styles.title}>
                {i18n.t("feature.NavigationSafetyScreen.policeStation")}
            </Typography>
            <Stack style={styles.headingBlock} direction="row" alignItems="flex-start">
                <Typography type="h1" style={styles.title2}>
                    {i18n.t("feature.NavigationSafetyScreen.city")}
                </Typography>
                <Image source={ImagesConstants.icons.while_circle} style={styles.dotIcon} />
            </Stack>
        </Stack>
    );

    const renderBlockNavigationImage = () => (
        <Stack style={styles.block} direction="row">
            
            <Animated.Image source={ImagesConstants.icons.direction} style={[styles.directionIcon, { opacity: blinkAnimation }]} />
            <Animated.Image source={ImagesConstants.icons.arrow} style={[styles.arrowIcon, { opacity: blinkAnimation }]} />
        </Stack>
    );

    const renderContent = () => (
        <Stack style={styles.contentContainer} direction="column">
            {renderHeading()}
            {renderBlockNavigationImage()}
            <Stack direction="column" style={styles.container} justifyContent="flex-end" alignItems="center">
                <Typography type="h1" style={[styles.title, styles.main]}>
                    {String(1400)}{" "}
                    <Typography type="h1" style={[styles.title, styles.main, styles.opacity]}>
                        {String(i18n.t("feature.NavigationSafetyScreen.distance"))}
                    </Typography>
                </Typography>
                <Typography type="h1" style={styles.main}>
                    <Typography type="h1" style={[styles.title, styles.main, styles.opacity]}>
                        {i18n.t("feature.NavigationSafetyScreen.beside")}
                    </Typography>{" "}
                    {i18n.t("feature.NavigationSafetyScreen.left")}
                </Typography>
            </Stack>
            <TouchableOpacity style={styles.btnContainer}>
                <Typography type="h1" style={styles.btnTitle}>
                    {i18n.t("feature.NavigationSafetyScreen.start")}
                </Typography>
            </TouchableOpacity>
        </Stack>
    );

    return (
        <ImageBackground style={styles.imageBackground} source={ImagesConstants.backgrounds.features.navigation_alert_bg}>
            {renderContent()}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        width: wp(100),
        height: hp(100),
        paddingHorizontal: wp(8),
        paddingVertical: hp(4),
        paddingBottom: hp(6),
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headingContainer: {
        flex: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    headingBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    subtitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: hp(2.5),
    },
    title: {
        marginTop: hp(1),
        color: "white",
        fontSize: hp(5),
        marginVertical: hp(-0.5),
    },
    title2: {
        color: "white",
        fontSize: hp(5),
    },
    dotIcon: {
        width: 25,
        height: 25,
        marginLeft: 7,
    },
    block: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingEnd: wp(8),
        flex: 1,
    },
    directionIcon: {
        width: 430,
        height: 430,
        marginLeft: wp(-8),
    },
    arrowIcon: {
        width: 220,
        height: 170,
        marginLeft: hp(-43),
        marginTop: hp(10),
        transform: [{ rotate: "2deg" }],
    },
    container: {
        marginTop: hp(-10),
    },
    main: {
        fontSize: hp(8),
        color: "white",
        marginVertical: hp(-0.5),
    },
    opacity: {
        opacity: 0.5,
    },
    btnContainer: {
        backgroundColor: "#1A1A1A",
        height: hp(7),
        width: wp(30),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: wp(10),
        borderColor: "rgba(255,255,255,0.33)",
        borderWidth: wp(0.5),
        borderStyle: "solid",
        alignSelf: "flex-end",
        marginTop: hp(3),
    },
    btnTitle: {
        color: "white",
        paddingHorizontal: wp(5),
        fontSize: hp(3),
        width: undefined,
        flex: 0,
    },
});

import { AntDesign, Feather } from "@expo/vector-icons";
import * as React from "react";
import {
	TextInput,
	StyleSheet,
	TextInputProps,
	ViewProps,
	Pressable,
} from "react-native";

import Stack from "@/global/components/utils/stack";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { colors } from "@/global/theme/pallete";
import { hp, wp } from "@/global/utils/responsive";

type LeftIconT = (color: string) => React.ReactElement;
type Props = {
	containerStyle?: ViewProps["style"];
	leftIcon?: LeftIconT;
	onChangeFocus?: (focus: boolean) => void;
} & TextInputProps;

const InputField = React.memo(
	React.forwardRef<TextInput, Props>(function (
		{ containerStyle, leftIcon, onChangeFocus, ...props },
		ref
	): React.JSX.Element {
		const [isFocus, setIsFocus] = React.useState(false);
		const [isSecureText, setIsSecureText] = React.useState(
			props.secureTextEntry
		);

		const handleChangeFocus = React.useCallback((focusStatus: boolean) => {
			if (onChangeFocus) onChangeFocus(focusStatus);
			setIsFocus(focusStatus);
		}, []);

		const handleChangeSecureStatus = React.useCallback(
			() => setIsSecureText((pre) => !pre),
			[]
		);

		const Icon = React.useMemo(
			() =>
				leftIcon &&
				leftIcon(
					!isFocus ? colors.colors.no_active : colors.colors.active
				),
			[isFocus]
		);

		return (
			<Stack
				direction='row'
				alignItems='center'
				style={[
					styles.inputContainer,
					containerStyle,
					isFocus && styles.onfocus,
				]}
			>
				{Icon}
				<TextInput
					autoCapitalize='none'
					onBlur={handleChangeFocus.bind(null, false)}
					onFocus={handleChangeFocus.bind(null, true)}
					{...props}
					ref={ref}
					style={[styles.input, props.style]}
					secureTextEntry={isSecureText}
				/>
				{props.secureTextEntry && (
					<Pressable onPress={handleChangeSecureStatus}>
						{isSecureText ? (
							<AntDesign
								name='eyeo'
								size={hp(2.8)}
								color='gray'
							/>
						) : (
							<Feather
								name='eye-off'
								size={hp(2.6)}
								color='gray'
							/>
						)}
					</Pressable>
				)}
			</Stack>
		);
	})
);

export default InputField;

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: colors.backgroundColor.white,
		width: "100%",
		height: hp(5.2),
		maxHeight: 50,
		borderRadius: 8,
		shadowColor: colors.border.no_active,
		borderColor: colors.border.no_active,
		borderWidth: 1,
		padding: 8,
		gap: wp(2),
		overflow: "hidden",
	},
	onfocus: {
		borderColor: colors.border.blue,
	},
	input: {
		flex: 1,
		height: "100%",
		fontSize: FontSizeConstants.md,
		fontFamily: FontFamilyConstants.ManRope.regular,
	},
});

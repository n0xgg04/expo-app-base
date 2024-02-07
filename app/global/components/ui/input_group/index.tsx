import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

import InputField from "@/global/components/ui/input_field/input";
import Stack from "@/global/components/utils/stack";
import Typography from "@/global/components/utils/typography";
import { FontFamilyConstants } from "@/global/theme/font_family";
import { FontSizeConstants } from "@/global/theme/font_size";
import { FontWeightConstants } from "@/global/theme/font_weight";
import { colors } from "@/global/theme/pallete";

type Props = {
	label: string;
	leftIcon?: (color: string) => React.ReactElement;
	type?: "text" | "password";
	autoFocus?: boolean;
};
const InputGroup = React.memo(function ({
	label,
	leftIcon,
	type = "text",
	autoFocus = false,
}: Props) {
	const [isFocus, setIsFocus] = React.useState(false);
	const onChangeFocusHandle = React.useCallback(
		(focus: boolean) => setIsFocus(focus),
		[]
	);
	const inputRef = React.createRef<TextInput>();
	return (
		<Stack
			direction='column'
			style={styles.group}
		>
			<Typography
				onPress={inputRef.current?.focus}
				style={[styles.label, isFocus && styles.labelOnFocus]}
				type='label'
			>
				{label}
			</Typography>
			<InputField
				autoFocus={autoFocus}
				ref={inputRef}
				secureTextEntry={type === "password"}
				onChangeFocus={onChangeFocusHandle}
				leftIcon={leftIcon}
			/>
		</Stack>
	);
});

export default InputGroup;

const styles = StyleSheet.create({
	group: {
		gap: 5,
	},
	label: {
		fontSize: FontSizeConstants.md,
		fontWeight: FontWeightConstants.label,
		color: colors.textColor.primaryColor,
		fontFamily: FontFamilyConstants.ManRope.semiBold,
	},
	labelOnFocus: {
		color: colors.colors.focus_label,
	},
});

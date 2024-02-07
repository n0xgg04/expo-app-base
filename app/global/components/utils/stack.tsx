import * as React from "react";
import { View, ViewProps, StyleSheet, FlexAlignType } from "react-native";

type Props = {
	direction: "row" | "column";
	justifyContent?:
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	alignItems?: FlexAlignType;
	children: React.ReactNode;
	gap?: number;
} & ViewProps;

export default function Stack({
	direction,
	justifyContent,
	alignItems,
	children,
	gap,
	...props
}: Props) {
	return (
		<View
			{...props}
			style={[
				direction === "column"
					? styles.columnContainer
					: styles.rowContainer,
				{
					justifyContent,
					alignItems,
					gap,
				},
				props.style,
			]}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	rowContainer: {
		display: "flex",
		flexDirection: "row",
	},
	columnContainer: {
		display: "flex",
		flexDirection: "column",
	},
});

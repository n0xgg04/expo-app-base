import { GradientColor } from "@/global/base/classes/gradient-color";
import React from "react";
export {};

declare global {
	type PalletteK =
		| "textColor"
		| "backgroundColor"
		| "gradientColor"
		| "border"
		| "colors";
	type PalleteDataBase = {
		primaryColor: string;
		secondaryColor: string;
	} & {
		[key: string]: string;
	};
	type PalleteDataGradient = {
		[key: string]: GradientColor;
	};
	type BasicColor = {
		[key: string]: string;
	};

	type PalletteT = {
		[K in PalletteK]: K extends "gradientColor"
			? object & PalleteDataGradient
			: K extends "border" | "colors"
				? BasicColor
				: PalleteDataBase & object;
	};

	type FontSizeT = {
		[K in
			| "sm"
			| "md"
			| "lg"
			| "xs"
			| "xl"
			| "1xl"
			| `${number}xl`]?: number;
	};

	type BorderRadiusT = {
		[K in "sm" | "md" | "lg" | "xs" | "full"]?: number;
	};

	type FontWieghtT = {
		[key: string]:
			| "normal"
			| "bold"
			| "100"
			| "200"
			| "300"
			| "400"
			| "500"
			| "600"
			| "700"
			| "800"
			| "900"
			| undefined;
	};

	type AppLanguage = "vi" | "en" | "th";
	type I18nLanguageJson = {
		[K in AppLanguage]?: object;
	};
	type InitialApplicationActionPayload = {
		appLanguage: AppLanguage;
	};
	type AppReducer = {
		appLanguage: AppLanguage;
	};
	type ApplicationScreenElement = {
		screen: (...agrs) => React.JSX.Element;
		name: string;
	};
	type BottomSheetContextType = {
		isVisible: boolean;
	};
}

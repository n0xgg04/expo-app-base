import { GradientColor } from "@/global/base/classes/gradient-color";

export const colors: PalletteT = {
	textColor: {
		primaryColor: "#303651",
		secondaryColor: "#1C2035",
		white: "#ffffff",
		gray: "#989EB3",
		blue: "#205AF0",
	},
	backgroundColor: {
		primaryColor: "#ffffff",
		secondaryColor: "#FBFCFF",
		white: "#ffffff",
		gray: "#eee",
		donateBtn: "#D6F14E",
		overlay: "rgba(0,0,0,0.35)",
	},
	gradientColor: {
		btn: new GradientColor(["#3264F5", "#3297F5"]),
	},
	border: {
		blue: "#3264F5",
		no_active: "#eeeeee",
		gray: "rgba(73,120,240,0.2)",
	},
	colors: {
		active: "#3264F5",
		focus_label: "#1a45a6",
		no_active: "gray",
		bnv_active: "#6142F5",
		bnv_inactive: "#484B63",
	},
};

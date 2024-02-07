import { colors } from "@/global/theme/pallete";

export class GradientColor {
	private readonly colors: string[];
	constructor(colors: string[]) {
		this.colors = colors;
	}

	get getColor() {
		return this.colors;
	}
}

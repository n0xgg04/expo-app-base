import { createReducer } from "@reduxjs/toolkit";

import { changeLanguage, initApplication } from "@/redux/actions";

const initialReducer: AppReducer = {
	appLanguage: "vi",
};

export const reducers = createReducer(initialReducer, (builder) => {
	builder
		.addCase(changeLanguage, (state, data) => {
			state.appLanguage = data.payload;
		})
		.addCase(initApplication, (state, data) => {
			state.appLanguage = data.payload.appLanguage;
		});
});

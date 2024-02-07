import { createAction } from "@reduxjs/toolkit";

export const changeLanguage = createAction<AppLanguage>("change_language");
export const initApplication =
	createAction<InitialApplicationActionPayload>("init_application");

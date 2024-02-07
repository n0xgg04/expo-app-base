import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "@/redux/reducers";

export const store = configureStore({
	reducer: {
		main: reducers,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

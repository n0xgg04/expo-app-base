import { createReducer } from "@reduxjs/toolkit";

import {
  changeLanguage,
  changeUserLocation,
  initApplication,
} from "@/redux/actions";
import { LocationObjectCoords } from "expo-location";

const initialReducer: AppReducer = {
  appLanguage: "vi",
  userLocation: {} as LocationObjectCoords,
};

export const reducers = createReducer(initialReducer, (builder) => {
  builder
    .addCase(changeLanguage, (state, data) => {
      state.appLanguage = data.payload;
    })
    .addCase(initApplication, (state, data) => {
      state.appLanguage = data.payload.appLanguage;
    })
    .addCase(changeUserLocation, (state, action) => {
      state.userLocation = action.payload;
    });
});

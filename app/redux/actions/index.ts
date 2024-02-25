import { createAction } from "@reduxjs/toolkit";
import { LocationObjectCoords } from "expo-location";

export const changeLanguage = createAction<AppLanguage>("change_language");
export const initApplication =
  createAction<InitialApplicationActionPayload>("init_application");

export const changeUserLocation =
  createAction<LocationObjectCoords>("change_location");

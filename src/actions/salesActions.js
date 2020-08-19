import * as types from "../types";

export const setMorningSales = (morningSales) => ({
  type: types.SET_MORNING_SALES,
  payload: morningSales,
});

export const setNightSales = (nightSales) => ({
  type: types.SET_NIGHT_SALES,
  payload: nightSales,
});

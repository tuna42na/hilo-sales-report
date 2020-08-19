import * as types from "../types";
import { combineReducers } from "redux";

const tab = (state = 0, action) => {
  switch (action.type) {
    case types.SET_TAB:
      return action.payload;
    default:
      return state;
  }
};

const initialSalesState = {
  morningSales: "",
  nightSales: "",
};

const sales = (state = initialSalesState, action) => {
  switch (action.type) {
    case types.SET_MORNING_SALES:
      return {
        ...state,
        morningSales: action.payload,
      };
    case types.SET_NIGHT_SALES:
      return {
        ...state,
        nightSales: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ tab, sales });

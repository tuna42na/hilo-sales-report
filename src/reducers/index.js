import * as types from "../types";
import { combineReducers } from "redux";

// Tab State and Actions
const tab = (state = 0, action) => {
  switch (action.type) {
    case types.SET_TAB:
      return action.payload;
    default:
      return state;
  }
};
// Sales State and Actions
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
// Drawer State and Actions
const initialDrawerState = {
  grossTips: "",
  amTips: "",
  pmTips: "",
  cashTips: "",
  totalTips: "",
  cashOwed: "",
  pettyCash: "",
  overUnder: "",
};

const drawers = (state = initialDrawerState, action) => {
  switch (action.type) {
    case types.SET_GROSS_TIPS:
      return {
        ...state,
        grossTips: action.payload,
      };
    case types.SET_AM_TIPS:
      return {
        ...state,
        amTips: action.payload,
      };
    case types.SET_PM_TIPS:
      return {
        ...state,
        pmTips: action.payload,
      };
    case types.SET_CASH_TIPS:
      return {
        ...state,
        cashTips: action.payload,
      };
    case types.SET_TOTAL_TIPS:
      return {
        ...state,
        totalTips: action.payload,
      };
    case types.SET_CASH_OWED:
      return {
        ...state,
        cashOwed: action.payload,
      };
    case types.SET_PETTY_CASH:
      return {
        ...state,
        pettyCash: action.payload,
      };
    case types.SET_OVER_UNDER:
      return {
        ...state,
        overUnder: action.payload,
      };
    default:
      return state;
  }
};

// Tip Sheet State and Actions
const initialTipSheetState = {
  employeeGroup: [],
  totalHours: 0,
};

const tipsheet = (state = initialTipSheetState, action) => {
  switch (action.type) {
    case types.SET_EMPLOYEES:
      console.log(action.payload);
      return {
        ...state,
        employeeGroup: [...action.payload],
      };
    case types.SET_TOTAL_HOURS:
      return {
        ...state,
        totalHours: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ tab, sales, drawers, tipsheet });

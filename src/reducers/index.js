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
  grossSales: "",
  morningSales: "",
  nightSales: "",
  cashSales: "",
  creditCardSales: "",
  giftCardSales: "",
  payin: "",
  payout: "",
};

const sales = (state = initialSalesState, action) => {
  switch (action.type) {
    case types.SET_GROSS_SALES:
      return {
        ...state,
        grossSales: action.payload,
      };
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
    case types.SET_CASH_SALES:
      return {
        ...state,
        cashSales: action.payload,
      };
    case types.SET_CREDIT_SALES:
      return {
        ...state,
        creditCardSales: action.payload,
      };
    case types.SET_GIFT_SALES:
      return {
        ...state,
        giftCardSales: action.payload,
      };
    case types.SET_PAYIN:
      return {
        ...state,
        payin: action.payload,
      };
    case types.SET_PAYOUT:
      return {
        ...state,
        payout: action.payload,
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
  drawCount: false,
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
    case types.SET_DRAW_COUNT:
      return {
        ...state,
        drawCount: action.payload,
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

// Notes and Actions
const notes = (state = { notes: "" }, action) => {
  switch (action.type) {
    case types.SET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ tab, sales, drawers, tipsheet, notes });

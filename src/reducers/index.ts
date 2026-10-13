import { combineReducers } from "redux";
import type { UnknownAction } from "redux";
import * as types from "../types";
import type { AppAction, RootState } from "../types";

const initialTabState: RootState["tab"] = { tab: 0, manager: "" };

const tab = (
  state = initialTabState,
  action: UnknownAction,
): RootState["tab"] => {
  const appAction = action as AppAction;
  switch (appAction.type) {
    case types.SET_TAB:
      return { ...state, tab: appAction.payload };
    case types.SET_MANAGER:
      return { ...state, manager: appAction.payload };
    default:
      return state;
  }
};

const initialSalesState: RootState["sales"] = {
  grossSales: "",
  morningSales: "",
  nightSales: "",
  cashSales: "",
  creditCardSales: "",
  giftCardSales: "",
  payin: "",
  payout: "",
};

const sales = (
  state = initialSalesState,
  action: UnknownAction,
): RootState["sales"] => {
  const appAction = action as AppAction;
  switch (appAction.type) {
    case types.SET_GROSS_SALES:
      return {
        ...state,
        grossSales: appAction.payload,
      };
    case types.SET_MORNING_SALES:
      return {
        ...state,
        morningSales: appAction.payload,
      };
    case types.SET_NIGHT_SALES:
      return {
        ...state,
        nightSales: appAction.payload,
      };
    case types.SET_CASH_SALES:
      return {
        ...state,
        cashSales: appAction.payload,
      };
    case types.SET_CREDIT_SALES:
      return {
        ...state,
        creditCardSales: appAction.payload,
      };
    case types.SET_GIFT_SALES:
      return {
        ...state,
        giftCardSales: appAction.payload,
      };
    case types.SET_PAYIN:
      return {
        ...state,
        payin: appAction.payload,
      };
    case types.SET_PAYOUT:
      return {
        ...state,
        payout: appAction.payload,
      };
    default:
      return state;
  }
};
// Drawer State and Actions
const initialDrawerState: RootState["drawers"] = {
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

const drawers = (
  state = initialDrawerState,
  action: UnknownAction,
): RootState["drawers"] => {
  const appAction = action as AppAction;
  switch (appAction.type) {
    case types.SET_GROSS_TIPS:
      return {
        ...state,
        grossTips: appAction.payload,
      };
    case types.SET_AM_TIPS:
      return {
        ...state,
        amTips: appAction.payload,
      };
    case types.SET_PM_TIPS:
      return {
        ...state,
        pmTips: appAction.payload,
      };
    case types.SET_CASH_TIPS:
      return {
        ...state,
        cashTips: appAction.payload,
      };
    case types.SET_TOTAL_TIPS:
      return {
        ...state,
        totalTips: appAction.payload,
      };
    case types.SET_CASH_OWED:
      return {
        ...state,
        cashOwed: appAction.payload,
      };
    case types.SET_PETTY_CASH:
      return {
        ...state,
        pettyCash: appAction.payload,
      };
    case types.SET_OVER_UNDER:
      return {
        ...state,
        overUnder: appAction.payload,
      };
    case types.SET_DRAW_COUNT:
      return {
        ...state,
        drawCount: appAction.payload,
      };
    default:
      return state;
  }
};

// Tip Sheet State and Actions
const initialTipSheetState: RootState["tipsheet"] = {
  employeeGroup: [],
  totalHours: 0,
};

const tipsheet = (
  state = initialTipSheetState,
  action: UnknownAction,
): RootState["tipsheet"] => {
  const appAction = action as AppAction;
  switch (appAction.type) {
    case types.SET_EMPLOYEES:
      return {
        ...state,
        employeeGroup: [...appAction.payload],
      };
    case types.SET_TOTAL_HOURS:
      return {
        ...state,
        totalHours: appAction.payload,
      };
    default:
      return state;
  }
};

// Notes and Actions
const notes = (
  state: RootState["notes"] = { notes: "" },
  action: UnknownAction,
): RootState["notes"] => {
  const appAction = action as AppAction;
  switch (appAction.type) {
    case types.SET_NOTES:
      return {
        ...state,
        notes: appAction.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ tab, sales, drawers, tipsheet, notes });

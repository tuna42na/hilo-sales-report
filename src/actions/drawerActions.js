import * as types from "../types";

export const setGrossTips = (grossTips) => ({
  type: types.SET_GROSS_TIPS,
  payload: grossTips,
});

export const setAmTips = (amTips) => ({
  type: types.SET_AM_TIPS,
  payload: amTips,
});

export const setPmTips = (pmTips) => ({
  type: types.SET_PM_TIPS,
  payload: pmTips,
});

export const setCashTips = (cashTips) => ({
  type: types.SET_CASH_TIPS,
  payload: cashTips,
});

export const setTotalTips = (totalTips) => ({
  type: types.SET_TOTAL_TIPS,
  payload: totalTips,
});

export const setCashOwed = (cashOwed) => ({
  type: types.SET_CASH_OWED,
  payload: cashOwed,
});

export const setPettyCash = (pettyCash) => ({
  type: types.SET_PETTY_CASH,
  payload: pettyCash,
});

export const setOverUnder = (overUnder) => ({
  type: types.SET_OVER_UNDER,
  payload: overUnder,
});

export const setDrawCount = (drawCount) => ({
  type: types.SET_DRAW_COUNT,
  payload: drawCount,
});

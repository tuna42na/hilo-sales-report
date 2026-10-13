import * as types from "../types";
import type { Amount } from "../types";

export const setGrossSales = (grossSales: Amount) => ({
  type: types.SET_GROSS_SALES,
  payload: grossSales,
});

export const setMorningSales = (morningSales: Amount) => ({
  type: types.SET_MORNING_SALES,
  payload: morningSales,
});

export const setNightSales = (nightSales: Amount) => ({
  type: types.SET_NIGHT_SALES,
  payload: nightSales,
});

export const setCreditCardSales = (creditCardSales: Amount) => ({
  type: types.SET_CREDIT_SALES,
  payload: creditCardSales,
});

export const setCashSales = (cashSales: Amount) => ({
  type: types.SET_CASH_SALES,
  payload: cashSales,
});

export const setGiftSales = (giftCardSales: Amount) => ({
  type: types.SET_GIFT_SALES,
  payload: giftCardSales,
});

export const setPayin = (payin: Amount) => ({
  type: types.SET_PAYIN,
  payload: payin,
});

export const setPayout = (payout: Amount) => ({
  type: types.SET_PAYOUT,
  payload: payout,
});

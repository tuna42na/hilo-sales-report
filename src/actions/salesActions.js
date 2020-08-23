import * as types from "../types";

export const setGrossSales = (grossSales) => ({
  type: types.SET_GROSS_SALES,
  payload: grossSales,
});

export const setMorningSales = (morningSales) => ({
  type: types.SET_MORNING_SALES,
  payload: morningSales,
});

export const setNightSales = (nightSales) => ({
  type: types.SET_NIGHT_SALES,
  payload: nightSales,
});

export const setCreditCardSales = (creditCardSales) => ({
  type: types.SET_CREDIT_SALES,
  payload: creditCardSales,
});

export const setCashSales = (cashSales) => ({
  type: types.SET_CASH_SALES,
  payload: cashSales,
});

export const setGiftSales = (giftCardSales) => ({
  type: types.SET_GIFT_SALES,
  payload: giftCardSales,
});

export const setPayin = (payin) => ({
  type: types.SET_PAYIN,
  payload: payin,
});

export const setPayout = (payout) => ({
  type: types.SET_PAYOUT,
  payload: payout,
});

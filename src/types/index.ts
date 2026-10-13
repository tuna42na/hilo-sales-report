export const SET_TAB = "SET_TAB" as const;
export const SET_MANAGER = "SET_MANAGER" as const;
export const SET_GROSS_SALES = "SET_GROSS_SALES" as const;
export const SET_MORNING_SALES = "SET_MORNING_SALES" as const;
export const SET_NIGHT_SALES = "SET_NIGHT_SALES" as const;
export const SET_CASH_SALES = "SET_CASH_SALES" as const;
export const SET_CREDIT_SALES = "SETCREDITS_SALES" as const;
export const SET_GIFT_SALES = "SET_GIFT_SALES" as const;
export const SET_PAYIN = "SET_PAYIN" as const;
export const SET_PAYOUT = "SET_PAYOUT" as const;
export const SET_GROSS_TIPS = "SET_GROSS_TIPS" as const;
export const SET_AM_TIPS = "SET_AM_TIPS" as const;
export const SET_PM_TIPS = "SET_PM_TIPS" as const;
export const SET_CASH_TIPS = "SET_CASH_TIPS" as const;
export const SET_TOTAL_TIPS = "SET_TOTAL_TIPS" as const;
export const SET_CASH_OWED = "SET_CASH_OWED" as const;
export const SET_PETTY_CASH = "SET_PETTY_CASH" as const;
export const SET_OVER_UNDER = "SET_OVER_UNDER" as const;
export const SET_DRAW_COUNT = "SET_DRAW_COUNT" as const;
export const SET_EMPLOYEES = "SET_EMPLOYEES" as const;
export const SET_TOTAL_HOURS = "SET_TOTAL_HOURS" as const;
export const SET_NOTES = "SET_NOTES" as const;

export type Amount = string | number;

export interface Employee {
  index: number;
  name: string;
  hours: number;
}

export interface RootState {
  tab: { tab: number; manager: string };
  sales: {
    grossSales: Amount;
    morningSales: Amount;
    nightSales: Amount;
    cashSales: Amount;
    creditCardSales: Amount;
    giftCardSales: Amount;
    payin: Amount;
    payout: Amount;
  };
  drawers: {
    grossTips: Amount;
    amTips: Amount;
    pmTips: Amount;
    cashTips: Amount;
    totalTips: Amount;
    cashOwed: Amount;
    pettyCash: Amount;
    overUnder: Amount;
    drawCount: boolean;
  };
  tipsheet: { employeeGroup: Employee[]; totalHours: number };
  notes: { notes: string };
}

export type AppAction =
  | { type: typeof SET_TAB; payload: number }
  | { type: typeof SET_MANAGER; payload: string }
  | { type: typeof SET_GROSS_SALES; payload: Amount }
  | { type: typeof SET_MORNING_SALES; payload: Amount }
  | { type: typeof SET_NIGHT_SALES; payload: Amount }
  | { type: typeof SET_CASH_SALES; payload: Amount }
  | { type: typeof SET_CREDIT_SALES; payload: Amount }
  | { type: typeof SET_GIFT_SALES; payload: Amount }
  | { type: typeof SET_PAYIN; payload: Amount }
  | { type: typeof SET_PAYOUT; payload: Amount }
  | { type: typeof SET_GROSS_TIPS; payload: Amount }
  | { type: typeof SET_AM_TIPS; payload: Amount }
  | { type: typeof SET_PM_TIPS; payload: Amount }
  | { type: typeof SET_CASH_TIPS; payload: Amount }
  | { type: typeof SET_TOTAL_TIPS; payload: Amount }
  | { type: typeof SET_CASH_OWED; payload: Amount }
  | { type: typeof SET_PETTY_CASH; payload: Amount }
  | { type: typeof SET_OVER_UNDER; payload: Amount }
  | { type: typeof SET_DRAW_COUNT; payload: boolean }
  | { type: typeof SET_EMPLOYEES; payload: Employee[] }
  | { type: typeof SET_TOTAL_HOURS; payload: number }
  | { type: typeof SET_NOTES; payload: string };

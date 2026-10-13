import * as types from "../types";
import type { Employee } from "../types";

export const setEmployees = (employees: Employee[]) => ({
  type: types.SET_EMPLOYEES,
  payload: employees,
});

export const setTotalHours = (totalHours: number) => ({
  type: types.SET_TOTAL_HOURS,
  payload: totalHours,
});

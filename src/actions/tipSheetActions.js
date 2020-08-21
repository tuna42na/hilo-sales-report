import * as types from "../types";

export const setEmployees = (idNum) => ({
  type: types.SET_EMPLOYEES,
  payload: idNum,
});

export const setTotalHours = (totalHours) => ({
  type: types.SET_TOTAL_HOURS,
  payload: totalHours,
});

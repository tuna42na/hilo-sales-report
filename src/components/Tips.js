import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Tips = () => {
  const { totalTips } = useSelector((state) => state.drawers);
  const { totalHours } = useSelector((state) => state.tipsheet);

  return (
    <>
      <h4>Total Tips</h4>
      <EmployeeList />
      <AddEmployee />
      <h5>Total Hrs: {totalHours}</h5>
      <h5> Total Tips: {totalTips} </h5>
      <h5>Average $ per Hr: {(totalTips / totalHours).toFixed(2)} </h5>
    </>
  );
};

Tips.propTypes = {
  totalTips: PropTypes.number,
  totalHours: PropTypes.number,
  employeeGroup: PropTypes.array,
};
export default Tips;

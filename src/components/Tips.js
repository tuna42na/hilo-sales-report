import React, { useState } from "react";
import PropTypes from "prop-types";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Tips = (props) => {
  const [employeeGroup, setEmployeeGroup] = useState([]);
  const [totalHours, setTotalHours] = useState(0);

  const addEmployee = (name, hours) => {
    let employeePlus = employeeGroup;
    employeePlus.push({
      index: employeePlus.length + 1,
      name: name,
      hours: hours,
    });
    let newHours = totalHours + parseInt(hours);
    setEmployeeGroup(employeePlus);
    setTotalHours(newHours);
  };

  const removeEmployees = (index) => {
    let minusHours = totalHours - employeeGroup[index].hours;
    setTotalHours(minusHours);
    // Change array
    let employeeLess = employeeGroup;
    employeeLess.splice(index, 1);
    setEmployeeGroup(employeeLess);
  };

  return (
    <>
      <h4>Total Tips</h4>
      <EmployeeList employees={employeeGroup} removeWorker={removeEmployees} />
      <AddEmployee addEmployee={addEmployee} />
      <h5>Total Hrs: {totalHours}</h5>
      <h5>Average $ per Hr: {(props.nightTips / totalHours).toFixed(2)} </h5>
    </>
  );
};

Tips.propTypes = {
  nightTips: PropTypes.number,
  totalHours: PropTypes.number,
  employeeGroup: PropTypes.array,
};
export default Tips;

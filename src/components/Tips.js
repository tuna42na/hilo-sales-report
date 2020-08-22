import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Header, Container } from "semantic-ui-react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Tips = () => {
  const { totalTips } = useSelector((state) => state.drawers);
  const { totalHours } = useSelector((state) => state.tipsheet);

  return (
    <>
      <Container textAlign="center">
        <Header as="h4">Total Tips</Header>
        <EmployeeList />
        <AddEmployee />
        <Header as="h5">Total Hrs: {totalHours}</Header>
        <Header as="h5"> Total Tips: {totalTips} </Header>
        <Header as="h5">
          Average $ per Hr: {(totalTips / totalHours).toFixed(2)}{" "}
        </Header>
      </Container>
    </>
  );
};

Tips.propTypes = {
  totalTips: PropTypes.number,
  totalHours: PropTypes.number,
  employeeGroup: PropTypes.array,
};
export default Tips;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees, setTotalHours } from "../actions/tipSheetActions";
import { Container, Icon } from "semantic-ui-react";
import { ListGroup, ListGroupItem } from "reactstrap";

const EmployeeList = () => {
  const { employeeGroup, totalHours } = useSelector((state) => state.tipsheet);
  const { totalTips } = useSelector((state) => state.drawers);
  const dispatch = useDispatch();

  const removeEmployee = (i) => {
    let minusHours = totalHours - employeeGroup[i].hours;
    dispatch(setTotalHours(minusHours));
    let employeeLess = employeeGroup;
    employeeLess.splice(i, 1);
    dispatch(setEmployees(employeeLess));
  };

  return (
    <Container text>
      <ListGroup>
        {employeeGroup.map((employee, i) => (
          <ListGroupItem key={i}>
            <Icon
              name="window close outline"
              key={i}
              type="button"
              onClick={() => removeEmployee(i)}
            />
            <strong>Name: </strong> {employee.name}
            <br />
            <strong> Employee Hours: </strong>
            {employee.hours}
            <br />
            <strong> Tips Owed: </strong>$
            {((employee.hours * totalTips) / totalHours).toFixed(2)}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};
export default EmployeeList;

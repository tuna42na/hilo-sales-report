import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees, setTotalHours } from "../actions/tipSheetActions";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

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
    <Container>
      <Row className="container">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <ListGroup>
            {employeeGroup.map((employee, i) => (
              <ListGroupItem key={i}>
                <strong>Name: </strong> {employee.name}
                <br />
                <strong> Employee Hours: </strong>
                {employee.hours}
                <br />
                <strong> Tips Owed: </strong>$
                {((employee.hours * totalTips) / totalHours).toFixed(2)}
                <Button
                  key={i}
                  type="button"
                  className="close"
                  onClick={() => removeEmployee(i)}>
                  &times;
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default EmployeeList;

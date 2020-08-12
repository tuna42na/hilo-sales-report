import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const EmployeeList = (props) => {
  const onClickClose = (i) => {
    props.removeWorker(i);
  };

  return (
    <Container>
      <Row className="container">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <ListGroup>
            {props.employees.map((employee, i) => (
              <ListGroupItem key={i}>
                <strong>Name: </strong> {employee.name}
                <br />
                <strong> Employee Hours: </strong>
                {employee.hours}
                <Button
                  key={i}
                  type="button"
                  className="close"
                  onClick={() => onClickClose(i)}>
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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Button,
  Container,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// import { Button } from "material-kit-react";
import { setEmployees, setTotalHours } from "../actions/tipSheetActions";

const defaultState = {
  index: "",
  name: "",
  hours: "",
};

const AddEmployee = () => {
  const { totalHours, employeeGroup } = useSelector((state) => state.tipsheet);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState([]);

  const addPerson = () => {
    let employeePlus = employeeGroup;
    console.log(employeePlus);
    employeePlus.push({
      index: employeePlus.length,
      name: edit.name,
      hours: edit.hours,
    });
    let newHours = totalHours + parseInt(edit.hours);
    dispatch(setEmployees(employeePlus));
    dispatch(setTotalHours(newHours));
    setEdit(defaultState);
  };

  const onHandleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  return (
    <div>
      <Row>
        <Container>
          <Col md={{ size: 6, offset: 3 }}>
            <Form>
              <InputGroup>
                <InputGroupAddon addonType="prepend" />
                <InputGroupText>Employee Name: </InputGroupText>
                <Input
                  type="text"
                  name="name"
                  value={edit.name}
                  placeholder="Lemmy"
                  onChange={onHandleChange}
                />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="prepend" />
                <InputGroupText>Hours: </InputGroupText>
                <Input
                  type="number"
                  name="hours"
                  value={edit.hours}
                  placeholder="5"
                  onChange={onHandleChange}
                />
              </InputGroup>

              <Button type="button" color="success" onClick={addPerson}>
                Add
              </Button>
            </Form>
          </Col>
        </Container>
      </Row>
    </div>
  );
};

export default AddEmployee;

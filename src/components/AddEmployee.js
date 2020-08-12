import React, { useState } from "react";
import {
  Row,
  Container,
  Col,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const defaultState = {
  name: "",
  hours: "",
};

const AddEmployee = ({ addEmployee }) => {
  const [edit, setEdit] = useState(defaultState);

  const addPerson = () => {
    addEmployee(edit.name, edit.hours);

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

              <Button
                style={{ padding: "0 20px" }}
                outline
                type="reset"
                color="success"
                onClick={addPerson}>
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

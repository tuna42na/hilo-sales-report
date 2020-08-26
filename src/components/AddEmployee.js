import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Input, Grid, Segment } from "semantic-ui-react";
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
    <>
      <Container textAlign="center" text>
        <Segment.Group>
          <Segment>
            <Grid columns="2" stackable>
              <Grid.Column>
                <Input
                  type="text"
                  name="name"
                  label="Employee Name: "
                  value={edit.name}
                  placeholder="Lemmy"
                  onChange={onHandleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  type="number"
                  label="Hours :"
                  name="hours"
                  value={edit.hours}
                  placeholder="5"
                  onChange={onHandleChange}
                />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Button type="button" color="teal" onClick={addPerson}>
              Add
            </Button>
          </Segment>
        </Segment.Group>
      </Container>
    </>
  );
};

export default AddEmployee;

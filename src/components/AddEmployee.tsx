import { useState } from "react";
import type { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { Button, Container, Input, Grid, Segment } from "semantic-ui-react";
import { setEmployees, setTotalHours } from "../actions/tipSheetActions";

interface EmployeeForm {
  name: string;
  hours: string;
}

const defaultState: EmployeeForm = { name: "", hours: "" };

const AddEmployee = () => {
  const { totalHours, employeeGroup } = useAppSelector(
    (state) => state.tipsheet,
  );
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<EmployeeForm>(defaultState);

  const addPerson = () => {
    const employeePlus = [
      ...employeeGroup,
      {
        index: employeeGroup.length,
        name: edit.name,
        hours: Number(edit.hours),
      },
    ];
    const newHours = totalHours + Number(edit.hours);
    dispatch(setEmployees(employeePlus));
    dispatch(setTotalHours(newHours));
    setEdit(defaultState);
  };

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

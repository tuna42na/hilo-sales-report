import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../actions/notesActions";
import {
  Container,
  Button,
  Form,
  TextArea,
  Segment,
  Header,
} from "semantic-ui-react";

const Notes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  return (
    <Container text>
      <Header as="h2"> Notes </Header>
      <Segment.Group>
        <Segment>
          <Form>
            <TextArea
              value={notes}
              placeholder="LOL, what happened tonight?!"
              onChange={(e) => dispatch(setNotes(e.target.value))}
            />
          </Form>
        </Segment>
        <Segment>
          <Button> Finish Report </Button>
        </Segment>
      </Segment.Group>
    </Container>
  );
};

export default Notes;

import { useAppDispatch, useAppSelector } from "../store";
import { setNotes } from "../actions/notesActions";
import { Container, Form, TextArea, Segment, Header } from "semantic-ui-react";

const Notes = () => {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector((state) => state.notes);

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
      </Segment.Group>
    </Container>
  );
};

export default Notes;

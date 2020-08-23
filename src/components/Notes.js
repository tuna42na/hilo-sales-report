import React from "react";
import {
  Container,
  Button,
  Form,
  TextArea,
  Segment,
  Header,
} from "semantic-ui-react";

const Notes = () => {
  return (
    <Container text>
      <Header as="h2"> Notes </Header>
      <Segment.Group>
        <Segment>
          <Form>
            <TextArea placeholder="LOL, what happened tonight?!" />
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

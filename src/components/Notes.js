import React from "react";
import { Container, Button, Form, TextArea } from "semantic-ui-react";

const Notes = () => {
  return (
    <Container>
      <Form>
        <TextArea placeholder="LOL, what happened tonight?!" />
      </Form>
      <Button> Finish Report </Button>
    </Container>
  );
};

export default Notes;

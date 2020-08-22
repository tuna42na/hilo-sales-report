import React from "react";
import { Button, Container, Icon } from "semantic-ui-react";

const NextPrev = () => {
  return (
    <Container>
      <Button>
        <Icon name="left arrow" />
        Previous
      </Button>
      <Button>
        Next
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};

export default NextPrev;

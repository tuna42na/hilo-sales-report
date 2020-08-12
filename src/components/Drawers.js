import React from "react";
import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Button,
} from "reactstrap";

const Drawers = () => {
  return (
    <Container>
      <ListGroup>
        <ListGroupItem>
          <h4> CC Tip Adjustment: </h4>
          <Row>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Gross Tips : $</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
            </Col>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>AM Tips : $</InputGroupText>
                  <Input />
                </InputGroupAddon>
              </InputGroup>
            </Col>

            <Col md="auto">Pm Tips Owed $:</Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <h4>Cash: </h4>
          <Row>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Cash Owed : $</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
            </Col>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Petty Cash Balance : $</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <ButtonGroup>
                <Button color="success">Over</Button>
                <Button color="success">Under</Button>
                <Input />
              </ButtonGroup>
            </Col>
            <Col md="auto">
              <Input addon type="checkbox" />
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};
export default Drawers;

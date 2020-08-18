import React, { useState } from "react";
import PropTypes from "prop-types";
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

const defaultState = {
  grossTips: 0,
  amTips: 0,
  pmTips: 0,
  cashOwed: 0,
  overUnderAmount: 0,
};

const Drawers = () => {
  const [edit, setEdit] = useState(defaultState);

  const onHandleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const saveValues = () => {
    setEdit({
      ...edit,
      pmTips: edit.grossTips - edit.amTips,
    });
  };

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
                <Input
                  name="grossTips"
                  value={edit.grossTips}
                  placeholder="0"
                  onChange={onHandleChange}
                />
              </InputGroup>
            </Col>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>AM Tips : $</InputGroupText>
                  <Input
                    name="amTips"
                    value={edit.amTips}
                    placeholder="0"
                    onChange={onHandleChange}
                  />
                </InputGroupAddon>
              </InputGroup>
            </Col>

            <Col md="auto">Pm Tips Owed $: {edit.pmTips}</Col>
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
                <Input
                  name="cashOwed"
                  value={edit.cashOwed}
                  placeholder="0"
                  onChange={onHandleChange}
                />
              </InputGroup>
            </Col>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Petty Cash Balance : $</InputGroupText>
                </InputGroupAddon>
                <Input
                  name="pettyCash"
                  value={edit.pettyCash}
                  placeholder="0"
                  onChange={onHandleChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <ButtonGroup>
                <Button color="success">Over</Button>
                <Button color="success">Under</Button>
                <Input name="overUnderAmount" />
              </ButtonGroup>
            </Col>
            <Col md="auto">
              <Input addon type="checkbox" /> <div> $150?</div>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
      <Button onClick={saveValues}> Save </Button>
    </Container>
  );
};
Drawers.propTypes = {
  grossTips: PropTypes.number,
  amTips: PropTypes.number,
  cashOwed: PropTypes.number,
  pettyCash: PropTypes.number,
  overUnderAmount: PropTypes.number,
};

export default Drawers;

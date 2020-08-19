import React from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  setGrossTips,
  setAmTips,
  setPmTips,
  setCashTips,
  setTotalTips,
  setCashOwed,
  setPettyCash,
  setOverUnder,
} from "../actions/drawerActions";

const Drawers = () => {
  const dispatch = useDispatch();
  const {
    grossTips,
    amTips,
    cashTips,
    pmTips,
    cashOwed,
    pettyCash,
    overUnder,
  } = useSelector((state) => state.drawers);

  const calculateAllTips = () => {
    let nightTips = parseInt(grossTips - amTips);
    let totalTips = nightTips + parseInt(cashTips);
    dispatch(setPmTips(nightTips));
    dispatch(setTotalTips(totalTips));
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
                  value={grossTips}
                  onChange={(e) => dispatch(setGrossTips(e.target.value))}
                />
              </InputGroup>
            </Col>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>AM Tips : $</InputGroupText>
                  <Input
                    value={amTips}
                    onChange={(e) => dispatch(setAmTips(e.target.value))}
                  />
                </InputGroupAddon>
              </InputGroup>
            </Col>

            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Cash Tips : $</InputGroupText>
                  <Input
                    value={cashTips}
                    onChange={(e) => dispatch(setCashTips(e.target.value))}
                  />
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md="auto">Pm Tips Owed $: {pmTips} </Col>
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
                  value={cashOwed}
                  onChange={(e) => dispatch(setCashOwed(e.target.value))}
                />
              </InputGroup>
            </Col>
            <Col md="auto">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Petty Cash Balance : $</InputGroupText>
                </InputGroupAddon>
                <Input
                  value={pettyCash}
                  onChange={(e) => dispatch(setPettyCash(e.target.value))}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <ButtonGroup>
                <Button color="success">Over</Button>
                <Button color="success">Under</Button>
                <Input
                  value={overUnder}
                  onChange={(e) => dispatch(setOverUnder(e.target.value))}
                />
              </ButtonGroup>
            </Col>
            <Col md="auto">
              <Input addon type="checkbox" /> <div> $150?</div>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
      <Button onClick={calculateAllTips}> Save </Button>
    </Container>
  );
};
Drawers.propTypes = {
  grossTips: PropTypes.number,
  amTips: PropTypes.number,
  pmTips: PropTypes.number,
  cashOwed: PropTypes.number,
  pettyCash: PropTypes.number,
  overUnder: PropTypes.number,
  cashTips: PropTypes.number,
};

export default Drawers;

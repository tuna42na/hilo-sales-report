import React from "react";
import { Row, Col, Input, Container, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setMorningSales, setNightSales } from "../actions/salesActions";

const NightSales = () => {
  const dispatch = useDispatch();
  const { morningSales, nightSales } = useSelector((state) => state.sales);

  return (
    <Container>
      <Row>
        <Col>
          <h4>Daily Sales</h4>
          <Row>
            <Col>
              {" "}
              All Day Sales:{" "}
              <Input
                onChange={(e) => dispatch(setMorningSales(e.target.value))}
                value={morningSales}
              />
              - Morning Sales:
              <Input
                onChange={(e) => dispatch(setNightSales(e.target.value))}
                value={nightSales}
              />{" "}
              = Night Sales:{" "}
            </Col>
          </Row>
        </Col>
      </Row>
      <Button outline color="success">
        Next Tab
      </Button>
    </Container>
  );
};
export default NightSales;

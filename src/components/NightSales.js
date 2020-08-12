import React from "react";
import { Row, Col, Input, Container, Button } from "reactstrap";

const NightSales = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4>Daily Sales</h4>
          <Row>
            <Col>
              {" "}
              All Day Sales: <Input /> - Morning Sales:
              <Input /> = Night Sales:{" "}
            </Col>
          </Row>
          {/* <div><Col> All Day Tips:<Input />- Morning Tips:<Input /> = Night Tips </Col></div> */}
        </Col>
      </Row>
      <Button outline color="success">
        Next Tab
      </Button>
    </Container>
  );
};
export default NightSales;

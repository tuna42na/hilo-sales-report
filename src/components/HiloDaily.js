import React, { useState } from "react";
import { Jumbotron, Container, Input } from "reactstrap";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../actions/tabActions";
import NightSales from "./NightSales";
import Tips from "./Tips";
import Drawers from "./Drawers";
import Notes from "./Notes";
import NextPrev from "./NextPrev";

let currentDay = new Date();
let day = currentDay.getDate();
if (day < 10) {
  day = "0" + day;
}
let month = currentDay.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
let year = currentDay.getFullYear();

export const HiloDaily = () => {
  const [nightTips, setNightTips] = useState(100);
  const dispatch = useDispatch();
  const handleTabClick = (tab) => {
    console.log("[hilodaily] handleTabClick", tab);
    dispatch(setTab(tab));
  };
  const tab = useSelector((state) => state.tab);
  console.log("tab", tab);

  return (
    <div>
      <Jumbotron>
        <h1> HiLo Daily Sales Report </h1>
        <Container>
          <Row>
            <Col
              sm="12"
              md={{ size: 1, offset: 3 }}
              lg={{ size: 1, offset: 3 }}>
              <Input placeholder=" Name " />
            </Col>
          </Row>
          <Row>
            <Col>
              Date: {month}/{day}/{year}
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container className="viewbox">
        <Tab.Container
          id="left-tabs-example"
          activeKey={tab}
          onSelect={handleTabClick}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="0">Sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="1">Drawers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Night Tips</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Notes</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="0">
                  <NightSales />
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                  <Drawers />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <Tips nightTips={nightTips} />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <Notes />
                </Tab.Pane>
              </Tab.Content>
              <NextPrev />
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

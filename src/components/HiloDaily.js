import React from "react";
import { Jumbotron } from "reactstrap";
import { Header, Input, Container } from "semantic-ui-react";
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
        <Header as="h1" size="huge">
          {" "}
          HiLo Daily Sales Report{" "}
        </Header>
        <Container>
          <Row>
            <Col>
              <Input placeholder=" Manager on Duty " />
            </Col>
            <Col>
              <Header as="h4">
                Date:{month}/{day}/{year}
              </Header>
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
                  <Tips />
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

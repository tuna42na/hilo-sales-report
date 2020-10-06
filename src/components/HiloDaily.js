import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import { Header, Input, Container, Segment, Tab } from "semantic-ui-react";
import { Row, Col, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../actions/tabActions";
import axios from "axios";
import hiloLogo from "../hilologo.png";
import tunalogo from "../tunalogo.svg";
import NightSales from "./NightSales";
import Tips from "./Tips";
import Drawers from "./Drawers";
import Notes from "./Notes";
import NextPrev from "./NextPrev";
import Final from "./Final";

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
    dispatch(setTab(tab));
  };
  const tab = useSelector((state) => state.tab);
  const [quote, setQuote] = useState([]);
  const quoteId = parseInt(Math.floor(Math.random() * quote.length));

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://type.fit/api/quotes");
      setQuote(result.data);
    };
    fetchData();
  }, []);

  let thisQuote = quote[quoteId];

  const panes = [
    {
      menuItem: "Night Sales",
      render: () => (
        <Tab.Pane>
          <NightSales />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Drawers",
      render: () => (
        <Tab.Pane>
          <Drawers />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Tips",
      render: () => (
        <Tab.Pane>
          <Tips />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Notes",
      render: () => (
        <Tab.Pane>
          <Notes />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div>
      <Jumbotron className="hiloHeader">
        <img className="hiloLogo" src={hiloLogo} alt="Hilo's Logo" />
        <Header as="h1" size="huge">
          Daily Sales Report{" "}
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

      <Container>
        <Tab
          menu={{ fluid: true, vertical: true }}
          menuPosition="left"
          activeIndex={tab}
          onTabChange={handleTabClick}
          panes={panes}
        />
        <NextPrev />
        <Segment>
          <img src={tunalogo} className="App-logo" alt="logo" />
          <span>
            {thisQuote ? (
              <>
                <blockquote className="tunaQuote">
                  <strong>"</strong> ""
                  <p>
                    <em>{thisQuote.text}</em>
                  </p>
                  "<h4>- {thisQuote.author}</h4>
                  <strong>"</strong>
                </blockquote>
                <h3>
                  "- <em>Tuna Fortuna</em>
                </h3>
              </>
            ) : (
              <p>"Loading..."</p>
            )}
          </span>
        </Segment>
      </Container>
    </div>
  );
};

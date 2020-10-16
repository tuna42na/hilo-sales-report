import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import { Header, Input, Container, Segment, Tab } from "semantic-ui-react";
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

  const handleTabClick = (e, { activeIndex }) => {
    dispatch(setTab(activeIndex));
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
    {
      render: () => (
        <Tab.Pane>
          <Final />
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
          <Input placeholder=" Manager on Duty " />

          <Header as="h4">
            Date:{month}/{day}/{year}
          </Header>
        </Container>
      </Jumbotron>

      <Container>
        <Segment>
          <Tab
            menu={{ secondary: true, pointing: true }}
            menuPosition="right"
            panes={panes}
            activeIndex={tab}
            onTabChange={handleTabClick}
          />
          <NextPrev />
        </Segment>
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
                  " -
                  {thisQuote.author ? (
                    <h4>{thisQuote.author}</h4>
                  ) : (
                    <h4>Unknown</h4>
                  )}
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

export default HiloDaily;
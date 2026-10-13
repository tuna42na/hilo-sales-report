import { useCallback, useEffect, useState } from "react";
import { Header, Input, Container, Segment, Tab } from "semantic-ui-react";
import type { TabProps } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../store";
import { setManager, setTab } from "../actions/tabActions";
import axios from "axios";
import hiloLogo from "../hilologo.png";
import tunalogo from "../tunalogo.svg";
import NightSales from "./NightSales";
import Tips from "./Tips";
import Drawers from "./Drawers";
import Notes from "./Notes";
import NextPrev from "./NextPrev";

// Current Date
const currentDay = new Date();
const day = String(currentDay.getDate()).padStart(2, "0");
const month = String(currentDay.getMonth() + 1).padStart(2, "0");
const year = currentDay.getFullYear();

interface Quote {
  text: string;
  author: string | null;
}

const selectQuote = (quotes: Quote[]): Quote | null =>
  quotes[Math.floor(Math.random() * quotes.length)] ?? null;

export const HiloDaily = () => {
  const dispatch = useAppDispatch();

  const handleTabClick: NonNullable<TabProps["onTabChange"]> = (
    _event,
    { activeIndex },
  ) => {
    if (typeof activeIndex === "number") dispatch(setTab(activeIndex));
  };
  const { tab, manager } = useAppSelector((state) => state.tab);

  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = useCallback(async () => {
    const result = await axios.get<Quote[]>("https://type.fit/api/quotes");
    return result.data;
  }, []);

  useEffect(() => {
    let active = true;
    void fetchQuote()
      .then((quotes) => {
        if (active) setQuote(selectQuote(quotes));
      })
      .catch(() => {
        if (active) setQuote(null);
      });
    return () => {
      active = false;
    };
  }, [fetchQuote]);

  const thisQuote = quote;

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
      <div className="jumbotron hiloHeader">
        <img className="hiloLogo" src={hiloLogo} alt="Hilo's Logo" />
        <Header as="h1" size="huge">
          Daily Sales Report{" "}
        </Header>
        <Container>
          <Input
            placeholder=" Manager on Duty "
            value={manager}
            onChange={(e) => dispatch(setManager(e.target.value))}
          />

          <Header as="h4">
            Date:{month}/{day}/{year}
          </Header>
        </Container>
      </div>

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

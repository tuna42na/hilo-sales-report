import React from "react";
import { Button, Container, Icon } from "semantic-ui-react";
import { setTab } from "../actions/tabActions";
import { setNightSales } from "../actions/salesActions";
import { useSelector, useDispatch } from "react-redux";

const NextPrev = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tab);
  const { grossSales, morningSales } = useSelector((state) => state.sales);

  const addNight = () => {
    let calcNight = parseInt(grossSales - morningSales);
    dispatch(setNightSales(calcNight));
  };

  const previous = () => {
    if (tab > 0) {
      let prevTab = tab - 1;
      dispatch(setTab(prevTab));
    }
  };
  const next = () => {
    console.log(tab);
    switch (tab) {
      case 0:
        dispatch(setTab(1));
        addNight();
        break;
      case 1:
        dispatch(setTab(2));
        break;
      case 2:
        dispatch(setTab(3));
        break;
      case 3:
        dispatch(setTab(4));
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <Button color="teal" id="prevTab" onClick={previous}>
        <Icon name="left arrow" />
        Previous
      </Button>
      <Button color="teal" id="nextTab" onClick={next}>
        Next
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};

export default NextPrev;

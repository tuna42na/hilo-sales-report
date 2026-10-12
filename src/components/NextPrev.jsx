import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Icon } from "semantic-ui-react";
import { setTab } from "../actions/tabActions";
import { setNightSales } from "../actions/salesActions";
import { setPmTips, setTotalTips } from "../actions/drawerActions";
import { useSelector, useDispatch } from "react-redux";

const NextPrev = () => {
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.tab);
  const { grossSales, morningSales } = useSelector((state) => state.sales);
  const { grossTips, amTips, cashTips } = useSelector((state) => state.drawers);

  const addNight = () => {
    let calcNight = parseInt(grossSales - morningSales);
    dispatch(setNightSales(calcNight));
  };

  const calculateAllTips = () => {
    let nightTips = parseInt(grossTips - amTips);
    let totalTips = nightTips + parseInt(cashTips);
    dispatch(setPmTips(nightTips));
    dispatch(setTotalTips(totalTips));
  };

  const previous = () => {
    if (tab > 0) {
      let prevTab = tab - 1;
      dispatch(setTab(prevTab));
    }
  };
  const next = () => {
    switch (tab) {
      case 0:
        addNight();
        dispatch(setTab(1));
        break;
      case 1:
        calculateAllTips();
        dispatch(setTab(2));
        break;
      case 2:
        dispatch(setTab(3));
        break;
      default:
        return;
    }
  };

  return (
    <>
      {tab === 3 ? (
        <Container>
          {" "}
          <Link to="/final">
            <Button color="teal">
              Final Report
              <Icon name="right arrow" />
            </Button>
          </Link>{" "}
        </Container>
      ) : (
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
      )}
    </>
  );
};

export default NextPrev;

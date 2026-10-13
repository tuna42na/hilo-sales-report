import { Link } from "react-router-dom";
import { Button, Container, Icon } from "semantic-ui-react";
import { setTab } from "../actions/tabActions";
import { setNightSales } from "../actions/salesActions";
import { setPmTips, setTotalTips } from "../actions/drawerActions";
import { useAppDispatch, useAppSelector } from "../store";

const NextPrev = () => {
  const dispatch = useAppDispatch();
  const { tab } = useAppSelector((state) => state.tab);
  const { grossSales, morningSales } = useAppSelector((state) => state.sales);
  const { grossTips, amTips, cashTips } = useAppSelector(
    (state) => state.drawers,
  );

  const addNight = () => {
    const calcNight = Math.trunc(Number(grossSales) - Number(morningSales));
    dispatch(setNightSales(calcNight));
  };

  const calculateAllTips = () => {
    const nightTips = Math.trunc(Number(grossTips) - Number(amTips));
    const totalTips = nightTips + Math.trunc(Number(cashTips));
    dispatch(setPmTips(nightTips));
    dispatch(setTotalTips(totalTips));
  };

  const previous = () => {
    if (tab > 0) {
      const prevTab = tab - 1;
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
              <Icon name="arrow right" />
            </Button>
          </Link>{" "}
        </Container>
      ) : (
        <Container>
          <Button color="teal" id="prevTab" onClick={previous}>
            <Icon name="arrow left" />
            Previous
          </Button>
          <Button color="teal" id="nextTab" onClick={next}>
            Next
            <Icon name="arrow right" />
          </Button>
        </Container>
      )}
    </>
  );
};

export default NextPrev;

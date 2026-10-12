import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Dropdown,
  Input,
  Header,
  Segment,
  Grid,
  Radio,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setGrossTips,
  setAmTips,
  setPmTips,
  setCashTips,
  setTotalTips,
  setCashOwed,
  setPettyCash,
  setOverUnder,
  setDrawCount,
} from "../actions/drawerActions";

const Drawers = () => {
  const dispatch = useDispatch();
  const {
    grossTips,
    amTips,
    cashTips,
    pmTips,
    cashOwed,
    pettyCash,
    overUnder,
    drawCount,
  } = useSelector((state) => state.drawers);

  const calculateAllTips = () => {
    let nightTips = parseInt(grossTips - amTips);
    let totalTips = nightTips + parseInt(cashTips);
    dispatch(setPmTips(nightTips));
    dispatch(setTotalTips(totalTips));
  };

  const options = [
    { key: "1", text: "over", value: "over" },
    { key: "2", text: "under", value: "under" },
  ];

  const drawToggle = (e, data) => {
    switch (data.value) {
      case "over":
        dispatch(setOverUnder(Math.abs(overUnder)));
        console.log(overUnder);
        break;
      case "under":
        dispatch(setOverUnder(-Math.abs(overUnder)));
        console.log(overUnder);
        break;
      default:
        return;
    }
  };

  return (
    <Container text>
      <Header as="h2"> Drawers </Header>
      <Segment>
        <Header as="h4"> CC Tip Adjustment </Header>
        <Grid columns="2" double stackable>
          <Grid.Column>
            <Input
              label="Gross Tips"
              type="number"
              placeholder="$"
              value={grossTips}
              onChange={(e) => dispatch(setGrossTips(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="AM Tips"
              type="number"
              placeholder="$"
              value={amTips}
              onChange={(e) => dispatch(setAmTips(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Cash Tips"
              type="number"
              placeholder="$"
              value={cashTips}
              onChange={(e) => dispatch(setCashTips(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="PM Tips"
              type="number"
              placeholder="$"
              value={pmTips}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Header as="h4">Cash</Header>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Cash Owed"
              type="number"
              placeholder="$"
              value={cashOwed}
              onChange={(e) => dispatch(setCashOwed(e.target.value))}
              onInput={calculateAllTips}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Petty Cash"
              type="number"
              placeholder="$"
              value={pettyCash}
              onChange={(e) => dispatch(setPettyCash(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label={
                <Dropdown
                  options={options}
                  defaultValue="over"
                  onChange={drawToggle}
                />
              }
              labelPosition="right"
              placeholder="$ Over/Under Amount"
              type="number"
              value={overUnder}
              onChange={(e) => dispatch(setOverUnder(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Radio
              label={
                drawCount
                  ? "Drawers are at $150!!!"
                  : "Did you count the drawers..."
              }
              toggle
              onChange={(e, data) => dispatch(setDrawCount(data.checked))}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};
Drawers.propTypes = {
  grossTips: PropTypes.number,
  amTips: PropTypes.number,
  pmTips: PropTypes.number,
  cashOwed: PropTypes.number,
  pettyCash: PropTypes.number,
  overUnder: PropTypes.number,
  cashTips: PropTypes.number,
  drawCount: PropTypes.bool,
};

export default Drawers;

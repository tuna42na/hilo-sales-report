import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Input,
  Button,
  Header,
  Segment,
  Grid,
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
  } = useSelector((state) => state.drawers);

  const calculateAllTips = () => {
    let nightTips = parseInt(grossTips - amTips);
    let totalTips = nightTips + parseInt(cashTips);
    dispatch(setPmTips(nightTips));
    dispatch(setTotalTips(totalTips));
  };

  return (
    <Container text>
      <Header as="h2"> Drawers </Header>
      <Segment>
        <Header as="h4"> CC Tip Adjustment: </Header>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Gross Tips : "
              value={grossTips}
              onChange={(e) => dispatch(setGrossTips(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="AM Tips: $"
              value={amTips}
              onChange={(e) => dispatch(setAmTips(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Cash Tips : $"
              value={cashTips}
              onChange={(e) => dispatch(setCashTips(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <div>Pm Tips Owed $: {pmTips} </div>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Header as="h4">Cash: </Header>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Cash Owed : $"
              value={cashOwed}
              onChange={(e) => dispatch(setCashOwed(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Petty Cash : $"
              value={pettyCash}
              onChange={(e) => dispatch(setPettyCash(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Button color="success">Over</Button>
            <Button color="success">Under</Button>
            <Input
              value={overUnder}
              onChange={(e) => dispatch(setOverUnder(e.target.value))}
            />
          </Grid.Column>
          <Grid.Column>
            <Input label="Drawers are $150?!" addon type="checkbox" />
          </Grid.Column>
        </Grid>
      </Segment>
      <Button onClick={calculateAllTips}> Save </Button>
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
};

export default Drawers;

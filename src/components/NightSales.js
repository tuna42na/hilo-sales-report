import React from "react";
import {
  Container,
  Header,
  Input,
  Button,
  Grid,
  Segment,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setGrossSales,
  setMorningSales,
  setNightSales,
  setCashSales,
  setCreditCardSales,
  setGiftSales,
  setPayin,
  setPayout,
} from "../actions/salesActions";

const NightSales = () => {
  const dispatch = useDispatch();
  const {
    grossSales,
    morningSales,
    nightSales,
    creditCardSales,
    cashSales,
    giftCardSales,
    payin,
    payout,
  } = useSelector((state) => state.sales);

  const addNight = () => {
    let calcNight = parseInt(grossSales - morningSales);
    dispatch(setNightSales(calcNight));
  };

  return (
    <Container text>
      <Header as="h2">Daily Sales</Header>

      <Segment>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Gross Sales"
              onChange={(e) => dispatch(setGrossSales(e.target.value))}
              value={grossSales}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Morning Sales"
              onChange={(e) => dispatch(setMorningSales(e.target.value))}
              value={morningSales}
            />
          </Grid.Column>
          <Grid.Column>
            <Input label="Night Sales" value={nightSales} />
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Cash Sales"
              onChange={(e) => dispatch(setCashSales(e.target.value))}
              value={cashSales}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Credit Sales"
              onChange={(e) => dispatch(setCreditCardSales(e.target.value))}
              value={creditCardSales}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Gift Card Sales"
              onChange={(e) => dispatch(setGiftSales(e.target.value))}
              value={giftCardSales}
            />
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Pay Ins"
              onChange={(e) => dispatch(setPayin(e.target.value))}
              value={payin}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Pay Outs"
              onChange={(e) => dispatch(setPayout(e.target.value))}
              value={payout}
            />
          </Grid.Column>
        </Grid>
      </Segment>

      <Button color="teal" onClick={addNight}>
        Save
      </Button>
    </Container>
  );
};
export default NightSales;

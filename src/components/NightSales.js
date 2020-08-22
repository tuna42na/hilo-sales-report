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
import { setMorningSales, setNightSales } from "../actions/salesActions";

const NightSales = () => {
  const dispatch = useDispatch();
  const { morningSales, nightSales } = useSelector((state) => state.sales);

  return (
    <Container text>
      <Header as="h2">Daily Sales</Header>

      <Segment>
        <Grid columns="2" stackable>
          <Grid.Column>
            <Input
              label="Gross Sales"
              onChange={(e) => dispatch(setMorningSales(e.target.value))}
              value={morningSales}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              label="Morning Sales"
              onChange={(e) => dispatch(setNightSales(e.target.value))}
              value={nightSales}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Header as="h4">= Night Sales: </Header>
      </Segment>
      <Button outline color="success">
        Save
      </Button>
    </Container>
  );
};
export default NightSales;

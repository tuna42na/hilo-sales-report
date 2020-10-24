import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  SegmentGroup,
  Table,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

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

const Final = () => {
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
  const { manager } = useSelector((state) => state.tab);
  const { totalHours, employeeGroup } = useSelector((state) => state.tipsheet);
  const { notes } = useSelector((state) => state.notes);

  const print = () => {
    var hide = document.getElementById("printButton");
    hide.style.visibility = "hidden";
    window.print();
    hide.style.visibility = "visible";
  };

  return (
    <>
      <div className="finalReport">
        <Container className="finalReport" text>
          <Header as="h2">Manager :{manager}</Header>
          <Header as="h2">
            Date:{month}/{day}/{year}
          </Header>

          <Segment.Group>
            <Segment>
              <Table>
                <Table.Header>
                  <Table.HeaderCell>Sales Overview</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Gross Sales :</Table.Cell>
                    <Table.Cell>{grossSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell> Night Sale :</Table.Cell>
                    <Table.Cell>{nightSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Morning Sales :</Table.Cell>
                    <Table.Cell>{morningSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cash Payments :</Table.Cell>
                    <Table.Cell>{cashSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Credit Sales :</Table.Cell>
                    <Table.Cell>{creditCardSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Gift Card Sales :</Table.Cell>
                    <Table.Cell>{giftCardSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Payins :</Table.Cell>
                    <Table.Cell>{payin}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Payout :</Table.Cell>
                    <Table.Cell>{payout}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>

            <Segment>
              <Table>
                <Table.Header>
                  <Table.HeaderCell>Drawers Overview</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Cash Owed :</Table.Cell>
                    <Table.Cell>{cashOwed}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Petty Cash :</Table.Cell>
                    <Table.Cell>{pettyCash}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Over/Under Amount :</Table.Cell>
                    <Table.Cell>{overUnder}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Drawers are at $150 : :</Table.Cell>
                    <Table.Cell>{drawCount ? "true" : "false"}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
            <Segment>
              <Table>
                <Table.Header>
                  <Table.HeaderCell>Tip Breakdown</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Total Tips : {grossTips}</Table.Cell>
                    <Table.Cell>Total Hours : {totalHours}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cash Tips : {cashTips}</Table.Cell>
                    <Table.Cell>Night Tips : {pmTips}</Table.Cell>
                    <Table.Cell>Morning Tips : {amTips}</Table.Cell>
                  </Table.Row>
                  {employeeGroup.map((employee, i) => (
                    <Table.Row>
                      <Table.Cell>Name : {employee.name}</Table.Cell>
                      <Table.Cell>Hours : {employee.hours}</Table.Cell>
                      <Table.Cell>
                        Tips : $
                        {Math.floor(
                          ((grossTips * employee.hours) / totalHours).toFixed(2)
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
            <Segment>
              <Header>Notes</Header>
              <Segment>{notes}</Segment>
            </Segment>
          </Segment.Group>
          <SegmentGroup id="printButton">
            <Segment>
              <Link to="/">
                <Button>
                  <Icon name="left arrow" />
                  Go Back
                </Button>
              </Link>
              <Button variant="ghost" onClick={print}>
                Print Page
              </Button>
            </Segment>
          </SegmentGroup>
        </Container>
      </div>
    </>
  );
};
export default Final;

import React from "react";
import { useSelector } from "react-redux";
import { Container, Segment, Header, Table } from "semantic-ui-react";

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
  } = useSelector((state) => state.drawers);
  const { totalHours, employeeGroup } = useSelector((state) => state.tipsheet);
  const { notes } = useSelector((state) => state.notes);

  return (
    <>
      <div class="finalReport">
        <Container classNames="finalReport" text>
          <Header as="h2">Manager:</Header>

          <Segment.Group>
            <Segment>
              <Table>
                <Table.Header>
                  <Table.HeaderCell>Sales Overview</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Gross Sales</Table.Cell>
                    <Table.Cell>{grossSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell> Night Sale</Table.Cell>
                    <Table.Cell>{nightSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Morning Sales</Table.Cell>
                    <Table.Cell>{morningSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cash Payments</Table.Cell>
                    <Table.Cell>{cashSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Credit Sales </Table.Cell>
                    <Table.Cell>{creditCardSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Gift Card Sales</Table.Cell>
                    <Table.Cell>{giftCardSales}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Payins</Table.Cell>
                    <Table.Cell>{payin}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Payout</Table.Cell>
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
                    <Table.Cell>Cash Owed</Table.Cell>
                    <Table.Cell>{cashOwed}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Petty Cash</Table.Cell>
                    <Table.Cell>{pettyCash}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Over/Under Amount</Table.Cell>
                    <Table.Cell>{overUnder}</Table.Cell>
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
                    <Table.Cell>Total Tips: {grossTips}</Table.Cell>
                    <Table.Cell>Total Hours: {totalHours}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cash Tips: {cashTips}</Table.Cell>
                    <Table.Cell>Night Tips: {pmTips}</Table.Cell>
                    <Table.Cell>Morning Tips: {amTips}</Table.Cell>
                  </Table.Row>
                  {employeeGroup.map((employee, i) => (
                    <Table.Row>
                      <Table.Cell>Name: {employee.name}</Table.Cell>
                      <Table.Cell>Hours: {employee.hours}</Table.Cell>
                      <Table.Cell>
                        Tips: $
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
        </Container>
      </div>
    </>
  );
};
export default Final;

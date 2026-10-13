import { Header, Container } from "semantic-ui-react";
import { useAppSelector } from "../store";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Tips = () => {
  const { totalTips } = useAppSelector((state) => state.drawers);
  const { totalHours } = useAppSelector((state) => state.tipsheet);

  return (
    <Container textAlign="center">
      <Header as="h2"> Tips </Header>
      <EmployeeList />
      <AddEmployee />
      <Header as="h5">Total Hrs: {totalHours}</Header>
      <Header as="h5"> Total Tips: {totalTips} </Header>
      <Header as="h5">
        Average $ per Hr:{" "}
        {totalHours ? (Number(totalTips) / totalHours).toFixed(2) : "0.00"}{" "}
      </Header>
    </Container>
  );
};
export default Tips;

import { useAppDispatch, useAppSelector } from "../store";
import { setEmployees, setTotalHours } from "../actions/tipSheetActions";
import { Container, Icon } from "semantic-ui-react";

const EmployeeList = () => {
  const { employeeGroup, totalHours } = useAppSelector((state) => state.tipsheet);
  const { totalTips } = useAppSelector((state) => state.drawers);
  const dispatch = useAppDispatch();

  const removeEmployee = (i: number) => {
    const minusHours = totalHours - employeeGroup[i].hours;
    dispatch(setTotalHours(minusHours));
    const employeeLess = employeeGroup.filter((_, idx) => idx !== i);
    dispatch(setEmployees(employeeLess));
  };

  return (
    <Container text>
      <ul className="list-group">
        {employeeGroup.map((employee, i) => (
          <li className="list-group-item" key={i}>
            <Icon
              name="window close outline"
              type="button"
              onClick={() => removeEmployee(i)}
            />
            <strong>Name: </strong> {employee.name}
            <br />
            <strong> Employee Hours: </strong>
            {employee.hours}
            <br />
            <strong> Tips Owed: </strong>$
            {totalHours
              ? Math.floor((employee.hours * Number(totalTips)) / totalHours)
              : 0}
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default EmployeeList;

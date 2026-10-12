import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees, setTotalHours } from "../actions/tipSheetActions";
import { Container, Icon } from "semantic-ui-react";

const EmployeeList = () => {
  const { employeeGroup, totalHours } = useSelector((state) => state.tipsheet);
  const { totalTips } = useSelector((state) => state.drawers);
  const dispatch = useDispatch();

  const removeEmployee = (i) => {
    let minusHours = totalHours - employeeGroup[i].hours;
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
              key={i}
              type="button"
              onClick={() => removeEmployee(i)}
            />
            <strong>Name: </strong> {employee.name}
            <br />
            <strong> Employee Hours: </strong>
            {employee.hours}
            <br />
            <strong> Tips Owed: </strong>$
            {Math.floor(((employee.hours * totalTips) / totalHours).toFixed(2))}
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default EmployeeList;

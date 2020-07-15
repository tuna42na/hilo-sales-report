import React from 'react';
import { Row, Col, Container, ListGroup, ListGroupItem, Input, InputGroup, InputGroupAddon, InputGroupText, Button, Form } from 'reactstrap';


var employeeGroup = [];
employeeGroup.push({index:1, name: "Lemmy", hours: 0, tips: 0});
employeeGroup.push({index:2, name: "Lemmie", hours: 2, tips: 0});
employeeGroup.push({index:3, name: "Lammy", hours: 3, tips: 0});

class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employeeGroup: this.props.employees
        }
    }
    render(){
        var employees = employeeGroup.map(( employee ) => {
        return(
            <div id="container">
                <ListGroupItem key={employee.index}><strong>Name: </strong> {employee.name} 
                <br/><strong> Employee Hours: </strong>{employee.hours}</ListGroupItem>
            </div>
            );
        });

        return(
            <Container>
                <Row className="container">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ListGroup> {employees} </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

class AddEmployee extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            hours:''
        }
    }
    
    addPerson(){
        this.props.addEmployee(this.state.name, this.state.hours);
    }
    
    onHandleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div>
            <br/>
                <Row>
                    <Container>
                        <Col md={{size:6, offset:3}}>
                        <Form onSubmit={this.onSubmit}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend"/>
                                        <InputGroupText>Employee Name:</InputGroupText>
                                    <Input type="text" 
                                        name="name"
                                        value={this.state.name} 
                                        placeholder="Lemmy"
                                        onChange={(event) => this.onHandleChange(event)}
                                        />
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend"/>
                                        <InputGroupText>Hours: </InputGroupText>
                                    <Input type="number" 
                                        name="hours"
                                        value={this.state.hours} 
                                        placeholder="5"
                                        onChange={(event)=> this.onHandleChange(event)}
                                        />
                                </InputGroup>
                                <br/>
                                <Button outline type="submit" color="success" onClick={this.addPerson.bind(this)}> Add </Button>
                            </Form>
                        </Col>
                    </Container>
                </Row>
            </div>
            
        )
    }
}


export class Tips extends React.Component{
    constructor(props){
        super(props);
        this.addEmployee = this.addEmployee.bind(this);
        this.state = {
            employeeGroup: employeeGroup
        }
    }
    addEmployee(name, hours){
        employeeGroup.unshift({
            index: employeeGroup.length+1,
            name: name.newWorkerName,
            hours: hours.newWorkerHours,
            tips: 0
        });
        this.setState({employeeGroup: this.state.employeeGroup});
    }

    render(){
        return(
        <div><h4>Total Tips</h4>
        <EmployeeList employees={this.state.employeeGroup}/>
        <AddEmployee addEmployee={this.addEmployee} />
        <h5> Total Hrs: </h5>
        <h5> $ per Hr:  </h5></div>);

        }
    }


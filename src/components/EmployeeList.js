import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap';

 export class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employeeGroup: this.props.employees

        }
    }
    onClickClose(i){
        var index = parseInt(this.i);
        this.props.removeWorker(i);
    }

    render(){
        return(
            <Container>
                <Row className="container">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ListGroup> 
                        {this.state.employeeGroup.map(( employee , i) => 
                            <ListGroupItem key={i} >
                                <strong>Name: </strong> {employee.name} 
                                <br/>
                                <strong> Employee Hours: </strong>{employee.hours} 
                                <Button 
                                    key={i} 
                                    type="button" 
                                    className="close" 
                                    onClick={() =>this.onClickClose(i)}>
                                    &times;
                                </Button>
                            </ListGroupItem>)}
                         </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}
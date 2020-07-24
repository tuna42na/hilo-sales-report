import React from 'react';
import {Row, Container, Col, Form, Input, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

export class AddEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            hours:''
        }
    }
    
    addPerson(){
        this.props.addEmployee(this.state.name, this.state.hours);
        this.props.hours(this.state.hours);
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
                        <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend"/>
                                        <InputGroupText>Employee Name: </InputGroupText>
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
                                <Button outline type="reset" color="success" onClick={this.addPerson.bind(this)}> Add </Button>
                            </Form>
                        </Col>
                    </Container>
                </Row>
            </div>
            
        )
    }
}
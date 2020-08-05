import React from 'react';
import { Row, Col, Input, Container, Button } from 'reactstrap';

let nightTips = 0;

export class NightSales extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nightTips: nightTips,
        }
    }

    render(){
        return(
            <Container>
                <Col>
                    <h4>Daily Sales</h4>
                    <br/>
                    <div><Col> All Day Sales: <Input /> - Morning Sales:<Input /> = Night Sales: </Col></div>
                    <br/>
                    <div><Col> All Day Tips:<Input />- Morning Tips:<Input /> = Night Tips </Col></div>
                </Col>
                <Button outline color="success"> Next Tab </Button>
            </Container>
        );
    }
}
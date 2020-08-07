import React from 'react';
import { Jumbotron, Container, Input } from 'reactstrap';
import { Tab, Row, Col, Nav} from 'react-bootstrap';
import { NightSales } from './NightSales';
import { Tips } from './Tips';
import { Drawers } from './Drawers';

let currentDay = new Date();
let day = currentDay.getDate();
    if( day < 10 ){
        day = "0" + day;
    }
let month = currentDay.getMonth()+1;
    if(month < 10){
        month = "0" + month;
    }
let year = currentDay.getFullYear();

let nightTips = 100;

export class HiloDaily extends React.Component {
    constructor(){
        super()
        this.state = {
            nightTips:nightTips
        }
    }

    

    render(){ 
        return (<div>
            <Jumbotron><h1> HiLo Daily Sales Report </h1>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 1, offset: 3 }} lg={{ size:1, offset: 3}} >
                        <Input placeholder=" Name "/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Date: {month}/{day}/{year}
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
           
            <Container className="viewbox">
                <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Sales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Drawers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Night Tips</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <NightSales />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Drawers />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Tips nightTips={nightTips}/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </Container>
            </div>);
    }
}

 
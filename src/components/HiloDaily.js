import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Tab, Row, Col, Nav} from 'react-bootstrap';
import { NightSales } from './NightSales';
import { Tips } from './Tips';


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
            <Jumbotron><h1> HiLo Daily Sales Report </h1></Jumbotron>

            <Container className="viewbox">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Sales</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Night Tips</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <NightSales />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
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

 
import React from 'react';
import { Jumbotron, Container, Nav, NavItem, NavLink, } from 'reactstrap';
import { NightSales } from './NightSales';
import { Tips } from './Tips';
import classnames from 'classnames';


export class HiloDaily extends React.Component {

    

    render(){ 
        return (<div>
                <Jumbotron><h1> HiLo Daily Sales Report </h1></Jumbotron>
                <Container>               
                    <NightSales />
                    <Tips />
                </Container>
                <br/>
                <Container>
                    <Nav>
                        <NavItem>
                            <NavLink>
                                Daily Sales
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Drawers
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Tips
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>

                {/* <Row>
                    <Nav>
                        <NavItem>
                            <NavLink><h1>Daily Sales</h1></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><h1>Drawers Sales</h1></NavLink>
                        </NavItem>
                    </Nav>
                </Row> */}
            
            </div>);
    }
}

 
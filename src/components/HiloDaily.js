import React from 'react';
import {render} from 'react-dom';
import { NightSales } from './NightSales';

export class HiloDaily extends React.Component {
    render(){ 
        return (<div>
                <h1> HiLo Daily Sales Report </h1>
                <NightSales/>
            </div>);
    }
}

 
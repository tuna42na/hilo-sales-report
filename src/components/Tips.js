import React from 'react';
import {EmployeeList} from './EmployeeList';
import {AddEmployee} from './AddEmployee';

let totalHours = 0;
var employeeGroup = [];
employeeGroup.push({index:0, name: "Lemmy", hours: 0, tips: 0});


export class Tips extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employeeGroup: employeeGroup,
            nightTips: this.props.nightTips,
            totalHours: totalHours
        }
    }

    addEmployee = (name, hours) => {
        let employeePlus = this.state.employeeGroup;
        employeePlus.push({
            index: employeePlus.length+1,
            name: name,
            hours: hours,
            tips: 0
        });
        this.setState({employeeGroup: employeePlus});
        
    }

    removeEmployees = index =>{
        let employeeLess = this.state.employeeGroup;
        employeeLess.splice(index , 1);
        this.setState({ employeeGroup:employeeLess });
    }
    
    updateHours = hours =>{
        let newHours = this.state.totalHours + parseInt(hours);
        this.setState({ totalHours: newHours });
    }

    render(){
        return(
        <div><h4>Total Tips</h4>
        <EmployeeList employees={this.state.employeeGroup} removeWorker={this.removeEmployees.bind(this)}/>
        <AddEmployee addEmployee={this.addEmployee.bind(this)} hours={this.updateHours} /><br/>
        <h5>Total Hrs: {this.state.totalHours}</h5>
        <h5>Average $ per Hr: </h5></div>);
        }
    }


import React from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';
import { Component } from 'react';
import axios from 'axios';

var tableData=[];
var id = 0;


class StatusTables extends Component {

        state = {
            tableData: []
        }

        createTable = () =>{
        let table = []
        var d = new Date();
        var n = d.getTime()/1000;
        console.log("data is he==re");
        console.log(this.state.tableData)
        for(let i = 0; i < this.state.tableData.length; i++){
            let children = []
            let children2 = []
            var newDate = new Date(this.state.tableData[i]["TimeStamp"]);
            var newDateSeconds = newDate.getTime()/1000;
            var difference = n-newDateSeconds;
            var time = "";
            if(difference<60){
                time = parseInt(difference).toString();
                time = time.concat(" sec ago");
            }
            else if(difference<3600){
                time = parseInt(difference/60).toString();
                time = time.concat(" min ago");
            }
            else if(difference<86400){
                time = parseInt(difference/3600).toString();
                time = time.concat(" hr ago");
            }
            else if(difference<2592000){
                time = parseInt(difference/86400).toString();
                time = time.concat(" day ago");
            }
            else if(difference<31536000){
                time = parseInt(difference/2592000).toString();
                time = time.concat(" month ago");
            }
            else{
                time = parseInt(difference/31536000).toString();
                time = time.concat(" year ago");
            }
            if(this.state.tableData[i])
            {
                    children.push(<td>
                        <div className = "bigDiv">
                            <div className = "bigDiv1">
                                {`${this.state.tableData[i]["Problem"]}`}
                            </div>
                            <div>
                                <span className = "userName">{`${this.state.tableData[i]["Status"]}`}</span>
                                <span className = "timeStamp">{`${time}`}</span>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </td>)
            }
        table.push(<tr id = "tr1">{children}</tr>)
        }
        return table
    }
    constructor(props) {
        super(props);
        this.setState({gotData:false});
    }

    componentWillMount() {
        axios.post('http://localhost:4000/Status/get',{"Email":localStorage.getItem("userEmail")})
            .then(res => {
                console.log(res.data);
                this.setState({tableData:res.data});
                console.log("Session : ", res.data.session);
                //this.props.addSession(res.data.session);
                console.log("Tryng to redirect");
                this.setState({gotData:true})
            });
    }

    render() {
        return (
            <center>
                <div className = "withtable">
                    <h3 id = "h21">My Complaints</h3>
                    <table bordered responsive striped border hover class className = "newTable">{this.createTable()}</table>
                </div>
            </center>
        );
    }

}

export default StatusTables;

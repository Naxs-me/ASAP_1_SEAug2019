import React from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';
import { Component } from 'react';
import axios from 'axios';
import Popup from './popup';
import { Button } from 'react-bootstrap';
var tableData = [];
var id = 0;


class Tables extends Component {





    getLocation() {
        if (navigator.geolocation) {
            console.log('correct!!');
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log('error!!');
        }
    }
    showPosition(position) {
        console.log("hiiiii");
        console.log(position.coords.latitude);
        //this.setState({userLat: position.coords.latitude});
        this.state.userLat = position.coords.latitude;
        console.log(this.state.userLat);
        //this.setState({userLong: position.coords.longitude});
        this.state.userLong = position.coords.longitude;
        console.log(this.state.userLong);
    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    createTable = () => {
        let table = []
        console.log("data is he==re");
        console.log(this.state.tableData)
        var dist = "";
        var d = new Date();
        var n = d.getTime() / 1000;
        console.log(n)
        for (let i = 0; i < this.state.pageTable.length; i++) {
            let children = []
            let children2 = []
            var newDate = new Date(this.state.pageTable[i]["TimeStamp"]);
            var newDateSeconds = newDate.getTime() / 1000;
            var difference = n - newDateSeconds;
            var time = "";
            if (difference < 60) {
                time = parseInt(difference / 1).toString();
                time = time.concat(" sec ago");
            }
            else if (difference < 3600) {
                time = parseInt(difference / 60).toString();
                time = time.concat(" min ago");
            }
            else if (difference < 86400) {
                time = parseInt(difference / 3600).toString();
                time = time.concat(" hr ago");
            }
            else if (difference < 2592000) {
                time = parseInt(difference / 86400).toString();
                time = time.concat(" day ago");
            }
            else if (difference < 31536000) {
                time = parseInt(difference / 2592000).toString();
                time = time.concat(" month ago");
            }
            else {
                time = parseInt(difference / 31536000).toString();
                time = time.concat(" year ago");
            }

            if (this.state.distance[i] < 1) {
                dist = parseInt(this.state.distance[i] * 1000).toString();
                dist += " m";
            }
            else {
                dist = parseInt(this.state.distance[i]).toString();
                dist += " km";
            }
            console.log("time")
            console.log(time);
            if (this.state.pageTable[i]) {
                children.push(<td>
                    <div className="bigDiv">
                        <div className="bigDiv1">
                            <span className="userName">{`${this.state.pageTable[i]["Name"]}`}</span>
                            <span className="timeStamp">{`${time}`}</span>
                        </div>
                        <div>
                            <span className="problem">{`${dist}`}</span>
                        </div>
                        <div>
                            <span className="problem">{`${this.state.pageTable[i]["Problem"]}`}</span>

                        </div>
                        <div className = "table_button">
                            <Button variant="outline-light" type="submit" id="chb" onClick={this.togglePopup.bind(this,this.state.pageTable[i])}> More Details</Button>

                            {this.state.showPopup ?
                                <Popup
                                    text='Click "Close Button" to hide popup'
                                    closePopup={this.togglePopup.bind(this,this.state.pageTable[i])}
                                />
                                : null
                            }
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </td>)
            }
            table.push(<tr id="tr1">{children}</tr>)
        }
        return table
    }
    togglePopup(problem) {
        this.setState({
            showPopup: !this.state.showPopup

        });
        console.log("test");
        console.log(problem);
        localStorage.setItem("Problem",JSON.stringify(problem));
        console.log("test2");
        console.log(JSON.parse(localStorage.getItem("Problem")));
    }
    constructor(props) {
        super(props);
        this.showPosition = this.showPosition.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getDistanceFromLatLonInKm = this.getDistanceFromLatLonInKm.bind(this);
        this.togglePopup = this.togglePopup.bind(this)
        this.deg2rad = this.deg2rad.bind(this);
        this.setState({ gotData: false });
        this.state = {
            tableData: [],
            pageTable: [],
            distance: [],
            userLat: 0,
            userLong: 0,
            showPopup: false
        }
    }

    componentWillMount() {
        this.getLocation();
        axios.post('http://localhost:4000/get')
            .then(res => {
                console.log(res.data);
                this.setState({ tableData: res.data });
                var visited = [];
                for (var i = 0; i < this.state.tableData.length; i++) {
                    visited.push(0);
                }
                for (var i = 0; i < this.state.tableData.length; i++) {
                    var dist = this.getDistanceFromLatLonInKm(this.state.tableData[i]["Latitude"], this.state.tableData[i]["Longitude"], this.state.userLat, this.state.userLong);
                    if (dist < 0.1) {
                        this.state.pageTable.push(this.state.tableData[i]);
                        visited[i] = 1;
                        this.state.distance.push(dist);
                    }
                }

                for (var i = 0; i < this.state.tableData.length; i++) {
                    var dist = this.getDistanceFromLatLonInKm(this.state.tableData[i]["Latitude"], this.state.tableData[i]["Longitude"], this.state.userLat, this.state.userLong);
                    if (visited[i] == 0 && dist < 1) {
                        this.state.pageTable.push(this.state.tableData[i]);
                        visited[i] = 1;
                        this.state.distance.push(dist);
                    }
                }
                for (var i = 0; i < this.state.tableData.length; i++) {
                    var dist = this.getDistanceFromLatLonInKm(this.state.tableData[i]["Latitude"], this.state.tableData[i]["Longitude"], this.state.userLat, this.state.userLong);
                    if (visited[i] == 0 && dist < 10) {
                        this.state.pageTable.push(this.state.tableData[i]);
                        visited[i] = 1;
                        this.state.distance.push(dist);
                    }
                }
                for (var i = 0; i < this.state.tableData.length; i++) {
                    var dist = this.getDistanceFromLatLonInKm(this.state.tableData[i]["Latitude"], this.state.tableData[i]["Longitude"], this.state.userLat, this.state.userLong);
                    if (visited[i] == 0 && dist < 100) {
                        this.state.pageTable.push(this.state.tableData[i]);
                        visited[i] = 1;
                        this.state.distance.push(dist);
                    }
                }
                for (var i = 0; i < this.state.tableData.length; i++) {
                    var dist = this.getDistanceFromLatLonInKm(this.state.tableData[i]["Latitude"], this.state.tableData[i]["Longitude"], this.state.userLat, this.state.userLong);
                    if (visited[i] == 0) {
                        this.state.pageTable.push(this.state.tableData[i]);
                        visited[i] = 1;
                        this.state.distance.push(dist);
                    }
                }
                console.log("page table");
                console.log(this.state.pageTable);
                console.log("distance");
                console.log(this.state.distance);
                console.log("Session : ", res.data.session);
                //this.props.addSession(res.data.session);
                console.log("Tryng to redirect");
                this.setState({ gotData: true })
            });
    }

    render() {
        return (
            <center>
                <div className="withtable">
                    <h3 id="h21">Public Complaints</h3>
                    <table bordered responsive striped border hover class className="newTable">{this.createTable()}</table>
                </div>
            </center>
        );
    }

}

export default Tables;

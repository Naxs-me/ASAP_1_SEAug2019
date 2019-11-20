import React from 'react';
import '../App.css';
import Navigation from './Navigation_Bar';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import StatusTable from './Status_table';
import Footer from './Footer'
function Status_table() {
    if(localStorage.getItem("userEmail"))
        return (
            <center>
                <Navigation></Navigation>
                <div id = "keepcenter"></div>
                <StatusTable></StatusTable>
                <Footer></Footer>
            </center>
        )
    else
        return <Redirect to = '/Login' />
}
export default Status_table
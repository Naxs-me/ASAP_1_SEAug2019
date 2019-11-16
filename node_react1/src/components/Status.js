import React from 'react';
import '../App.css';
import Navigation from './Navigation_Bar';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import Footer from './Footer'
function Status_table() {
    if(localStorage.getItem("userData"))
        return (
            <center>
                <Navigation></Navigation>
                <div className = "shift"></div>
                <div className="withtable">
                    <Table bordered responsive striped border hover class>
                        <thead>
                            <th> Sr.no.</th>
                            <th>Your Complaints</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Patchwork needed on M.G. Road</td>
                                <td>Resolved</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Viresh needs to be baby-sitted</td>
                                <td>Work in Progress</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Your kid did not complete his homework</td>
                                <td>Rejected</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Someone stole your dog</td>
                                <td>Waiting for approval</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>There might be a surprise test tomorrow</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>This is the last complaint</td>
                                <td>Resolved</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Footer></Footer>
            </center>
        )
    else
        return <Redirect to = '/Login' />
}
export default Status_table
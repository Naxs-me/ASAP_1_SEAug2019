import React from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';
import NavigationBar from './Navigation_Bar';
import Footer from './Footer';
function Contact() {
    return (
        <div>
            <NavigationBar></NavigationBar>
        <center>
            <div   className="start">
                <div><h2>Contact Us</h2></div>
                <Table bordereless responsive hover className="Contact_table">
                    <td >
                        <br />Ashutosh Rajput
                        <br />cs17b007@iittp.ac.in
                        <br />7972964109
                    </td>
                    <td>
                        <br />K.S Koushik
                        <br />cs17b013@iittp.ac.in
                        <br />9600637726
                     </td>
                    <td>
                        <br />Nakshatra Gupta
                        <br />cs17b020@iittp.ac.in
                        <br />9610064222
                    </td>

                </Table>
            </div>
        </center>
        <Footer></Footer>
        </div>
    );
}
export default Contact
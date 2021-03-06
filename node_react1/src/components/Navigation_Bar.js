import React from 'react';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import superagent from "superagent";
//import  {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import {FormControl} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import logo from '../project_logo.JPG';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

class NavBar extends Component {


  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Koushik");
    console.log("submit");
    console.log(this.props.session);
    console.log("data is here");
    //console.log(localStorage.getItem("userData").user);
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");


    console.log(`Form submitted:`);

    axios.get('http://localhost:4000/Login/logout')
      .then(res => {
        console.log(res.data);
          console.log("Session : ",res.data.session);
          //this.props.addSession(res.data.session);
          console.log("Tryng to redirect");

      });}

  render() {
    if(localStorage.getItem("userEmail"))
    {
      console.log("loggedin");
      console.log("IN NAVBAR : ",this.props.session);
      return (
        <Navbar expand="lg" variant="dark" className="navbar" >
            <Navbar.Brand href="/" className="logoy">
                <Image src={logo} alt="logo_p" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
  
                    <div className="navtext"><Link to="/" id="che">Home</Link></div>
                    <div className="navtext"><Link to="/AboutUs" id="che">About Us</Link></div>
                    <div className="navtext"><Link to="/ContactUs" id="che">Contact Us</Link></div>
                    <div className="navtext"><Link to="/Status" id="che">View Status</Link></div>
                    <div className="navtext"><Link to="/Lodge" id="che">Lodge Complaint</Link></div>
                </Nav>
                <text id="check1">Welcome {`${localStorage.getItem("userName")}`}</text>
                {/* <ButtonGroup className="mr-2" aria-label="Second group"> */}
                    <Button variant="outline-light" id="chb" type="submit" onClick={this.onSubmit}><Link to="/Login" id="ch">Logout</Link></Button>
                {/* </ButtonGroup> */}
  
            </Navbar.Collapse>
        </Navbar>
    );
    }
  else
  {
    console.log("1logged out");
    return (
      <Navbar expand="lg" variant="dark" className="navbar">
        <Navbar.Brand href="/" className="logoy">
          <Image src={logo} alt="logo_p" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <div className="navtext"><Link to="/" id="che">Home</Link></div>
            <div className="navtext"><Link to="/AboutUs" id="che">About Us</Link></div>
            <div className="navtext"><Link to="/ContactUs" id="che">Contact Us</Link></div>
            <div className="navtext"><Link to="/Login" id="che">View Status</Link></div>
            <div className="navtext"><Link to="/Login" id="che">Lodge Complaint</Link></div>
          </Nav>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="outline-light" id="chb"><Link to="/SignUp" id="ch">Sign up</Link></Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button variant="outline-light" id="chb"><Link to="/Login" id="ch">Login</Link></Button>
          </ButtonGroup>

        </Navbar.Collapse>
      </Navbar>);
  }
    
  }
}


export default NavBar
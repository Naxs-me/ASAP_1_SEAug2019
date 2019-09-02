import React from 'react';
import {Button} from 'react-bootstrap';
import  {Navbar} from 'react-bootstrap';
//import  {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import {FormControl} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import logo from '../project_logo.JPG';
import {Image} from 'react-bootstrap';
import '../App.css';


function Navigation_bar(){
return(
<Navbar expand="lg" variant="dark" className="navbar">
  <Navbar.Brand href="/"  className = "logoy"> 
        <Image src={logo} alt = "logo_p"  className = "logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    <div className = "navtext"><Nav.Link hover href="/">Home</Nav.Link></div>
    <div className = "navtext"><Nav.Link href="/AboutUs">About Us</Nav.Link></div>
    <div className = "navtext"><Nav.Link hover href="/ContactUs">Contact Us</Nav.Link></div>
    <div className = "navtext"><Nav.Link hover href="#ViewStatus">View Status</Nav.Link></div>
    <div className = "navtext"><Nav.Link hover href="#LodgeComplaint">Lodge Complaint</Nav.Link></div>
    </Nav>
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="outline-light"><Link to="/SignUp">Sign up</Link></Button>
    </ButtonGroup>
    <ButtonGroup className="mr-2" aria-label="Second group">
      <Button variant="outline-light"><Link to="/Login">Login</Link></Button>
    </ButtonGroup>

  </Navbar.Collapse>
</Navbar>);
}

export default Navigation_bar
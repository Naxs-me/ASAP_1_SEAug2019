import React from 'react';
import {Button} from 'react-bootstrap';
import  {Navbar} from 'react-bootstrap';
//import  {Form} from 'react-bootstrap';
import  {NavDropdown} from 'react-bootstrap';
//import {FormControl} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import logo from '../project_logo.JPG';
import {Image} from 'react-bootstrap';
import '../App.css';
function Navigation_bar(){
return(
<Navbar expand="lg" variant="dark" className="navbar">
  <Navbar.Brand href="#homey"  className = "logoy"> 
        <Image src={logo} alt = "logo_p"  className = "logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    <div className = "navtext"><Nav.Link href="#home">Home</Nav.Link></div>
    <div className = "navtext"><Nav.Link href="#link">About Us</Nav.Link></div>
    <div className = "navtext"><Nav.Link href="#contact">Contact Us</Nav.Link></div>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="outline-light">Sign up</Button>
    </ButtonGroup>
    <ButtonGroup className="mr-2" aria-label="Second group">
      <Button variant="outline-light">Login</Button>
    </ButtonGroup>

  </Navbar.Collapse>
</Navbar>);
}

export default Navigation_bar
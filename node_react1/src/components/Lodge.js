import React from 'react';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';
import Navigation from './Navigation_Bar';
import { Redirect } from 'react-router-dom'
import Login from './Login';
import axios from 'axios';
class Lodge extends Component {
    constructor(props){
        super(props);

        this.onProblemChange = this.onProblemChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showPosition = this.showPosition.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.state = {
            User_name: '',
            Email: '',
            Problem: '',
            Address: '',
            Contact: '',
            Latitude: 0.0,
            Longitude: 0.0
        }
    }
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
        this.state.Latitude = position.coords.latitude ; 
        console.log(this.state.Latitude);
        this.state.Longitude = position.coords.longitude;
        console.log(this.state.Longitude);
      }
    onProblemChange(e) {
        this.setState({
            Problem: e.target.value
        });
    }

    onAddressChange(e) {
        this.setState({
            Address: e.target.value
        });
    }

    onContactChange(e) {
        this.setState({
            Contact: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("here :: ");
        console.log(this.state.Latitude);
        console.log(this.state.Longitude);
        const newProblem = {
            Name: localStorage.getItem("userName"),
            Email: localStorage.getItem("userEmail"),
            Problem: this.state.Problem,
            Address: this.state.Address,
            Contact: this.state.Contact,
            Latitude: this.state.Latitude,
            Longitude: this.state.Longitude
        };
        axios.post('http://localhost:4000/Lodge/add', newProblem)
            .then(res => console.log(res.data));
        
        console.log(`Form submitted:`);
        console.log(`Problem: ${this.state.Problem}`);
        console.log(`Address: ${this.state.Address}`);
        console.log(`Contact: ${this.state.Contact}`);
        console.log(`Latitude: ${this.state.Latitude}`);
        console.log(`Longitude: ${this.state.Longitude}`);
        this.setState({
            Problem: '',
            Address: '',
            Contact: '',
            Latitude: 0.0,
            Longitude: 0.0
        })
    }

    render() {
        if(localStorage.getItem("userEmail"))
            return (
                <div>
                    <Navigation />
                    <Container className="Login">
                        <Form onSubmit = {this.onSubmit}>
                            <p className="header">Lodge Complaint</p>

                            <Form.Group controlId="formBasicName">
                                <Form.Label className="formBasic">Problem</Form.Label>
                                <Form.Control type="text" placeholder="Problem" value = {this.state.Problem} onChange = {this.onProblemChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="formBasic">Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address" value = {this.state.Address} onChange = {this.onAddressChange} required />
                                <Form.Text className="text-muted">
                                    We'll never share your address with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="formBasic">Contact Number</Form.Label>
                                <Form.Control type="number" placeholder="Contact Number" value = {this.state.Contact} onChange = {this.onContactChange} required />
                            </Form.Group>
                            <Button variant="outline-light" type="button" id="chb" onClick={this.getLocation}>
                                Location
                            </Button>
                            <Button variant="outline-light" type="submit" id="chb">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            );
        else    
            return <Redirect to='/Login' />
    }
}
export default Lodge;
import React from 'react';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Navigation from './Navigation_Bar';
import axios from 'axios';

class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassword1Change = this.onPassword1Change.bind(this);
        this.onPassword2Change = this.onPassword2Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            gender: '',
            email: '',
            password1: '',
            password2: '',
            redirect: false

        }
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onPassword1Change(e) {
        this.setState({
            password1: e.target.value
        });
    }

    onPassword2Change(e) {
        this.setState({
            password2: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password1
        };

        if (this.state.password1 !== this.state.password2) {
            alert("Passwords do not match!!");
        }
        else {
            console.log("aci");
            axios.post('http://localhost:4000/SignUp/add', newUser)
                .then(res => {console.log(res.data);
                if(res.status){
                    console.log("Tryng to redirect");
                    this.setState({
                        redirect: true
                    });
                    //this.render();
                        
                }}
                );
            console.log(`Form submitted:`);
            console.log(`Name: ${this.state.name}`);
            console.log(`Gender: ${this.state.gender}`);
            console.log(`Email: ${this.state.email}`);
        }
        this.setState({
            name: '',
            gender: '',
            email: '',
            password1: '',
            password2: ''
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to ="/"/>
        }
        return (
            <div>
                <Navigation />
                <Container className="Login">
                    <Form onSubmit={this.onSubmit}>
                        <p className="header">Sign Up</p>

                        <Form.Group controlId="formBasicName">
                            <Form.Label className="formBasic">Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} required />
                        </Form.Group>
                        <p className="formBasic">Gender : </p>
                        <p className="formBasic1">
                            <Form.Group controlId="formBasicGender">
                                <Form.Label id="try">Male  </Form.Label>
                                <input type="radio" required name="Gender" value="Male" checked={this.state.gender === "Male"} onChange={this.onGenderChange} />
                                <Form.Label id="try">Female  </Form.Label>
                                <input type="radio" required name="Gender" value="Female" checked={this.state.gender === "Female"} onChange={this.onGenderChange} />
                                <Form.Label id="try">Others  </Form.Label>
                                <input type="radio" required name="Gender" value="Other" checked={this.state.gender === "Other"} onChange={this.onGenderChange} />
                            </Form.Group>
                        </p>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="formBasic">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onEmailChange} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="formBasic">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password1} onChange={this.onPassword1Change} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="formBasic">Re-enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password2} onChange={this.onPassword2Change} required />
                        </Form.Group>
                        <Button variant="outline-light" type="submit" id="chb">
                            Sign Up
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
export default SignUpPage;
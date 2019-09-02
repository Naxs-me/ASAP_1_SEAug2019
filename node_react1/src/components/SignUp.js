import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';
function SignUpPage() {
    return (
        <Container className="Login">
            <Form>
                <p className="header">Sign Up</p>

                <Form.Group controlId="formBasicName">
                    <Form.Label className="formBasic">Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                 <p className="formBasic">Gender : </p>
               <p className = "formBasic1">
                <Form.Group controlId="formBasicGender">
                    <Form.Label id="try">Male  </Form.Label>
                    <input type="radio" required name="Gender" value="Male" />
                    <Form.Label id="try">Female  </Form.Label>
                    <input type="radio" required name="Gender" value="Female" />
                    <Form.Label id="try">Others  </Form.Label>
                    <input type="radio" required name="Gender" value="Other" />
                </Form.Group>
                </p>  
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="formBasic">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formBasic">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formBasic">Re-enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="outline-light" type="submit">
                    Sign Up
  </Button>
            </Form>
        </Container>
    );
}
export default SignUpPage;
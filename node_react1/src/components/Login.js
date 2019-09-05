import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navigation from './Navigation_Bar';
import '../App.css';
function LoginPage() {
  return (
    <div>
      <Navigation/>
      <Container className="Login">
        <Form>
          <p className="header">Login</p>
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
          <Button variant="outline-light" type="submit" id="chb">
            Login
  </Button>
        </Form>
      </Container>
    </div>
  );
}
export default LoginPage;
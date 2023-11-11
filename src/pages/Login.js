// LoginPage.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="left-column">  <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button className = "btn-primary" variant="primary" type="button" size="lg" onClick={handleSignIn}>
              Sign In
            </Button>

            <Button variant="dark" type="button" size="lg">
              Sign in with Google
            </Button>
          </Form>
        </div>
        <div className="right-column">
          <img
            src="https://via.placeholder.com/1200x800" // Replace with your actual image source
            alt="Logo"
            className="img-fluid"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
        </div>
      
    </div>
  );
};

export default LoginPage;

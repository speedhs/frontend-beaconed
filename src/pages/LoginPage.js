import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async ()=> {
    console.log(`Logging in with username: ${email} and password: ${password}`);
      try {
        const apiUrl = `http://54.227.48.243:8080/api/login?email=${email}&password=${password}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (response.ok) {
          console.log('Signed in');
          navigate('/Dashboard');
        } else {
          setError('Invalid credentials. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching login data:', error);
      }
    };

  return (
    <div className="login-container">
      <Form>
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

        {error && <Alert variant="danger">{error}</Alert>}

        <Button variant="primary" type="button" size="lg" onClick={handleLogin}>
          Sign In
        </Button>

        <div>
          <Link to="/Register">New User? Sign Up</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

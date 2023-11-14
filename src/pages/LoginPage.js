import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // const apiUrl = 'http://localhost:8080/api/login/';
      // const response = await axios.get(apiUrl, {
      //   email,
      //   password,
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'POST, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Content-Type',
      //   },
      // });
      const apiUrl = 'http://localhost:8080/api/login?email=${email}&password=${password}';
      const response = await axios.get(apiUrl);
  
      const data = response.data;
      console.log(data);
  
      if (data) {
        console.log('Signed in');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching login data:', error);
    }
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(`Logging in with username: ${email} and password: ${password}`);
    fetchData();
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

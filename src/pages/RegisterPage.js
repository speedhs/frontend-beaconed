import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


const RegisterPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user_id: '',
    user_type: '',
    email: '',
    user_name: '',
    broker: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8080/api/register?userid=${formData.user_id}&usertype=${formData.user_type}&email=${formData.email}&username=${formData.user_name}&broker=${formData.broker}&password=${formData.password}`;
      const response = await fetch(url);
      const data = await response.json();
    
      if (response.ok) {
        // Registration successful, redirect to login page
        navigate('/');
      } else {
        // Handle registration error
        console.error('Registration failed:', await response.json());
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="user_id">
              <Form.Label>User ID</Form.Label>
              <Form.Control type="text" name="user_id" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="user_type">
              <Form.Label>User Type</Form.Label>
              <Form.Control type="text" name="user_type" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="user_name">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" name="user_name" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="broker">
              <Form.Label>Broker</Form.Label>
              <Form.Control type="text" name="broker" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;

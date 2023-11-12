import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="container mt-5">
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
    </div>
  );
};

export default RegisterPage;

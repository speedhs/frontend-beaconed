// ProfileComponent.js

import React from 'react';
import { Card } from 'react-bootstrap';

const Profile = ({ profileData }) => {
  return (
    <Card bg="dark" text="white" className="mb-4">
      <Card.Body>
        <Card.Title>Profile Information</Card.Title>
        <Card.Text>
          <strong>User ID:</strong> {profileData.data.user_id}<br />
          <strong>User Type:</strong> {profileData.data.user_type}<br />
          <strong>Email:</strong> {profileData.data.email}<br />
          <strong>User Name:</strong> {profileData.data.user_name}<br />
          <strong>Broker:</strong> {profileData.data.broker}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profile;

// TotalProfit.js

import React from 'react';
import { Card } from 'react-bootstrap';

const TotalProfitLossCard = ({ holdingsData }) => {
  const totalProfitLoss = holdingsData.data.reduce((total, holding) => total + holding.pnl, 0);

  return (
    <Card bg="primary" text="white">
      <Card.Body>
        <Card.Title>Total Profit/Loss</Card.Title>
        <Card.Text>{totalProfitLoss}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalProfitLossCard;

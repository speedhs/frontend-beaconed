// HoldingsTable.js

import React from 'react';
import { Table } from 'react-bootstrap';

const HoldingsTable = ({ holdingsData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Trading Symbol</th>
          <th>Exchange</th>
          <th>Quantity</th>
          <th>Average Price</th>
          <th>Last Price</th>
          <th>Close Price</th>
          <th>Profit/Loss</th>
          <th>Day Change</th>
          <th>Day Change Percentage</th>
        </tr>
      </thead>
      <tbody>
        {holdingsData.data.map((holding, index) => (
          <tr key={index}>
            <td>{holding.tradingsymbol}</td>
            <td>{holding.exchange}</td>
            <td>{holding.quantity}</td>
            <td>{holding.average_price}</td>
            <td>{holding.last_price}</td>
            <td>{holding.close_price}</td>
            <td>{holding.pnl}</td>
            <td>{holding.day_change}</td>
            <td>{holding.day_change_percentage}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HoldingsTable;

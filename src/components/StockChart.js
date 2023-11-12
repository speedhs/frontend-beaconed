import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = ({ data }) => {
    const maxPrice = Math.max(...data.map(entry => entry.price));
    const buffer = 10;
    const maxValue = maxPrice + buffer;  
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, maxValue]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#003399" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;

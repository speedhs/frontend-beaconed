import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Chart;

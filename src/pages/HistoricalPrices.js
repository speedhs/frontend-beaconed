import React, { useState, useEffect } from 'react';
import StockChart from '../components/StockChart';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

const HistoricalPrices = () => {
  const [chartData, setChartData] = useState([]);
  const [symbol, setSymbol] = useState('NIFTY 50');
  const [fromDate, setFromDate] = useState('2017-01-02');
  const [toDate, setToDate] = useState('2018-01-07');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://localhost:8080/api/historical-data?symbol=${symbol}&from_date=${fromDate}&to_date=${toDate}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, [symbol, fromDate, toDate]);

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Stock Chart</h1>
        <Link to="/Dashboard" className="btn btn-primary">
          View Dashboard
        </Link>
      </div>

      <div className="mb-3">
        <label className="text-dark me-2" htmlFor="symbol">Symbol:</label>
        <select className="form-select form-select-dark" id="symbol" value={symbol} onChange={handleSymbolChange}>
          <option value="NIFTY 50">NIFTY 50</option>
          <option value="NIFTY BANK">NIFTY BANK</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="text-dark me-2" htmlFor="fromDate">From Date:</label>
        <input type="date" className="form-control form-control-dark" id="fromDate" value={fromDate} onChange={handleFromDateChange} />
      </div>
      <div className="mb-3">
        <label className="text-dark me-2" htmlFor="toDate">To Date:</label>
        <input type="date" className="form-control form-control-dark" id="toDate" value={toDate} onChange={handleToDateChange} />
      </div>
      <StockChart data={chartData} />
    </div>
  );
};

export default HistoricalPrices;

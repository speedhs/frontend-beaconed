// DashboardPage.js

import React from 'react';
import Profile from '../components/Profile';
import HoldingsTable from '../components/HoldingsTable';
import TotalProfit from '../components/TotalProfit';

const DashboardPage = () => {
  const profileData = {
    "status": "success",
    "data": {
      "user_id": "AB1234",
      "user_type": "individual",
      "email": "xxxyyy@gmail.com",
      "user_name": "AxAx Bxx",
      "broker": "ZERODHA"
    }
  };

  const holdingsData = {
    "status": "success",
    "data": [
      {
        "tradingsymbol": "GOLDBEES",
        "exchange": "BSE",
        "isin": "INF204KB17I5",
        "quantity": 2,
        "authorised_date": "2021-06-08 00:00:00",
        "average_price": 40.67,
        "last_price": 42.47,
        "close_price": 42.28,
        "pnl": 3.5999999999999943,
        "day_change": 0.18999999999999773,
        "day_change_percentage": 0.44938505203405327
      },
      {
        "tradingsymbol": "IDEA",
        "exchange": "NSE",
        "isin": "INE669E01016",
        "quantity": 5,
        "authorised_date": "2021-06-08 00:00:00",
        "average_price": 8.466,
        "last_price": 10,
        "close_price": 10.1,
        "pnl": 7.6700000000000035,
        "day_change": -0.09999999999999964,
        "day_change_percentage": -0.9900990099009866
      }
    ]
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>

      <div className="row">
        <div className="col-md-6">
          <Profile profileData={profileData} />
        </div>

        <div className="col-md-6">
          <TotalProfit holdingsData={holdingsData} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <HoldingsTable holdingsData={holdingsData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

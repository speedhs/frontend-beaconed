import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import HoldingsTable from '../components/HoldingsTable';
import TotalProfit from '../components/TotalProfit';

const DashboardPage = () => {
  const [profileData, setProfileData] = useState(null);
  const [holdingsData, setHoldingsData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/profile')
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error('Error fetching profile data:', error));

    fetch('http://localhost:8080/api/holdings')
      .then(response => response.json())
      .then(data => setHoldingsData(data))
      .catch(error => console.error('Error fetching holdings data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard</h1>
        <Link to="/History" className="btn btn-primary">
          View HistoricalPrices
        </Link>
      </div>

      <div className="row">
        <div className="col-md-6">
          {profileData && <Profile profileData={profileData} />}
        </div>

        <div className="col-md-6">
          {holdingsData && <TotalProfit holdingsData={holdingsData} />}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          {holdingsData && <HoldingsTable holdingsData={holdingsData} />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

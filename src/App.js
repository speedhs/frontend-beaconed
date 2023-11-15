
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HistoricalPrices from './pages/HistoricalPrices';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/History" element={<HistoricalPrices/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;


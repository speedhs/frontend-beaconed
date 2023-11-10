// src/components/FilterForm.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterForm = ({ handleFilterChange, handleFromDateChange, handleToDateChange }) => {
  return (
    <div>
      <label>Symbol:</label>
      <input type="text" onChange={handleFilterChange} />

      <label>From Date:</label>
      <DatePicker selected={startDate} onChange={handleFromDateChange} />

      <label>To Date:</label>
      <DatePicker selected={endDate} onChange={handleToDateChange} />
    </div>
  );
};

export default FilterForm;

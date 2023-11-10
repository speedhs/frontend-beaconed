// InputField.js
import React from 'react';
import './InputField.css';

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="custom-input"
    />
  );
};

export default InputField;

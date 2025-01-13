"use client"; // Ensure this is added to the top of the file for client-side rendering

import React, { useState } from 'react';

const LengthInput = ({ defaultUnit = 'meters' }) => {
  const [unit, setUnit] = useState(defaultUnit); // Default unit passed as a prop
  const [value, setValue] = useState(''); // Store the input value

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="number"
        value={value}
        onChange={handleValueChange}
        placeholder="Enter value"
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <select
        value={unit}
        onChange={handleUnitChange}
        className="px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="meters">Meters</option>
        <option value="feet">Feet</option>
        <option value="inches">Inches</option>
        <option value="yards">Yards</option>
        <option value="centimeters">Centimeters</option>
      </select>
    </div>
  );
};

export default LengthInput;

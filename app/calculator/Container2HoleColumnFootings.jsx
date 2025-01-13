"use client"; // Ensure this is added to the top of the file for client-side rendering
import React, { useState } from 'react';
import LengthInput from '@/components/LengthInput';

const Container2HoleColumnFootings = () => {
  const [diameter, setDiameter] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('meters');
  const [area, setArea] = useState(null);

  const handleCalculate = () => {
    // Convert inputs to numeric values
    const d = parseFloat(diameter);
    const h = parseFloat(height);

    // Ensure valid numeric inputs
    if (isNaN(d) || isNaN(h)) {
      alert('Please enter valid numbers for diameter and height.');
      return;
    }

    // Unit conversion logic
    const conversionFactors = {
      meters: 1,
      feet: 0.3048,
      inches: 0.0254,
      centimeters: 0.01,
      yards: 0.9144,
    };

    const conversionFactor = conversionFactors[unit] || 1;

    // Convert diameter and height to meters
    const dInMeters = d * conversionFactor;
    const hInMeters = h * conversionFactor;

    // Calculate Area = 3.14 * (d / 2) * h
    const result = Math.PI * (dInMeters / 2) * hInMeters;

    // Set area result
    setArea(result.toFixed(2));
  };

  return (
    <div className="w-full mb-10 max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Hole, Column, or Round Footings</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Diameter (d)</h2>
      <LengthInput
        value={diameter}
        setValue={setDiameter}
        unit={unit}
        setUnit={setUnit}
        defaultUnit="meters"
      />
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Height (h)</h2>
      <LengthInput
        value={height}
        setValue={setHeight}
        unit={unit}
        setUnit={setUnit}
        defaultUnit="meters"
      />
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Quantity</h2>
      <input
        type="number"
        placeholder="Enter quantity"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button
        onClick={handleCalculate}
        className="px-6 py-2 bg-[#F1916D] text-white font-semibold rounded-lg"
      >
        Calculate
      </button>
      {area && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Calculated Area</h3>
          <p className="text-lg">Area = {area} m²</p>
        </div>
      )}
    </div>
  );
};

export default Container2HoleColumnFootings;

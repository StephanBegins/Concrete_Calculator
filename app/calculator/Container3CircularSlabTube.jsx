'use client';

import React, { useState } from 'react';
import LengthInput from '@/components/LengthInput';

const Container3CircularSlabTube = () => {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('meters');
  const [volume, setVolume] = useState(null);

  const handleCalculate = () => {
    // Convert inputs to numeric values
    const r = parseFloat(radius);
    const h = parseFloat(height);

    // Ensure valid numeric inputs
    if (isNaN(r) || isNaN(h)) {
      alert('Please enter valid numbers for radius and height.');
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

    // Convert radius and height to meters
    const rInMeters = r * conversionFactor;
    const hInMeters = h * conversionFactor;

    // Calculate Volume = 3.14 * r * r * h
    const result = Math.PI * rInMeters * rInMeters * hInMeters;

    // Set volume result
    setVolume(result.toFixed(2));
  };

  return (
    <div className="w-full mb-10 max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Circular Slab or Tube</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Radius (r)</h2>
      <LengthInput
        value={radius}
        setValue={setRadius}
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
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Thickness (t)</h2>
      <LengthInput
        defaultUnit="meters"
        unit={unit}
        setUnit={setUnit}
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
      {volume && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Calculated Volume</h3>
          <p className="text-lg">{volume} m³</p>
        </div>
      )}
    </div>
  );
};

export default Container3CircularSlabTube;

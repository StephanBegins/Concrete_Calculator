"use client"; // Ensure this is added to the top of the file for client-side rendering

import React, { useState } from 'react';
import LengthInput from '@/components/LengthInput';

const Container1SlabsFootingsWalls = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [area, setArea] = useState(null);

  const convertToMeters = (value, unit) => {
    if (unit === 'centimeters') return value * 0.01;
    if (unit === 'inches') return value * 0.0254;
    if (unit === 'feet') return value * 0.3048;
    return value; // Default: meters
  };

  const handleCalculate = () => {
    // Convert all inputs to meters
    const lengthInMeters = convertToMeters(length.value, length.unit);
    const widthInMeters = convertToMeters(width.value, width.unit);
    const heightInMeters = convertToMeters(height.value, height.unit);

    // Apply the formula: Area = 2 * (l * w * h)
    const result = 2 * (lengthInMeters * widthInMeters * heightInMeters);

    // Multiply by quantity
    const totalArea = result * quantity;
    setArea(totalArea);
  };

  return (
    <div className="w-full mb-10 max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Slabs, Square Footings, or Walls</h1>
      
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Length (L)</h2>
      <LengthInput
        value={length.value}
        unit={length.unit}
        setValue={(val) => setLength({ ...length, value: val })}
        setUnit={(unit) => setLength({ ...length, unit })}
        defaultUnit="meters"
      />
      
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Width (W)</h2>
      <LengthInput
        value={width.value}
        unit={width.unit}
        setValue={(val) => setWidth({ ...width, value: val })}
        setUnit={(unit) => setWidth({ ...width, unit })}
        defaultUnit="meters"
      />
      
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Thickness or Height (h)</h2>
      <LengthInput
        value={height.value}
        unit={height.unit}
        setValue={(val) => setHeight({ ...height, value: val })}
        setUnit={(unit) => setHeight({ ...height, unit })}
        defaultUnit="meters"
      />
      
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Quantity</h2>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
        className="w-full px-4 py-2 border rounded-lg"
      />
      
      <button
        onClick={handleCalculate}
        className="px-6 py-2 bg-[#F1916D] text-white font-semibold rounded-lg"
      >
        Calculate
      </button>

      {area !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Calculated Area</h3>
          <p className="text-lg">Area = {area} m²</p>
        </div>
      )}
    </div>
  );
};

export default Container1SlabsFootingsWalls;

import React from 'react';
import LengthInput from '@/components/LengthInput';

const Container4CurbGutterBarrier = () => (
  <div className="w-full mb-10 max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Curb and Gutter Barrier</h1>
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Length (L)</h2>
    <LengthInput defaultUnit="meters" />
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Height (h)</h2>
    <LengthInput defaultUnit="meters" />
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Width (w)</h2>
    <LengthInput defaultUnit="meters" />
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Quantity</h2>
    <input type="number" placeholder="Enter quantity" className="w-full px-4 py-2 border rounded-lg" />
    <button className="px-6 py-2 bg-[#F1916D] text-white font-semibold rounded-lg">Calculate</button>
  </div>
);

export default Container4CurbGutterBarrier;

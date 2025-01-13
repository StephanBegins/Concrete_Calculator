import React from 'react';
import Container1SlabsFootingsWalls from './Container1SlabsFootingsWalls';
import Container2HoleColumnFootings from './Container2HoleColumnFootings';
import Container3CircularSlabTube from './Container3CircularSlabTube';
import Container4CurbGutterBarrier from './Container4CurbGutterBarrier';
import Container5Stairs from './Container5Stairs';

const SlabsCalculatorMain = () => (
  <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Concrete Calculator</h1>
    <h2 className="text-xl p-5 text-center md:px-16 font-serif text-gray-800 mb-4">The Concrete Calculator estimates the volume and weight of concrete necessary to cover a given area. Purchasing slightly more concrete than the estimated result can reduce the probability of having insufficient concrete.</h2>
    <Container1SlabsFootingsWalls />
    <Container2HoleColumnFootings />
    <Container3CircularSlabTube />
    <Container4CurbGutterBarrier />
    <Container5Stairs />
  </main>
);

export default SlabsCalculatorMain;

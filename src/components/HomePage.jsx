import React from 'react';

const HomePage = () => (
  <div className="p-8 text-center">
    <img src="/banner.png" alt="NGR Predictions Banner" className="w-full h-auto rounded mb-6" />
    <h1 className="text-3xl font-bold mb-4">Welcome to NGR Predictions</h1>
    <p className="mb-6 text-gray-600">98.9% Accurate Football Insights</p>
    <div className="flex flex-wrap justify-center gap-4">
      <a href="/free-predictions" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Free Predictions</a>
      <a href="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Premium Plans</a>
      <a href="/admin" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">Admin Dashboard</a>
    </div>
  </div>
);

export default HomePage;

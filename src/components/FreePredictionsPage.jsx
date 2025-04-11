import React from 'react';

const freePredictions = [
  {
    match: "Manchester United vs Chelsea",
    date: "2025-04-14",
    prediction: "Draw",
    odds: "3.10",
    analysis: "Both teams are struggling to find form. Likely to cancel each other out."
  },
  {
    match: "Real Madrid vs Getafe",
    date: "2025-04-15",
    prediction: "Home Win",
    odds: "1.35",
    analysis: "Real Madrid are unbeaten at home and Getafe have key players injured."
  }
];

const FreePredictionsPage = () => {
  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Free Football Predictions</h1>
      <p className="text-center text-gray-600 mb-8">These predictions are available for all visitors. Premium predictions available after login.</p>

      {freePredictions.map((item, index) => (
        <div key={index} className="bg-white p-4 shadow rounded mb-6">
          <h2 className="text-lg font-semibold">{item.match}</h2>
          <p className="text-sm text-gray-500 mb-2">Date: {item.date}</p>
          <p><strong>Prediction:</strong> {item.prediction}</p>
          <p><strong>Odds:</strong> {item.odds}</p>
          <p className="mt-2 text-sm text-gray-700"><strong>Analysis:</strong> {item.analysis}</p>
        </div>
      ))}

      <div className="text-center mt-8">
        <a href="/pricing" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Unlock Premium Predictions</a>
      </div>
    </div>
  );
};

export default FreePredictionsPage;

import React from 'react';

const AdminPredictionForm = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-4">Enter Predictions</h2>
      <form className="space-y-4">
        <input className="w-full border p-2 rounded" type="text" placeholder="Match: Team A vs Team B" />
        <input className="w-full border p-2 rounded" type="date" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Best Pick of the Day" />
        <textarea className="w-full border p-2 rounded" rows="6" placeholder="Match Analysis..."></textarea>
        <input className="w-full border p-2 rounded" type="text" placeholder="Sure Odd" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Both Teams to Score (Yes/No)" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Double Chance (e.g. 1X, X2)" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Prediction (Home/Away/Draw)" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Odds" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Over 1.5 / 2.5 / 3.5 Goals" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Over/Under Corners" />
        <input className="w-full border p-2 rounded" type="text" placeholder="Premium (Yes/No)" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save Prediction</button>
      </form>
    </div>
  );
};

export default AdminPredictionForm;
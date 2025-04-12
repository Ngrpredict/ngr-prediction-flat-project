import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const AdminPredictionForm = () => {
  const [form, setForm] = useState({
    match: '',
    date: '',
    bestPick: '',
    analysis: '',
    sureOdd: '',
    bothTeamsScore: '',
    doubleChance: '',
    prediction: '',
    odds: '',
    overGoals: '',
    corners: '',
    chanceHome: '',
    chanceAway: '',
    chanceDraw: '',
    premium: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'predictions'), {
        ...form,
        createdAt: serverTimestamp()
      });
      setSuccess(true);
      setForm({
        match: '',
        date: '',
        bestPick: '',
        analysis: '',
        sureOdd: '',
        bothTeamsScore: '',
        doubleChance: '',
        prediction: '',
        odds: '',
        overGoals: '',
        corners: '',
        chanceHome: '',
        chanceAway: '',
        chanceDraw: '',
        premium: ''
      });
    } catch (err) {
      console.error("Error saving prediction:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-4">Enter Predictions</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            className="w-full border p-2 rounded"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            type={field === 'date' ? 'date' : 'text'}
          />
        ))}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save Prediction</button>
        {success && <p className="text-green-600 mt-2">✅ Prediction saved!</p>}
      </form>
    </div>
  );
};

export default AdminPredictionForm;

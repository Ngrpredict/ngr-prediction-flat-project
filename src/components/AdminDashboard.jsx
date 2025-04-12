import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { app } from '../firebase/firebaseConfig';

const AdminDashboard = () => {
  const db = getFirestore(app);

  const [formData, setFormData] = useState({
    match: '',
    prediction: '',
    odds: '',
    bestPick: '',
    analysis: '',
  });

  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'predictions'), {
        ...formData,
        date: Timestamp.fromDate(date),
        createdAt: Timestamp.now(),
      });
      setMessage('Prediction saved successfully ✅');
      setFormData({ match: '', prediction: '', odds: '', bestPick: '', analysis: '' });
    } catch (err) {
      console.error(err);
      setMessage('Error saving prediction ❌');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Admin Dashboard – Post a Prediction</h2>
      {message && <p style={{ textAlign: 'center', color: 'green' }}>{message}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="match" placeholder="Match (e.g. Arsenal vs Chelsea)" value={formData.match} onChange={handleChange} required />
        <input type="text" name="prediction" placeholder="Prediction (e.g. Over 2.5 Goals)" value={formData.prediction} onChange={handleChange} required />
        <input type="text" name="odds" placeholder="Odds (e.g. 1.87)" value={formData.odds} onChange={handleChange} required />
        <input type="text" name="bestPick" placeholder="Best Pick (e.g. Arsenal Win)" value={formData.bestPick} onChange={handleChange} />
        <textarea name="analysis" placeholder="Analysis (optional)" value={formData.analysis} onChange={handleChange} rows="4" />

        <label><strong>Prediction Date:</strong></label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Save Prediction
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;

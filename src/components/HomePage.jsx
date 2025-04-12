import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to NGR Predictions</h1>
      <p>98.9% accurate predictions — see what’s coming today!</p>

      <div style={{ marginTop: '1.5rem' }}>
        <button onClick={() => navigate('/login')} style={{ marginRight: '1rem' }}>
          Login / Register
        </button>
        <button onClick={() => navigate('/free-predictions')} style={{ marginRight: '1rem' }}>
          Free Predictions
        </button>
        <button onClick={() => navigate('/pricing')} style={{ marginRight: '1rem' }}>
          Premium Access
        </button>
        <button onClick={() => navigate('/admin')}>
          Admin Prediction Form
        </button>
      </div>
    </div>
  );
};

export default HomePage;

     

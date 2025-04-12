import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Banner Image */}
      <img
        src="/banner.png"
        alt="Welcome to NGR Predictions"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}
      />

      {/* Text and Buttons */}
      <h1 style={{ marginTop: '2rem' }}>Welcome to NGR Predictions</h1>
      <p>98.9% accurate football predictions – Premium & Free Access</p>

      <div style={{ marginTop: '1.5rem' }}>
        <button onClick={() => navigate('/login')} style={{ marginRight: '1rem' }}>
          Login
        </button>
        <button onClick={() => navigate('/free-predictions')} style={{ marginRight: '1rem' }}>
          Free Predictions
        </button>
        <button onClick={() => navigate('/pricing')} style={{ marginRight: '1rem' }}>
          Premium
        </button>
        <button onClick={() => navigate('/admin')}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default HomePage;

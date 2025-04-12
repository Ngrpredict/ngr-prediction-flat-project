import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Welcome Banner Image */}
      <img 
        src="/banner.png" 
        alt="Welcome Banner" 
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
      />

      {/* Heading and Description */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Welcome to NGR Predictions
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        <strong>98.9%</strong> accurate football predictions – Premium & Free Access
      </p>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <button onClick={() => navigate('/login')} className="btn">Login</button>
        <button onClick={() => navigate('/free')} className="btn">Free Predictions</button>
        <button onClick={() => navigate('/premium')} className="btn">Premium</button>
        <button onClick={() => navigate('/admin')} className="btn">Admin</button>
      </div>

      {/* Optional: Add some spacing */}
      <style>
        {`
          .btn {
            background-color: #1e90ff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .btn:hover {
            background-color: #0f75d3;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;

 

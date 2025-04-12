import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Payment Successful 🎉</h2>
      <p>Thank you! Your premium access is now active.</p>
      <button onClick={() => navigate('/premium')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Go to Premium Predictions
      </button>
    </div>
  );
};

export default PaymentSuccess;

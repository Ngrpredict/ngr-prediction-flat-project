import React from 'react';

const PricingPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Pricing Plans</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {/* Weekly Plan */}
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '250px' }}>
          <h3>Weekly</h3>
          <p>€5 / week</p>
          <ul>
            <li>All premium predictions</li>
            <li>Access for 7 days</li>
            <li>Full match analysis</li>
          </ul>
          <a href="https://buy.stripe.com/test_bIY2aSdS9bI24F2aEG" target="_blank" rel="noopener noreferrer">
            <button>Subscribe Weekly</button>
          </a>
        </div>

        {/* Monthly Plan */}
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '250px' }}>
          <h3>Monthly</h3>
          <p>€11.11 / month</p>
          <ul>
            <li>All premium predictions</li>
            <li>Full match analysis</li>
            <li>Includes sure odds</li>
          </ul>
          <a href="https://buy.stripe.com/test_3cs9Dk8xPcM6b3q000" target="_blank" rel="noopener noreferrer">
            <button>Subscribe Monthly</button>
          </a>
        </div>

        {/* Yearly Plan */}
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '250px' }}>
          <h3>Yearly</h3>
          <p>€111.10 / year</p>
          <ul>
            <li>Full access to everything</li>
            <li>Includes VIP tips</li>
            <li>Free future features</li>
          </ul>
          <a href="https://buy.stripe.com/test_eVa9DkdS96nI5J66op" target="_blank" rel="noopener noreferrer">
            <button>Subscribe Yearly</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

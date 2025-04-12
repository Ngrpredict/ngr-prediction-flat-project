import React from 'react';

const PricingPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center font-sans">
      <h1 className="text-3xl font-bold mb-6">Our Subscription Plans</h1>
      <p className="mb-4 text-gray-600">Choose your preferred access level to unlock premium football predictions.</p>
      <p className="mb-8 text-green-600 font-bold text-xl">✅ 98.9% Prediction Accuracy</p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Weekly', price: '€3.33', stripe: 'https://buy.stripe.com/test_bIY2aSdS9bI24F2aEG' },
          { title: 'Monthly', price: '€11.11', stripe: 'https://buy.stripe.com/test_3cs9Dk8xPcM6b3q000' },
          { title: 'Yearly', price: '€111.11', stripe: 'https://buy.stripe.com/test_eVa9DkdS96nI5J66op' },
        ].map(plan => (
          <div key={plan.title} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{plan.title} Plan</h2>
            <p className="text-gray-700 mb-2">{plan.price}</p>
            <a href={plan.stripe} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded inline-block mt-2 hover:bg-blue-700">Subscribe</a>
          </div>
        ))}
      </div>

      <div className="mt-10 text-left">
        <h2 className="text-2xl font-semibold mb-2">Also Accepting Crypto:</h2>
        <ul className="text-sm text-gray-700 space-y-1 text-left">
          <li>USDT (ERC20): <code>0xb4a92ecbdea143ba1dbfe11298e589e3d3242f77</code></li>
          <li>USDC (ERC20): <code>0xb4a92ecbdea143ba1dbfe11298e589e3d3242f77</code></li>
          <li>BTC: <code>15NH4LA8JJXSmCFXWWLvyNU8yu57gm6x8K</code></li>
          <li>SOL: <code>2RGGZm2SqRdge1HC9TWaVEWNnhKGcQbwBf2TvdAR9Kw7</code></li>
          <li>XRP: <code>rJn2zAPdFA193sixJwuFixRkYDUtx3apQh</code> (Tag: <strong>501283470</strong>)</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;

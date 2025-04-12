import React from 'react';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">NGR Predictions Pricing</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weekly Plan */}
          <div className="border rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Weekly</h2>
            <p className="text-3xl font-bold mb-4">€5 <span className="text-sm font-normal">/ week</span>
            </p>
            <ul className="mb-6 text-sm text-left list-disc list-inside">
              <li>Full premium predictions</li>
              <li>Match analysis</li>
              <li>Odds & tips</li>
              <li>24/7 access</li>
            </ul>
            <a
              href="https://buy.stripe.com/28ofZbcm43AB1cQdQQ"
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Weekly Access
            </a>
          </div>

          {/* Monthly Plan */}
          <div className="border rounded-2xl shadow-lg p-6 text-center bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2">Monthly</h2>
            <p className="text-3xl font-bold mb-4">€11.11 <span className="text-sm font-normal">/ month</span>
            </p>
            <ul className="mb-6 text-sm text-left list-disc list-inside">
              <li>All weekly features</li>
              <li>Exclusive tips</li>
              <li>Priority support</li>
              <li>Bonus content</li>
            </ul>
            <a
              href="https://buy.stripe.com/6oE9AN71Keff7BecMO"
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Monthly Access
            </a>
          </div>

          {/* Yearly Plan */}
          <div className="border rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Yearly</h2>
            <p className="text-3xl font-bold mb-4">€111.10 <span className="text-sm font-normal">/ year</span>
            </p>
            <ul className="mb-6 text-sm text-left list-disc list-inside">
              <li>All monthly features</li>
              <li>Early access to updates</li>
              <li>Free upgrades</li>
              <li>Save over 15%</li>
            </ul>
            <a
              href="https://buy.stripe.com/28oeV771K4EFdZC7st"
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Yearly Access
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <img
            src="/images/pricing-banner.png"
            alt="NGR Predictions"
            className="mx-auto rounded-xl shadow-md w-full max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

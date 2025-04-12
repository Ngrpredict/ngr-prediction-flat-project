import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PricingPage from './components/PricingPage';
import FreePredictionsPage from './components/FreePredictionsPage';
import AdminPredictionForm from './components/AdminPredictionForm';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/free-predictions" element={<FreePredictionsPage />} />
      <Route path="/admin" element={<AdminPredictionForm />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

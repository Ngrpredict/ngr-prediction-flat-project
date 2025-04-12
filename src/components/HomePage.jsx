// ✅ STEP: Complete HomePage.jsx with Logout
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/login"));
  };

  return (
    <div className="p-6 text-center font-sans">
      <h1 className="text-3xl font-bold mb-4">Welcome to NGR Predictions</h1>
      <div className="space-x-4">
        <button onClick={() => navigate("/free-predictions")} className="bg-green-600 text-white px-4 py-2 rounded">Free Predictions</button>
        <button onClick={() => navigate("/pricing")} className="bg-blue-600 text-white px-4 py-2 rounded">Premium Plans</button>
        <button onClick={() => navigate("/admin")} className="bg-purple-600 text-white px-4 py-2 rounded">Admin Dashboard</button>
      </div>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;

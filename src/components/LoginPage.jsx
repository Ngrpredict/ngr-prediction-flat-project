import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      alert("Success!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleAuth} className="space-y-4">
        <input className="w-full border p-2 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <div className="mt-4 text-sm text-center">
        {isRegistering ? (
          <>
            Already have an account?{' '}
            <button className="text-blue-600 underline" onClick={() => setIsRegistering(false)}>Login</button>
          </>
        ) : (
          <>
            New user?{' '}
            <button className="text-blue-600 underline" onClick={() => setIsRegistering(true)}>Register</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

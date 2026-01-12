import React, { useState } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (data.success) {
        onLoginSuccess();
      } else {
        setError('Invalid Password');
      }
    } catch (err) {
      setError('Connection Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-dark p-6">
      <div className="max-w-xs w-full glass-effect p-8 rounded-2xl border border-gold-400/20 text-center">
        <h2 className="text-xl font-serif gold-gradient mb-6 font-bold uppercase tracking-widest">
          Admin Access
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-center tracking-widest focus:outline-none focus:border-gold-500/50 transition-colors"
          />
          
          {error && <p className="text-red-400 text-xs uppercase tracking-widest">{error}</p>}

          <button
            type="submit"
            disabled={!password || loading}
            className="w-full py-3 bg-gold-600 hover:bg-gold-500 disabled:opacity-50 text-emerald-dark font-bold rounded-lg transition-all uppercase tracking-widest text-xs"
          >
            {loading ? 'Verifying...' : 'Unlock Generator'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

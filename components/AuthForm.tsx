
import React, { useState } from 'react';
import { User } from '../types';

interface Props {
  type: 'signin' | 'signup';
  onAuthSuccess: (user: User) => void;
  onToggle: () => void;
}

const AuthForm: React.FC<Props> = ({ type, onAuthSuccess, onToggle }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'signup') {
      // Simulate registration
      setSuccessMsg('Successfully registered!');
      setTimeout(() => {
        setSuccessMsg('');
        onAuthSuccess({
          id: Math.random().toString(36).substr(2, 9),
          name: formData.name,
          email: formData.email,
          profileCompleted: false
        });
      }, 1500);
    } else {
      // Simulate login
      onAuthSuccess({
        id: 'user123',
        name: formData.name || 'Student User',
        email: 'user@example.com',
        profileCompleted: false
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-8">
          {type === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>

        {successMsg && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg text-center animate-pulse">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg mt-6"
          >
            {type === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          {type === 'signin' ? (
            <p>Don't have an account? <button onClick={onToggle} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Sign Up</button></p>
          ) : (
            <p>Already have an account? <button onClick={onToggle} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Sign In</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

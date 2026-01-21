
import React from 'react';
import { User } from '../types';

interface Props {
  user: User;
}

const Home: React.FC<Props> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 transition-colors">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, {user.name}! 👋</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Here's what's happening with your internship search today.</p>
        
        {!user.profileCompleted ? (
          <div className="p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/50 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center text-2xl">⚠️</div>
            <div className="flex-grow">
              <h3 className="font-bold text-amber-900 dark:text-amber-300">Incomplete Profile</h3>
              <p className="text-amber-700 dark:text-amber-400 text-sm">Please upload your resume and fill in your details to start matching with internships.</p>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/50 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-2xl">✅</div>
            <div className="flex-grow">
              <h3 className="font-bold text-green-900 dark:text-green-300">Profile Ready</h3>
              <p className="text-green-700 dark:text-green-400 text-sm">Your profile is optimized. Head over to the Match tab to see your opportunities!</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Applications Sent</span>
              <span className="font-bold text-slate-800 dark:text-slate-100">0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Profile Views</span>
              <span className="font-bold text-slate-800 dark:text-slate-100">12</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Matched Internships</span>
              <span className="font-bold text-slate-800 dark:text-slate-100">0</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl shadow-sm p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Need resume help?</h3>
            <p className="text-indigo-100 text-sm mb-4">Our AI assistant is ready to help you craft the perfect resume for tier 2/3 placements.</p>
          </div>
          <div className="text-xs italic bg-white/10 p-2 rounded">
            Tip: "Ask the chatbot about STAR method for projects"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

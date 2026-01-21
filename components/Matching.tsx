
import React, { useState } from 'react';
import { User, Internship } from '../types';
import { getInternshipMatches } from '../services/geminiService';

interface Props {
  user: User;
  onMatchesFound: (matches: Internship[]) => void;
  onNavigateToMsg: () => void;
}

const Matching: React.FC<Props> = ({ user, onMatchesFound, onNavigateToMsg }) => {
  const [isMatching, setIsMatching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  const startMatching = async () => {
    if (!user.profileCompleted) {
      alert("Please complete your profile first!");
      return;
    }

    setIsMatching(true);
    try {
      const results = await getInternshipMatches(user);
      onMatchesFound(results);
      setMatchFound(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong with matching.");
    } finally {
      setIsMatching(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col items-center justify-center text-center transition-colors">
      {!matchFound ? (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-2xl">
          <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
            🚀
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Find Your Perfect Match</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
            Our AI analysis engine will scan your skills, projects, and profile against thousands of internship openings tailored for Tier 2/3 candidates.
          </p>

          <button
            onClick={startMatching}
            disabled={isMatching}
            className={`px-12 py-5 bg-indigo-600 text-white text-xl font-bold rounded-2xl shadow-xl transition-all ${
              isMatching ? 'opacity-50 cursor-wait' : 'hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-indigo-500/20'
            }`}
          >
            {isMatching ? 'Matching in Progress...' : 'Start AI Matching'}
          </button>
          
          {isMatching && (
            <div className="mt-8 space-y-4">
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div className="bg-indigo-600 h-full animate-[progress_2s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium animate-pulse italic">
                Scanning tier-2 friendly companies...
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-green-200 dark:border-green-800 shadow-xl max-w-2xl text-center">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
            ✨
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Success!</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
            We've found 5 opportunities that are a great fit for your skill set. Head over to the Messages section to view and apply.
          </p>
          <button
            onClick={onNavigateToMsg}
            className="px-12 py-5 bg-green-600 text-white text-xl font-bold rounded-2xl shadow-xl hover:bg-green-700 transition-all shadow-green-500/20"
          >
            View My Matches
          </button>
        </div>
      )}

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
};

export default Matching;

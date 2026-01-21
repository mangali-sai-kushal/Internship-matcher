
import React from 'react';
import { Internship } from '../types';

interface Props {
  internships: Internship[];
}

const Messages: React.FC<Props> = ({ internships }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 transition-colors">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Matched Opportunities</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">Click on an internship to see details and apply.</p>

      {internships.length === 0 ? (
        <div className="text-center py-20 bg-slate-100 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-800">
          <p className="text-slate-400 dark:text-slate-500">No matches found yet. Go to the Match tab to find opportunities!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {internships.map((job) => (
            <div key={job.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:shadow-indigo-500/10 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded border border-indigo-100 dark:border-indigo-800">MATCHED</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.role}</h2>
                  </div>
                  <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{job.companyName}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {job.stipend}
                    </span>
                  </div>

                  <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{job.description}</p>
                </div>

                <div className="flex-shrink-0">
                  <a 
                    href={job.applyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;

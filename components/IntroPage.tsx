
import React from 'react';

interface Props {
  onGetStarted: () => void;
}

const IntroPage: React.FC<Props> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-br from-indigo-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="max-w-4xl w-full">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Level Up Your Career with <span className="text-indigo-600 dark:text-indigo-400">ElevateMatch</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The specialized internship matching platform for students from Tier 2 and Tier 3 colleges. 
          Bridge the gap with AI-powered matching and personalized career guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onGetStarted}
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </button>
          <button className="px-8 py-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl border border-indigo-100 dark:border-slate-700 shadow-sm hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all duration-200">
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Matching", desc: "Our Gemini-powered engine finds roles that match your unique skills.", icon: "🤖" },
            { title: "Career Chatbot", desc: "24/7 assistant to help you with resumes and interview tips.", icon: "💬" },
            { title: "Tier 2/3 Focus", desc: "Opportunities curated for colleges that often get overlooked.", icon: "🎓" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroPage;

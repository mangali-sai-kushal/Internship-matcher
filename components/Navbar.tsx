
import React from 'react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  onLogout: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({ currentView, onViewChange, onLogout, isDark, onToggleTheme }) => {
  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Profile', view: 'profile' },
    { label: 'Match', view: 'match' },
    { label: 'Msg', view: 'msg' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 px-4 md:px-8 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onViewChange('home')}>
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-500/20 shadow-lg">E</div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">ElevateMatch</span>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`px-3 py-2 rounded-lg font-medium transition-all ${
              currentView === item.view 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
        
        <button
          onClick={onToggleTheme}
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        <button
          onClick={onLogout}
          className="px-4 py-2 text-slate-500 dark:text-slate-400 font-medium hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      <button className="md:hidden p-2 text-slate-600 dark:text-slate-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
      </button>
    </nav>
  );
};

export default Navbar;

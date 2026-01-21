
import React, { useState, useEffect } from 'react';
import { ViewState, User, Internship } from './types';
import IntroPage from './components/IntroPage';
import AuthForm from './components/AuthForm';
import Navbar from './components/Navbar';
import SidebarChat from './components/SidebarChat';
import Home from './components/Home';
import Profile from './components/Profile';
import Matching from './components/Matching';
import Messages from './components/Messages';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('intro');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [matches, setMatches] = useState<Internship[]>([]);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('elevate_theme');
    return savedTheme === 'dark';
  });

  // Local storage simulation for "backend"
  useEffect(() => {
    const savedUser = localStorage.getItem('elevate_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setView('home');
    }
  }, []);

  // Sync dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('elevate_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('elevate_theme', 'light');
    }
  }, [isDark]);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('elevate_user', JSON.stringify(user));
    setView('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('elevate_user');
    setView('intro');
  };

  const updateUserProfile = (updatedUser: User) => {
    setCurrentUser(updatedUser);
    localStorage.setItem('elevate_user', JSON.stringify(updatedUser));
  };

  const renderContent = () => {
    if (!currentUser) {
      if (view === 'intro') return <IntroPage onGetStarted={() => setView('signin')} />;
      if (view === 'signin') return <AuthForm type="signin" onAuthSuccess={handleLogin} onToggle={() => setView('signup')} />;
      if (view === 'signup') return <AuthForm type="signup" onAuthSuccess={() => setView('signin')} onToggle={() => setView('signin')} />;
    }

    switch (view) {
      case 'home': return <Home user={currentUser!} />;
      case 'profile': return <Profile user={currentUser!} onSave={updateUserProfile} />;
      case 'match': return <Matching user={currentUser!} onMatchesFound={setMatches} onNavigateToMsg={() => setView('msg')} />;
      case 'msg': return <Messages internships={matches} />;
      default: return <Home user={currentUser!} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {currentUser && (
        <Navbar 
          currentView={view} 
          onViewChange={setView} 
          onLogout={handleLogout} 
          isDark={isDark} 
          onToggleTheme={() => setIsDark(!isDark)} 
        />
      )}
      
      <main className={`flex-grow flex ${currentUser ? 'pt-16' : ''}`}>
        <div className={`flex-grow overflow-y-auto ${currentUser ? 'p-4 md:p-8' : ''}`}>
          {renderContent()}
        </div>
        
        {currentUser && (
          <aside className="hidden lg:block w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
            <SidebarChat />
          </aside>
        )}
      </main>

      {/* Mobile Chat Trigger - Optional */}
      {currentUser && (
        <div className="lg:hidden fixed bottom-6 right-6">
           <button 
            onClick={() => {/* Toggle Drawer */}}
            className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
           </button>
        </div>
      )}
    </div>
  );
};

export default App;

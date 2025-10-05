import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MapView } from './components/MapView';
import { DataManagement } from './components/DataManagement';
import { DecisionSupport } from './components/DecisionSupport';
import { Analytics } from './components/Analytics';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { AboutPage } from './components/AboutPage';
import { HelpPage } from './components/HelpPage';
import { Footer } from './components/Footer';
import { Language } from './constants/translations';

export type ViewType = 'dashboard' | 'map' | 'data' | 'dss' | 'analytics';
export type AppPage = 'landing' | 'login' | 'app' | 'about' | 'help';

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('landing');
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [language, setLanguage] = useState<Language>('en');
  const [userRole, setUserRole] = useState<'uploader' | 'officer' | null>(null);

  const handleLogin = (role: 'uploader' | 'officer') => {
    setUserRole(role);
    setCurrentPage('app');
  };

  const handleNavigate = (page: string) => {
    if (page === 'dashboard' || page === 'map' || page === 'data' || page === 'dss' || page === 'analytics') {
      setActiveView(page as ViewType);
      setCurrentPage('app');
    } else if (page === 'about') {
      setCurrentPage('about');
    } else if (page === 'help') {
      setCurrentPage('help');
    } else if (page === 'landing') {
      setCurrentPage('landing');
    } else if (page === 'login') {
      setCurrentPage('login');
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard selectedState={selectedState} />;
      case 'map':
        return <MapView selectedState={selectedState} />;
      case 'data':
        return <DataManagement selectedState={selectedState} />;
      case 'dss':
        return <DecisionSupport selectedState={selectedState} />;
      case 'analytics':
        return <Analytics selectedState={selectedState} />;
      default:
        return <Dashboard selectedState={selectedState} />;
    }
  };

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen flex flex-col">
        <LandingPage 
          onLaunch={() => setCurrentPage('login')}
          language={language}
        />
        <Footer language={language} />
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <LoginPage 
        onLogin={handleLogin}
        onBack={() => setCurrentPage('landing')}
        language={language}
      />
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header 
          selectedState={selectedState}
          onStateChange={setSelectedState}
          language={language}
          onLanguageChange={setLanguage}
          onNavigate={handleNavigate}
          userName={userRole === 'officer' ? 'Senior Officer' : 'Field Officer'}
        />
        <AboutPage />
        <Footer language={language} />
      </div>
    );
  }

  if (currentPage === 'help') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header 
          selectedState={selectedState}
          onStateChange={setSelectedState}
          language={language}
          onLanguageChange={setLanguage}
          onNavigate={handleNavigate}
          userName={userRole === 'officer' ? 'Senior Officer' : 'Field Officer'}
        />
        <HelpPage />
        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        selectedState={selectedState}
        onStateChange={setSelectedState}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={handleNavigate}
        userName={userRole === 'officer' ? 'Senior Officer' : 'Field Officer'}
      />
      <div className="flex flex-1">
        <Sidebar 
          activeView={activeView} 
          onViewChange={(view) => {
            setActiveView(view);
            setCurrentPage('app');
          }} 
        />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
      <Footer language={language} />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MapView } from './components/MapView';
import { DecisionSupport } from './components/DecisionSupport';
import { Reports } from './components/Reports';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SchemeComparison } from './components/SchemeComparison';
import { LanguageProvider } from './contexts/LanguageContext';

export type ViewType = 'dashboard' | 'atlas' | 'dss' | 'reports' | 'about';

function App() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [showSchemeComparison, setShowSchemeComparison] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard selectedState={selectedState} />;
      case 'atlas':
        return <MapView selectedState={selectedState} />;
      case 'dss':
        return <DecisionSupport selectedState={selectedState} onCompareSchemes={() => setShowSchemeComparison(true)} />;
      case 'reports':
        return <Reports />;
      case 'about':
        return <About />;
      default:
        return <Dashboard selectedState={selectedState} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header 
          selectedState={selectedState}
          onStateChange={setSelectedState}
        />
        <div className="flex flex-1">
          <Sidebar 
            activeView={activeView} 
            onViewChange={setActiveView} 
          />
          <main className="flex-1 p-6" role="main">
            {renderContent()}
          </main>
        </div>
        <Footer />
        <SchemeComparison 
          isOpen={showSchemeComparison}
          onClose={() => setShowSchemeComparison(false)}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
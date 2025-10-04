import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MapView } from './components/MapView';
import { DataManagement } from './components/DataManagement';
import { DecisionSupport } from './components/DecisionSupport';
import { Analytics } from './components/Analytics';

export type ViewType = 'dashboard' | 'map' | 'data' | 'dss' | 'analytics';

function App() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [selectedState, setSelectedState] = useState<string>('all');

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        selectedState={selectedState}
        onStateChange={setSelectedState}
      />
      <div className="flex">
        <Sidebar 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
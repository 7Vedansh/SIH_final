import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Database, 
  Brain, 
  BarChart3,
  FileText,
  Settings,
  HelpCircle
} from 'lucide-react';
import { ViewType } from '../App';

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'map', label: 'FRA Atlas', icon: Map },
  { id: 'data', label: 'Data Management', icon: Database },
  { id: 'dss', label: 'Decision Support', icon: Brain },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-gradient-to-b from-white to-blue-50 border-r border-gray-200 min-h-screen">
      <nav className="mt-8">
        <div className="px-4 mb-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Main Navigation
          </h2>
        </div>
        
        <div className="space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as ViewType)}
                className={`w-full flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-gov-blue-600 to-gov-blue-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-white hover:shadow-md hover:scale-102'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gov-blue-600'}`} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 px-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Support
          </h2>
          <div className="space-y-2 px-1">
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:shadow-md hover:text-gov-blue-600 rounded-lg transition-all">
              <FileText className="w-5 h-5 mr-3 text-gray-400" />
              Documentation
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:shadow-md hover:text-gov-blue-600 rounded-lg transition-all">
              <HelpCircle className="w-5 h-5 mr-3 text-gray-400" />
              Help Center
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:shadow-md hover:text-gov-blue-600 rounded-lg transition-all">
              <Settings className="w-5 h-5 mr-3 text-gray-400" />
              Settings
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
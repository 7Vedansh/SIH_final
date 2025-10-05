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
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-8">
        <div className="px-4 mb-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Main Navigation
          </h2>
        </div>
        
        <div className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as ViewType)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-green-100 text-green-700 border-r-2 border-green-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 px-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Support
          </h2>
          <div className="space-y-1">
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              <FileText className="w-5 h-5 mr-3 text-gray-400" />
              Documentation
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              <HelpCircle className="w-5 h-5 mr-3 text-gray-400" />
              Help Center
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              <Settings className="w-5 h-5 mr-3 text-gray-400" />
              Settings
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
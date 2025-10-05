import React from 'react';
import { ChevronDown, Bell, User, HelpCircle, LogOut, Globe } from 'lucide-react';
import { Language } from '../constants/translations';

interface HeaderProps {
  selectedState: string;
  onStateChange: (state: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate?: (page: string) => void;
  userName?: string;
}

const states = [
  { id: 'all', name: 'All States' },
  { id: 'mp', name: 'Madhya Pradesh' },
  { id: 'tripura', name: 'Tripura' },
  { id: 'odisha', name: 'Odisha' },
  { id: 'telangana', name: 'Telangana' }
];

export function Header({ selectedState, onStateChange, language, onLanguageChange, onNavigate, userName = 'Admin User' }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 backdrop-blur-lg bg-white/90">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate?.('dashboard')}>
            <div className="w-10 h-10 bg-gradient-to-br from-gov-saffron-500 to-gov-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🇮🇳</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FRA Atlas & DSS</h1>
              <p className="text-sm text-gray-600">Ministry of Tribal Affairs</p>
            </div>
          </div>
          
          <div className="relative">
            <select 
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
              className="appearance-none bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:border-gov-blue-500 transition-all"
            >
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <Globe className="w-5 h-5 text-gray-600 group-hover:text-gov-blue-600 transition-colors" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gov-blue-600 transition-colors">
              {language === 'en' ? 'EN' : 'हि'}
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate?.('help')}
            className="p-2 text-gray-600 hover:text-gov-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            title="Help"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <button className="relative p-2 text-gray-600 hover:text-gov-blue-600 hover:bg-blue-50 rounded-lg transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          
          <div className="flex items-center space-x-3 group cursor-pointer relative">
            <div className="w-9 h-9 bg-gradient-to-br from-gov-blue-500 to-gov-green-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-semibold text-gray-900 block">{userName}</span>
              <span className="text-xs text-gray-500">Senior Officer</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
            
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-t-xl flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 rounded-b-xl flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
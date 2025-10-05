import React from 'react';
import { ChevronDown, Bell, User } from 'lucide-react';

interface HeaderProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

const states = [
  { id: 'all', name: 'All States' },
  { id: 'mp', name: 'Madhya Pradesh' },
  { id: 'tripura', name: 'Tripura' },
  { id: 'odisha', name: 'Odisha' },
  { id: 'telangana', name: 'Telangana' }
];

export function Header({ selectedState, onStateChange }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FRA</span>
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
              className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
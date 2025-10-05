import React from 'react';
import { TrendingUp, TrendingDown, Video as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const colorClasses = {
  blue: 'bg-gradient-to-br from-gov-blue-500 to-gov-blue-600',
  green: 'bg-gradient-to-br from-gov-green-500 to-gov-green-600',
  orange: 'bg-gradient-to-br from-gov-saffron-500 to-gov-saffron-600',
  purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
};

export function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorClasses[color]} shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className={`flex items-center space-x-1 text-sm font-semibold px-3 py-1 rounded-full ${
          changeType === 'increase' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {changeType === 'increase' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2 animate-counter">{value}</h3>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
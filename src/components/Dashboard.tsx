import React from 'react';
import { TrendingUp, Users, FileCheck, MapPin, AlertCircle, CheckCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { ProgressChart } from './ProgressChart';
import { RecentActivity } from './RecentActivity';

interface DashboardProps {
  selectedState: string;
}

export function Dashboard({ selectedState }: DashboardProps) {
  const getStateStats = () => {
    if (selectedState === 'mp') {
      return {
        totalClaims: 125640,
        approvedClaims: 89750,
        pendingClaims: 35890,
        villages: 8432
      };
    } else if (selectedState === 'odisha') {
      return {
        totalClaims: 95420,
        approvedClaims: 72340,
        pendingClaims: 23080,
        villages: 6789
      };
    }
    // Default to all states combined
    return {
      totalClaims: 456780,
      approvedClaims: 324560,
      pendingClaims: 132220,
      villages: 28945
    };
  };

  const stats = getStateStats();
  const approvalRate = Math.round((stats.approvedClaims / stats.totalClaims) * 100);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            FRA Implementation Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Real-time monitoring of Forest Rights Act implementation across target states
          </p>
        </div>
        <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full text-sm font-semibold border-gov-green-500">
          <div className="w-2 h-2 bg-gov-green-600 rounded-full animate-pulse"></div>
          <span className="text-gov-green-800">Live Data</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total FRA Claims"
          value={stats.totalClaims.toLocaleString()}
          change="+12.5%"
          changeType="increase"
          icon={FileCheck}
          color="blue"
        />
        <StatCard
          title="Approved Claims"
          value={stats.approvedClaims.toLocaleString()}
          change="+8.3%"
          changeType="increase"
          icon={CheckCircle}
          color="green"
        />
        <StatCard
          title="Pending Review"
          value={stats.pendingClaims.toLocaleString()}
          change="-4.2%"
          changeType="decrease"
          icon={AlertCircle}
          color="orange"
        />
        <StatCard
          title="Villages Covered"
          value={stats.villages.toLocaleString()}
          change="+15.8%"
          changeType="increase"
          icon={MapPin}
          color="purple"
        />
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            State-wise Progress
          </h3>
          <ProgressChart selectedState={selectedState} />
        </div>
        
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Recent Activities
          </h3>
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card rounded-2xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-4 p-5 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-gov-blue-500 to-gov-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">View FRA Atlas</h4>
              <p className="text-sm text-gray-600">Interactive map</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-4 p-5 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-gov-green-500 to-gov-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Beneficiary Search</h4>
              <p className="text-sm text-gray-600">Find patta holders</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-4 p-5 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Generate Report</h4>
              <p className="text-sm text-gray-600">Export analytics</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
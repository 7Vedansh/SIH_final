import React from 'react';
import { TrendingUp, Users, FileCheck, MapPin, AlertCircle, CheckCircle, Activity } from 'lucide-react';
import { StatCard } from './StatCard';
import { ProgressChart } from './ProgressChart';
import { RecentActivity } from './RecentActivity';
import { useLanguage } from '../contexts/LanguageContext';
import { AIConfidenceBadge } from './AIConfidenceBadge';

interface DashboardProps {
  selectedState: string;
}

export function Dashboard({ selectedState }: DashboardProps) {
  const { t } = useLanguage();

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t('dashboardTitle')}
          </h1>
          <p className="text-gray-600">
            {t('dashboardSubtitle')}
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          <Activity className="w-4 h-4" />
          {t('liveData')}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('totalClaims')}
          value={stats.totalClaims.toLocaleString()}
          change="+12.5%"
          changeType="increase"
          icon={FileCheck}
          color="blue"
        />
        <StatCard
          title={t('approvedClaims')}
          value={stats.approvedClaims.toLocaleString()}
          change="+8.3%"
          changeType="increase"
          icon={CheckCircle}
          color="green"
        />
        <StatCard
          title={t('pendingReview')}
          value={stats.pendingClaims.toLocaleString()}
          change="-4.2%"
          changeType="decrease"
          icon={AlertCircle}
          color="orange"
        />
        <StatCard
          title={t('villagesCovered')}
          value={stats.villages.toLocaleString()}
          change="+15.8%"
          changeType="increase"
          icon={MapPin}
          color="purple"
        />
      </div>

      {/* AI Confidence Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Verification Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AIConfidenceBadge 
            confidence={{ level: 'high', score: 94, verified: true }}
            className="justify-center"
          />
          <AIConfidenceBadge 
            confidence={{ level: 'medium', score: 78, verified: false }}
            className="justify-center"
          />
          <AIConfidenceBadge 
            confidence={{ level: 'low', score: 45, verified: false }}
            className="justify-center"
          />
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            State-wise Progress
          </h3>
          <ProgressChart selectedState={selectedState} />
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activities
          </h3>
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">View FRA Atlas</h4>
              <p className="text-sm text-gray-600">Interactive map visualization</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">Beneficiary Search</h4>
              <p className="text-sm text-gray-600">Find patta holders</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">Generate Report</h4>
              <p className="text-sm text-gray-600">Export analytics data</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
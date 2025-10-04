import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Download, Calendar } from 'lucide-react';

interface AnalyticsProps {
  selectedState: string;
}

export function Analytics({ selectedState }: AnalyticsProps) {
  const [dateRange, setDateRange] = useState('last-30-days');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive insights into FRA implementation progress</p>
        </div>
        <div className="flex items-center space-x-2">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-3-months">Last 3 months</option>
            <option value="last-year">Last year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Processing Rate', value: '89%', change: '+5.2%', icon: TrendingUp, color: 'green' },
          { title: 'Approval Time', value: '45 days', change: '-12%', icon: Calendar, color: 'blue' },
          { title: 'Digitization Rate', value: '94%', change: '+8.1%', icon: BarChart3, color: 'purple' },
          { title: 'Coverage Rate', value: '76%', change: '+15%', icon: PieChart, color: 'orange' }
        ].map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                kpi.color === 'green' ? 'bg-green-100' :
                kpi.color === 'blue' ? 'bg-blue-100' :
                kpi.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
              }`}>
                <kpi.icon className={`w-6 h-6 ${
                  kpi.color === 'green' ? 'text-green-600' :
                  kpi.color === 'blue' ? 'text-blue-600' :
                  kpi.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                }`} />
              </div>
              <span className="text-green-600 text-sm font-medium">{kpi.change}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-gray-600 text-sm">{kpi.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress Trend</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive charts would display here</p>
              <p className="text-sm text-gray-400 mt-1">
                Monthly claim processing, approval rates, and progress trends
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">State-wise Distribution</h3>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Distribution charts would display here</p>
              <p className="text-sm text-gray-400 mt-1">
                Claims distribution across Madhya Pradesh, Odisha, Telangana, Tripura
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Reports */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Reports</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">State Performance</h4>
            <div className="space-y-2">
              {[
                { state: 'Tripura', score: 92 },
                { state: 'Madhya Pradesh', score: 87 },
                { state: 'Odisha', score: 83 },
                { state: 'Telangana', score: 79 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{item.state}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-green-600 rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{item.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Processing Efficiency</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Average Processing Time</span>
                <span className="text-sm font-medium">45 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Verification Accuracy</span>
                <span className="text-sm font-medium">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Digital Conversion</span>
                <span className="text-sm font-medium">89.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">System Uptime</span>
                <span className="text-sm font-medium">99.8%</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Impact Metrics</h4>
            <div className="space-y-3">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-900">324K+</div>
                <div className="text-sm text-green-700">Families Benefited</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-900">2.8M ha</div>
                <div className="text-sm text-blue-700">Forest Rights Granted</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-lg font-bold text-purple-900">28K+</div>
                <div className="text-sm text-purple-700">Villages Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
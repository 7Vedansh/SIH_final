import React, { useState } from 'react';
import { Download, FileText, BarChart3, Calendar, Filter, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AIConfidenceBadge } from './AIConfidenceBadge';

export function Reports() {
  const { t } = useLanguage();
  const [selectedReport, setSelectedReport] = useState('summary');
  const [dateRange, setDateRange] = useState('last-month');

  const reportTypes = [
    { id: 'summary', name: 'Executive Summary', icon: FileText },
    { id: 'progress', name: 'Progress Report', icon: BarChart3 },
    { id: 'verification', name: 'Verification Status', icon: FileText },
    { id: 'schemes', name: 'Scheme Analysis', icon: BarChart3 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate comprehensive reports on FRA implementation progress</p>
        </div>
        <div className="flex items-center space-x-2">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="last-week">Last Week</option>
            <option value="last-month">Last Month</option>
            <option value="last-quarter">Last Quarter</option>
            <option value="last-year">Last Year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Report Type Selection */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Report Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {reportTypes.map(report => {
            const Icon = report.icon;
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedReport === report.id
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <h4 className="font-medium">{report.name}</h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {reportTypes.find(r => r.id === selectedReport)?.name} Report
          </h3>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search in report..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {selectedReport === 'summary' && <ExecutiveSummary />}
        {selectedReport === 'progress' && <ProgressReport />}
        {selectedReport === 'verification' && <VerificationReport />}
        {selectedReport === 'schemes' && <SchemeAnalysis />}
      </div>
    </div>
  );
}

function ExecutiveSummary() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Claims Processed', value: '456,780', change: '+12.5%' },
          { title: 'Approval Rate', value: '71.2%', change: '+3.2%' },
          { title: 'Average Processing Time', value: '45 days', change: '-8.5%' },
          { title: 'Digital Conversion Rate', value: '94.3%', change: '+15.7%' }
        ].map((metric, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h4>
            <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <div className="text-sm text-green-600">{metric.change}</div>
          </div>
        ))}
      </div>

      <div className="prose max-w-none">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
        <ul className="space-y-2 text-gray-700">
          <li>• Significant improvement in digital processing efficiency across all target states</li>
          <li>• AI-powered verification system achieved 94.3% accuracy in document processing</li>
          <li>• Madhya Pradesh leads in claim approval rates with 78.5% success rate</li>
          <li>• Integration with Central Sector Schemes shows 67% eligibility overlap</li>
          <li>• Mobile accessibility improvements resulted in 45% increase in field officer usage</li>
        </ul>
      </div>
    </div>
  );
}

function ProgressReport() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">State</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Total Claims</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Approved</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Pending</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { state: 'Madhya Pradesh', total: 125640, approved: 89750, pending: 35890, progress: 71 },
              { state: 'Odisha', total: 95420, approved: 72340, pending: 23080, progress: 76 },
              { state: 'Telangana', total: 87350, approved: 59400, pending: 27950, progress: 68 },
              { state: 'Tripura', total: 148370, approved: 121660, pending: 26710, progress: 82 }
            ].map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">{row.state}</td>
                <td className="py-3 px-4 text-gray-600">{row.total.toLocaleString()}</td>
                <td className="py-3 px-4 text-green-600">{row.approved.toLocaleString()}</td>
                <td className="py-3 px-4 text-orange-600">{row.pending.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{row.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VerificationReport() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AIConfidenceBadge 
          confidence={{ level: 'high', score: 94, verified: true }}
          className="justify-center p-4"
        />
        <AIConfidenceBadge 
          confidence={{ level: 'medium', score: 78, verified: false }}
          className="justify-center p-4"
        />
        <AIConfidenceBadge 
          confidence={{ level: 'low', score: 45, verified: false }}
          className="justify-center p-4"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">AI Verification Statistics</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-gray-700 mb-2">Document Processing Accuracy</h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>OCR Accuracy</span>
                <span>96.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>NER Precision</span>
                <span>94.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Classification Accuracy</span>
                <span>92.5%</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 mb-2">Manual Review Requirements</h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>High Confidence (Auto-approved)</span>
                <span>67.3%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Medium Confidence (Review)</span>
                <span>28.1%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Low Confidence (Manual)</span>
                <span>4.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SchemeAnalysis() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Scheme Eligibility Analysis</h4>
          <div className="space-y-3">
            {[
              { scheme: 'PM-KISAN', eligible: 78, enrolled: 45 },
              { scheme: 'Jal Jeevan Mission', eligible: 65, enrolled: 32 },
              { scheme: 'MGNREGA', eligible: 89, enrolled: 67 },
              { scheme: 'PM Awas Yojana', eligible: 56, enrolled: 28 }
            ].map((scheme, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{scheme.scheme}</span>
                  <span>{scheme.eligible}% eligible</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full relative"
                    style={{ width: `${scheme.eligible}%` }}
                  >
                    <div 
                      className="bg-green-600 h-2 rounded-full absolute left-0"
                      style={{ width: `${(scheme.enrolled / scheme.eligible) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  {scheme.enrolled}% enrolled of eligible beneficiaries
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Implementation Recommendations</h4>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <strong className="text-blue-900">High Priority:</strong>
              <p className="text-blue-800 mt-1">
                Focus on PM-KISAN enrollment in Madhya Pradesh - 2,340 eligible FRA holders not enrolled
              </p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
              <strong className="text-yellow-900">Medium Priority:</strong>
              <p className="text-yellow-800 mt-1">
                Jal Jeevan Mission expansion in water-scarce CFR areas of Odisha
              </p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong className="text-green-900">Success Story:</strong>
              <p className="text-green-800 mt-1">
                Tripura achieved 89% MGNREGA enrollment among FRA beneficiaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
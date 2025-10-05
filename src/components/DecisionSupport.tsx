import React, { useState } from 'react';
import { Brain, Target, TrendingUp, Users, MapPin, AlertTriangle } from 'lucide-react';

interface DecisionSupportProps {
  selectedState: string;
}

export function DecisionSupport({ selectedState }: DecisionSupportProps) {
  const [selectedScheme, setSelectedScheme] = useState('pm-kisan');

  const schemes = [
    { id: 'pm-kisan', name: 'PM-KISAN', ministry: 'Agriculture & Farmers Welfare' },
    { id: 'jal-jeevan', name: 'Jal Jeevan Mission', ministry: 'Jal Shakti' },
    { id: 'mgnrega', name: 'MGNREGA', ministry: 'Rural Development' },
    { id: 'dajgua', name: 'DAJGUA Schemes', ministry: 'Multiple Ministries' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Decision Support System</h1>
          <p className="text-gray-600">AI-powered recommendations for Central Sector Scheme implementation</p>
        </div>
        <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          <Brain className="w-4 h-4" />
          AI Analysis Active
        </div>
      </div>

      {/* Scheme Selection */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Central Sector Scheme</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {schemes.map(scheme => (
            <button
              key={scheme.id}
              onClick={() => setSelectedScheme(scheme.id)}
              className={`p-4 border rounded-lg text-left transition-colors ${
                selectedScheme === scheme.id
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <h4 className="font-medium">{scheme.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{scheme.ministry}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Recommendations */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Priority Recommendations</h3>
          </div>
          
          <div className="space-y-4">
            {[
              {
                priority: 'High',
                village: 'Bharangaon, Balaghat',
                beneficiaries: 234,
                reason: 'High agricultural FRA holders with low PM-KISAN coverage',
                impact: 'Potential ₹2.8L annual benefit'
              },
              {
                priority: 'Medium',
                village: 'Devgaon, Dindori',
                beneficiaries: 156,
                reason: 'Water scarcity in CFR areas suitable for Jal Jeevan Mission',
                impact: 'Potential 89% coverage increase'
              },
              {
                priority: 'High',
                village: 'Khadgaon, Mandla',
                beneficiaries: 189,
                reason: 'Low employment generation, MGNREGA opportunities available',
                impact: 'Potential 450 job days creation'
              }
            ].map((rec, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rec.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rec.priority} Priority
                  </span>
                  <span className="text-sm text-gray-600">{rec.beneficiaries} beneficiaries</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{rec.village}</h4>
                <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                <p className="text-sm font-medium text-green-600">{rec.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Impact Analytics</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-900">78%</div>
              <div className="text-sm text-green-700">Coverage Rate</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-900">₹12.4Cr</div>
              <div className="text-sm text-blue-700">Potential Benefits</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Scheme Penetration</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Village Coverage</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Roadmap</h3>
        
        <div className="space-y-6">
          {[
            {
              phase: 'Phase 1',
              duration: '0-3 months',
              status: 'in-progress',
              tasks: ['Village identification', 'Beneficiary verification', 'Application processing']
            },
            {
              phase: 'Phase 2',
              duration: '3-6 months',
              status: 'planned',
              tasks: ['Scheme rollout', 'Training programs', 'Monitoring setup']
            },
            {
              phase: 'Phase 3',
              duration: '6-12 months',
              status: 'planned',
              tasks: ['Full implementation', 'Impact assessment', 'Optimization']
            }
          ].map((phase, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`w-4 h-4 rounded-full mt-1 ${
                phase.status === 'in-progress' ? 'bg-blue-500' : 
                phase.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
              }`} />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-gray-900">{phase.phase}</h4>
                  <span className="text-sm text-gray-600">({phase.duration})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <span key={taskIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
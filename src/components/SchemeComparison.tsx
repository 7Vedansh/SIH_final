import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { SchemeComparison as SchemeComparisonType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SchemeComparisonProps {
  isOpen: boolean;
  onClose: () => void;
}

const schemes = [
  { id: 'pm-kisan', name: 'PM-KISAN', nameHi: 'पीएम-किसान', ministry: 'Agriculture & Farmers Welfare' },
  { id: 'jal-jeevan', name: 'Jal Jeevan Mission', nameHi: 'जल जीवन मिशन', ministry: 'Jal Shakti' },
  { id: 'mgnrega', name: 'MGNREGA', nameHi: 'मनरेगा', ministry: 'Rural Development' },
  { id: 'pmay', name: 'PM Awas Yojana', nameHi: 'पीएम आवास योजना', ministry: 'Housing & Urban Affairs' }
];

export function SchemeComparison({ isOpen, onClose }: SchemeComparisonProps) {
  const { t, language } = useLanguage();
  const [scheme1, setScheme1] = useState('');
  const [scheme2, setScheme2] = useState('');
  const [comparison, setComparison] = useState<SchemeComparisonType | null>(null);

  const handleCompare = () => {
    if (scheme1 && scheme2) {
      // Mock comparison data
      setComparison({
        scheme1,
        scheme2,
        eligibilityMatch: Math.floor(Math.random() * 40) + 60,
        beneficiaryOverlap: Math.floor(Math.random() * 30) + 20,
        implementationComplexity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Central Sector Scheme Comparison</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close comparison modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select First Scheme
              </label>
              <select
                value={scheme1}
                onChange={(e) => setScheme1(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a scheme...</option>
                {schemes.map(scheme => (
                  <option key={scheme.id} value={scheme.id}>
                    {language === 'hi' ? scheme.nameHi : scheme.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Second Scheme
              </label>
              <select
                value={scheme2}
                onChange={(e) => setScheme2(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a scheme...</option>
                {schemes.map(scheme => (
                  <option key={scheme.id} value={scheme.id}>
                    {language === 'hi' ? scheme.nameHi : scheme.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleCompare}
              disabled={!scheme1 || !scheme2}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Compare Schemes
            </button>
          </div>

          {comparison && (
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-blue-600 font-semibold text-sm">S1</span>
                    </div>
                    <p className="text-sm font-medium">
                      {schemes.find(s => s.id === scheme1)?.[language === 'hi' ? 'nameHi' : 'name']}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-green-600 font-semibold text-sm">S2</span>
                    </div>
                    <p className="text-sm font-medium">
                      {schemes.find(s => s.id === scheme2)?.[language === 'hi' ? 'nameHi' : 'name']}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h4 className="font-medium text-gray-900">Eligibility Match</h4>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {comparison.eligibilityMatch}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Common eligibility criteria overlap
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <h4 className="font-medium text-gray-900">Beneficiary Overlap</h4>
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {comparison.beneficiaryOverlap}%
                  </div>
                  <p className="text-sm text-gray-600">
                    Potential duplicate beneficiaries
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${
                      comparison.implementationComplexity === 'low' ? 'bg-green-500' :
                      comparison.implementationComplexity === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <h4 className="font-medium text-gray-900">Implementation</h4>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${
                    comparison.implementationComplexity === 'low' ? 'text-green-600' :
                    comparison.implementationComplexity === 'medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {comparison.implementationComplexity.toUpperCase()}
                  </div>
                  <p className="text-sm text-gray-600">
                    Joint implementation complexity
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Shield, Target, Users, Globe, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Forest Rights Atlas & Decision Support System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          An AI-powered platform for comprehensive monitoring and decision support 
          for Forest Rights Act implementation across India
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Mission Statement</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          To provide a comprehensive, AI-powered digital platform that enables effective monitoring, 
          verification, and decision support for Forest Rights Act implementation, ensuring transparent 
          and efficient delivery of forest rights to tribal and forest-dwelling communities across 
          Madhya Pradesh, Tripura, Odisha, and Telangana.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
            <p className="text-sm text-gray-600">
              Government-grade security with end-to-end encryption and audit trails
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Community Focus</h3>
            <p className="text-sm text-gray-600">
              Designed to serve tribal communities and forest-dwelling populations
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Globe className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
            <p className="text-sm text-gray-600">
              Multilingual support and WCAG 2.1 AA compliant design
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {[
            {
              question: "What is the Forest Rights Act (FRA)?",
              answer: "The Forest Rights Act, 2006 recognizes the rights of forest-dwelling communities over land and forest resources, including Individual Forest Rights (IFR), Community Rights (CR), and Community Forest Resource Rights (CFR)."
            },
            {
              question: "How does AI verification work?",
              answer: "Our AI system uses advanced OCR, NER, and machine learning models to digitize and verify FRA documents, providing confidence scores and flagging records that need manual review."
            },
            {
              question: "Which states are covered?",
              answer: "The system currently covers Madhya Pradesh, Tripura, Odisha, and Telangana, with plans for expansion to other states."
            },
            {
              question: "How is data privacy ensured?",
              answer: "All data is encrypted, access is role-based, and the system follows government data protection guidelines with comprehensive audit logging."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">State Tribal Welfare Departments</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Madhya Pradesh:</strong><br />
                <Mail className="w-4 h-4 inline mr-1" />
                dirtadp@mp.gov.in, ctd.tribal@mp.gov.in
              </div>
              <div>
                <strong>Odisha:</strong><br />
                <Mail className="w-4 h-4 inline mr-1" />
                stscdev@gmail.com, directorstoffice@gmail.com
              </div>
              <div>
                <strong>Tripura:</strong><br />
                <Mail className="w-4 h-4 inline mr-1" />
                twdtripura@gmail.com, director.twd-tr@gov.in
              </div>
              <div>
                <strong>Telangana:</strong><br />
                <Mail className="w-4 h-4 inline mr-1" />
                secretary_tw@telangana.gov.in, ctwtgs@gmail.com
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ministry of Tribal Affairs</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span>fra-tribal@gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span>+011-23340513 / 23340473</span>
              </div>
              <div className="mt-4">
                <a 
                  href="https://tribal.nic.in/FRA.aspx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  FRA Guidelines & Clarifications →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Statement */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-3">Compliance & Accessibility</h3>
        <p className="text-sm text-gray-700 mb-3">
          This platform is designed to meet WCAG 2.1 AA accessibility standards and follows 
          Government of India guidelines for digital platforms. All data processing complies 
          with applicable privacy laws and government data protection policies.
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <span>• WCAG 2.1 AA Compliant</span>
          <span>• Government Data Protection</span>
          <span>• Role-based Access Control</span>
          <span>• Audit Trail Logging</span>
          <span>• Multilingual Support</span>
        </div>
      </div>
    </div>
  );
}
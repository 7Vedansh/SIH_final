import React, { useState } from 'react';
import { HelpCircle, BookOpen, Video, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

export function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I submit a new FRA claim?',
      answer: 'Navigate to the Data Management section, click on "Upload Documents," fill in the required details about the claim, and upload supporting documents. The AI system will automatically process and verify the information.'
    },
    {
      question: 'What documents are required for claim verification?',
      answer: 'You need to provide: (1) Community rights claim form, (2) GPS coordinates or boundary map, (3) Proof of residence, (4) Community resolution, and (5) Any historical evidence of forest use.'
    },
    {
      question: 'How long does the verification process take?',
      answer: 'The AI-powered system typically processes claims within 24-48 hours. Senior officers then review the recommendations, and the entire process usually completes within 45 days.'
    },
    {
      question: 'Can I track the status of my claim?',
      answer: 'Yes! Use the Dashboard to view real-time updates on your claim status. You will receive notifications at each stage of the verification process.'
    },
    {
      question: 'How do I access scheme recommendations?',
      answer: 'The Decision Support System automatically analyzes approved claims and suggests eligible central sector schemes. Navigate to the DSS section to view personalized recommendations.'
    },
    {
      question: 'Is the platform available in regional languages?',
      answer: 'Currently, the platform supports English and Hindi. We are actively working on adding more regional languages to improve accessibility.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-4 bg-gov-blue-100 rounded-full mb-4">
              <HelpCircle className="w-12 h-12 text-gov-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h1>
            <p className="text-xl text-gray-600">
              Find answers, tutorials, and support resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-gov-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step video guides for all features
              </p>
              <button className="text-gov-blue-600 font-semibold hover:text-gov-blue-700">
                Watch Now →
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gov-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">User Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive documentation and guides
              </p>
              <button className="text-gov-green-600 font-semibold hover:text-gov-green-700">
                Read Docs →
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get help from our support team
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                Contact Us →
              </button>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left py-3 hover:text-gov-blue-600 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gov-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="mt-2 text-gray-600 animate-slide-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 bg-gradient-to-br from-gov-blue-50 to-gov-green-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need More Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gov-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Get help via email within 24 hours
                  </p>
                  <a href="mailto:support@mota.gov.in" className="text-gov-blue-600 font-semibold hover:text-gov-blue-700">
                    support@mota.gov.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gov-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone Support</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Toll-free helpline available 24/7
                  </p>
                  <a href="tel:1800-XXX-XXXX" className="text-gov-green-600 font-semibold hover:text-gov-green-700">
                    1800-XXX-XXXX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

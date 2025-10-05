import React from 'react';
import { Target, Users, Award, Lightbulb, TrendingUp, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">FRA Atlas</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A transformative AI-powered Decision Support System for implementing 
              the Forest Rights Act across India
            </p>
          </div>

          <div className="glass-card rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-gov-blue-600" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The FRA Atlas is designed to empower forest-dwelling communities by streamlining 
              the recognition and verification of their rights under the Forest Rights Act, 2006. 
              We leverage cutting-edge AI and GIS technologies to make the claims process more 
              transparent, efficient, and accessible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Developed in collaboration with the Ministry of Tribal Affairs, this platform 
              serves as a bridge between traditional forest communities and modern governance, 
              ensuring their voices are heard and their rights are protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-gov-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                First-of-its-kind AI-powered platform combining geospatial analysis 
                with machine learning for automated claim processing and verification.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-gov-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                Government-grade security and data validation ensures accuracy and 
                transparency in every claim processed through the system.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Multilingual support and mobile-responsive design ensure that communities 
                across diverse regions can access and benefit from the platform.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">
                Over 324,000 claims approved, 28,000+ villages covered, and countless 
                lives transformed through efficient rights recognition.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-gov-blue-600" />
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { year: '2023', achievement: 'National Award for Digital Innovation' },
                { year: '2024', achievement: 'ISO 27001 Certification' },
                { year: '2025', achievement: '500K+ Claims Processed' },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-gov-blue-600 mb-2">{item.year}</div>
                  <div className="text-gray-700 font-medium">{item.achievement}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Ministry of Tribal Affairs',
                'National Informatics Centre',
                'IIT Network',
                'State Forest Departments',
              ].map((partner, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-4xl mb-2">🤝</div>
                  <div className="text-sm font-semibold text-gray-700">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

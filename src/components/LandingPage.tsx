import React from 'react';
import { Map, TrendingUp, Users, Award, ChevronRight, Play } from 'lucide-react';
import { translations, Language } from '../constants/translations';

interface LandingPageProps {
  onLaunch: () => void;
  language: Language;
}

export function LandingPage({ onLaunch, language }: LandingPageProps) {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gov-blue-900 via-gov-blue-800 to-gov-blue-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMjc0YSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="relative">
        <section className="container mx-auto px-4 pt-20 pb-32">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gov-saffron-500 to-gov-green-500 rounded-full flex items-center justify-center animate-float">
                <Map className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onLaunch}
                className="btn-primary bg-gov-saffron-500 hover:bg-gov-saffron-600 flex items-center gap-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                {t.hero.launchButton}
              </button>
              
              <button className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20 flex items-center gap-2 text-lg px-8 py-4">
                {t.hero.learnMore}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: '456K+', label: t.metrics.totalClaims, icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
              { value: '324K+', label: t.metrics.approvedClaims, icon: Award, color: 'from-green-500 to-green-600' },
              { value: '28K+', label: t.metrics.villages, icon: Users, color: 'from-purple-500 to-purple-600' },
              { value: '15+', label: t.metrics.states, icon: Map, color: 'from-orange-500 to-orange-600' },
            ].map((metric, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 animate-counter">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Upload Claims',
                desc: 'Field officers digitize and upload FRA claims with supporting documents',
                icon: '📄'
              },
              { 
                step: '02', 
                title: 'AI Processing',
                desc: 'Advanced AI analyzes documents, validates data, and extracts insights',
                icon: '🤖'
              },
              { 
                step: '03', 
                title: 'Decision Support',
                desc: 'Officers receive recommendations for scheme eligibility and approvals',
                icon: '✅'
              },
            ].map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl">
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-gov-blue-600 font-bold text-lg mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="glass-card rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="text-gray-700 font-semibold">Ministry of Tribal Affairs</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-gray-700 font-semibold">Government of India</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-gray-700 font-semibold">National Informatics Centre</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

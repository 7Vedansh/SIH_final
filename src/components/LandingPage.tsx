import React, { useEffect, useState } from 'react';
import {
  Map, Shield, FileCheck, Users, Globe, ChevronRight,
  TrendingUp, Award, MapPin, Workflow, Database, CheckCircle, Languages
} from 'lucide-react';
import { translations, Language } from '../constants/translations';

interface LandingPageProps {
  onLaunch: () => void;
  language: Language;
}

export function LandingPage({ onLaunch, language }: LandingPageProps) {
  const t = translations[language];
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({ claims: 0, approved: 0, villages: 0, states: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(language);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const targets = { claims: 456, approved: 324, villages: 28, states: 15 };
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        claims: Math.floor(targets.claims * progress),
        approved: Math.floor(targets.approved * progress),
        villages: Math.floor(targets.villages * progress),
        states: Math.floor(targets.states * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, [isVisible]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'hi' : 'en';
    setCurrentLang(newLang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  useEffect(() => {
    setCurrentLang(language);
  }, [language]);

  const currentT = translations[currentLang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gov-blue-950 via-gov-blue-900 to-gov-blue-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-forest-pattern animate-drift-slow"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-gov-green-500/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gov-saffron-500/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          ></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-gov-saffron-400" />
                  <span className="text-white/90 text-sm font-medium">
                    {currentLang === 'en' ? 'Government of India' : 'भारत सरकार'}
                  </span>
                </div>
                <div className="h-4 w-px bg-white/20"></div>
                <span className="text-white/70 text-sm">
                  {currentT.partners.mota}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-gov-saffron-500/20 px-4 py-1 rounded-full border border-gov-saffron-500/30">
                <Award className="w-4 h-4 text-gov-saffron-400" />
                <span className="text-white/90 text-sm font-semibold">
                  {currentLang === 'en' ? 'SIH 2025 Innovation' : 'SIH 2025 नवाचार'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 pt-12 pb-32 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 opacity-0 animate-fade-in-up">
              <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
                <div className="transformation-stage group">
                  <div className="stage-icon bg-white/10 hover:bg-white/20">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/70 text-xs mt-2">{currentT.journey.paper}</span>
                </div>
                <div className="arrow-flow">
                  <ChevronRight className="w-5 h-5 text-gov-green-400 animate-pulse" />
                </div>
                <div className="transformation-stage group animation-delay-100">
                  <div className="stage-icon bg-white/10 hover:bg-white/20">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/70 text-xs mt-2">{currentT.journey.digitize}</span>
                </div>
                <div className="arrow-flow">
                  <ChevronRight className="w-5 h-5 text-gov-green-400 animate-pulse animation-delay-200" />
                </div>
                <div className="transformation-stage group animation-delay-200">
                  <div className="stage-icon bg-white/10 hover:bg-white/20">
                    <Map className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/70 text-xs mt-2">{currentT.journey.map}</span>
                </div>
                <div className="arrow-flow">
                  <ChevronRight className="w-5 h-5 text-gov-green-400 animate-pulse animation-delay-300" />
                </div>
                <div className="transformation-stage group animation-delay-300">
                  <div className="stage-icon bg-gov-green-500/30 hover:bg-gov-green-500/40 border-2 border-gov-green-400">
                    <CheckCircle className="w-6 h-6 text-gov-green-300" />
                  </div>
                  <span className="text-white/90 text-xs mt-2 font-semibold">{currentT.journey.rights}</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <div className="inline-block mb-6 relative opacity-0 animate-fade-in-up animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-r from-gov-saffron-500 to-gov-green-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                <div className="relative w-32 h-32 bg-gradient-to-br from-gov-saffron-500 via-white to-gov-green-500 rounded-full flex items-center justify-center animate-float shadow-2xl">
                  <div className="w-28 h-28 bg-gov-blue-900 rounded-full flex items-center justify-center">
                    <Map className="w-14 h-14 text-white animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="portal-name-section mb-8 opacity-0 animate-fade-in-up animation-delay-400">
                <h1 className="portal-name-hero text-7xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
                  <span className="portal-name-gradient inline-block animate-glow-text">
                    {currentT.portalName}
                  </span>
                </h1>

                <div className="language-toggle-prominent inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full px-6 py-3 mb-6 hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-xl"
                  onClick={toggleLanguage}>
                  <Languages className="w-6 h-6 text-gov-saffron-400" />
                  <button className="flex items-center gap-3 font-semibold text-lg">
                    <span className={`transition-all ${currentLang === 'en' ? 'text-white scale-110' : 'text-white/50 scale-90'}`}>
                      EN
                    </span>
                    <div className="w-px h-6 bg-white/30"></div>
                    <span className={`transition-all ${currentLang === 'hi' ? 'text-white scale-110' : 'text-white/50 scale-90'}`}>
                      हि
                    </span>
                  </button>
                  <Globe className="w-6 h-6 text-gov-green-400" />
                </div>

                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gov-green-400 via-white to-gov-saffron-400 mb-6 animate-shimmer">
                  {currentT.portalTagline}
                </p>
              </div>

              <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in animation-delay-600">
                {currentT.hero.subtitle}
              </p>

              <p className="text-lg text-blue-200/80 mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-700">
                {currentT.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up animation-delay-800">
                <button
                  onClick={onLaunch}
                  className="group relative btn-launch bg-gradient-to-r from-gov-saffron-500 to-gov-saffron-600 hover:from-gov-saffron-600 hover:to-gov-saffron-700 text-white flex items-center gap-3 text-lg px-10 py-5 rounded-xl font-semibold shadow-2xl hover:shadow-gov-saffron-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <span>{currentT.hero.launchButton}</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group btn-secondary-landing bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 flex items-center gap-3 text-lg px-10 py-5 rounded-xl font-semibold backdrop-blur-md transition-all duration-300">
                  <span>{currentT.hero.exploreButton}</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                value: counters.claims,
                suffix: 'K+',
                label: currentT.metrics.totalClaims,
                icon: TrendingUp,
                color: 'from-blue-500 to-blue-600',
                gradient: 'from-blue-500/20 to-blue-600/20'
              },
              {
                value: counters.approved,
                suffix: 'K+',
                label: currentT.metrics.approvedClaims,
                icon: CheckCircle,
                color: 'from-green-500 to-green-600',
                gradient: 'from-green-500/20 to-green-600/20'
              },
              {
                value: counters.villages,
                suffix: 'K+',
                label: currentT.metrics.villages,
                icon: Users,
                color: 'from-gov-saffron-500 to-gov-saffron-600',
                gradient: 'from-gov-saffron-500/20 to-gov-saffron-600/20'
              },
              {
                value: counters.states,
                suffix: '+',
                label: currentT.metrics.states,
                icon: MapPin,
                color: 'from-purple-500 to-purple-600',
                gradient: 'from-purple-500/20 to-purple-600/20'
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="metric-card glass-card-landing p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group opacity-0 animate-slide-up"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:rotate-6 transform`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-blue-200 font-medium">
                  {metric.label}
                </div>
                <div className={`mt-4 h-2 rounded-full bg-gradient-to-r ${metric.gradient} overflow-hidden`}>
                  <div className={`h-full bg-gradient-to-r ${metric.color} animate-progress`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1300ms' }}>
              {currentT.roadmap.title}
            </h2>
            <p className="text-center text-blue-200 text-lg mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
              {currentT.roadmap.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: currentT.roadmap.step1.title,
                  desc: currentT.roadmap.step1.desc,
                  icon: FileCheck,
                  color: 'blue'
                },
                {
                  step: '02',
                  title: currentT.roadmap.step2.title,
                  desc: currentT.roadmap.step2.desc,
                  icon: Shield,
                  color: 'green'
                },
                {
                  step: '03',
                  title: currentT.roadmap.step3.title,
                  desc: currentT.roadmap.step3.desc,
                  icon: Globe,
                  color: 'saffron'
                },
                {
                  step: '04',
                  title: currentT.roadmap.step4.title,
                  desc: currentT.roadmap.step4.desc,
                  icon: Workflow,
                  color: 'purple'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="roadmap-card glass-card-landing p-8 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${1500 + index * 150}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-gov-${item.color}-500 to-gov-${item.color}-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12 transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-gov-saffron-400 font-bold text-sm mb-2 tracking-wider">
                      {currentLang === 'en' ? 'STEP' : 'चरण'} {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {index < 3 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ChevronRight className="w-8 h-8 text-gov-green-400 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto glass-card-landing rounded-3xl p-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '2100ms' }}>
            <h2 className="text-3xl font-bold text-white mb-3">
              {currentT.partners.title}
            </h2>
            <p className="text-blue-200 mb-8">{currentT.partners.subtitle}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="partner-badge group">
                <Shield className="w-6 h-6 text-gov-saffron-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold">{currentT.partners.mota}</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="partner-badge group">
                <Award className="w-6 h-6 text-gov-green-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold">{currentT.partners.goi}</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="partner-badge group">
                <Database className="w-6 h-6 text-blue-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-white font-semibold">{currentT.partners.nic}</div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-6 text-sm text-blue-200 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gov-green-400" />
                  <span>{currentT.partners.badge1}</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gov-saffron-400" />
                  <span>{currentT.partners.badge2}</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>{currentT.partners.badge3}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 pb-32">
          <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '2300ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentT.cta.title}
            </h2>
            <p className="text-xl text-blue-200 mb-10">
              {currentT.cta.subtitle}
            </p>
            <button
              onClick={onLaunch}
              className="group btn-launch bg-gradient-to-r from-gov-green-500 to-gov-green-600 hover:from-gov-green-600 hover:to-gov-green-700 text-white flex items-center gap-3 text-lg px-12 py-6 rounded-xl font-semibold shadow-2xl hover:shadow-gov-green-500/50 transform hover:scale-105 transition-all duration-300 mx-auto"
            >
              <span>{currentT.cta.button}</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

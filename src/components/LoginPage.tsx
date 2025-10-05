import React, { useState } from 'react';
import { UserCircle2, Shield, Lock, Mail, ArrowRight, ChevronLeft } from 'lucide-react';
import { translations, Language } from '../constants/translations';

interface LoginPageProps {
  onLogin: (role: 'uploader' | 'officer') => void;
  onBack: () => void;
  language: Language;
}

export function LoginPage({ onLogin, onBack, language }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<'uploader' | 'officer' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const t = translations[language];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (selectedRole) {
        onLogin(selectedRole);
      }
      setIsLoading(false);
    }, 1500);
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gov-blue-900 via-gov-blue-800 to-gov-blue-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMjc0YSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="relative max-w-5xl w-full">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <div className="glass-card rounded-3xl p-12 animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gov-saffron-500 to-gov-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">
              {t.login.title}
            </h1>
            <p className="text-center text-gray-600 mb-12">
              {t.login.subtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setSelectedRole('uploader')}
                className="glass-card p-8 rounded-2xl text-left hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-gov-blue-500"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gov-blue-500 transition-colors">
                  <UserCircle2 className="w-8 h-8 text-gov-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.login.claimUploader}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.login.claimUploaderDesc}
                </p>
                <div className="flex items-center text-gov-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </button>
              
              <button
                onClick={() => setSelectedRole('officer')}
                className="glass-card p-8 rounded-2xl text-left hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-gov-green-500"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gov-green-500 transition-colors">
                  <Shield className="w-8 h-8 text-gov-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.login.seniorOfficer}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.login.seniorOfficerDesc}
                </p>
                <div className="flex items-center text-gov-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gov-blue-900 via-gov-blue-800 to-gov-blue-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMjc0YSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="relative max-w-md w-full">
        <button
          onClick={() => setSelectedRole(null)}
          className="mb-8 flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Role Selection
        </button>
        
        <div className="glass-card rounded-3xl p-10 animate-fade-in">
          <div className="flex items-center justify-center mb-8">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
              selectedRole === 'uploader' 
                ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                : 'bg-gradient-to-br from-green-500 to-green-600'
            }`}>
              {selectedRole === 'uploader' ? (
                <UserCircle2 className="w-10 h-10 text-white" />
              ) : (
                <Shield className="w-10 h-10 text-white" />
              )}
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            {selectedRole === 'uploader' ? t.login.claimUploader : t.login.seniorOfficer}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            {t.login.subtitle}
          </p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.login.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-12"
                  placeholder="officer@mota.gov.in"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.login.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-12"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-gov-blue-600 border-gray-300 rounded focus:ring-gov-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-gov-blue-600 hover:text-gov-blue-700 font-semibold">
                {t.login.forgotPassword}
              </button>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary bg-gov-blue-600 hover:bg-gov-blue-700 flex items-center justify-center gap-2 relative"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  {t.login.loginButton}
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-xs text-gray-500">
              🔒 Secured by Ministry of Tribal Affairs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

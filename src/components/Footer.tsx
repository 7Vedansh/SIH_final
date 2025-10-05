import React from 'react';
import { translations, Language } from '../constants/translations';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];
  const currentDate = new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN');

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gov-saffron-500 to-gov-green-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <div>
                <div className="font-bold text-lg">FRA Atlas</div>
                <div className="text-xs text-gray-400">{t.footer.ministry}</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.government}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About FRA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.accessibility}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 support@mota.gov.in</li>
              <li>📞 1800-XXX-XXXX (Toll Free)</li>
              <li>🏛️ Ministry of Tribal Affairs</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>{t.footer.lastUpdated}: {currentDate}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span>{t.footer.version} 2.0.0</span>
              <span>•</span>
              <span>Verified by MoTA 🛡️</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            © 2025 {t.footer.government}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

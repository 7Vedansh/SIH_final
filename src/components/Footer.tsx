import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FRA</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t('govIndia')}</h3>
                <p className="text-gray-300 text-sm">{t('subtitle')}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('dashboard')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('atlas')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('dss')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('reports')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('privacy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('terms')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('accessibility')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
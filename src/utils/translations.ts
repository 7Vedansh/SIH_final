import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  en: {
    // Header
    title: 'Forest Rights Atlas & Decision Support System',
    subtitle: 'Ministry of Tribal Affairs, Government of India',
    dashboard: 'Dashboard',
    atlas: 'FRA Atlas',
    dss: 'Decision Support',
    reports: 'Reports',
    about: 'About',
    login: 'Login',
    
    // Dashboard
    dashboardTitle: 'FRA Implementation Dashboard',
    dashboardSubtitle: 'Real-time monitoring of Forest Rights Act implementation across target states',
    liveData: 'Live Data',
    totalClaims: 'Total FRA Claims',
    approvedClaims: 'Approved Claims',
    pendingReview: 'Pending Review',
    villagesCovered: 'Villages Covered',
    
    // AI Confidence
    aiVerified: 'AI Verified - High Confidence',
    manualReview: 'Manual Review Recommended',
    lowConfidence: 'Low Confidence - Needs Validation',
    confidenceScore: 'Confidence Score',
    
    // States
    allStates: 'All States',
    madhyaPradesh: 'Madhya Pradesh',
    tripura: 'Tripura',
    odisha: 'Odisha',
    telangana: 'Telangana',
    
    // Common
    export: 'Export',
    download: 'Download',
    search: 'Search',
    filter: 'Filter',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Footer
    govIndia: 'Government of India',
    copyright: '© 2024 Ministry of Tribal Affairs. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    accessibility: 'Accessibility Statement'
  },
  hi: {
    // Header
    title: 'वन अधिकार एटलस और निर्णय सहायता प्रणाली',
    subtitle: 'जनजातीय कार्य मंत्रालय, भारत सरकार',
    dashboard: 'डैशबोर्ड',
    atlas: 'एफआरए एटलस',
    dss: 'निर्णय सहायता',
    reports: 'रिपोर्ट',
    about: 'के बारे में',
    login: 'लॉगिन',
    
    // Dashboard
    dashboardTitle: 'एफआरए कार्यान्वयन डैशबोर्ड',
    dashboardSubtitle: 'लक्षित राज्यों में वन अधिकार अधिनियम कार्यान्वयन की वास्तविक समय निगरानी',
    liveData: 'लाइव डेटा',
    totalClaims: 'कुल एफआरए दावे',
    approvedClaims: 'स्वीकृत दावे',
    pendingReview: 'समीक्षाधीन',
    villagesCovered: 'कवर किए गए गांव',
    
    // AI Confidence
    aiVerified: 'एआई सत्यापित - उच्च विश्वास',
    manualReview: 'मैनुअल समीक्षा अनुशंसित',
    lowConfidence: 'कम विश्वास - सत्यापन आवश्यक',
    confidenceScore: 'विश्वास स्कोर',
    
    // States
    allStates: 'सभी राज्य',
    madhyaPradesh: 'मध्य प्रदेश',
    tripura: 'त्रिपुरा',
    odisha: 'ओडिशा',
    telangana: 'तेलंगाना',
    
    // Common
    export: 'निर्यात',
    download: 'डाउनलोड',
    search: 'खोजें',
    filter: 'फिल्टर',
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
    
    // Footer
    govIndia: 'भारत सरकार',
    copyright: '© 2024 जनजातीय कार्य मंत्रालय। सभी अधिकार सुरक्षित।',
    privacy: 'गोपनीयता नीति',
    terms: 'सेवा की शर्तें',
    accessibility: 'पहुंच वक्तव्य'
  }
};

export function getTranslation(key: string, language: string): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return typeof value === 'string' ? value : key;
}
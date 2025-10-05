export type Language = 'en' | 'hi';

export interface Translation {
  [key: string]: string | Translation;
}

export interface AIConfidence {
  level: 'high' | 'medium' | 'low';
  score: number;
  verified: boolean;
}

export interface SchemeComparison {
  scheme1: string;
  scheme2: string;
  eligibilityMatch: number;
  beneficiaryOverlap: number;
  implementationComplexity: 'low' | 'medium' | 'high';
}

export type ViewType = 'dashboard' | 'atlas' | 'dss' | 'reports' | 'about';
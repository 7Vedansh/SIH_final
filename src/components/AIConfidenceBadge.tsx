import React from 'react';
import { Shield, AlertTriangle, AlertCircle } from 'lucide-react';
import { AIConfidence } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface AIConfidenceBadgeProps {
  confidence: AIConfidence;
  className?: string;
}

export function AIConfidenceBadge({ confidence, className = '' }: AIConfidenceBadgeProps) {
  const { t } = useLanguage();

  const getConfig = () => {
    switch (confidence.level) {
      case 'high':
        return {
          icon: Shield,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          iconColor: 'text-green-600',
          label: t('aiVerified')
        };
      case 'medium':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600',
          label: t('manualReview')
        };
      case 'low':
        return {
          icon: AlertCircle,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600',
          label: t('lowConfidence')
        };
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  return (
    <div 
      className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg border ${config.bgColor} ${config.borderColor} ${config.textColor} ${className}`}
      role="status"
      aria-label={`${config.label} - ${t('confidenceScore')}: ${confidence.score}%`}
    >
      <Icon className={`w-4 h-4 ${config.iconColor}`} aria-hidden="true" />
      <span className="text-sm font-medium">{config.label}</span>
      <span className="text-xs font-semibold">({confidence.score}%)</span>
    </div>
  );
}
import React from 'react';

interface AshokaEmblemProps {
  className?: string;
}

export const AshokaEmblem: React.FC<AshokaEmblemProps> = ({ className }) => (
  <svg
    viewBox="0 0 320 320"
    className={className}
    role="img"
    aria-label="Ashoka Emblem"
  >
    <path
      fill="currentColor"
      d="M160 8c-83.95 0-152 68.05-152 152s68.05 152 152 152 152-68.05 152-152S243.95 8 160 8zm0 277.33c-69.22 0-125.33-56.11-125.33-125.33S90.78 34.67 160 34.67 285.33 90.78 285.33 160 229.22 285.33 160 285.33z"
    />
    {/* Simplified Ashoka Chakra path */}
    <path
      fill="currentColor"
      d="M160 64c-52.94 0-96 43.06-96 96s43.06 96 96 96 96-43.06 96-96-43.06-96-96-96zm0 176c-44.13 0-80-35.87-80-80s35.87-80 80-80 80 35.87 80 80-35.87 80-80 80z"
    />
  </svg>
);

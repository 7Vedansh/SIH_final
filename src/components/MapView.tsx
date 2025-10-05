// src/components/MapView.tsx
import React from 'react';
import WebGis, { WebGisProps } from './WebGis';

interface MapViewProps {
  selectedState?: string;
}

export const MapView: React.FC<MapViewProps> = ({ selectedState }) => {
  // forward the selectedState to the WebGis component (optional)
  return <WebGis selectedState={selectedState} />;
};

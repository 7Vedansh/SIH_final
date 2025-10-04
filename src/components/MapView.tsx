import React, { useState } from 'react';
import { Layers, Search, Filter, Download, Maximize2 } from 'lucide-react';

interface MapViewProps {
  selectedState: string;
}

export function MapView({ selectedState }: MapViewProps) {
  const [activeLayer, setActiveLayer] = useState('fra-claims');
  const [searchQuery, setSearchQuery] = useState('');

  const layers = [
    { id: 'fra-claims', name: 'FRA Claims', color: 'bg-green-500' },
    { id: 'forest-cover', name: 'Forest Cover', color: 'bg-green-700' },
    { id: 'water-bodies', name: 'Water Bodies', color: 'bg-blue-500' },
    { id: 'settlements', name: 'Settlements', color: 'bg-orange-500' },
    { id: 'infrastructure', name: 'Infrastructure', color: 'bg-gray-500' }
  ];

  return (
    <div className="h-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FRA Atlas</h1>
          <p className="text-gray-600">Interactive geospatial visualization of FRA implementation</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Export Map</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Maximize2 className="w-4 h-4" />
            <span>Full Screen</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Map Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search villages, districts, or patta holders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex">
          {/* Layer Panel */}
          <div className="w-80 border-r border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Layers className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Map Layers</h3>
            </div>
            
            <div className="space-y-2">
              {layers.map(layer => (
                <label key={layer.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeLayer === layer.id}
                    onChange={() => setActiveLayer(layer.id)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <div className={`w-3 h-3 rounded ${layer.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{layer.name}</span>
                </label>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Legend</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded"></div>
                  <span>Approved Claims</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span>Pending Claims</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Rejected Claims</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 relative">
            <div className="h-96 bg-gradient-to-br from-green-100 via-green-50 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map Loading</h3>
                <p className="text-gray-500 max-w-md">
                  In a production environment, this would display an interactive map with satellite imagery,
                  FRA claim boundaries, and real-time data layers using services like Google Maps, Mapbox, or ISRO's Bhuvan.
                </p>
                <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-600">
                  <span>🗺️ Satellite View</span>
                  <span>📍 GPS Coordinates</span>
                  <span>🏘️ Village Boundaries</span>
                </div>
              </div>
            </div>

            {/* Map Stats Overlay */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Current View Statistics</h4>
              <div className="space-y-1 text-sm">
                <div>Villages: 1,234</div>
                <div>Claims: 8,567</div>
                <div>Forest Area: 45,890 ha</div>
                <div>Water Bodies: 234</div>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg">
              <button className="block p-3 hover:bg-gray-50 border-b border-gray-200">+</button>
              <button className="block p-3 hover:bg-gray-50">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
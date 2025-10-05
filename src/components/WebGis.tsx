// src/components/WebGis.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  Filter,
  Download,
  Maximize2,
  Navigation,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface WebGisProps {
  selectedState?: string;
}

const WebGis: React.FC<WebGisProps> = ({ selectedState }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersRef = useRef<Record<string, L.TileLayer.WMS>>({});

  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>({
    fraAtlas: true,
    indiaState: false,
    mpDistricts: false,
    mpSubdistricts: false,
    mpVillages: false,
    kotraCadastrals: false,
    kotraWater: false,
    kotraTree: false,
    kotraShrub: false,
    kotraGrass: false,
    kotraCrop: false,
    kotraBuiltup: false,
    fraClaims: true,
  });

  const [baseMap, setBaseMap] = useState<'osm' | 'satellite'>('osm');
  const [mapCenter, setMapCenter] = useState({ lat: 26.43, lon: 77.62 });
  const [zoom, setZoom] = useState(12);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    boundaries: false,
    landcover: false,
  });

  const baseLayersRef = useRef<{ osm: L.TileLayer; satellite: L.TileLayer } | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [mapCenter.lat, mapCenter.lon],
      zoom: zoom,
      zoomControl: false,
      scrollWheelZoom: true,
    });

    mapInstanceRef.current = map;

    // Base layers
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    });

    const satellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'Tiles © Esri',
        maxZoom: 19,
      }
    );

    baseLayersRef.current = { osm, satellite };
    osm.addTo(map);

    // WMS Layer creation helper
    const createWMSLayer = (layerName: string) => {
      return L.tileLayer.wms('http://35.200.246.212:8080/geoserver/wms', {
        layers: layerName,
        format: 'image/png',
        transparent: true,
        version: '1.1.0',
        maxZoom: 19,
      });
    };

    // Create all WMS layers
    layersRef.current = {
      fraAtlas: createWMSLayer('fra_atlas_kotra'),
      indiaState: createWMSLayer('cite:India_State_Boundary'),
      mpDistricts: createWMSLayer('cite:mp_districts_single'),
      mpSubdistricts: createWMSLayer('cite:mp_subdistricts_single'),
      mpVillages: createWMSLayer('cite:mp_villages_single'),
      kotraCadastrals: createWMSLayer('cite:kotra_cadastrals'),
      kotraWater: createWMSLayer('cite:Kotra_Water_Polygons'),
      kotraTree: createWMSLayer('cite:Kotra_Treecover_Polygons'),
      kotraShrub: createWMSLayer('cite:Kotra_Shrubland_Polygons'),
      kotraGrass: createWMSLayer('cite:Kotra_Grasslands_Polygons'),
      kotraCrop: createWMSLayer('cite:Kotra_Cropland_Polygons'),
      kotraBuiltup: createWMSLayer('cite:Kotra_Builtup_Polygons'),
      fraClaims: createWMSLayer('cite:fra_claims'),
    };

    // Add default layers
    layersRef.current.fraAtlas.addTo(map);
    layersRef.current.fraClaims.addTo(map);

    // Update map center on move
    map.on('move', () => {
      const center = map.getCenter();
      setMapCenter({ lat: center.lat, lon: center.lng });
    });

    // Update zoom on zoom change
    map.on('zoomend', () => {
      setZoom(map.getZoom());
    });

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLayer = (layerKey: string) => {
    if (!mapInstanceRef.current || !layersRef.current[layerKey]) return;

    const layer = layersRef.current[layerKey];
    const isActive = !!activeLayers[layerKey];

    if (isActive) {
      mapInstanceRef.current.removeLayer(layer);
    } else {
      mapInstanceRef.current.addLayer(layer);
    }

    setActiveLayers(prev => ({ ...prev, [layerKey]: !isActive }));
  };

  const toggleBaseMap = (type: 'osm' | 'satellite') => {
    if (!mapInstanceRef.current || !baseLayersRef.current) return;

    const { osm, satellite } = baseLayersRef.current;

    if (type === 'osm') {
      mapInstanceRef.current.removeLayer(satellite);
      mapInstanceRef.current.addLayer(osm);
    } else {
      mapInstanceRef.current.removeLayer(osm);
      mapInstanceRef.current.addLayer(satellite);
    }

    setBaseMap(type);
  };

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }));
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([26.43, 77.62], 12);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">WebGIS Atlas - Kotra Region</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex h-full">
        {/* Map Area */}
        <div className="flex-1 relative">
          <div ref={mapRef} className="absolute inset-0 w-full h-full z-0" />

          {/* Map controls */}
          <div className="absolute bottom-8 right-8 flex flex-col space-y-2 z-10">
            <button
              onClick={handleResetView}
              className="bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors"
              title="Reset View"
            >
              <Navigation className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomIn}
              className="bg-white shadow-lg rounded-lg px-3 py-2 text-sm hover:bg-gray-50 transition-colors font-semibold"
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white shadow-lg rounded-lg px-3 py-2 text-sm hover:bg-gray-50 transition-colors font-semibold"
            >
              -
            </button>
          </div>

          {/* Coordinates display */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-sm px-3 py-2 z-10">
            <span className="text-xs text-gray-600">
              Lat: {mapCenter.lat.toFixed(4)}° Lon: {mapCenter.lon.toFixed(4)}° | Zoom: {zoom}
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-gray-200 flex flex-col overflow-y-auto">
          {/* Base Map Selection */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Base Map</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => toggleBaseMap('osm')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  baseMap === 'osm'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                OpenStreetMap
              </button>
              <button
                onClick={() => toggleBaseMap('satellite')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  baseMap === 'satellite'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Satellite
              </button>
            </div>
          </div>

          {/* Layer Control */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <Layers className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Layers</h3>
            </div>

            <div className="space-y-2">
              {/* FRA Atlas Group Layer */}
              <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={activeLayers.fraAtlas}
                  onChange={() => toggleLayer('fraAtlas')}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium">FRA Atlas (Group)</span>
              </label>

              {/* Boundaries Group */}
              <div className="border-l-2 border-gray-200 pl-2">
                <button
                  onClick={() => toggleGroup('boundaries')}
                  className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-50 rounded"
                >
                  <span className="text-sm font-medium text-gray-700">Boundaries</span>
                  {expandedGroups.boundaries ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedGroups.boundaries && (
                  <div className="ml-2 mt-1 space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.indiaState}
                        onChange={() => toggleLayer('indiaState')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">India State Boundary</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.mpDistricts}
                        onChange={() => toggleLayer('mpDistricts')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">MP Districts</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.mpSubdistricts}
                        onChange={() => toggleLayer('mpSubdistricts')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">MP Subdistricts</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.mpVillages}
                        onChange={() => toggleLayer('mpVillages')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">MP Villages</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Kotra Cadastrals */}
              <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={activeLayers.kotraCadastrals}
                  onChange={() => toggleLayer('kotraCadastrals')}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">Kotra Cadastrals</span>
              </label>

              {/* Land Cover Group */}
              <div className="border-l-2 border-gray-200 pl-2">
                <button
                  onClick={() => toggleGroup('landcover')}
                  className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-50 rounded"
                >
                  <span className="text-sm font-medium text-gray-700">Kotra Land Cover</span>
                  {expandedGroups.landcover ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedGroups.landcover && (
                  <div className="ml-2 mt-1 space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.kotraWater}
                        onChange={() => toggleLayer('kotraWater')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">Water</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.kotraTree}
                        onChange={() => toggleLayer('kotraTree')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">Treecover</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.kotraShrub}
                        onChange={() => toggleLayer('kotraShrub')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">Shrubland</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.kotraGrass}
                        onChange={() => toggleLayer('kotraGrass')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">Grasslands</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.kotraCrop}
                        onChange={() => toggleLayer('kotraCrop')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">Cropland</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-1.5 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={activeLayers.kotraBuiltup}
                        onChange={() => toggleLayer('kotraBuiltup')}
                        className="rounded border-gray-300"
                      />
                      <span className="text-xs">Built-up</span>
                    </label>
                  </div>
                )}
              </div>

              {/* FRA Claims */}
              <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={activeLayers.fraClaims}
                  onChange={() => toggleLayer('fraClaims')}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium">FRA Claims</span>
              </label>
            </div>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Filters</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Claim Status
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>All Claims</option>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area Range (Ha)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
              Apply Filters
            </button>
          </div>

          {/* Legend */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Legend</h3>
            <div className="space-y-3">
              {activeLayers.fraClaims && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700">FRA Claims Status</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-xs text-gray-700">Approved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-xs text-gray-700">Pending</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-xs text-gray-700">Rejected</span>
                  </div>
                </div>
              )}

              {(activeLayers.kotraWater || activeLayers.kotraTree || activeLayers.kotraShrub ||
                activeLayers.kotraGrass || activeLayers.kotraCrop || activeLayers.kotraBuiltup) && (
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-700">Land Cover Types</p>
                  {activeLayers.kotraWater && (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-400 rounded"></div>
                      <span className="text-xs text-gray-700">Water Bodies</span>
                    </div>
                  )}
                  {activeLayers.kotraTree && (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-700 rounded"></div>
                      <span className="text-xs text-gray-700">Treecover</span>
                    </div>
                  )}
                  {activeLayers.kotraShrub && (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-400 rounded"></div>
                      <span className="text-xs text-gray-700">Shrubland</span>
                    </div>
                  )}
                  {activeLayers.kotraGrass && (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-lime-300 rounded"></div>
                      <span className="text-xs text-gray-700">Grasslands</span>
                    </div>
                  )}
                  {activeLayers.kotraCrop && (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                      <span className="text-xs text-gray-700">Cropland</span>
                    </div>
                  )}
                  {activeLayers.kotraBuiltup && (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-500 rounded"></div>
                      <span className="text-xs text-gray-700">Built-up Area</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Map Info */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600">
              <strong>Data Source:</strong> GeoServer WMS
            </p>
            <p className="text-xs text-gray-600 mt-1">
              <strong>Server:</strong> 35.200.246.212:8080
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Click and drag to pan • Scroll to zoom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebGis;

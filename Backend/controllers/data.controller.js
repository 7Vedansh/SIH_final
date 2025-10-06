const { successResponse, errorResponse } = require('../utils/responses');

// Mock FRA data (replace with database queries in production)
const fraData = [
  {
    id: "MP-CFR-001",
    document_type: "Community Forest Rights",
    village: "Badaguda",
    district: "Dindori",
    state: "MP",
    patta_holders: "Gram Sabha Badaguda",
    area_hectares: 245.7,
    status: "Granted",
    coordinates: { lat: 22.9541, lon: 81.0841 },
    boundary_polygon: [
      [22.9541, 81.0841],
      [22.9561, 81.0861],
      [22.9581, 81.0841],
      [22.9541, 81.0841]
    ],
    ai_assets: {
      agricultural_land: 89.2,
      forest_cover: 142.3,
      water_bodies: 14.2,
      homesteads: 12.4
    },
    khasra_numbers: ["123/1", "124/2"],
    extraction_confidence: 0.94
  },
  {
    id: "MP-IFR-002",
    document_type: "Individual Forest Rights",
    village: "Bharangaon",
    district: "Balaghat",
    state: "MP",
    patta_holders: "Ram Singh",
    area_hectares: 12.5,
    status: "Granted",
    coordinates: { lat: 22.1234, lon: 80.5678 },
    boundary_polygon: [
      [22.1234, 80.5678],
      [22.1244, 80.5688],
      [22.1254, 80.5678],
      [22.1234, 80.5678]
    ],
    ai_assets: {
      agricultural_land: 8.5,
      forest_cover: 2.5,
      water_bodies: 0.5,
      homesteads: 1.0
    },
    khasra_numbers: ["456/3"],
    extraction_confidence: 0.91
  },
  {
    id: "OD-CFR-003",
    document_type: "Community Forest Rights",
    village: "Devgaon",
    district: "Koraput",
    state: "Odisha",
    patta_holders: "Village Committee",
    area_hectares: 189.3,
    status: "Pending",
    coordinates: { lat: 18.8567, lon: 82.9234 },
    boundary_polygon: [
      [18.8567, 82.9234],
      [18.8577, 82.9244],
      [18.8587, 82.9234],
      [18.8567, 82.9234]
    ],
    ai_assets: {
      agricultural_land: 65.3,
      forest_cover: 108.5,
      water_bodies: 8.5,
      homesteads: 7.0
    },
    khasra_numbers: ["789/1", "790/2"],
    extraction_confidence: 0.87
  }
];

const assetLayers = [
  {
    id: "ai_asset_maps",
    display_name: "AI Asset Maps",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "ai_asset_maps"
  },
  {
    id: "Kotra_Water_Polygons",
    display_name: "Water Polygons",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:Kotra_Water_Polygons"
  },
  {
    id: "Kotra_Shrubland_Polygons",
    display_name: "Shrubland Polygons",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:Kotra_Shrubland_Polygons"
  },
  {
    id: "Kotra_Treecover_Polygons",
    display_name: "Treecover Polygons",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:Kotra_Treecover_Polygons"
  },
  {
    id: "Kotra_Grasslands_Polygons",
    display_name: "Grasslands Polygons",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:Kotra_Grasslands_Polygons"
  },
  {
    id: "Kotra_Cropland_Polygons",
    display_name: "Cropland Polygons",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:Kotra_Cropland_Polygons"
  },
  {
    id: "Kotra_Builtup_Polygons",
    display_name: "Builtup Polygons",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:Kotra_Builtup_Polygons"
  },
  {
    id: "kotra_cadastrals",
    display_name: "Cadastrals",
    wms_url: "http://localhost:8080/geoserver/wms",
    qualified_layer: "cite:kotra_cadastrals"
  }
];

const getFRAData = async (req, res) => {
  try {
    const { state } = req.query;

    let filteredData = fraData;

    if (state && state !== 'All') {
      filteredData = fraData.filter(item => item.state === state);
    }

    return successResponse(res, filteredData, 'FRA data retrieved successfully', 200);
  } catch (error) {
    console.error('Get FRA data error:', error);
    return errorResponse(res, error, 500);
  }
};

const getDigitizationProgress = async (req, res) => {
  try {
    const progressData = {
      total_documents: 15234,
      processed_documents: 12567,
      accuracy_rate: 0.97,
      processing_rate: 230,
      last_updated: new Date().toISOString()
    };

    return successResponse(res, progressData, 'Progress data retrieved successfully', 200);
  } catch (error) {
    console.error('Get progress error:', error);
    return errorResponse(res, error, 500);
  }
};

const getAssetLayers = async (req, res) => {
  try {
    return successResponse(res, assetLayers, 'Asset layers retrieved successfully', 200);
  } catch (error) {
    console.error('Get asset layers error:', error);
    return errorResponse(res, error, 500);
  }
};

module.exports = {
  getFRAData,
  getDigitizationProgress,
  getAssetLayers
};
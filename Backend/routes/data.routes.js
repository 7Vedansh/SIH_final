const express = require('express');
const router = express.Router();
const { 
  getFRAData, 
  getDigitizationProgress, 
  getAssetLayers 
} = require('../controllers/data.controller');

// GET /api/getFRAData
router.get('/getFRAData', getFRAData);

// GET /api/getDigitizationProgress
router.get('/getDigitizationProgress', getDigitizationProgress);

// GET /api/asset-layers
router.get('/asset-layers', getAssetLayers);

module.exports = router;
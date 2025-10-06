const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware');
const { uploadFile, uploadMultipleFiles } = require('../controllers/upload.controller');

// POST /api/upload - Single file upload
router.post('/upload', upload.single('file'), uploadFile);

// POST /api/upload-multiple - Multiple files upload
router.post('/upload-multiple', upload.array('files', 10), uploadMultipleFiles);

module.exports = router;
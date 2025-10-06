const { s3Client, bucketName } = require('../config/backblaze.config');
const { successResponse, errorResponse } = require('../utils/responses');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return errorResponse(res, 'No file uploaded', 400);
    }

    const file = req.file;
    
    // Generate unique filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileExtension = path.extname(file.originalname);
    const fileBaseName = path.basename(file.originalname, fileExtension);
    const uniqueId = uuidv4().split('-')[0];
    const safeFileName = `${timestamp}_${fileBaseName}_${uniqueId}${fileExtension}`;

    // Upload parameters
    const uploadParams = {
      Bucket: bucketName,
      Key: safeFileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    // Upload to Backblaze B2
    const result = await s3Client.upload(uploadParams).promise();

    const fileUrl = `${process.env.BACKBLAZE_ENDPOINT}/${bucketName}/${safeFileName}`;
    const responseData = {
      success: true,
      message: 'File uploaded successfully',
      file_url: fileUrl,
      filename: safeFileName,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      uploadedAt: new Date().toISOString()
    };

    return successResponse(res, responseData, 'File uploaded successfully', 200);
  } catch (error) {
    console.error('Upload error:', error);
    return errorResponse(res, `Upload failed: ${error.message}`, 500);
  }
};

const uploadMultipleFiles = async (req, res) => {
  try {
     console.log('🔍 Upload Debug - bucketName:', bucketName);
    if (!req.files || req.files.length === 0) {
      return errorResponse(res, 'No files uploaded', 400);
    }

    const uploadPromises = req.files.map(async (file) => {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileExtension = path.extname(file.originalname);
      const fileBaseName = path.basename(file.originalname, fileExtension);
      const uniqueId = uuidv4().split('-')[0];
      const safeFileName = `${timestamp}_${fileBaseName}_${uniqueId}${fileExtension}`;

      const uploadParams = {
        Bucket: bucketName,
        Key: safeFileName,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      const result = await s3Client.upload(uploadParams).promise();
      const fileUrl = `${process.env.BACKBLAZE_ENDPOINT}/${bucketName}/${safeFileName}`;
      return {
        filename: safeFileName,
        originalName: file.originalname,
        file_url: fileUrl,
        size: file.size,
        mimetype: file.mimetype
      };
    });

    const uploadedFiles = await Promise.all(uploadPromises);

    const responseData = {
      success: true,
      message: `${uploadedFiles.length} files uploaded successfully`,
      files: uploadedFiles,
      uploadedAt: new Date().toISOString()
    };

    return successResponse(res, responseData, 'Files uploaded successfully', 200);
  } catch (error) {
    console.error('Multiple upload error:', error);
    return errorResponse(res, `Upload failed: ${error.message}`, 500);
  }
};

module.exports = {
  uploadFile,
  uploadMultipleFiles
};
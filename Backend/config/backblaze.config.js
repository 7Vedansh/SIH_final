const AWS = require('aws-sdk');

// Configure AWS SDK for Backblaze B2
const s3Client = new AWS.S3({
  endpoint: process.env.B2_ENDPOINT,
  accessKeyId: process.env.B2_KEY_ID,
  secretAccessKey: process.env.B2_APP_KEY,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  region: process.env.B2_REGION
});

const bucketName = process.env.B2_BUCKET;

module.exports = {
  s3Client,
  bucketName
};
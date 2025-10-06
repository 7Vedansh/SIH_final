const AWS = require('aws-sdk');

// Debug logging
console.log('🔍 Backblaze Config Check:');
console.log('Endpoint:', process.env.BACKBLAZE_ENDPOINT);
console.log('Bucket Name:', process.env.BACKBLAZE_BUCKET_NAME);
console.log('Key ID:', process.env.BACKBLAZE_KEY_ID ? '✅ Set' : '❌ Missing');
console.log('App Key:', process.env.BACKBLAZE_APPLICATION_KEY ? '✅ Set' : '❌ Missing');
console.log('Region:', process.env.BACKBLAZE_REGION);

// Store bucket name in a constant BEFORE creating s3Client
const bucketName = process.env.BACKBLAZE_BUCKET_NAME;

console.log('Bucket name being exported:', bucketName); // Additional debug
console.log('---');

// Configure AWS SDK for Backblaze B2
const s3Client = new AWS.S3({
  endpoint: process.env.BACKBLAZE_ENDPOINT,
  accessKeyId: process.env.BACKBLAZE_KEY_ID,
  secretAccessKey: process.env.BACKBLAZE_APPLICATION_KEY,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  region: process.env.BACKBLAZE_REGION
});

module.exports = {
  s3Client,
  bucketName
};
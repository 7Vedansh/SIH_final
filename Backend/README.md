# FRA Atlas Backend API

Node.js/Express backend for the FRA Atlas application with Backblaze B2 file storage integration.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file (copy from .env.example if available)
cp .env.example .env

# Update .env with your credentials

# Start development server
npm run dev

# Start production server
npm start
```

## 📁 Project Structure

```
backend/
├── config/
│   └── backblaze.config.js      # B2 storage configuration
├── controllers/
│   ├── auth.controller.js       # Authentication logic
│   ├── data.controller.js       # Data retrieval logic
│   └── upload.controller.js     # File upload logic
├── middleware/
│   ├── auth.middleware.js       # Auth middleware
│   └── upload.middleware.js     # Multer configuration
├── routes/
│   ├── auth.routes.js           # Auth endpoints
│   ├── data.routes.js           # Data endpoints
│   └── upload.routes.js         # Upload endpoints
├── utils/
│   └── responses.js             # Response helpers
├── .env                         # Environment variables
├── .gitignore                   # Git ignore file
├── package.json                 # Dependencies
├── README.md                    # This file
└── server.js                    # Main server file
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### File Management
- `POST /api/upload` - Upload single file
- `POST /api/upload-multiple` - Upload multiple files (max 10)

### Data Retrieval
- `GET /api/getFRAData?state=<state>` - Get FRA records (optional state filter)
- `GET /api/getDigitizationProgress` - Get processing statistics
- `GET /api/asset-layers` - Get GIS map layers

### System
- `GET /health` - Health check endpoint

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Backblaze B2 Configuration
B2_BUCKET=your-bucket-name
B2_KEY_ID=your-key-id
B2_APP_KEY=your-app-key
B2_ENDPOINT=https://s3.us-east-005.backblazeb2.com
B2_REGION=us-east-005

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

## 👥 Default Users

The system comes with pre-configured users for testing:

| Username | Password | Role | State |
|----------|----------|------|-------|
| tribal_officer | tribal123 | tribal_officer | MP |
| forest_officer | forest123 | forest_officer | Odisha |
| ngo_coordinator | ngo123 | ngo | Telangana |
| district_admin | admin123 | admin | Tripura |
| policy_maker | policy123 | policy_maker | MP |

## 📦 Dependencies

### Production
- `express` - Web framework
- `cors` - CORS middleware
- `dotenv` - Environment variables
- `multer` - File upload handling
- `aws-sdk` - Backblaze B2 integration
- `uuid` - Unique ID generation

### Development
- `nodemon` - Auto-restart on file changes

## 🧪 Testing

### Using curl

```bash
# Test health endpoint
curl http://localhost:5000/health

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"tribal_officer","password":"tribal123"}'

# Test file upload
curl -X POST http://localhost:5000/api/upload \
  -F "file=@/path/to/your/document.pdf"

# Test data retrieval
curl http://localhost:5000/api/getFRAData?state=MP
```

### Using REST Client

See `api-tests.http` file for comprehensive API tests.

## 📝 File Upload Specifications

### Supported File Types
- PDF documents (`.pdf`)
- Images (`.jpg`, `.jpeg`, `.png`, `.tiff`)
- Word documents (`.doc`, `.docx`)

### File Size Limits
- Maximum file size: **50MB** per file
- Multiple uploads: Maximum **10 files** at once

### Upload Response Format

```json
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "success": true,
    "message": "File uploaded successfully",
    "file_url": "https://s3.us-east-005.backblazeb2.com/bucket/filename.pdf",
    "filename": "2024-01-15T10-30-00-000Z_document_abc123.pdf",
    "originalName": "document.pdf",
    "size": 245678,
    "mimetype": "application/pdf",
    "uploadedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

## 🔒 Security Notes

1. **Never commit `.env` file** to version control
2. Replace mock user database with real database in production
3. Implement JWT authentication for production use
4. Add input validation on all endpoints
5. Implement rate limiting to prevent abuse
6. Use HTTPS in production
7. Sanitize file names to prevent path traversal attacks
8. Scan uploaded files for malware

## 🐛 Common Issues

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Backblaze B2 Upload Fails
- Verify credentials in `.env` are correct
- Check bucket permissions
- Ensure bucket exists and is accessible
- Verify endpoint URL matches your region

### CORS Errors
- Check `CORS_ORIGIN` in `.env` matches frontend URL
- Ensure frontend and backend are running on correct ports

## 🚀 Deployment

### Production Checklist
- [ ] Set `NODE_ENV=production` in `.env`
- [ ] Use secure passwords or implement JWT
- [ ] Enable HTTPS
- [ ] Set up proper logging (Winston, Morgan)
- [ ] Implement rate limiting
- [ ] Add request validation
- [ ] Set up monitoring
- [ ] Configure database instead of mock data
- [ ] Implement proper error handling
- [ ] Set up backup strategy for uploaded files

### Recommended Hosting Platforms
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Render

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Multer Documentation](https://github.com/expressjs/multer)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/)
- [Backblaze B2 Documentation](https://www.backblaze.com/b2/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

**Built with ❤️ for FRA Atlas**
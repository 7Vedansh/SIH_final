# FRA Implementation Dashboard

## Overview
This is a React-based web application for monitoring and managing Forest Rights Act (FRA) implementation across Indian states. The application provides real-time dashboards, geospatial visualization, data management tools, decision support systems, and comprehensive analytics.

**Project Type:** Frontend Web Application  
**Tech Stack:** React, TypeScript, Vite, Tailwind CSS  
**Current State:** Fully functional single-page application

## Recent Changes
- **2025-10-05:** Initial setup for Replit environment
  - Configured Vite to work with Replit's proxy system (host: 0.0.0.0, port: 5000)
  - Added allowedHosts configuration for .replit.dev and .repl.co domains
  - Installed all Node.js dependencies

## Project Architecture

### Frontend Structure
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS with PostCSS
- **Icons:** Lucide React

### Main Components
1. **Dashboard** - Real-time monitoring of FRA implementation with key metrics
2. **FRA Atlas** - Interactive geospatial visualization with map layers
3. **Data Management** - Tools for digitizing, verifying, and integrating legacy records
4. **Decision Support System** - AI-powered recommendations for scheme implementation
5. **Analytics** - Comprehensive insights and reporting

### Key Features
- State-wise data filtering (Madhya Pradesh, Odisha, All States)
- Real-time metrics tracking
- Interactive map visualization
- Document processing and verification
- AI-powered scheme recommendations
- Export and reporting capabilities

## Development

### Running the App
The app runs on port 5000 using Vite's development server:
```bash
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Dependencies
- **Supabase Client:** Installed but not currently in use
- All UI components are implemented with React and Tailwind CSS
- No backend services currently configured

## Deployment
The application is configured to run on Replit with:
- Host: 0.0.0.0 (required for Replit)
- Port: 5000 (required for Replit preview)
- Allowed hosts: .replit.dev, .repl.co (required for Replit proxy)

## User Preferences
- No specific user preferences recorded yet

## Notes
- The application currently uses mock/static data for demonstration
- Supabase is installed as a dependency but not integrated
- All data is rendered client-side without external API calls

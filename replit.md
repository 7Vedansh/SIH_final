# FRA Implementation Dashboard

## Overview
This is a React-based web application for monitoring and managing Forest Rights Act (FRA) implementation across Indian states. The application provides real-time dashboards, geospatial visualization, data management tools, decision support systems, and comprehensive analytics.

**Project Type:** Frontend Web Application  
**Tech Stack:** React, TypeScript, Vite, Tailwind CSS  
**Current State:** Fully redesigned government-grade professional portal with glassmorphism design

## Recent Changes
- **2025-10-05:** Complete visual redesign and transformation
  - Implemented government color palette (Royal Blue #1e3a8a, Saffron #f97316, Emerald Green #059669)
  - Added glassmorphism design system with backdrop-blur effects and modern aesthetics
  - Created new Landing Page with hero section, animated metrics, and testimonials
  - Built dual-access Login Page for Claim Uploader and Senior Officer roles
  - Enhanced all dashboard components with modern card-based layouts
  - Implemented multilingual support (EN/HI) with language toggle
  - Added About and Help pages with comprehensive information
  - Created government-style footer with MoTA branding
  - Added smooth animations, transitions, and loading states throughout
  - Implemented responsive design for desktop, tablet, and mobile devices

- **2025-10-05:** Initial setup for Replit environment
  - Configured Vite to work with Replit's proxy system (host: 0.0.0.0, port: 5000)
  - Added allowedHosts configuration for .replit.dev and .repl.co domains
  - Installed all Node.js dependencies

## Project Architecture

### Design System
- **Color Palette:**
  - Royal Blue (#1e3a8a, #2563eb, #3b82f6) - Primary government color
  - Saffron (#f97316, #fb923c) - Accent and CTA buttons
  - Emerald Green (#059669, #10b981, #34d399) - Success and nature elements
  - Neutral grays for text and backgrounds

- **Visual Effects:**
  - Glassmorphism with backdrop-blur and subtle borders
  - Gradient overlays (royal-blue, emerald-green, saffron-glow)
  - Smooth animations and transitions
  - Custom button styles (btn-primary, btn-secondary)
  - Input field styling with focus states

### Frontend Structure
- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS with custom configuration and PostCSS
- **Icons:** Lucide React

### Main Components
1. **Landing Page** - Hero section, impact metrics, key features, testimonials, and CTA
2. **Login Page** - Dual-access portal for Claim Uploaders and Senior Officers
3. **Dashboard** - Real-time monitoring with glassmorphic stat cards and live data indicators
4. **FRA Atlas** - Interactive geospatial visualization with map layers and search
5. **Data Management** - Tools for digitizing, verifying, and integrating legacy records
6. **Decision Support System** - AI-powered recommendations for scheme implementation
7. **Analytics** - Comprehensive insights and reporting with visualizations
8. **About Page** - Mission, vision, objectives, partners, and achievements
9. **Help Page** - FAQs, tutorials, and support information
10. **Footer** - Government branding, policies, and version information

### Key Features
- **Government-grade aesthetics** with official color scheme
- **Multilingual support** (English/Hindi) with translations infrastructure
- **Glassmorphism design** throughout the application
- **Responsive design** for all device sizes
- **State-wise data filtering** (Madhya Pradesh, Odisha, All States)
- **Real-time metrics tracking** with animated counters
- **Interactive map visualization** with multiple layers
- **Document processing and verification** tools
- **AI-powered scheme recommendations**
- **Export and reporting capabilities**

### Multilingual Support
- Language toggle in header (EN/HI)
- Translations defined in `src/constants/translations.ts`
- Current coverage: Landing, Login, Footer, Dashboard, Sidebar, Navigation
- Future enhancement: Extend translations to all components (About, Help, Data Management, etc.)

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
- Government-grade professional design aesthetic
- Modern glassmorphism visual style
- Multilingual support for accessibility

## Notes
- The application currently uses mock/static data for demonstration
- Supabase is installed as a dependency but not integrated
- All data is rendered client-side without external API calls
- The redesign maintains all backend functionality while transforming the visual appearance
- Multilingual translations are defined and partially integrated, ready for full implementation

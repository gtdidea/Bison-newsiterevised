# TheBisonGroup.io - Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Drag & Drop - Fastest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Drag the `dist` folder to the deploy area
4. Your site will be live instantly with a random URL
5. Optional: Set custom domain in Site Settings

### Option 2: Vercel (GitHub Integration)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects React and deploys
6. Optional: Add custom domain in Project Settings

### Option 3: Netlify (GitHub Integration)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. Deploy site

### Option 4: GitHub Pages
1. Go to your GitHub repository settings
2. Scroll to "Pages" section
3. Source: Deploy from a branch
4. Branch: `main` / `docs` (create docs folder with dist contents)
5. Your site will be at `https://yourusername.github.io/repository-name`

## Files Ready for Deployment
- ✅ `dist/` - Production build files
- ✅ `netlify.toml` - Netlify configuration
- ✅ `vercel.json` - Vercel configuration
- ✅ `_redirects` - SPA routing support

## Custom Domain Setup
After deployment, you can add your custom domain:
1. **TheBisonGroup.io** - Point A record to your hosting provider's IP
2. **www.TheBisonGroup.io** - Point CNAME to your hosting provider's domain

## Build Information
- Framework: React + Vite + TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Build time: ~5 seconds
- Bundle size: ~451KB (gzipped: ~136KB)

## Support
All changes have been committed to Git. The website includes:
- Bison Group logo integration
- Updated trademark symbols (℠)
- Performance-driven Execution™ (PdE) branding
- Fixed Axeus platform links
- ReVyve℠ App section
- Strategic Assessment Survey functionality
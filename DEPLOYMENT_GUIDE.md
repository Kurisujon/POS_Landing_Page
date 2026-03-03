# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

Your repository is now configured for automatic deployment! Follow these steps:

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/Kurisujon/POS_Landing_Page
2. Click on **Settings** (top menu)
3. In the left sidebar, click on **Pages**
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 2: Wait for Deployment

- The GitHub Actions workflow will automatically run when you push to the master branch
- Go to the **Actions** tab in your repository to see the deployment progress
- Once complete (green checkmark), your site will be live!

### Step 3: Access Your Live Site

Your site will be available at:
```
https://kurisujon.github.io/POS_Landing_Page/
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

### Option 1: Deploy dist folder to gh-pages branch

```bash
# Build the project
npm run build

# Install gh-pages package (one time only)
npm install -D gh-pages

# Add deploy script to package.json
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Option 2: Use the dist folder directly

1. Go to repository Settings > Pages
2. Under Source, select **Deploy from a branch**
3. Select branch: **master**
4. Select folder: **/dist**
5. Click Save

## Troubleshooting

### Images not loading?
- Make sure images are in the `public/images/` folder
- Vite automatically copies public folder contents to dist during build

### CSS/JS not loading?
- Check that `base: '/POS_Landing_Page/'` is set in `vite.config.js`
- The base must match your repository name

### 404 Error?
- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully in the Actions tab
- Wait a few minutes for DNS propagation

## Updating Your Site

Every time you push to the master branch:
1. GitHub Actions automatically builds your project
2. Deploys the new version to GitHub Pages
3. Your site updates within 1-2 minutes

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Repository Structure

```
pos_landing_page/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── images/                 # Static images
├── src/
│   ├── index.css              # Styles
│   └── main.js                # JavaScript
├── dist/                       # Build output (auto-generated)
├── index.html                  # Main HTML file
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## Support

If you encounter issues:
1. Check the Actions tab for build errors
2. Verify GitHub Pages is enabled in Settings
3. Ensure all files are committed and pushed
4. Clear browser cache and try again

---

**Live Site:** https://kurisujon.github.io/POS_Landing_Page/
**Repository:** https://github.com/Kurisujon/POS_Landing_Page

# Wolf City Website - Deployment Guide

Your website is ready to go online! Here are the **3 easiest ways** to deploy it:

---

## ⚡ Option 1: Netlify (EASIEST - 2 minutes)

**Best for:** Quick deployment, automatic HTTPS, free hosting

### Steps:
1. Go to [https://netlify.com](https://netlify.com)
2. Click "Sign Up" (free account)
3. Once logged in, you'll see "Want to deploy a new site without connecting to Git?"
4. **Drag and drop** the entire `trucking-accounting-website` folder onto the page
5. Done! Your site is live at `https://random-name.netlify.app`

### Change Site Name:
- Click "Site settings" → "Change site name"
- Choose something like `wolf-city-accounting.netlify.app`

### Add Custom Domain (Optional):
- Click "Domain settings" → "Add custom domain"
- Follow instructions to connect your own domain

---

## 🚀 Option 2: Vercel (Also Very Easy)

**Best for:** Great performance, free hosting

### Steps:
1. Go to [https://vercel.com](https://vercel.com)
2. Click "Sign Up" (free account)
3. Click "Add New Project"
4. Click "Browse" and select your `trucking-accounting-website` folder
5. Click "Deploy"
6. Your site is live at `https://your-project.vercel.app`

---

## 📦 Option 3: GitHub Pages (Free Forever)

**Best for:** Free hosting, version control

### Steps:

#### A. Create GitHub Repository
1. Go to [https://github.com](https://github.com) and sign in/sign up
2. Click the "+" icon → "New repository"
3. Name it: `wolf-city-website`
4. Make it Public
5. Don't initialize with README
6. Click "Create repository"

#### B. Upload Your Files
You have 2 options:

**Option B1: Upload via Website (Easiest)**
1. On your new repository page, click "uploading an existing file"
2. Drag all files from `trucking-accounting-website` folder:
   - index.html
   - styles.css
   - script.js
   - README.md
3. Click "Commit changes"
4. Go to Settings → Pages
5. Under "Branch", select "main" → Save
6. Your site will be live at: `https://yourusername.github.io/wolf-city-website`

**Option B2: Use Git Commands**
Open Command Prompt in the `trucking-accounting-website` folder and run:

```bash
# Set your git identity (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize and commit
git init
git add .
git commit -m "Initial commit - Wolf City website"

# Connect to GitHub (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/wolf-city-website.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages:
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Under "Branch", select "main" → Save
4. Your site will be live at: `https://yourusername.github.io/wolf-city-website`

---

## 🌐 Option 4: Other Free Hosting Services

### Cloudflare Pages
- [https://pages.cloudflare.com](https://pages.cloudflare.com)
- Free, fast, drag-and-drop deployment

### Render
- [https://render.com](https://render.com)
- Free static site hosting

### Surge
- [https://surge.sh](https://surge.sh)
- Command line tool: `npm install -g surge` then `surge` in your folder

---

## 📋 Quick Comparison

| Service | Speed | Ease | Custom Domain | HTTPS |
|---------|-------|------|---------------|-------|
| Netlify | ⚡⚡⚡ | 🟢 Easiest | ✅ Free | ✅ Auto |
| Vercel  | ⚡⚡⚡ | 🟢 Easy | ✅ Free | ✅ Auto |
| GitHub Pages | ⚡⚡ | 🟡 Medium | ✅ Free | ✅ Auto |
| Cloudflare | ⚡⚡⚡ | 🟢 Easy | ✅ Free | ✅ Auto |

---

## 🎯 Recommended: Use Netlify

**Why?**
- Literally drag and drop - no commands needed
- Automatic HTTPS
- Free custom domain support
- Instant deployments
- Easy to update (just drag new files)

---

## 🔄 How to Update Your Site After Deployment

### For Netlify/Vercel/Cloudflare:
1. Make changes to your files locally
2. Drag and drop the updated files again
3. Or connect to GitHub for automatic deployments

### For GitHub Pages:
1. Make changes to your files
2. Go to your GitHub repository
3. Upload the changed files
4. Site updates automatically

---

## ✅ After Deployment Checklist

1. ✅ Visit your live URL
2. ✅ Test the contact form
3. ✅ Check on mobile (use your phone)
4. ✅ Share the link!
5. ✅ Consider adding Google Analytics (optional)

---

## 🆘 Need Help?

If you encounter any issues:
1. Check that all files (index.html, styles.css, script.js) are uploaded
2. Make sure index.html is in the root folder (not in a subfolder)
3. Clear your browser cache (Ctrl+F5)

---

## 🎉 You're Ready!

Your Wolf City website is professional and ready for clients. Choose any option above and you'll be online in minutes!

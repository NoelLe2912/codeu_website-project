# 🚀 CodeU Website - Quick Deployment Guide

## Your Situation
- ✅ Code hosted on Drexel GitLab
- ✅ Local development working
- ✅ Production build tested

---

## 🎯 RECOMMENDED: Deploy to Render (5 minutes)

### Why Render?
- **Free tier** - $0/month
- **Auto-deploys** from GitHub
- **HTTPS included**
- **Easy to setup**
- **Scalable**

### How It Works
```
Your GitLab Repo → GitHub Mirror → Render → Live Website
(local dev)        (for CI/CD)   (hosting)
```

---

## 📋 Step-by-Step Instructions

### 1️⃣ Create GitHub Account (2 min)
```bash
# Go to github.com and sign up
# Use the same email as your Drexel account
```

### 2️⃣ Mirror Your Code to GitHub (1 min)
```bash
cd /Users/lephan/CodeU/codeu-website-project

# Replace YOUR_USERNAME with your actual GitHub username
git push --mirror https://github.com/YOUR_USERNAME/codeu-website-project.git

# Set GitHub as secondary remote
git remote add github https://github.com/YOUR_USERNAME/codeu-website-project.git
```

### 3️⃣ Sign Up to Render (1 min)
```
1. Go to render.com
2. Click "Sign up with GitHub"
3. Authorize GitHub
4. Done!
```

### 4️⃣ Deploy Backend (1 min)
```
1. In Render dashboard → "New +" → "Web Service"
2. Select your GitHub repo
3. Fill in:
   - Name: codeu-backend
   - Root Directory: server
   - Build Command: npm install
   - Start Command: npm start
4. Add environment variables from your .env:
   - MONGODB_URL
   - JWT_SECRET (generate new one!)
   - SMTP_USER, SMTP_PASS, SENDER_EMAIL
   - NODE_ENV = production
5. Click "Create Web Service"
6. COPY THE URL (e.g., https://codeu-backend.onrender.com)
```

### 5️⃣ Deploy Frontend (1 min)
```
1. In Render dashboard → "New +" → "Web Service"
2. Select your GitHub repo again
3. Fill in:
   - Name: codeu-frontend
   - Root Directory: client
   - Build Command: npm install && npm run build
   - Start Command: npm run preview
4. Add environment variable:
   - VITE_BACKEND_URL = https://codeu-backend.onrender.com
5. Click "Create Web Service"
6. COPY THE URL (e.g., https://codeu-frontend.onrender.com)
```

### 6️⃣ Test Your Site (1 min)
```bash
# Visit your frontend
https://codeu-frontend.onrender.com

# Test backend
curl https://codeu-backend.onrender.com/
# Should return: "API working Fine"
```

### 7️⃣ Keep GitHub & GitLab in Sync (Optional)
```bash
cd /Users/lephan/CodeU/codeu-website-project

# After each commit to GitLab, also push to GitHub:
git push gitlab main
git push github main

# Or, create an alias for convenience:
git push all main  # if you set "all" as a multi-remote
```

---

## 🎉 You're Live!

Your website is now live at:
- **Frontend**: `https://codeu-frontend.onrender.com`
- **Backend**: `https://codeu-backend.onrender.com`

Share it with your team! 🚀

---

## 📱 Alternative: Deploy to Other Platforms

### Option A: DigitalOcean (Full Control)
- $5-12/month
- Full server control
- More technical setup

### Option B: Heroku (Easier than DigitalOcean)
- $5-25/month
- Very easy setup
- Good for learning

### Option C: Railway (Like Render but Better)
- $5/month or pay-per-use
- Modern alternative to Heroku

---

## 🐛 Troubleshooting

### "Backend not found" error?
```
1. Check VITE_BACKEND_URL in frontend environment
2. Make sure backend deployed successfully
3. Test API directly: curl https://codeu-backend.onrender.com/
```

### "Database connection error"?
```
1. Verify MONGODB_URL is correct
2. Check MongoDB Atlas allows Render IP
3. View backend logs in Render dashboard
```

### Free tier sleeping?
```
Render free tier spins down after 15 min inactivity.
Upgrade to Starter plan ($7/month) for always-on.
```

---

## 💡 Tips

1. **Generate Secure JWT_SECRET**:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **View Logs** (if issues):
   - In Render: Click service → "Logs" tab

3. **Force Redeploy**:
   - In Render: Click service → "Manual Deploy" → "Clear cache & deploy"

4. **Auto-Deploy on Push**:
   - Render automatically deploys when you push to GitHub

---

## 📚 Full Documentation
See `DEPLOYMENT.md` for detailed information and troubleshooting.

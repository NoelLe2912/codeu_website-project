# CodeU Website - Deployment Guide to Render

## 🎯 Deployment Strategy: Render.com

**Why Render?**
- Free tier with generous limits
- Automatic deployments from GitHub
- Built-in SSL/HTTPS
- Easy environment variable management
- Both frontend and backend in one place
- Auto-scaling available

---

## 📋 Pre-Deployment Checklist

- [x] Git repository set up and code pushed
- [x] Production build tested locally
- [x] Environment variables configured
- [ ] Sensitive credentials secured (JWT_SECRET changed)
- [ ] MongoDB Atlas set up (production database)
- [ ] SMTP credentials verified

---

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub account (recommended)
3. Create a new account or use existing one
4. Grant GitHub permissions

### Step 2: Create Backend Service

1. Click **"New +"** → **"Web Service"**
2. Select your `codeu-website-project` repository
3. Configure the service:
   - **Name**: `codeu-backend`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or Starter for production)

4. Add **Environment Variables** (from your `.env` file):
   ```
   MONGODB_URL = your_mongodb_connection_string
   JWT_SECRET = generate_a_new_secure_secret
   NODE_ENV = production
   SMTP_USER = your_email
   SMTP_PASS = your_password
   SENDER_EMAIL = sender_email
   PORT = 4000
   ```

5. Click **"Create Web Service"**

**Note**: Copy the deployed backend URL (e.g., `https://codeu-backend.onrender.com`)

### Step 3: Create Frontend Service

1. Go back to dashboard → Click **"New +"** → **"Web Service"**
2. Select your `codeu-website-project` repository again
3. Configure the service:
   - **Name**: `codeu-frontend`
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Plan**: Free (or Starter for production)

4. Add **Environment Variables**:
   ```
   VITE_BACKEND_URL = https://codeu-backend.onrender.com
   ```

5. Click **"Create Web Service"**

### Step 4: Update GitHub with Production URLs

After deployment, update your local files with production URLs:

**In `client/.env.production`:**
```
VITE_BACKEND_URL=https://codeu-backend.onrender.com
```

**In `server/server.js`** (update CORS):
```javascript
const allowedOrigins = [
  process.env.CLIENT_URL ?? "http://localhost:5173",
  "https://codeu-frontend.onrender.com",
  "https://your-custom-domain.com"
];
```

### Step 5: Deploy

1. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "Prepare for production deployment"
   git push origin main
   ```

2. Render will automatically:
   - Detect changes
   - Build both services
   - Deploy to production
   - Provide live URLs

---

## 🔗 Accessing Your Site

- **Frontend**: `https://codeu-frontend.onrender.com`
- **Backend API**: `https://codeu-backend.onrender.com`
- **API Health Check**: `https://codeu-backend.onrender.com/` (should show "API working Fine")

---

## 📊 Monitoring & Maintenance

1. **View Logs**: Click service → "Logs" tab
2. **Restart Service**: Click service → "Manual Deploy" → "Clear cache & deploy"
3. **Environment Variables**: Update anytime in service settings
4. **Automatic Redeployment**: Happens on every GitHub push

---

## ⚠️ Security Best Practices

### Before Production:

1. **Change JWT_SECRET**:
   ```bash
   # Generate a secure secret
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Use this value in Render environment variables.

2. **Rotate SMTP Credentials**:
   - Create new app-specific passwords if using Gmail
   - Use a dedicated email service (Brevo, SendGrid, etc.)

3. **Database Security**:
   - Ensure MongoDB Atlas has IP whitelist configured
   - Use strong passwords
   - Enable 2FA on MongoDB Atlas

4. **CORS Configuration**:
   - Update `server.js` with your production frontend URL
   - Never allow `*` in production

5. **HTTPS Only**:
   - Render provides free SSL certificates
   - Force HTTPS redirects

---

## 🐛 Troubleshooting

### Backend not connecting to database?
- Check MONGODB_URL in Render environment variables
- Verify MongoDB Atlas allows Render IP (0.0.0.0/0)

### Frontend can't reach backend?
- Verify VITE_BACKEND_URL in frontend environment
- Check CORS settings in `server.js`
- Test API directly: `curl https://codeu-backend.onrender.com/`

### Build fails?
- Check build logs in Render dashboard
- Verify dependencies are installed: `npm install`
- Test build locally: `npm run build`

### Free tier spins down?
- Free tier services spin down after 15 mins of inactivity
- Upgrade to Starter plan ($7/month) for always-on

---

## 💰 Costs

**Free Tier:**
- 750 free hours/month per service
- Shared CPU
- 0.5 GB RAM
- Auto-suspend after 15 min inactivity
- **Total**: ~$0 for low-traffic site

**Starter Plan (Recommended):**
- $7/month per service (usually 1-2 services)
- Dedicated resources
- Always-on
- **Total**: ~$14-21/month

---

## 🎉 You're Live!

Share your site: `https://codeu-frontend.onrender.com`

---

## 📝 Quick Reference Commands

```bash
# Build locally for testing
cd client && npm run build && npm run preview

# Check backend status
curl https://codeu-backend.onrender.com/

# View git status before deployment
git status

# Push to trigger deployment
git push origin main
```

---

## 🆘 Need Help?

- Render Docs: https://render.com/docs
- MongoDB Atlas: https://www.mongodb.com/docs/atlas/
- Vite Build: https://vitejs.dev/guide/build.html

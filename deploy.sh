#!/bin/bash

# CodeU Website - Production Deployment Script
# This script builds and deploys the application to a production server

set -e

echo "🚀 CodeU Website Deployment Script"
echo "===================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -f "client/package.json" ]; then
    echo -e "${RED}❌ Error: Not in project root directory${NC}"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install
cd client && npm install && cd ..

# Build client
echo -e "${YELLOW}🔨 Building client...${NC}"
cd client
npm run build
cd ..

# Build checks
echo -e "${YELLOW}✅ Build complete!${NC}"

# Display build summary
echo -e "${GREEN}📊 Build Summary:${NC}"
du -sh client/dist
echo ""

# Next steps
echo -e "${GREEN}✨ Deployment ready!${NC}"
echo ""
echo "📝 Next Steps:"
echo "1. Test locally: npm run preview (in client folder)"
echo "2. For Render deployment:"
echo "   - Create GitHub account and mirror this repo"
echo "   - Sign up at render.com with GitHub"
echo "   - Follow DEPLOYMENT.md instructions"
echo ""
echo "3. For custom server deployment:"
echo "   - Copy client/dist to web server"
echo "   - Copy server folder to app server"
echo "   - Run: npm start (in server folder)"
echo ""
echo -e "${GREEN}Happy deploying! 🎉${NC}"

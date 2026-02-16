# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!**
   Your site will be live at `your-project.vercel.app`

### Custom Domain
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## 🌐 Alternative Platforms

### Netlify
```bash
npm run build
```
Then drag the `.next` folder to Netlify.

### AWS Amplify
1. Connect your GitHub repo
2. Build settings are auto-detected
3. Deploy

### Self-Hosted (VPS/Docker)
```bash
# Build
npm run build

# Run
npm start
# OR with PM2
pm2 start npm --name "portfolio" -- start
```

## 🔒 Environment Variables

In Vercel dashboard:
1. Settings → Environment Variables
2. Add variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   ```

## 🎯 Performance Optimization

### Before Deployment
- [ ] Optimize images (use Next.js Image component)
- [ ] Check Lighthouse scores
- [ ] Test on mobile devices
- [ ] Verify SEO metadata

### After Deployment
- [ ] Set up analytics (Vercel Analytics)
- [ ] Configure CDN
- [ ] Enable caching
- [ ] Monitor performance

## 📊 Monitoring

### Vercel Analytics
Enable in project settings for free analytics.

### Google Analytics
Add to `app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## 🔄 CI/CD

Vercel automatically:
- Deploys on `git push`
- Creates preview deployments for PRs
- Runs builds in isolated environments

## 🐛 Troubleshooting

### Build Fails
Check build logs in Vercel dashboard.

Common issues:
- Missing dependencies → `npm install`
- TypeScript errors → `npx tsc --noEmit`
- Environment variables → Check settings

### Site Not Loading
- Clear browser cache
- Check Vercel deployment logs
- Verify domain DNS settings

## 📈 Scaling

Vercel automatically handles:
- Global CDN
- Edge functions
- Automatic scaling
- DDoS protection

For high traffic, consider:
- Upgrading Vercel plan
- Implementing caching strategies
- Using static generation where possible

---

Need help? Check [Vercel Documentation](https://vercel.com/docs)

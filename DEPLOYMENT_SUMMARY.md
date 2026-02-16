# Deployment Summary - February 16, 2026

## What We Did Today

### 1. **Migrated Portfolio from GitHub Pages to Vercel**
- **Problem**: GitHub Pages only supports static sites, but Next.js needs a server for dynamic routes
- **Solution**: Deployed to Vercel (made by Next.js creators)

### 2. **Repository Setup**
- Created new repository: https://github.com/ehsanmohajer/Personal-Website2.git
- Pushed Next.js codebase (API keys protected by `.gitignore`)

### 3. **Vercel Deployment Configuration**

#### Files Created/Modified:
- **`.npmrc`** - Enables `legacy-peer-deps` for npm install (fixes ESLint conflicts)
- **`next.config.js`** - Removed `output: 'export'` to allow dynamic rendering
- **`.github/workflows/deploy.yml`** - Created Vercel deployment workflow (optional)

#### Vercel Dashboard Setup:
1. Connected GitHub repository to Vercel
2. Auto-deployed on every push to `main` branch
3. Added Environment Variables:
   - `RESEND_API_KEY` - Email service API key
   - `CONTACT_EMAIL_TO` - Your email (ehsanmohajer.fi@gmail.com)
   - `CONTACT_EMAIL_FROM` - Sender email (support@ehsanmohajer.fi)
   - `NEXT_PUBLIC_SITE_URL` - https://ehsanmohajer.fi

### 4. **DNS Configuration (Cloudflare + Domain Hotelli)**

#### Why Cloudflare?
- Domain Hotelli doesn't provide free DNS management
- Cloudflare offers **free DNS** + SSL + CDN

#### DNS Records in Cloudflare:
```
Type: CNAME
Name: @
Content: 3424e7718604b53c.vercel-dns-017.com
Proxy: DNS only (gray cloud)

Type: CNAME  
Name: www
Content: 3424e7718604b53c.vercel-dns-017.com
Proxy: DNS only (gray cloud)
```

#### Setup Steps:
1. **Domain Hotelli**: Changed nameservers to Cloudflare's
2. **Cloudflare**: 
   - Added domain `ehsanmohajer.fi`
   - Created DNS records pointing to Vercel
   - Turned off proxy (gray cloud) for Vercel to manage SSL
3. **Vercel**:
   - Added custom domain `ehsanmohajer.fi`
   - Automatically issued SSL certificate
   - Site now live at https://ehsanmohajer.fi

### 5. **Fixed Build Issues**
- Moved Resend initialization from module-level to runtime (build doesn't need API key)
- Marked dynamic pages appropriately
- Fixed TypeScript errors in API routes

## How to Deploy Updates in Future

### Quick Deployment:
```bash
cd /Users/Sani/Documents/personal-portfolio/portfolio-vanilla
git add .
git commit -m "Your update message"
git push new main
```

**That's it!** Vercel automatically:
- Detects the push
- Builds your Next.js site
- Deploys to https://ehsanmohajer.fi
- Takes 2-3 minutes

### If You Need to Update Environment Variables:
1. Go to https://vercel.com/dashboard
2. Click your project → Settings → Environment Variables
3. Add/Edit variables
4. Redeploy (Deployments tab → Click ⋮ → Redeploy)

### If DNS Stops Working:
1. Check Cloudflare DNS records still point to Vercel
2. Verify Cloudflare nameservers in Domain Hotelli
3. Make sure Vercel has the custom domain configured

## Key Files Location

- **Environment Variables**: Vercel Dashboard (not in code)
- **Local Development**: `.env.local` (never commit this!)
- **DNS Records**: Cloudflare Dashboard
- **Deployment Logs**: Vercel Dashboard → Deployments

## Architecture

```
Domain Hotelli (Domain Registrar)
    ↓
Cloudflare (Free DNS + Nameservers)
    ↓
Vercel (Next.js Hosting)
    ↓
GitHub (Code Repository)
```

## Cost Breakdown
- Domain Hotelli: €10-15/year (domain only)
- Cloudflare: **FREE** (DNS management)
- Vercel: **FREE** (Hobby plan, perfect for portfolio)
- Resend: **FREE** (100 emails/day)

**Total: ~€10-15/year** (just the domain!)

---

*Last Updated: February 16, 2026*
*Domain: https://ehsanmohajer.fi*
*Repository: https://github.com/ehsanmohajer/Personal-Website2*

# Sani AI Studio - Portfolio

> Modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui

**Live Site:** https://ehsanmohajer.fi

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

Visit: **http://localhost:3000**

## 📦 Deployment

This site is deployed on **Vercel** with automatic deployments from GitHub.

**To deploy updates:**
```bash
git add .
git commit -m "Your changes"
git push new main
```

Vercel will automatically build and deploy in 2-3 minutes.

See [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md) for complete deployment guide.

## 📁 Project Structure

```
portfolio-vanilla/
├── app/                      # Next.js App Router (pages)
│   ├── page.tsx             # Home page
│   ├── services/            # Services page & booking
│   ├── consulting/          # Consulting page
│   ├── careerpath/          # Career path page
│   ├── projects/            # Projects page
│   ├── ideas/               # Ideas page
│   ├── hackathons/          # Hackathons page
│   ├── contact/             # Contact page
│   ├── api/                 # API routes (contact, cv-upload)
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections
│   ├── career/             # Career page sections
│   ├── services/           # Services & invoice forms
│   ├── projects/           # Projects components
│   ├── ideas/              # Ideas components
│   ├── hackathons/         # Hackathons components
│   ├── contact/            # Contact components
│   └── consulting/         # Consulting components
│
├── docs/                    # Documentation
│   ├── DEPLOYMENT.md       # Detailed deployment guide
│   ├── SETUP_GUIDE.md      # Setup instructions
│   └── MIGRATION_GUIDE.md  # HTML to Next.js notes
│
├── lib/                     # Utilities
│   ├── utils.ts            # Helper functions
│   └── analytics.tsx       # Analytics setup
│
├── public/                  # Static assets
│   └── assets/             # Images, SVGs
│
├── html-version/            # Original HTML site (archived)
│
├── .npmrc                   # npm configuration
├── .env.local              # Environment variables (not in git)
├── .env.example            # Environment template
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
└── tsconfig.json            # TypeScript config
```

## 🎯 Technology Stack

### Core Technologies
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light mode)
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

### Features
- ✅ 8 fully functional pages
- ✅ Dark/Light mode with system preference
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Mobile hamburger menu
- ✅ Contact form with validation
- ✅ CV upload functionality
- ✅ Google Analytics integration
- ✅ Vercel Analytics support
- ✅ SEO optimized
- ✅ Smooth scroll animations

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, About, Career Brief, Expertise |
| Services | `/services` | Service offerings + CV upload |
| Consulting | `/consulting` | Consulting & mentoring services |
| Career Path | `/careerpath` | Full career journey story |
| Projects | `/projects` | Portfolio projects showcase |
| Ideas | `/ideas` | Innovation concepts |
| Hackathons | `/hackathons` | Hackathon timeline |
| Contact | `/contact` | Contact form + info |

## ⚙️ Environment Variables

**For production:** Set these in Vercel Dashboard → Settings → Environment Variables

**For local development:** Create `.env.local` (see `.env.example`):

```env
# Resend Email Service (Required for Contact Form)
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL_TO=ehsanmohajer.fi@gmail.com
CONTACT_EMAIL_FROM=support@ehsanmohajer.fi

# Public Variables
NEXT_PUBLIC_SITE_URL=https://ehsanmohajer.fi
```

### Setting up Resend for Contact Form

1. Go to [Resend.com](https://resend.com) - free account (100 emails/day)
2. Verify your domain in Resend dashboard
3. Get API key and add to Vercel environment variables
   ```env
   RESEND_API_KEY=your_api_key_here
   CONTACT_EMAIL_FROM=noreply@yourdomain.com
   ```
5. The contact form will automatically send emails to `CONTACT_EMAIL_TO`

**Free Plan Limits:**
- ✅ 100 emails per day
- ✅ 5,000 emails per month
- ✅ No credit card required
- Perfect for portfolios and small projects

## 🚀 Deployment
## 🚀 Deployment

This site is deployed on **Vercel** with Cloudflare DNS.

**Repository:** https://github.com/ehsanmohajer/Personal-Website2

**To deploy updates:**
```bash
git add .
git commit -m "Your changes"
git push new main
```

Vercel automatically builds and deploys in 2-3 minutes.

**See [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md) for complete guide.**

## 📚 Documentation

- **[DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md)** - Quick deployment guide (START HERE)
- **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Detailed deployment instructions
- **[docs/SETUP_GUIDE.md](docs/SETUP_GUIDE.md)** - Complete setup guide
- **[docs/MIGRATION_GUIDE.md](docs/MIGRATION_GUIDE.md)** - HTML to Next.js notes

## 🎨 Customization

### Update Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 173 45% 39%;    /* Teal/Green */
  --background: 0 0% 100%;   /* White */
}
```

### Add New Page
```bash
mkdir app/newpage
# Create page.tsx file
```

### Update Navigation
Edit `components/layout/header.tsx`

## 🗂️ Legacy HTML Version

The original HTML/CSS/JavaScript version is preserved in the `html-version/` folder.

To use it:
```bash
cd html-version
python3 -m http.server 8080
```

See [html-version/README.md](html-version/README.md) for details.

## 🐛 Troubleshooting

### Build Errors
```bash
# Type check
npx tsc --noEmit

# Clear cache
rm -rf .next node_modules
npm install
npm run dev
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: < 1.5s
- 📦 Bundle Size: Optimized with code splitting
- 🖼️ Images: Auto-optimized with Next.js Image

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please contact:
- Email: ehsanmohajer.fi@gmail.com

## 📄 License

This project is proprietary and confidential. **All rights reserved.**

⚠️ **Unauthorized use is prohibited.** This software may not be copied, modified, distributed, or used without explicit written permission from the owner.

For licensing inquiries or to request permission, please contact via [ehsanmohajer.fi/contact](https://ehsanmohajer.fi/contact).

See [LICENSE](LICENSE) for full terms and conditions.

## 👤 Author

**Sani (Ehsan Mohajer)**
- Portfolio: https://www.ehsanmohajer.fi/
- Email: ehsanmohajer.fi@gmail.com
- LinkedIn: https://www.linkedin.com/in/ehsan-mohajer-k/

---

**Built with ❤️ using Next.js 14, TypeScript, and shadcn/ui**

🚀 Ready to deploy! Run `npm install && npm run dev` to get started!

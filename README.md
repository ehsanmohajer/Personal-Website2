# Sani AI Studio - Portfolio

> Modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit: **http://localhost:3000**

## 📁 Project Structure

```
portfolio-vanilla/
├── app/                      # Next.js App Router (pages)
│   ├── page.tsx             # Home page
│   ├── services/            # Services page
│   ├── consulting/          # Consulting page
│   ├── careerpath/          # Career path page
│   ├── projects/            # Projects page
│   ├── ideas/               # Ideas page
│   ├── hackathons/          # Hackathons page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections
│   ├── career/             # Career page sections
│   ├── services/           # Services components
│   ├── projects/           # Projects components
│   ├── ideas/              # Ideas components
│   ├── hackathons/         # Hackathons components
│   ├── contact/            # Contact components
│   └── consulting/         # Consulting components
│
├── lib/                     # Utilities
│   ├── utils.ts            # Helper functions
│   └── analytics.tsx       # Analytics setup
│
├── public/                  # Static assets
│   └── assets/             # Images, SVGs
│
├── html-version/            # Original HTML site (legacy)
│   ├── index.html
│   ├── *.html              # All HTML pages
│   ├── styles.css
│   ├── script.js
│   └── assets/
│
├── package.json             # Dependencies (run npm here!)
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
│
└── Documentation
    ├── README.md           # This file
    ├── SETUP_GUIDE.md      # Detailed setup instructions
    ├── DEPLOYMENT.md       # Deployment guide
    └── MIGRATION_GUIDE.md  # HTML to Next.js migration notes
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

Create a `.env.local` file (see `.env.example`):

```env
# Resend Email Service (Required for Contact Form)
# Free tier: 100 emails per day
# Sign up at: https://resend.com
RESEND_API_KEY=your_api_key_here

# Contact Form Email Settings
# CONTACT_EMAIL_TO: Where emails are sent (your email)
# CONTACT_EMAIL_FROM: Sender email (must use verified domain with Resend)
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# Public Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Sani AI Studio"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Vercel Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

### Setting up Resend for Contact Form

1. Go to [Resend.com](https://resend.com) and create a free account
2. **Verify your domain:**
   - In Resend dashboard, go to "Domains"
   - Add your domain and verify DNS records (takes 5 min - 2 hours)
3. Get your API key from the dashboard
4. Add to `.env.local`:
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

### Deploy to Vercel (Recommended)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. Import to [Vercel](https://vercel.com):
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. Done! Auto-deploys on every push

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

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
# Create page directory
mkdir app/newpage

# Create page file
cat > app/newpage/page.tsx << 'EOF'
export default function NewPage() {
  return <div>New Page Content</div>
}
EOF
```

### Update Navigation
Edit `components/layout/header.tsx`:
```typescript
const navigation = [
  // Add your new page
  { name: "New Page", href: "/newpage" },
]
```

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup instructions
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Vercel deployment guide
- **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** - HTML to Next.js conversion notes

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

Private and proprietary.

## 👤 Author

**Sani (Ehsan Mohajer)**
- Portfolio: [Your Website]
- Email: ehsanmohajer.fi@gmail.com
- LinkedIn: [Your LinkedIn]

---

**Built with ❤️ using Next.js 14, TypeScript, and shadcn/ui**

🚀 Ready to deploy! Run `npm install && npm run dev` to get started!

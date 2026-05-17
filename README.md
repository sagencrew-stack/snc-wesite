# Sage & Crew Next — Website

A static multi-page website. Built with HTML, Tailwind CSS (via CDN), GSAP, and vanilla JavaScript. No build step required.

## File structure

```
sage-and-crew-next/
├── index.html        ← homepage
├── tools.html        ← 5 free HR & career tools
├── pricing.html      ← service packages
├── faq.html          ← FAQs (employer + candidate)
├── about.html        ← about us
├── contact.html      ← contact form (employer + candidate tabs)
├── vercel.json       ← Vercel deployment config
├── package.json      ← npm metadata
├── README.md         ← this file
└── assets/
    ├── styles.css        ← shared styles (all pages)
    ├── app.js            ← shared JavaScript (all pages)
    └── tailwind-config.js ← Tailwind theme tokens
```

---

## 1. Preview locally (BEFORE deploying)

> **IMPORTANT:** Do NOT double-click `index.html` to open it in a browser. That uses the `file://` protocol, which blocks the shared CSS/JS files from loading. You'll see a blank page or unstyled content. Always serve via a local web server.

### Easiest: with Python (already on your computer if you're on Mac/Linux)

```bash
cd path/to/sage-and-crew-next
python3 -m http.server 3000
```

Then open: **http://localhost:3000/**

### Easier: with Node.js (if you have it)

```bash
cd path/to/sage-and-crew-next
npx serve . -p 3000
```

Then open: **http://localhost:3000/**

### Easiest with no terminal: VS Code

1. Install VS Code (free)
2. Install the **Live Server** extension by Ritwick Dey
3. Open the project folder in VS Code
4. Right-click `index.html` → "Open with Live Server"

Browser opens automatically.

---

## 2. Deploy to Vercel

You have three options. Pick whichever feels easiest.

### Option A — Vercel CLI (most controlled)

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy
cd path/to/sage-and-crew-next
vercel

# It asks a few questions:
# - "Set up and deploy?" → Y
# - "Which scope?" → your account
# - "Link to existing project?" → N
# - "What's your project's name?" → sage-and-crew-next (or whatever)
# - "In which directory is your code?" → ./
# - "Want to override the settings?" → N

# Production deploy:
vercel --prod
```

You'll get a URL like `https://sage-and-crew-next.vercel.app`. Add your custom domain in the Vercel dashboard.

### Option B — Drag-and-drop on vercel.com (fastest, no CLI)

1. Go to **https://vercel.com/new**
2. Sign in (GitHub login is easiest)
3. Drag the entire folder onto the page (or upload the zip and extract first)
4. Vercel auto-detects it's a static site → click **Deploy**
5. Wait ~20 seconds → done.

### Option C — Connect to GitHub (best for ongoing updates)

1. Create a new GitHub repo named e.g. `sage-and-crew-next`
2. Upload all files to that repo (use GitHub Desktop or `git push`)
3. Go to **https://vercel.com/new**, click **Import Git Repository**
4. Select the repo → **Deploy**
5. Every future push to `main` will auto-deploy.

---

## 3. What to update before going live

There are a few placeholders in the code that need real values:

### WhatsApp number
Open `assets/app.js`, find:
```js
const WA_NUMBER = '910000000000';
```
Replace with your real number (country code + number, no `+` or spaces).
E.g. `'919876543210'` for an Indian number.

### Form submission endpoints
Open `assets/app.js`, find:
```js
const ENDPOINTS = { employer: '', candidate: '' };
```

Paste your form backend URLs here. Free options:

- **Formspree** (easiest): https://formspree.io — sign up, create two forms, paste the endpoints. Forms go straight to your email.
- **Google Sheets** (via Apps Script): a bit more setup, but free forever and you get a spreadsheet.
- **Web3Forms** (free, no signup): https://web3forms.com
- **Supabase / Airtable / Notion API**: if you want a real database.

Until you set this, forms log to the browser console instead of sending anywhere.

### Stats and testimonials
The homepage has placeholder stats (`500+`, `100+`, `20+`, `24hr`) and 3 placeholder testimonials.

- Stats: open `index.html`, search for `500+`, `100+` etc. Replace with real numbers or soften the copy.
- Testimonials: search for `Success Stories` in `index.html`. Update with real client quotes when you have them.

### Logo
The header and footer use a small placeholder SVG shield (gold + sage on navy). When you have your final logo (PNG with transparent background recommended), tell me and I'll embed it in the header/footer/loader. Or you can do it yourself — search for `<svg viewBox="0 0 24 24"` in `index.html` to find the shield, and replace with `<img src="assets/logo.png" alt="Sage & Crew Next" class="h-9 w-auto" />`.

---

## 4. Editing the site

- **Edit content**: open the relevant `.html` file in any editor (VS Code, Notepad, etc.). Edit text directly.
- **Edit styles**: open `assets/styles.css`. Tailwind utility classes are inline in the HTML.
- **Edit JavaScript** (animations, forms, mobile menu): open `assets/app.js`.

After editing, re-deploy with `vercel --prod` (CLI option) or push to GitHub (Git option), or re-drag-drop (drag option).

---

## 5. Custom domain

In the Vercel dashboard → your project → Settings → Domains → Add. Vercel walks you through DNS setup. SSL is automatic and free.

---

## 6. Need help?

Common issues:
- **Page looks unstyled** → you're opening via `file://`. Use a local server (see section 1).
- **Forms don't submit** → you haven't set `ENDPOINTS` in `assets/app.js`. Submissions go to the console.
- **WhatsApp button opens wrong number** → update `WA_NUMBER` in `assets/app.js`.
- **Vercel deploy fails** → make sure `vercel.json` and `package.json` are in the root of the folder you're deploying.

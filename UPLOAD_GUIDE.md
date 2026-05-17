# UPLOAD GUIDE — Sage & Crew Next website

## What's in this folder

```
sage-and-crew-next-site/
│
├── 📄 ROOT FILES (drag these into the repo root)
│
├── index.html              ← homepage
├── ai-solutions.html       ← NEW: AI & Automation page
├── about.html              ← About page
├── contact.html            ← Contact page (3 forms: Project / Hire / Candidate)
├── projects.html           ← Team Purex case study
├── tools.html              ← 8 free tools
├── faq.html                ← FAQs (3 tabs)
│
├── README.md               ← repo readme
├── package.json            ← npm metadata
├── vercel.json             ← Vercel routing + cache headers
├── .gitignore              ← git ignore file
├── preview-windows.bat     ← local preview helper (Windows)
├── preview-mac-linux.sh    ← local preview helper (Mac/Linux)
│
└── 📁 assets/              ← upload this WHOLE FOLDER as-is
    │
    ├── app.js              ← all JavaScript (forms, tools, animations)
    ├── styles.css          ← all CSS (Tailwind extras, animations)
    ├── tailwind-config.js  ← Tailwind config (colors, fonts)
    ├── logo-mark.png       ← logo circle (used in header & footer)
    └── logo-full.png       ← full lockup (currently unused, keep for future)
```

## How to upload to GitHub

### OPTION A — Easiest: Replace everything at once

1. Go to https://github.com/sagencrew-stack/snc-wesite
2. If `pricing.html` is still there → click it, then the trash icon, commit "Remove pricing"
3. Back at the repo root, click **"Add file" → "Upload files"**
4. Open this `sage-and-crew-next-site` folder on your computer
5. **Select ALL contents** inside it (the HTML files + the `assets` folder + config files)
6. Drag them all into the GitHub upload box at once
7. GitHub preserves folder structure — `assets/` and its files land correctly
8. Scroll down, commit message: "Push 3: AI positioning + real logo + pricing removed"
9. Click "Commit changes"

### OPTION B — Just the 3 critical files (if you uploaded the rest already)

If you've already uploaded earlier versions and just want to push the latest bug fixes:

1. Navigate to https://github.com/sagencrew-stack/snc-wesite/tree/main/assets
2. Click "Add file" → "Upload files"
3. Drag these 3 files from `assets/`:
   - app.js          (fixes the stuck page-loader bug)
   - styles.css      (tones down logo glow)
   - logo-mark.png   (cleaner logo with no cream halo)
4. Commit: "Fix: page-loader hide + logo background cleanup"

## How to verify it worked

After Vercel rebuilds (30-60s), visit https://snc-wesite.vercel.app/

✓ Page loader shows briefly (~400ms) then disappears
✓ Header shows the navy/sage/gold circle logo next to "Sage & Crew Next"
✓ Footer shows the same logo on dark navy
✓ Nav contains: Home / Services / AI & Automation / Projects / For Employers / For Candidates / Free Tools / About / Contact
✓ NO "Pricing" link anywhere
✓ Click "AI & Automation" → loads /ai-solutions.html with 6 service cards
✓ Click "Free Tools" → 8 tools listed (5 working + 3 new: Project Cost Estimator, Website Readiness Checklist, Hiring Requirement Template)
✓ Click "Contact" → 3 form tabs (Start a Project / Hire Talent / Candidate Form)

If anything's broken, hard-refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) to bust browser cache.

## Still-open to-do (need you, not me)

1. Buy sagencrew.com domain → connect to Vercel
2. Set up Formspree → paste URLs into assets/app.js (ENDPOINTS object near line 1005)
3. Generate privacy.html and terms.html (footer links them, currently 404)
4. Add Google Analytics (item #10 on your Website Readiness Checklist!)
5. Eventually buy a real domain email like you@sagencrew.com (Google Workspace)

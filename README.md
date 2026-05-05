# Red Premere Enterprises — redpremere.com

Static website for Red Premere Enterprises, Varanasi, UP.

## File Structure
```
redpremere/
├── index.html        # Homepage
├── services.html     # Packages & pricing
├── about.html        # About us & founder
├── portfolio.html    # Work portfolio
├── contact.html      # Inquiry form
├── css/
│   └── style.css     # All shared styles
├── js/
│   └── main.js       # Nav, scroll, form logic
└── assets/           # Add logo here when ready
```

## Before Going Live — 2 Things to Do

### 1. Set up Formspree (free email form handler)
1. Go to https://formspree.io and create a free account
2. Create a new form → copy your Form ID (looks like `xpzgkwqr`)
3. In `contact.html`, find this line:
   ```html
   <form id="inquiryForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree ID
5. Done — form submissions will now email you at info@redpremere.com

### 2. Add your logo (optional)
- Place your logo file in `assets/logo.png`
- Replace the `.nav-logo-mark` "RP" text in each HTML file with:
  ```html
  <img src="assets/logo.png" alt="Red Premere" style="height:36px;">
  ```

---

## Deploying to GitHub + Cloudflare Pages

### Step 1 — Create GitHub Repository
1. Go to https://github.com and sign in
2. Click **New repository**
3. Name: `redpremere-website`
4. Set to **Public** (required for free Cloudflare Pages)
5. Click **Create repository**

### Step 2 — Upload Files to GitHub
Option A (browser, easiest):
1. Open your new repo
2. Click **Add file → Upload files**
3. Drag all files (index.html, services.html, about.html, portfolio.html, contact.html, css/, js/) into the uploader
4. Click **Commit changes**

Option B (Git command line):
```bash
git init
git add .
git commit -m "Initial website launch"
git remote add origin https://github.com/YOUR_USERNAME/redpremere-website.git
git push -u origin main
```

### Step 3 — Connect Cloudflare Pages
1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages → Create application → Pages → Connect to Git**
3. Authorize GitHub and select `redpremere-website`
4. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (or leave empty)
5. Click **Save and Deploy**
6. Cloudflare will give you a free URL like: `redpremere-website.pages.dev`

### Step 4 — Connect redpremere.com Domain
1. In Cloudflare Pages, go to your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `redpremere.com`
4. Cloudflare will add the DNS record automatically (since your domain is on Cloudflare)
5. Done! redpremere.com is live ✅

### Step 5 — Auto-Deploy on Push
Every time you push changes to GitHub, Cloudflare Pages auto-rebuilds and redeploys. No manual action needed.

---

## Adding Client Subpages (e.g. redpremere.com/sharma-gym)

For clients who only want bottles with QR (no separate website):
1. Create a folder in the repo: `sharma-gym/`
2. Add an `index.html` inside it with their info
3. Push to GitHub
4. Cloudflare Pages will serve it at `redpremere.com/sharma-gym`

---

## Adding a Client With Their Own Website

For clients who want their own domain + separate website:
1. Create a new GitHub repo: `sharma-gym-website`
2. Build their static site (new HTML files)
3. Create a NEW Cloudflare Pages project connected to that repo
4. Buy their domain and connect it in Cloudflare
5. Completely separate from redpremere.com

---

## Tech Stack
- Pure HTML + CSS + Vanilla JS (zero dependencies)
- Hosted on Cloudflare Pages (free tier)
- Forms handled by Formspree (free tier = 50 submissions/month)
- Fonts: Google Fonts (Anton + Space Grotesk)


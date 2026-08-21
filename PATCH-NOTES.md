# redpremere.com — patch v1.6

Apply on top of v1.5. Copy over the repo root:

    index.html
    services.html
    portfolio.html
    about.html
    contact.html
    css/style.css

`css/home.css` and `js/` are unchanged this time.

## 1. Hero was invisible on mobile — two separate bugs

**Bug A.** The stylesheet had `@media(max-width:768px){ .hero-showcase{display:none} }`
left over from when that column held the bottle graphic. It now holds the
"What we supply" panel, i.e. real content, so on any phone the hero simply had
nothing in it. The panel now shows, stacked under the heading, with its own
padding and font sizes for small screens.

**Bug B — my fault, introduced in v1.2.** The hero heading, subtitle, buttons
and trust row all start at `opacity:0` and are revealed by a CSS animation. I
had added `@media (prefers-reduced-motion: reduce) { *{animation:none} }`. On a
phone with battery saver or "remove animations" switched on — the default on a
lot of Androids once battery saver kicks in — the animation never runs, so
those elements stayed at `opacity:0` permanently. That is why you saw the trust
line and nothing else. The reduced-motion rule now forces `opacity:1` instead
of just killing the animation.

## 2. White-on-white text

`.stat-label` was still `rgba(255,255,255,.7)` — invisible on the light ground.
Same for the bundle price notes, renewal line, footer contact values and the
marquee. All moved to ink or grey.

## 3. Website packages looked unrendered

`services.html` was using `<ul class="bundle-features"><li>`, but the CSS only
styles `.bundle-feature` divs with a check icon. The list had no styling at all,
which is exactly the "unrendered" look. Rebuilt with the correct markup, so it
now matches the home page cards.

## 4. Project links

- **TripLedger** — now live at `tripledger.honestbro.online`, on both the home
  page card and the portfolio card.
- **granixtech.in**, **store**, **GGIC demo** — these were styled as small tag
  pills, which do not read as buttons and are a poor tap target. All four are
  now proper filled teal buttons.

## 5. Footer ("services from below the homepage")

Still advertised Branded Bottles, Custom Merch, NFC Cards and Pro Labeling, and
described the firm as "Varanasi's complete brand partner". Replaced with the
real service list plus a link to the store. Badges now read GST Registered /
Udyam / Proprietorship instead of "MSME Cert. / Est. 2025".

## 6. General mobile

Single-column pricing, portfolio and footer grids under 768px; 44px minimum tap
targets on buttons; `scroll-margin-top` on sections so anchor jumps are not
hidden behind the fixed nav; tighter container padding.

# redpremere.com — patch v1.4

Copy these files over your repo root, keeping the folder structure:

    index.html
    services.html
    portfolio.html
    about.html
    contact.html
    css/style.css
    css/home.css

Nothing else changed. `assets/`, `js/`, `favicon.ico` are untouched.

## What changed

**Light theme, "Paper & Blue."** The dark ground is gone. White page,
`#F5F7FB` for alternating bands, `#0F1B2D` ink for type, `#1D5FD1` blue as the
primary accent, `#0F7B6C` teal green for status badges, `#E2E8F0` hairlines.

**Logo restored.** The wordmark is red + ink again — `red` and the dot in
`#E63946`, `premere` in ink. Held in a new `--brand-red` variable so the logo
never follows the UI accent again. Nav, footer and the small footer wordmark
all match.

**Variable names unchanged.** `--black`, `--black-card`, `--white`, `--red`,
`--gold` still exist and are used everywhere; only their values flipped, so
`--black` now resolves to white and `--white` to ink. Confusing to read, but it
meant a one-file colour change instead of touching a thousand call sites.

**Chrome reworked for light:** translucent white nav, form fields with visible
borders and a focus ring, card shadows instead of glows, hero gradient wash
replacing the dark hero background and particle layer.

## Still open

- The ₹9,999 Business tier price is a guess.
- TripLedger has no public URL; `portfolio.html` holds the anchor markup in a
  comment, ready to paste back.
- `assets/img/` slots are still empty — dashed frames name the file each wants.

# redpremere.com — patch v1.5

Apply on top of v1.4. Copy over the repo root, keeping folder structure:

    index.html
    portfolio.html
    contact.html
    css/style.css
    css/home.css

`services.html` and `about.html` did not change in this patch — they carried no
blue except through CSS variables, which style.css now redefines.

## What changed

Blue accent replaced with teal `#00B0BA` throughout — buttons, badges, rules,
eyebrows, focus rings, hover states, tag pills.

## One adjustment you should know about

`#00B0BA` measures 2.65:1 against white. WCAG needs 4.5:1 for body text and
3:1 for large text, so as a *font* colour on a white page it fails both — links
and small labels would be genuinely hard to read, especially on a phone
outdoors.

So it is split in two:

- `#00B0BA` — fills only: button backgrounds, badges, the accent rule, dots,
  focus outlines. Used as a background it is fine.
- `#006E75` (`--accent-text`) — all type on white: links, eyebrows, the
  highlighted words in headings, card links. Same hue, 6.0:1, reads cleanly.

Filled teal buttons take ink text `#0F1B2D` rather than white — 6.5:1 against
the teal, where white would have been 2.65:1.

If you would rather have one single colour everywhere, say so and I will use
`#006E75` for both. The look barely changes; the fills just go a shade deeper.

## Unchanged

Logo is still red + ink (`--brand-red: #E63946`), independent of the accent.

# Burroughs Landscaping — Spec Site (Concept)

Multi-page proof-of-concept for the landscaping niche template.

## How to view it
Unzip, then double-click `index.html` to open it in any browser. All links between pages are relative, so the whole folder can be opened locally or uploaded as-is to any static host.

## Structure
- `index.html`, `services.html`, `about.html`, `gallery.html`, `contact.html` — the 5 pages
- `css/styles.css` — shared design system (colors, type, spacing, motion)
- `js/script.js` — preloader, mobile menu, scroll reveal, sticky nav, and the `config` object (business name, phone, service areas)
- `assets/images/` — real client photos go here
- `assets/logo/` — the real logo goes here

## Exact filenames — drop images in with these names and they appear automatically
No code editing needed — every image slot already points at one of these paths and swaps itself in the moment a matching file exists. If a name doesn't match exactly, that slot just keeps showing its placeholder.

- `assets/logo/logo.png` — used in the nav bar, the footer, and the preloader
- `assets/images/hero.jpg` — homepage hero image
- `assets/images/about.jpg` — About page photo
- `assets/images/gallery-1.jpg` through `assets/images/gallery-9.jpg` — the 9 tiles on the Our Work page, in order

Any standard image format works (.jpg, .png, .webp) as long as you also update the file extension inside the `src="..."` attribute for that slot if it isn't a .jpg/.png. JPG is the safest default for photos (smaller file size).

## Known placeholders still to swap
- Contact form isn't wired to a backend yet (no email will send)
- Map embed on the Contact page is a placeholder block
- Testimonials use real Google review quotes already provided by the client (Karen Hafner, Karen Southworth, Rick Moore) — swap for newer ones as they come in

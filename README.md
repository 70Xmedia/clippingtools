# ClippingTools.com

Static HTML/CSS/JS website reviewing the best online, offline, and gaming clipping tools. No build step required — ready to upload as-is.

## Structure

```
index.html        Homepage (all tool reviews: Online / Offline / Gaming sections)
about.html         About page
contact.html       Contact page (mailto form to support@clippingapps.com)
submit.html        "Submit Your App" page for product owners
privacy.html        Privacy Policy
disclaimer.html     Disclaimer / affiliate disclosure
robots.txt          Search engine crawl rules
sitemap.xml          XML sitemap
assets/style.css     All site styling (design tokens at the top of the file)
assets/nav.js        Mobile nav menu toggle
```

## Deploying with GitHub Pages

1. Create a new repository on GitHub (e.g. `clippingtools`).
2. Upload every file in this folder to the root of that repository, keeping the `assets/` folder intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save. GitHub will publish at `https://<your-username>.github.io/<repo-name>/`.
6. To use your own domain (clippingtools.com):
   - Add a file named `CNAME` (no extension) to the repo root containing exactly: `www.clippingtools.com`
   - At your domain registrar, create a CNAME record for `www` pointing to `<your-username>.github.io`, and follow GitHub's instructions for apex domain A records if you also want `clippingtools.com` (without www) to work.
   - Back in Settings → Pages, enter your custom domain and enable "Enforce HTTPS" once it's verified.

## Before you go live — recommended edits

- Replace `https://www.clippingtools.com/` in the `<link rel="canonical">`, Open Graph, and structured data (JSON-LD) tags if your final domain differs.
- Add a real `assets/og-image.png` (1200×630px) for social share previews — the meta tag referencing it is already in `index.html`.
- Update pricing figures periodically; AI tool pricing changes often. Each review notes when pricing was last checked.
- Consider adding Google Analytics / Search Console verification once the domain is live.
- Swap the `mailto:` contact/submit forms for a real form backend (e.g. Formspree, Netlify Forms) if you want submissions to land somewhere other than the visitor's own email client.

# TCEU Guides

Public, standalone usage documentation for Telechips Europe's web tools.

- Guide directory: https://tceu.github.io/
- EU NDA STATUS guide: https://tceu.github.io/nda/
- Demo application: https://tceu-nda.pages.dev/

This repository contains public help content and a synthetic-data screenshot only. It does not contain application source, credentials, actual agreements or customer data. App repositories remain private.

## Update

Edit `site/nda/index.html`, shared `site/assets/guide.css` and `site/assets/guide.js`. Future tools get their own `site/<short-name>/` directory and a link on the index. Paths are relative and require no custom domain.

Run `node --run check`, `node --run build`, and `node --run dev` (Python required for local preview). Main pushes publish the checked `dist` artifact via GitHub Actions. PRs only validate. Pages uses GitHub's short-lived deployment token, with no external account secret.

Content baseline: initial demo v0.1, reviewed against application behavior on 2026-11-10. Update the guide alongside app behavior changes. The guided steps and status scenarios explain the demo; they do not change application data. Screenshot values are explicitly dated; current date-based results may differ.

Visual reference: https://www.raycast.com/ — dark surfaces, prominent typography and product-first explanation. No Raycast text, logo or visual assets are reused.

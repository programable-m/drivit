# Drivus — Tangier Car Rental

Dependency-free responsive static website rebuilt from the supplied Drivus export.

## Pages
Home, Fleet, Vehicle Details, Services, About and Contact.

## Run
Open `index.html` directly or run `python -m http.server 8000`.

## Deploy
No build command and no npm installation are required. Deploy to Netlify, Vercel, GitHub Pages or another static host.

## Contact form
The form validates and displays a confirmation locally. It contains no fake endpoint. Connect it to your preferred email/form service before production.

## Cleanup
Editor/runtime assets from Sticklight, Stripe, Monaco, Cloudflare and analytics were removed because they are not required by the Drivus website.

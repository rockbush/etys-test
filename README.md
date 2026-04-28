# SellerMargin MVP

This is a static MVP for an Etsy Profit Calculator + AI Listing Generator.

Live preview:

```text
https://rockbush.github.io/etys-test/
```

## Files

- `index.html`: main website page
- `styles.css`: responsive UI styles
- `script.js`: profit calculator and demo listing generator logic
- `privacy.html`: simple privacy policy for the static MVP
- `terms.html`: simple terms page for the static MVP
- `vercel.json`: static deployment settings for Vercel

## Current Features

- Etsy profit calculator
- Etsy fee, payment fee, margin, break-even price, and target price calculation
- Demo AI listing generator UI
- SEO page plan section
- Affiliate placement section
- Pricing section
- Early access waitlist form prototype
- Privacy Policy and Terms pages
- Basic SEO, Open Graph, Twitter Card, and SoftwareApplication schema metadata

## Waitlist Form

The current waitlist form is a static MVP prototype. It validates the email and shop type,
then saves the test submission to `localStorage` under `sellermarginWaitlist`.

Before sending real traffic, connect the form to Tally, Airtable, Supabase, or another
backend so submissions are collected outside the visitor's browser.

## Next Production Steps

1. Move to Next.js for SEO routing and server API calls.
2. Add real AI generation through OpenAI, Gemini, Claude, or OpenRouter.
3. Add user login with Supabase.
4. Add credits and payment webhooks through PayPal, Lemon Squeezy, or Paddle.
5. Create SEO routes:
   - `/etsy-profit-calculator`
   - `/etsy-fee-calculator`
   - `/etsy-listing-generator`
   - `/etsy-pod-profit-calculator`
   - `/printify-etsy-profit-calculator`
6. Add FAQ schema and article templates.

## Local Preview

Run:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

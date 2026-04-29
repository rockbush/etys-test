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
- `MARKETING_TEST_PLAN.md`: 7-day validation plan and promotion copy
- `ACCOUNT_SETUP_GUIDE.md`: account setup guide for Reddit, Pinterest, and Facebook outreach

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
- Google Analytics 4 tracking with core conversion events

## Waitlist Form

The waitlist form submits to FormSubmit at `rockbush2021@gmail.com` and keeps a local
browser backup under `sellermarginWaitlist`.

The first live submission may trigger a FormSubmit confirmation email. Open that email
and confirm the address before sending real traffic.

## Analytics

Google Analytics 4 is configured with measurement ID `G-8YVQJDS0BV`.

Tracked events:

- `calculator_used`
- `calculator_viewed`
- `listing_viewed`
- `listing_generated`
- `pricing_viewed`
- `waitlist_viewed`
- `hero_calculator_clicked`
- `hero_listing_clicked`
- `cta_clicked`
- `waitlist_submit_clicked`
- `waitlist_submitted`
- `waitlist_submit_failed`

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

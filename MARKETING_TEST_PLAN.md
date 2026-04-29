# SellerMargin 7-Day Marketing Test Plan

Live site:

```text
https://rockbush.github.io/etys-test/
```

Goal: validate whether Etsy sellers use the calculator, try the listing generator, and join the early access list before building the full SaaS product.

## Success Metrics

Run the test until the site reaches at least 100-300 real visits.

Primary metrics in GA4:

- `calculator_used / page_view >= 20%`
- `waitlist_submitted / page_view >= 3%`
- `cta_clicked / page_view >= 1%`
- Average engagement time above 30 seconds

Decision rules:

- If calculator usage is high but waitlist is low, improve the waitlist offer and CTA copy.
- If visits are high but calculator usage is low, move the calculator higher and make the first screen more tool-focused.
- If waitlist is 3% or higher, build real AI listing generation next.
- If waitlist is 5% or higher and users ask about pricing, start planning login, credits, and payment.

## Tracking Checklist

Before posting:

- Open GA4 Realtime.
- Visit the live site in an incognito window or on phone data.
- Change one calculator field and confirm `calculator_used`.
- Click Generate and confirm `listing_generated`.
- Click Early Access and confirm `cta_clicked`.
- Submit the waitlist form and confirm `waitlist_submitted`.
- Confirm the lead arrives at `rockbush2021@gmail.com`.

## 7-Day Schedule

### Day 1: Baseline Test

Post softly in 1-2 places where promotion is allowed. Goal: check whether analytics, email capture, and messaging work.

Actions:

- Share with 5-10 people who sell online or know Etsy sellers.
- Post one low-key Reddit or Facebook question-style post.
- Record current GA4 baseline.

### Day 2: Etsy Seller Communities

Actions:

- Post in Etsy seller Facebook groups that allow tools or feedback posts.
- Ask for feedback, not sales.
- Track comments and objections manually.

### Day 3: Reddit Test

Actions:

- Post in one relevant subreddit only if rules allow self-promotion or feedback requests.
- Use the feedback version below.
- Reply to every useful comment.

### Day 4: Pinterest Test

Actions:

- Create 2-3 pins around Etsy pricing and profit.
- Link to the calculator.
- Test one direct title and one pain-point title.

### Day 5: Short Video Test

Actions:

- Record a 15-30 second screen video showing a product price, fees, and net profit.
- Post on TikTok, YouTube Shorts, or Instagram Reels.
- Use the short video script below.

### Day 6: Iterate Copy

Actions:

- Review GA4 events by traffic source.
- Update the post angle based on the best-performing message.
- Repost only in places where it is allowed and useful.

### Day 7: Decision Review

Actions:

- Export or screenshot GA4 traffic and event counts.
- Count waitlist emails.
- Write down the top 5 user objections or questions.
- Decide whether to build real AI generation.

## Reddit / Community Post Variants

### Feedback Version

Title:

```text
I made a free Etsy profit calculator and would like seller feedback
```

Body:

```text
I built a small free tool for Etsy sellers to estimate net profit after product cost, shipping, packaging, Etsy fees, payment fees, discounts, ads, and offsite ads.

It also has a simple listing generator prototype for titles, tags, and descriptions, but the calculator is the main thing I want feedback on.

Link:
https://rockbush.github.io/etys-test/

I am trying to learn whether the fee breakdown and break-even price are actually useful before I spend time building a full app.

If you sell on Etsy, what is missing from this calculator?
```

### Pain-Point Version

Title:

```text
How do you check if an Etsy product is profitable before listing it?
```

Body:

```text
I have been working on a small free calculator for Etsy pricing because it is easy to underestimate product cost, packaging, shipping, transaction fees, payment fees, ads, and offsite ads.

Here is the tool:
https://rockbush.github.io/etys-test/

It shows estimated net profit, margin, break-even price, and a suggested target price. I also added a simple listing copy prototype, but the profit calculator is the main focus.

For Etsy sellers: what costs do you usually forget to include?
```

### POD Version

Title:

```text
Testing a simple Etsy/POD profit calculator
```

Body:

```text
I made a lightweight Etsy profit calculator for handmade, digital, and POD sellers.

Link:
https://rockbush.github.io/etys-test/

It includes price, shipping charged, product cost, shipping cost, packaging, ads, discounts, Etsy transaction fee, payment fee, and offsite ads.

I am especially interested in whether this works for Printify/Printful-style products. What POD-specific costs should I add?
```

## Facebook Group Post

```text
I made a free Etsy profit calculator and would love feedback from sellers.

It estimates net profit, margin, Etsy fees, payment fees, break-even price, and gives a suggested pricing target. I also added a small listing title/tag/description prototype.

Tool:
https://rockbush.github.io/etys-test/

I am not selling anything yet. I am trying to see whether this is useful enough to build into a real tool.

What would you add or change?
```

## Pinterest Pin Ideas

Published pins:

- Free Etsy Profit Calculator: https://www.pinterest.com/pin/1100356121478107561/

Pin title options:

- Free Etsy Profit Calculator
- Calculate Etsy Profit Before You List
- Etsy Pricing Calculator for Handmade Sellers
- Stop Guessing Your Etsy Profit
- Etsy Fee and Profit Calculator

Pin description options:

```text
Free Etsy profit calculator for sellers. Estimate Etsy fees, payment fees, shipping, product cost, packaging, ads, net profit, margin, and break-even price before listing your product.
```

```text
Not sure if your Etsy product is profitable? Use this free calculator to check product cost, shipping, Etsy fees, ads, payment fees, margin, and break-even price.
```

Suggested pin text:

```text
Calculate Etsy Profit Before You List
```

```text
Are Etsy Fees Eating Your Margin?
```

## TikTok / YouTube Shorts Script

### 15-Second Version

```text
Hook: Before you list on Etsy, check if the product is actually profitable.

Screen: Enter product price, product cost, shipping, packaging, and ad spend.

Result: Show net profit, margin, and break-even price.

Close: I made this free calculator for Etsy sellers. Link in bio or description.
```

### 30-Second Version

```text
Hook: A $40 Etsy product is not a $40 profit.

Screen: Add product cost, shipping cost, packaging, Etsy transaction fee, payment fee, and ad spend.

Result: Show how the net profit changes.

Screen: Change the price or ad spend and show the margin update.

Close: I am testing this free Etsy profit calculator. Try it and tell me what cost I should add next.
```

## Outreach Message

Use this for direct messages to Etsy sellers you already know:

```text
I made a free Etsy profit calculator and I am testing whether sellers actually find it useful.

Could you try it for one product and tell me whether the fee breakdown makes sense?

https://rockbush.github.io/etys-test/
```

## Manual Notes Template

Track feedback in a simple note:

```text
Date:
Channel:
Post URL:
Visits:
calculator_used:
listing_generated:
cta_clicked:
waitlist_submitted:
Comments:
Objections:
Feature requests:
Next change:
```

## What To Build Next If The Test Works

Build in this order:

1. Real AI listing generation with daily free limit.
2. Better SEO keyword and tag output.
3. Product-specific fee presets for handmade, digital, POD, and custom orders.
4. Email follow-up sequence for waitlist leads.
5. Supabase database for saved leads and generated listings.
6. Login and credits.
7. Payment with Lemon Squeezy or Paddle.

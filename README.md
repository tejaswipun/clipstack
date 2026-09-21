# ClipStack — Content Rewards Analytics for Whop

> **The first dedicated analytics dashboard for Whop Content Rewards campaign owners.**

ClipStack is a Whop Dashboard View app that gives campaign owners/creators real-time analytics on their Content Rewards campaigns. It solves a $40K+/day problem: campaign owners have ZERO visibility into creator performance, fraud, and ROI.

## Live App

**https://clipstack-black.vercel.app**

| Page | URL | Description |
|---|---|---|
| Landing | `/` | Marketing page with features and CTAs |
| App Store | `/discover` | Whop App Store listing |
| Dashboard | `/dashboard/[companyId]` | Main analytics (requires Whop auth) |
| Privacy | `/privacy` | Privacy policy |
| Webhooks | `/api/webhooks` | POST: webhook receiver, GET: event feed |

## Features

| Feature | Component | Description |
|---|---|---|
| Budget Intelligence | `budget-burn-rate.tsx` | Burn rate calculator, forecasting, alert levels |
| Creator Scoring | `creator-quality-scoring.tsx` | 0-100 scores based on views, approval rate, consistency |
| Revenue & ROI | `revenue-roi-tracking.tsx` | CPM analysis, platform breakdown, channel comparison |
| Activity Feed | `webhook-activity-feed.tsx` | Real-time webhook events (invoices, entries, memberships) |
| CSV Export | `csv-export.tsx` | Export campaigns, creators, revenue data |
| KPI Cards | `stat-card.tsx` | Key metrics at a glance |
| Campaign Table | `campaign-table.tsx` | Campaign performance with status, budget, spend |
| Leaderboard | `creator-leaderboard.tsx` | Top creators ranked by earnings |
| Revenue Chart | `revenue-chart.tsx` | Visual revenue trends |

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.1 | App Router, server components, API routes |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| @whop/sdk | 0.0.3 | Server-side Whop API calls |
| @whop/react | 0.3.0 | Client-side Whop SDK (auth, rendering) |
| Vercel | — | Hosting, serverless functions, CI/CD |

## Quick Start

```bash
# Clone
git clone https://github.com/tejaswipun/clipstack.git
cd clipstack

# Install
npm install

# Configure
cp .env.example .env.local
# Edit .env.local with your Whop credentials

# Run
npm run dev
```

## Environment Variables

| Variable | Type | Required | Description |
|---|---|---|---|
| `NEXT_PUBLIC_WHOP_APP_ID` | Config | Yes | Whop app ID (`app_HT52ox6luoJcv`) |
| `WHOP_API_KEY` | Secret | Yes | From Whop Developer Dashboard → Keys |
| `WHOP_WEBHOOK_SECRET` | Secret | Yes | From Whop webhook creation |
| `WHOP_CLIENT_ID` | Secret | Yes | OAuth client ID |
| `WHOP_CLIENT_SECRET` | Secret | Yes | OAuth client secret |
| `NEXT_PUBLIC_APP_URL` | Config | Yes | `https://clipstack-black.vercel.app` |
| `NEXT_PUBLIC_APP_NAME` | Config | Yes | `ClipStack` |
| `WHOP_REDIRECT_URI` | Config | Yes | OAuth redirect URI |
| `NODE_ENV` | Config | Yes | `production` |

## Project Structure

```
clipstack-v2/
├── app/
│   ├── layout.tsx              # Root layout with WhopApp wrapper
│   ├── page.tsx                # Landing page (hero, features, CTAs)
│   ├── dashboard/
│   │   └── [companyId]/
│   │       └── page.tsx        # Main analytics dashboard
│   ├── discover/
│   │   └── page.tsx            # App Store listing page
│   ├── experiences/
│   │   └── [experienceId]/
│   │       └── page.tsx        # Experience view
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy
│   └── api/
│       └── webhooks/
│           └── route.ts        # Webhook handler (POST + GET)
├── components/
│   ├── budget-burn-rate.tsx
│   ├── creator-quality-scoring.tsx
│   ├── revenue-roi-tracking.tsx
│   ├── webhook-activity-feed.tsx
│   ├── csv-export.tsx
│   ├── stat-card.tsx
│   ├── campaign-table.tsx
│   ├── creator-leaderboard.tsx
│   └── revenue-chart.tsx
├── lib/
│   └── whop-sdk.ts             # SDK singleton
├── public/
│   └── app-icon.svg            # App icon (512x512)
├── styles.css                  # Global styles + @whop/react fallback
├── HANDOFF.md                  # Full project status and next steps
├── WHOP-SUBMISSION-GUIDE.md    # Step-by-step submission guide
└── README.md                   # This file
```

## Deployment

- **Hosting:** Vercel (auto-deploy from GitHub `main` branch)
- **Build:** `next build` (7 routes, ~30s)
- **Node:** v24.19.0 (engine warnings don't affect build)

## Whop App Configuration

| Setting | Value |
|---|---|
| App ID | `app_HT52ox6IuoJEcv` |
| App Type | B2B Dashboard View |
| Base URL | `https://clipstack-black.vercel.app` |
| Dashboard Path | `/dashboard/[companyId]` |
| Discover Path | `/discover` |
| Experience Path | `/experience/[experienceId]` |
| Permissions | `payment:basic:read`, `member:phone:read`, `company:balance:read`, `company:authorized_user:read` |
| Webhook Events | invoice.paid, invoice.voided, invoice.past_due, membership.activated, membership.deactivated, entry.created, entry.approved, entry.denied |

## Pricing

| Tier | Price | Campaigns | Features |
|---|---|---|---|
| Starter | Free | 1 | Basic stats, 7-day history |
| Pro | $49/mo | Unlimited | Creator rankings, budget forecasting, CSV export |
| Agency | $149/mo | Unlimited | Multi-brand, white-label, API access, team seats |

## License

Proprietary — ClipStack. All rights reserved.

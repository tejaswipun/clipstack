# ClipStack — Content Rewards Analytics for Whop

A Whop Dashboard View app that gives campaign owners/creators real-time analytics on their Content Rewards campaigns.

## Features

- **Budget Intelligence** — Burn rate calculator, forecasting, alert levels
- **Creator Quality Scoring** — 0-100 scores based on views, approval rate, consistency
- **Revenue & ROI Tracking** — CPM analysis, platform breakdown, channel comparison
- **Live Activity Feed** — Real-time webhook events
- **CSV Export** — Export campaigns, creators, revenue data
- **Campaign Performance** — Status, budget, spend, views, creators
- **Creator Leaderboard** — Top performers by earnings

## Quick Start

```bash
npm install
npm run dev
```

## Environment Variables (.env.local)

```
NEXT_PUBLIC_WHOP_APP_ID=app_HT52ox6luoJcv
WHOP_API_KEY=              # Get from Developer Dashboard
WHOP_WEBHOOK_SECRET=       # Get when creating webhook
```

## Deployment

Connected to Vercel via GitHub. Every push to `main` auto-deploys.

## Whop Configuration

- **App path:** `/experiences/[experienceId]`
- **Dashboard path:** `/dashboard/[companyId]`
- **Discover path:** `/discover`

## Tech Stack

- Next.js 16.1.1 (App Router)
- TypeScript
- Tailwind CSS 4.x
- @whop/sdk 0.0.3
- @whop/react 0.3.0

# ClipStack v2 — Whop Dashboard View App

## Architecture

ClipStack is a **Whop Dashboard View app** built on the official template that provides **Content Rewards Analytics** for campaign owners/creators.

- **Runs inside Whop** as an iframe in the creator's dashboard
- **Uses Whop SDK** for authentication (no custom login needed)
- **Route:** `/dashboard/[companyId]` — Whop injects the account ID
- **Deploy to:** Vercel

## Project Structure

```
clipstack-v2/
├── app/
│   ├── layout.tsx              # Root layout with <WhopApp> wrapper
│   ├── globals.css             # Tailwind + Whop Frosted UI
│   ├── dashboard/
│   │   └── [companyId]/
│   │       └── page.tsx        # Main analytics dashboard (admin-only)
│   ├── discover/
│   │   └── page.tsx            # App Store listing page
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy (required for submission)
│   └── api/
│       └── webhooks/
│           └── route.ts        # Webhook handler + GET for activity feed
├── components/
│   ├── stat-card.tsx           # KPI stat cards with change indicators
│   ├── campaign-table.tsx      # Campaign performance table
│   ├── creator-leaderboard.tsx # Top creators ranking
│   ├── revenue-chart.tsx       # Revenue over time chart
│   ├── budget-burn-rate.tsx    # Budget burn rate calculator & forecasting
│   ├── creator-quality-scoring.tsx # Creator quality scoring system
│   ├── revenue-roi-tracking.tsx    # Revenue & ROI tracking
│   ├── webhook-activity-feed.tsx   # Live webhook activity feed
│   └── csv-export.tsx          # CSV export functionality
├── lib/
│   └── whop-sdk.ts             # SDK singleton initialization
├── .env.local                  # Environment variables
├── HANDOFF.md                  # This file
└── package.json
```

## Environment Variables (.env.local)

```
NEXT_PUBLIC_WHOP_APP_ID=app_HT52ox6luoJcv
WHOP_API_KEY=              # Get from Developer Dashboard
WHOP_WEBHOOK_SECRET=       # Get when creating webhook
```

## How Authentication Works

1. Whop loads the app inside an iframe on whop.com
2. On every request, Whop injects `x-whop-user-token` header
3. `whopsdk.verifyUserToken(headers())` validates the JWT
4. `whopsdk.users.checkAccess(companyId, { id: userId })` checks admin access
5. No custom login flow needed — Whop handles it all

## How to Run Locally

```bash
# Install dependencies
npm install

# Run the dev proxy (simulates Whop iframe + auth)
npm run dev
```

The dev proxy runs on port 3000 and injects the auth token automatically.

To preview in Whop:
1. Install the app on your Whop account
2. Open the app in Whop dashboard
3. Click the cog/settings icon → Select "localhost"

## Dashboard Features

### 1. Stats Overview (Real Data)
- **Total Revenue** — from Whop payments API
- **Total Members** — from Whop members API
- **Active Members**
- **Retention Rate** — calculated from active/total

### 2. Budget Intelligence
- **Budget Burn Rate Calculator** — tracks daily spend rate
- **Forecasting** — projects when budget will run out
- **Alert Levels** — safe/warning/critical based on days remaining
- **Burn Velocity** — accelerating/steady/decelerating trends
- **Quick Actions** — adjust CPM, pause campaign, view breakdown

### 3. Revenue & ROI Tracking
- **ROI Score** — return on investment percentage
- **CPM Analysis** — your CPM vs industry benchmark
- **Platform Breakdown** — TikTok vs YouTube Shorts vs Instagram Reels vs X
- **Channel Comparison** — Content Rewards vs Meta Ads vs Google Ads vs Influencer Deals

### 4. Campaign Performance Table
- Campaign name, status, budget, spent, views, creators
- Burn rate visualization
- CPM calculation

### 5. Creator Quality Scoring
- **Overall Score** (0-100) based on multiple metrics
- **Metrics:** Views per clip, Approval rate, Consistency, Niche relevance
- **Status badges:** Top Performer, Good, Average, At Risk, Flagged
- **Growth trends:** Up, Stable, Down
- **Filter & Sort** by score, views, or earnings

### 6. Creator Leaderboard
- Top performers by earnings
- Views, clips, average views per clip

### 7. Revenue Chart
- 30-day revenue trend
- Daily average calculation
- Total views

### 8. Live Activity Feed
- Real-time webhook events
- Event types: payments, memberships, entries
- Visual indicators for processed events

### 9. CSV Export
- Export campaigns, creators, or revenue data
- Formatted for spreadsheets
- Timestamped filenames

## Whop Webhook Events Handled

- `invoice.paid` — Payment received
- `invoice.voided` — Payment voided
- `invoice.past_due` — Payment past due
- `membership.activated` — New member
- `membership.deactivated` — Member left
- `entry.created` — New content entry
- `entry.approved` — Entry approved
- `entry.denied` — Entry denied

## Deployment Steps

1. **Get Whop API Key** from Developer Dashboard
2. **Create GitHub repo** and push code
3. **Deploy to Vercel** and connect to GitHub
4. **Configure Whop Dashboard** with Vercel URL
5. **Add Permissions** in Whop (payments, members, companies)
6. **Create Webhooks** for real-time updates
7. **Test with real account**
8. **Submit for Whop review**

## Whop Submission Requirements

- [ ] App Name: ClipStack
- [ ] Contact Email
- [ ] Privacy Policy URL (built at /privacy)
- [ ] App Description
- [ ] Tested with at least 1 Whop member
- [ ] Filled out App Submission form

## Pricing Model

- **Starter:** Free (1 campaign, basic stats, 7-day history)
- **Pro:** $49/mo (unlimited campaigns, creator rankings, budget forecasting, 90-day history, CSV export)
- **Agency:** $149/mo (multi-brand, white-label reports, API access, team seats)

## Key Differences from v1

| v1 (Standalone) | v2 (Whop App) |
|----------------|---------------|
| Custom login page | Whop handles auth |
| Runs on its own URL | Embedded in Whop iframe |
| Mock data | Real Whop API data |
| No integration | Full Whop SDK integration |
| Standalone website | Dashboard View app |
| Basic stats only | Budget forecasting, creator scoring, ROI tracking |

## Tech Stack

- **Next.js 16.1.1** with App Router
- **TypeScript**
- **Tailwind CSS 4.x**
- **@whop/sdk 0.0.3**
- **@whop/react 0.3.0**

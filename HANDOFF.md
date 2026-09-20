# ClipStack — Handoff Document

## What is ClipStack?
ClipStack is a **Whop Dashboard View app** that provides Content Rewards analytics for campaign owners/creators. It's submitted to the Whop App Store for approval.

## Live URL
**https://clipstack-black.vercel.app**

## Architecture
- **Framework:** Next.js 16.1.1 (App Router)
- **UI:** Tailwind CSS 4.x, @whop/react 0.3.0
- **Backend:** @whop/sdk 0.0.3, Vercel serverless functions
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Repo:** https://github.com/tejaswipun/clipstack (main branch)

## Pages
| Route | Type | Description |
|---|---|---|
| `/` | Static | Landing page with hero, features, CTAs |
| `/discover` | Static | App Store listing page with pricing |
| `/privacy` | Static | Privacy policy |
| `/dashboard/[companyId]` | Dynamic | Main analytics dashboard (requires Whop auth) |
| `/experiences/[experienceId]` | Dynamic | Experience view (requires Whop auth) |
| `/api/webhooks` | Dynamic | Webhook receiver (POST) + event feed (GET) |

## Components
- `budget-burn-rate.tsx` — Budget burn rate calculator & forecasting
- `creator-quality-scoring.tsx` — Creator quality scoring (0-100)
- `revenue-roi-tracking.tsx` — Revenue & ROI with CPM analysis
- `webhook-activity-feed.tsx` — Live webhook event display
- `csv-export.tsx` — CSV export functionality
- `stat-card.tsx` — KPI stat cards
- `campaign-table.tsx` — Campaign performance table
- `creator-leaderboard.tsx` — Creator rankings
- `revenue-chart.tsx` — Revenue chart

## Whop Configuration

### App Details (configured)
- **App ID:** `app_HT52ox6IuoJEcv`
- **App Name:** ClipStack
- **App Type:** B2B app
- **Base URL:** `https://clipstack-black.vercel.app`
- **Dashboard path:** `/dashboard/[companyId]`
- **Discover path:** `/discover`
- **Experience path:** `/experience/[experienceId]`

### Permissions (configured)
- `payment:basic:read` — Read payment data for ROI analytics
- `member:phone:read` — Read member data for creator tracking
- `company:balance:read` — Read company info for branding
- `company:authorized_user:read` — Verify admin access

### Webhooks (configured)
- **URL:** `https://clipstack-black.vercel.app/api/webhooks`
- **Events:** invoice.paid, invoice.voided, invoice.past_due, membership.activated, membership.deactivated, entry.created, entry.approved, entry.denied
- **Signing Secret:** Added to Vercel as `WHOP_WEBHOOK_SECRET`

### Automated DM (configured)
- Welcome message sent to creators on install

## Environment Variables (Vercel)
| Variable | Type | Status |
|---|---|---|
| `WHOP_API_KEY` | Secret | ✅ Added |
| `WHOP_WEBHOOK_SECRET` | Secret | ✅ Added |
| `NEXT_PUBLIC_WHOP_APP_ID` | Config | ✅ Added (`app_HT52ox6luoJcv`) |
| `WHOP_CLIENT_ID` | Secret | ✅ Added |
| `WHOP_CLIENT_SECRET` | Secret | ✅ Added |
| `NEXT_PUBLIC_APP_URL` | Config | ✅ Added |
| `NEXT_PUBLIC_APP_NAME` | Config | ✅ Added |
| `WHOP_REDIRECT_URI` | Config | ✅ Added |
| `NODE_ENV` | Config | ✅ Added |

## Current Status
- **Published to Whop App Store** — awaiting review (1-7 days)
- All code builds locally and deploys to Vercel
- All permissions, webhooks, and env vars configured

## When Review is Approved
1. Check the Whop Developer Dashboard for approval status
2. Test with a real Whop account — install the app
3. Verify the dashboard loads with real data
4. Monitor webhook events flowing in
5. Start marketing to Content Rewards campaign owners

## Pricing Model
- **Starter:** Free (1 campaign, basic stats, 7-day history)
- **Pro:** $49/mo (unlimited campaigns, creator rankings, budget forecasting)
- **Agency:** $149/mo (multi-brand, white-label, API access)

## Key Research Findings
- $40K+/day Content Rewards payouts, ~1M videos/month
- ZERO analytics tools exist for campaign owners
- Top pain points: fraud detection, budget tracking, creator scoring
- Whop fee: 2.7% + $0.30 domestic, 0% marketplace commission
- $500+ products = 6% of catalog but 56% of revenue
- Successful apps: $10-50/mo pricing sweet spot

## Files
- `clipstack-v2/` — Main project directory
- `WHOP-SUBMISSION-GUIDE.md` — Step-by-step submission guide
- `HANDOFF.md` — This file

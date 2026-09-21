# ClipStack — Handoff Document

> **Last updated:** Monday, September 21, 2026 — 12:15 AM (UTC+4)
> **Status:** Published to Whop App Store — awaiting review

---

## What is ClipStack?
ClipStack is a **Whop Dashboard View app** that provides Content Rewards analytics for campaign owners/creators. It's the first dedicated analytics tool for Whop's $1.2B/year Content Rewards ecosystem.

## Live URL
**https://clipstack-black.vercel.app**

---

## Project Timeline

| Date | Milestone | Status |
|---|---|---|
| Sep 17, 2026 | Whop account created, API key generated | ✅ Done |
| Sep 17, 2026 | v1 standalone app built (wrong architecture) | ✅ Done (abandoned) |
| Sep 19, 2026 | Market research completed (10 pain points, pricing) | ✅ Done |
| Sep 19, 2026 | v2 cloned from Whop template, dependencies installed | ✅ Done |
| Sep 19-20, 2026 | v2 feature components built (9 components) | ✅ Done |
| Sep 20, 2026 | Webhook handler enhanced (8 event types) | ✅ Done |
| Sep 20, 2026 | Dashboard page built with all components | ✅ Done |
| Sep 20, 2026 | Code committed and force-pushed to GitHub | ✅ Done |
| Sep 20, 2026 | Vercel deployment fixed (discovered clipstack-black.vercel.app) | ✅ Done |
| Sep 21, 2026 12:00 AM | Landing page, app icon, store description built | ✅ Done |
| Sep 21, 2026 12:00 AM | Webhook created in Whop Developer Dashboard | ✅ Done |
| Sep 21, 2026 12:05 AM | 4 permissions added in Whop | ✅ Done |
| Sep 21, 2026 12:10 AM | WHOP_WEBHOOK_SECRET added to Vercel | ✅ Done |
| Sep 21, 2026 12:12 AM | Experience page template text cleaned up | ✅ Done |
| Sep 21, 2026 12:15 AM | **App published to Whop App Store** | ✅ Done |
| Sep 21-28, 2026 | Awaiting Whop review (1-7 days) | ⏳ Waiting |
| Sep 28, 2026 | Target: Whop approval received | 🎯 Target |
| Sep 29, 2026 | Target: First real user installs ClipStack | 🎯 Target |
| Oct 1, 2026 | Target: Marketing push begins | 🎯 Target |

---

## Architecture
- **Framework:** Next.js 16.1.1 (App Router)
- **UI:** Tailwind CSS 4.x, @whop/react 0.3.0
- **Backend:** @whop/sdk 0.0.3, Vercel serverless functions
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Repo:** https://github.com/tejaswipun/clipstack (main branch)
- **Node:** v24.19.0 (builds successfully despite engine warnings)

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

---

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

---

## Pricing Model
| Tier | Price | Features |
|---|---|---|
| Starter | Free | 1 campaign, basic stats, 7-day history |
| Pro | $49/mo | Unlimited campaigns, creator rankings, budget forecasting, 90-day history, CSV export |
| Agency | $149/mo | Multi-brand management, white-label reports, API access, team seats |

---

## Next Steps

### Immediate (Waiting for Whop Review)
- [ ] Monitor email for Whop approval notification
- [ ] Check Whop Developer Dashboard → Builds tab for status
- [ ] If rejected: read rejection reason, fix, resubmit

### Post-Approval (Day 1)
- [ ] Install ClipStack on own Whop account
- [ ] Test dashboard with real data
- [ ] Verify webhook events flow in
- [ ] Test all pages (/dashboard, /discover, /privacy)

### Marketing Phase (Week 1)
- [ ] Optimize App Store listing (title, description, screenshots)
- [ ] Create launch post for Whop Townhall
- [ ] Post on Twitter/X with demo GIF
- [ ] Post on r/whop, r/SaaS, r/entrepreneur
- [ ] DM 10 Content Rewards campaign owners
- [ ] Create a "Why ClipStack" blog post

### Growth Phase (Week 2-4)
- [ ] Get first 10 paying users
- [ ] Collect feedback and iterate
- [ ] Add requested features
- [ ] Build referral program
- [ ] Start content marketing (Twitter threads, blog posts)
- [ ] Reach out to Whop influencers for reviews

### Scale Phase (Month 2-3)
- [ ] Hit $1K MRR
- [ ] Launch annual plan discount
- [ ] Add API access for Agency tier
- [ ] Partner with Content Rewards campaign owners
- [ ] Get featured on Whop blog

---

## Key Research Findings
- $40K+/day Content Rewards payouts, ~1M videos/month
- ZERO analytics tools exist for campaign owners
- Top pain points: fraud detection, budget tracking, creator scoring
- Whop fee: 2.7% + $0.30 domestic, 0% marketplace commission
- $500+ products = 6% of catalog but 56% of revenue
- Successful apps: $10-50/mo pricing sweet spot
- First review typically 1-7 days; resubmissions can take longer
- Apps with clear value prop and complete builds get approved faster

## Files
- `clipstack-v2/` — Main project directory
- `WHOP-SUBMISSION-GUIDE.md` — Step-by-step submission guide
- `HANDOFF.md` — This file

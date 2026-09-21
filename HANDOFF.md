# ClipStack — Handoff Document

> **Owner:** Tejaswi (@tejaswipun)
> **Last updated:** Monday, September 21, 2026 — 1:00 AM (UTC+4)
> **Status:** Published to Whop App Store — awaiting review

---

## What is ClipStack?
First dedicated analytics dashboard for Whop Content Rewards campaign owners. Solves a $40K+/day problem: zero visibility into creator performance, fraud, and ROI.

## Live URL
**https://clipstack-black.vercel.app**

---

## Project Timeline

| Date | Milestone |
|---|---|
| Sep 17, 2026 | Whop account created, API key generated |
| Sep 17, 2026 | v1 built (wrong architecture) → abandoned |
| Sep 19, 2026 | Market research completed |
| Sep 19-20, 2026 | v2 built from Whop template (9 components) |
| Sep 20, 2026 | Webhook handler, dashboard, code pushed |
| Sep 20, 2026 | Vercel deployment fixed |
| Sep 21, 2026 12:00 AM | Landing page, app icon, store description |
| Sep 21, 2026 12:05 AM | 4 permissions added in Whop |
| Sep 21, 2026 12:10 AM | WHOP_WEBHOOK_SECRET added to Vercel |
| Sep 21, 2026 12:15 AM | **App published to Whop App Store** |
| Sep 21-28, 2026 | Awaiting Whop review (1-7 days) |
| Sep 28, 2026 | Target: Whop approval |
| Oct 1, 2026 | Target: Marketing push begins |

---

## Quick Reference

### Tech Stack
- Next.js 16.1.1 (App Router), TypeScript, Tailwind CSS 4.x
- @whop/sdk 0.0.3, @whop/react 0.3.0
- Vercel (auto-deploy from GitHub main)

### Whop Config
- **App ID:** `app_HT52ox6IuoJEcv`
- **Permissions:** payment:basic:read, member:phone:read, company:balance:read, company:authorized_user:read
- **Webhook:** 8 events → `/api/webhooks`
- **Automated DM:** Enabled (welcome message)

### Environment Variables (all in Vercel)
WHOP_API_KEY, WHOP_WEBHOOK_SECRET, WHOP_CLIENT_ID, WHOP_CLIENT_SECRET, NEXT_PUBLIC_WHOP_APP_ID, NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_APP_NAME, WHOP_REDIRECT_URI, NODE_ENV

### Pricing
- Starter: Free (1 campaign, basic stats)
- Pro: $49/mo (unlimited, rankings, forecasting)
- Agency: $149/mo (multi-brand, white-label, API)

---

## Detailed Docs

| File | Purpose |
|---|---|
| `STATUS.md` | **READ THIS FIRST** — What's real vs mock, current state |
| `README.md` | Technical reference (features, structure, env vars) |
| `WHOP-SUBMISSION-GUIDE.md` | Step-by-step submission guide |

---

## Next Steps

### Waiting for Review
- [ ] Monitor email for Whop approval
- [ ] Check Developer Dashboard → Builds tab

### After Approval
- [ ] Install on own Whop account
- [ ] Test dashboard with real data
- [ ] Verify webhook events flow in
- [ ] Start marketing push

### Marketing Phase
- [ ] Optimize App Store listing
- [ ] Launch post (Whop Townhall, Twitter/X, Reddit)
- [ ] DM 10 Content Rewards campaign owners
- [ ] Content marketing (threads, blog posts)

---

## Known Issues
- **Old `clipstack/` directory:** OneDrive-locked node_modules, harmless leftover
- **Node engine warnings:** Build warns but works fine on v24.19.0
- **Client components use mock data:** 5 of 9 components use placeholder data (see STATUS.md for details)

---

## Workspace
- **Path:** `C:\Users\tejaswi\OneDrive\Desktop\clipping`
- **Project:** `clipstack-v2/` (active)
- **GitHub:** https://github.com/tejaswipun/clipstack
- **Vercel:** https://vercel.com/tejaswipun/clipstack

# ClipStack — Whop App Store Submission Guide

## Step 1: Configure App Settings in Whop Developer Dashboard

Go to: https://whop.com/dashboard/biz_IiQiokbVKdkVja/developer/apps/app_HT52ox6IuoJEcv/

Fill in these fields:

| Field | Value |
|---|---|
| **Name** | ClipStack |
| **Description** | Content Rewards Analytics Dashboard |
| **Base URL** | `https://clipstack-black.vercel.app` |
| **Experience path** | `/experience/[experienceId]` (already set) |
| **Dashboard path** | `/dashboard/[companyId]` (already set) |
| **Discover path** | `/discover` (already set) |
| **App type** | B2B app (already selected) |

### App Store Description (paste this into the textarea):

```markdown
# ClipStack — Content Rewards Analytics

**The analytics dashboard built for Whop Content Rewards campaigns.**

Stop managing clip submissions in spreadsheets. ClipStack tracks every entry, approval, and payout in one place so you can run your creator rewards program at scale.

## What it does

- **Real-time leaderboard** — Auto-ranks your top creators by approved clips, total views, and earnings
- **Campaign ROI tracking** — See spend vs. verified views vs. estimated reach value. Know your true CPM.
- **Budget forecasting** — See burn rate in real-time. Know exactly when campaigns will run out of budget.
- **Fraud detection** — Spot bot-driven views and suspicious activity before they waste your budget.
- **Creator quality scoring** — Score creators 0-100 based on views, earnings, consistency, and engagement
- **Platform breakdown** — TikTok vs. YouTube Shorts vs. Instagram Reels performance comparison
- **Live webhook events** — See payments, entries, approvals, and denials as they happen
- **CSV export** — Download your data as CSV for accounting, tax prep, or team reviews

## Who it's for

Whop creators running content rewards or clip affiliate programs. If you're paying people to create and share content, ClipStack replaces the spreadsheet and gives you a system built for the job.

## Setup

Install the app, and your data starts flowing in immediately. Takes about 30 seconds.

## Pricing

- **Starter**: Free (1 campaign, basic stats, 7-day history)
- **Pro**: $49/mo (unlimited campaigns, creator rankings, budget forecasting, 90-day history)
- **Agency**: $149/mo (multi-brand management, white-label reports, API access, team seats)
```

## Step 2: Add App Icon

Upload `public/app-icon.svg` (or convert to PNG first) as the app icon in the Developer Dashboard.

## Step 3: Add App Store Images

You need at least 2 images. Recommended: 16:9 aspect ratio. You can:
1. Take screenshots of the live app at https://clipstack-black.vercel.app
2. Use the /discover page as a marketing screenshot
3. Screenshot the /dashboard/demo page for a dashboard preview

## Step 4: Create Webhook

In the Developer Dashboard, go to Webhooks tab and click "Create webhook":

| Field | Value |
|---|---|
| **URL** | `https://clipstack-black.vercel.app/api/webhooks` |
| **Events** | `invoice.paid`, `invoice.voided`, `invoice.past_due`, `membership.activated`, `membership.deactivated`, `entry.created`, `entry.approved`, `entry.denied` |

After creating, copy the **Signing Secret** and add it as `WHOP_WEBHOOK_SECRET` in Vercel env vars.

## Step 5: Add Permissions

Go to the Permissions tab and request these scopes:

| Permission | Justification |
|---|---|
| `payments:read` | Read payment data for revenue analytics |
| `members:read` | Read membership data for creator tracking |
| `companies:read` | Read company info for dashboard branding |
| `users:read` | Verify user access level for dashboard auth |

## Step 6: Verify Environment Variables in Vercel

Go to https://vercel.com/tejaswipun/clipstack/settings/environment-variables

Ensure these are set:

| Variable | Type | Value |
|---|---|---|
| `WHOP_CLIENT_ID` | Secret | (from Whop app settings) |
| `WHOP_CLIENT_SECRET` | Secret | (from Whop app settings) |
| `WHOP_API_KEY` | Secret | `apik_p9AN...e5e4` |
| `WHOP_WEBHOOK_SECRET` | Secret | (from webhook creation in Step 4) |
| `NEXT_PUBLIC_WHOP_APP_ID` | Config | `app_HT52ox6luoJcv` |
| `NEXT_PUBLIC_APP_URL` | Config | `https://clipstack-black.vercel.app` |
| `NEXT_PUBLIC_APP_NAME` | Config | `ClipStack` |
| `WHOP_REDIRECT_URI` | Config | `https://clipstack-black.vercel.app` |
| `NODE_ENV` | Config | `production` |

## Step 7: Submit for Review

Click "Publish app" in the Developer Dashboard. Whop reviews typically take 1-7 days.

### Tips for fast approval:
- Headline says exactly what it is (no hype)
- Price matches value claimed
- No "lifetime access" language
- No unsubstantiated earnings claims
- Complete, functional build (no crashes or dead links)
- Correct permissions declared with clear justifications

## Step 8: After Approval

Once approved:
1. The app appears in the Whop App Store
2. Creators can install it from their dashboard
3. Webhooks start flowing data to your dashboard
4. Monitor analytics and iterate

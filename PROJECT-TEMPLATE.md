# PROJECT TEMPLATE — Copy This for Every New Project

## Step 1: Create These Files at Project Start

### 1. STATUS.md — Single Source of Truth

```markdown
# [PROJECT NAME] — Status Document

> **Last updated:** [DATE]
> **Purpose:** Single source of truth. Read this first in any new session.

---

## Current State: [STATUS]

---

## What's REAL vs What's MOCK

### ✅ Real (verified in code)

| Feature | File | How it works |
|---|---|---|
| [FEATURE] | `[file.tsx]` | [EXACT METHOD/CALL] |

### ⚠️ Mock Data (UI-complete, not wired)

| Component | File | Mock data source |
|---|---|---|
| [COMPONENT] | `[file.tsx]` | [HARDCODED/RANDOM] |

### ✅ Pure Display (works with any data passed)

| Component | File | Notes |
|---|---|---|
| [COMPONENT] | `[file.tsx]` | [DESCRIPTION] |

---

## Key Facts

| Item | Value |
|---|---|
| Live URL | [URL] |
| GitHub | [REPO] |
| Owner | [NAME] |
| Status | [STATUS] |
```

### 2. HANDOFF.md — Quick Reference

```markdown
# [PROJECT NAME] — Handoff Document

> **Owner:** [NAME]
> **Last updated:** [DATE]
> **Status:** [STATUS]

---

## What is [PROJECT]?
[ONE PARAGRAPH DESCRIPTION]

## Live URL
**[URL]**

---

## Project Timeline

| Date | Milestone |
|---|---|
| [DATE] | [MILESTONE] |

---

## Quick Reference

### Tech Stack
[LIST TECHNOLOGIES]

### Config
[PLATFORM] App ID: [ID]
Permissions: [LIST]
Webhook: [EVENTS] → [ENDPOINT]

### Environment Variables
[LIST ALL VARS WITH STATUS]

---

## Detailed Docs

| File | Purpose |
|---|---|
| `STATUS.md` | **READ THIS FIRST** — What's real vs mock |
| `README.md` | Technical reference |

---

## Next Steps

### Immediate
- [ ] [TASK]

### After Approval
- [ ] [TASK]

### Marketing Phase
- [ ] [TASK]

---

## Known Issues
- [ISSUE 1]
- [ISSUE 2]
```

### 3. README.md — Technical Reference

```markdown
# [PROJECT NAME]

> [TAGLINE]

## Live App
**[URL]**

| Page | URL | Description |
|---|---|---|
| [PAGE] | [ROUTE] | [DESCRIPTION] |

## Features

| Feature | Component | Description |
|---|---|---|
| [FEATURE] | `[file.tsx]` | [DESCRIPTION] |

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [TECH] | [VERSION] | [PURPOSE] |

## Environment Variables

| Variable | Type | Required | Description |
|---|---|---|---|
| [VAR] | [Config/Secret] | Yes/No | [DESCRIPTION] |

## Project Structure

```
[PROJECT]/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
├── components/
├── lib/
├── public/
├── STATUS.md
├── HANDOFF.md
└── README.md
```

## License
[LICENSE TYPE]
```

---

## Step 2: Rules for Every New Session

Copy these into HANDOFF.md under "## Session Rules":

```markdown
## Session Rules

1. **Read STATUS.md first** — Never assume what's built
2. **Check actual code** — Before listing gaps or issues
3. **Mark everything REAL or MOCK** — No guessing
4. **Update docs after every change** — Keep STATUS.md current
5. **One step at a time** — Don't skip ahead
6. **Show copy-paste blocks** — When user needs to paste something
7. **No hallucinated features** — If it's not in code, it doesn't exist
8. **Verify before announcing** — Run the smallest meaningful test
```

---

## Step 3: Checklist Before Starting New Project

- [ ] Create project folder
- [ ] Create STATUS.md (template above)
- [ ] Create HANDOFF.md (template above)
- [ ] Create README.md (template above)
- [ ] Create .env.example
- [ ] Initialize git repo
- [ ] Connect to Vercel/GitHub
- [ ] Start building

---

## How to Use

1. Copy these templates
2. Fill in [BRACKETS] with your project details
3. Update STATUS.md after every code change
4. Any new session → read STATUS.md first
5. Never assume — always verify in code

This system prevents:
- ✅ Hallucinated features
- ✅ Wrong assumptions (like I did with "no real API calls")
- ✅ Lost context between sessions
- ✅ Missing documentation
- ✅ Confusion about what's built vs planned
```

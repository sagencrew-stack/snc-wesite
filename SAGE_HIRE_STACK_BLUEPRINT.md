# SAGE HIRE STACK — Architecture Blueprint
**Version 1.0 · Date: May 2026**
**Status: PLANNING — not yet built**

---

## 1. EXECUTIVE SUMMARY

### What we're building
An end-to-end recruitment automation platform for Indian SMBs and startups. Replaces the spreadsheets, Slack threads, and disconnected tools that hiring managers currently use.

### Who it's for
- **Primary**: Indian startup founders hiring their first 5-30 employees
- **Secondary**: HR generalists at companies with 30-200 employees, hiring 5+ roles/year
- **NOT for**: Enterprise (Workday/Greenhouse already serve them well)

### How we'll win
- India-first compliance (CTC structure, EPF, gratuity, DPDP Act)
- Faster setup than enterprise tools (10 min vs 2 weeks)
- Lower price than enterprise tools (₹2-5K/month vs ₹20K+)
- Better automation than spreadsheets

### Revenue model (initial hypothesis — validate with waitlist)
- **Free tier**: 1 active role, 10 candidates max
- **Starter** (₹2,499/month): 5 active roles, unlimited candidates, basic automation
- **Growth** (₹5,999/month): 20 active roles, advanced automation, integrations
- **Scale** (custom): unlimited, dedicated support

---

## 2. THE 7-STAGE PIPELINE — DATA MODEL

Every entity below maps to a database table.

### 2.1 Organizations (employers)
```
organizations
├── id (uuid, PK)
├── name (varchar)
├── domain (varchar, unique — e.g. "acmecorp.com")
├── industry (enum: tech, finance, retail, services, other)
├── size (enum: 1-10, 11-50, 51-200, 200+)
├── city (varchar)
├── plan_tier (enum: free, starter, growth, scale)
├── billing_email (varchar)
├── created_at (timestamp)
└── settings (jsonb — preferences)
```

### 2.2 Users (people who log in)
```
users
├── id (uuid, PK)
├── org_id (FK → organizations)
├── email (varchar, unique)
├── full_name (varchar)
├── role (enum: admin, recruiter, hiring_manager, viewer)
├── auth_provider (enum: email, google, microsoft)
├── created_at (timestamp)
├── last_login_at (timestamp)
└── invited_by_user_id (FK → users, nullable)
```

### 2.3 Roles (jobs being filled)
```
roles
├── id (uuid, PK)
├── org_id (FK → organizations)
├── title (varchar)
├── department (varchar)
├── location (varchar)
├── work_mode (enum: onsite, remote, hybrid)
├── experience_min (int — years)
├── experience_max (int)
├── ctc_min (int — INR annual)
├── ctc_max (int)
├── description (text — the JD)
├── required_skills (text[] — array of skill keywords)
├── nice_skills (text[])
├── headcount (int — how many to hire)
├── status (enum: draft, sourcing, screening, interviewing, offered, closed, on_hold)
├── opened_at (timestamp)
├── target_close_date (date)
├── closed_at (timestamp, nullable)
├── owner_user_id (FK → users — the hiring manager)
└── created_by_user_id (FK → users)
```

### 2.4 Candidates (the people being considered)
```
candidates
├── id (uuid, PK)
├── org_id (FK → organizations — scoped to org)
├── full_name (varchar)
├── email (varchar)
├── phone (varchar, nullable)
├── linkedin_url (varchar, nullable)
├── current_company (varchar, nullable)
├── current_role (varchar, nullable)
├── total_experience_years (int, nullable)
├── current_ctc (int, nullable)
├── expected_ctc (int, nullable)
├── notice_period_days (int, nullable)
├── location_city (varchar, nullable)
├── resume_url (varchar — uploaded to S3/Supabase Storage)
├── skills (text[] — extracted or self-reported)
├── source (enum: applied, sourced, referral, agency, imported)
├── source_detail (varchar — e.g. "LinkedIn", "Naukri", referrer name)
├── created_at (timestamp)
└── notes (text)
```

### 2.5 Applications (candidate ↔ role link with stage tracking)
This is the KEY table — represents one candidate's journey for one role.
```
applications
├── id (uuid, PK)
├── role_id (FK → roles)
├── candidate_id (FK → candidates)
├── stage (enum: NEW, SCREENED, SHORTLISTED, INTERVIEWING, OFFERED, HIRED, REJECTED, WITHDRAWN)
├── stage_changed_at (timestamp)
├── fit_score (int 0-100 — calculated)
├── recruiter_rating (int 1-5, nullable)
├── rejected_reason (varchar, nullable)
├── rejected_at (timestamp, nullable)
├── current_assigned_to_user_id (FK → users)
├── applied_at (timestamp)
└── notes (text)

INDEXES:
- (role_id, stage)  for kanban view queries
- (candidate_id)     for "all roles this candidate is in"
- (org_id, stage_changed_at) for dashboard analytics
```

### 2.6 Activities (audit log for every action)
```
activities
├── id (uuid, PK)
├── org_id (FK)
├── application_id (FK, nullable)
├── role_id (FK, nullable)
├── candidate_id (FK, nullable)
├── user_id (FK)
├── action (enum: created_role, sourced_candidate, sent_screening,
                 stage_changed, scheduled_interview, recorded_feedback,
                 sent_offer, offer_accepted, offer_declined, hired, ...)
├── meta (jsonb — action-specific data)
└── created_at (timestamp)
```

### 2.7 Interviews
```
interviews
├── id (uuid, PK)
├── application_id (FK)
├── round_name (varchar — "Technical Round 1", "Culture Fit", etc.)
├── scheduled_at (timestamp)
├── duration_minutes (int)
├── interviewer_user_id (FK → users)
├── meeting_link (varchar — Google Meet, Zoom)
├── status (enum: scheduled, completed, canceled, no_show)
├── feedback_overall (enum: strong_yes, yes, no, strong_no, no_decision, nullable)
├── feedback_strengths (text, nullable)
├── feedback_concerns (text, nullable)
├── feedback_submitted_at (timestamp, nullable)
└── created_at (timestamp)
```

### 2.8 Offers
```
offers
├── id (uuid, PK)
├── application_id (FK)
├── ctc_offered (int)
├── joining_bonus (int, nullable)
├── joining_date (date)
├── reporting_to_user_id (FK → users)
├── probation_months (int)
├── notice_period_days (int)
├── work_location (varchar)
├── status (enum: draft, sent, viewed, accepted, declined, expired, withdrawn)
├── pdf_url (varchar — generated offer letter)
├── sent_at (timestamp, nullable)
├── viewed_at (timestamp, nullable)
├── accepted_at (timestamp, nullable)
├── declined_reason (text, nullable)
├── created_by_user_id (FK)
└── valid_until (date)
```

### 2.9 Screening responses
```
screening_responses
├── id (uuid, PK)
├── application_id (FK)
├── question (varchar)
├── answer (text)
├── score (int 0-10, nullable — auto-scored or manual)
└── submitted_at (timestamp)
```

---

## 3. TECH STACK RECOMMENDATIONS

### Frontend
- **Framework**: Next.js 14+ (App Router)
  - Why: SEO for marketing pages + dynamic dashboard, same codebase
  - Already familiar (you have Vercel deployment working)
- **Styling**: Tailwind CSS + shadcn/ui components
  - Why: Fast UI build, premium feel, no design system from scratch
- **State**: React Server Components + minimal client state (Zustand for kanban)
- **Forms**: React Hook Form + Zod validation
- **Tables/Kanban**: TanStack Table + dnd-kit (drag-drop)

### Backend
- **Platform**: Supabase
  - Why: Postgres (full SQL power), auth built-in, file storage, RLS for security
  - Cost: Free tier handles first 100-200 users; ₹2K/month at scale
- **Auth**: Supabase Auth (email + Google OAuth)
- **Database**: PostgreSQL (via Supabase)
- **File storage**: Supabase Storage (resumes, offer PDFs)
- **Realtime**: Supabase Realtime (kanban updates across users)

### Email & Communications
- **Transactional email**: Resend
  - Why: Better deliverability than SendGrid, dev-friendly, ₹0-₹2K/month early
- **Email templates**: React Email (compose emails as React components)
- **Calendar**: Cronofy or Cal.com API for interview scheduling

### AI Services
- **LLM**: Anthropic Claude API or OpenAI GPT-4o
  - Use for: JD generation, screening question generation, response scoring,
    candidate matching, summary writing
- **Embeddings**: OpenAI text-embedding-3-small or Cohere
  - Use for: Semantic search ("find candidates similar to John")
- **Resume parsing**: Affinda or custom Claude pipeline
  - Cost: ~₹4-8 per resume

### Payments (post-MVP)
- **Razorpay** for India payments
- **Stripe** for international (later)

### Hosting & Ops
- **Frontend hosting**: Vercel (already familiar)
- **Database hosting**: Supabase (managed Postgres)
- **Domain**: Already have sagencrew.com
- **Monitoring**: Vercel Analytics + Supabase logs
- **Error tracking**: Sentry (free tier)

### Total monthly cost early stage
- Vercel: ₹0 (Hobby tier)
- Supabase: ₹0 (free tier covers ~500 active users)
- Resend: ₹0 (free tier: 3,000 emails/month)
- AI calls: ₹2-5K/month at 50 active organizations
- Domain (already paid): ₹0
- **Total: ~₹2-5K/month** until you have ~₹50K MRR

---

## 4. MVP SCOPE — WHAT v0.1 INCLUDES

Build the **thinnest possible slice** that delivers value end-to-end.

### MVP MUST HAVE (Phase 1, weeks 1-4)
1. ✅ Org signup + user auth (email + password)
2. ✅ Create a role (basic JD form, no AI yet)
3. ✅ Manually add candidates (name, email, resume upload)
4. ✅ Pipeline kanban view (drag-drop between stages: NEW → SCREENED → INTERVIEWED → OFFERED → HIRED)
5. ✅ Simple offer letter generator (reuse our existing free tool, gated to logged-in users)
6. ✅ Activity timeline on each candidate
7. ✅ Mobile-responsive

### MVP NICE-TO-HAVE (Phase 1.5, weeks 5-6)
- Resume parsing to auto-fill candidate info
- Email candidate from within the platform
- Bulk-import candidates via CSV
- Basic dashboard (roles open, candidates by stage, time-in-stage)

### EXPLICITLY OUT OF MVP (build later if validated)
- ❌ AI JD generation (use templates initially)
- ❌ AI matching/scoring (manual ratings only)
- ❌ Interview scheduling (use Google Calendar links manually)
- ❌ Screening question automation (manual forms)
- ❌ Onboarding workflow (offer acceptance is the end of MVP)
- ❌ Integrations with external ATS
- ❌ Mobile native app
- ❌ Team permissions / roles beyond admin
- ❌ Custom fields
- ❌ Advanced analytics

---

## 5. DEVELOPMENT ROADMAP — 6 MONTHS

### Month 1 — Foundation (after waitlist validates)
- Week 1: Supabase setup, auth flows, org/user models
- Week 2: Roles CRUD + basic role list view
- Week 3: Candidates CRUD + resume upload
- Week 4: Application creation + simple kanban view
- **Deliverable**: 1 employer can sign up, create a role, add 5 candidates, move them through 5 stages

### Month 2 — Pipeline polish
- Week 5: Kanban drag-drop, stage history, activity timeline
- Week 6: Offer letter generator (integrate existing free tool)
- Week 7: Email notifications (stage changes, new applications)
- Week 8: Mobile responsive pass
- **Deliverable**: Working v0.1 — 5 employers in private beta

### Month 3 — Resume intelligence
- Week 9-10: Resume parsing (Claude API or Affinda)
- Week 11: Bulk CSV import
- Week 12: Email-into-platform (candidates email a special address → application created)
- **Deliverable**: Onboarding friction dropped to 10 minutes

### Month 4 — Discovery & screening
- Week 13: Screening question forms (text-based, no AI yet)
- Week 14: Auto-send screening when candidate added
- Week 15: Manual screening review + scoring
- Week 16: First paid customers (Starter tier)
- **Deliverable**: 20 paying customers, ₹50K MRR target

### Month 5 — AI assistance (when revenue justifies API costs)
- Week 17: AI-assisted JD writing
- Week 18: AI candidate-role match scoring
- Week 19: AI screening response evaluation
- Week 20: AI interview question generation per role
- **Deliverable**: AI features differentiate from competitors

### Month 6 — Interview workflow
- Week 21: Interview scheduling (with Cal.com integration)
- Week 22: Feedback collection forms
- Week 23: Scorecard rollup per candidate
- Week 24: Public launch + marketing push
- **Deliverable**: Full pipeline shipped, public launch, 50+ paying customers

---

## 6. SECURITY & COMPLIANCE (CRITICAL)

You'll be storing PII for candidates. India's DPDP Act 2023 applies.

### Must-haves before any production traffic
1. **Encryption at rest**: Supabase handles automatically
2. **Encryption in transit**: HTTPS only (Vercel handles automatically)
3. **Row Level Security (RLS)**: Supabase RLS policies so org A can't see org B's data
4. **Audit logging**: every action logged in `activities` table
5. **Data retention policy**: state how long candidate data is kept, allow deletion requests
6. **Privacy policy**: hire a lawyer (or use Termly/iubenda templates customized for DPDP)
7. **Terms of service**: same
8. **Cookie consent**: required under DPDP

### Nice-to-have (V2)
- SOC 2 readiness (when you have enterprise leads)
- Penetration testing annually
- Backup automation + restore drills

---

## 7. PRICING DESIGN

### Tiered subscription model
| Tier | Price/month | Active roles | Candidates | Team seats | AI features |
|------|-----|-----|-----|-----|-----|
| **Free** | ₹0 | 1 | 25 | 1 | None |
| **Starter** | ₹2,499 | 5 | 250 | 3 | Basic |
| **Growth** | ₹5,999 | 20 | 1000 | 10 | Full |
| **Scale** | Custom | Unlimited | Unlimited | Unlimited | Full + dedicated |

### Pricing principles
- **Free tier exists** — so small teams can try without commitment
- **Starter is the sweet spot** — most customers land here
- **Growth has AI as the differentiator** — drives upgrades
- **Annual billing**: 2 months free (i.e., 10× monthly = annual)

### Lifetime deal (LTD) at launch?
Could offer "first 50 customers pay ₹15,000 once, lifetime Starter access"
- Pros: instant ₹7.5L revenue, validates demand
- Cons: capped MRR forever, no recurring revenue from those users
- **Recommend: NO**. Build for SaaS economics from day 1.

---

## 8. GO-TO-MARKET STRATEGY

### Pre-launch (Now → 3 months)
1. Drive waitlist signups via:
   - LinkedIn posts (you + Sage's existing connections)
   - WhatsApp founder/HR groups
   - Cold outreach to 50 hiring managers in your network
   - Sage agency clients (offer free beta access to your existing clients)

### Launch (Month 6)
1. Public post on LinkedIn / X / IndieHackers
2. ProductHunt launch (aim for top 10 of the day)
3. Reach out to HR newsletters / publications (Yourstory, Inc42, ETHRWorld)
4. Speaking opportunities (HR conferences in Bangalore/Hyderabad)

### Growth (Month 6+)
1. SEO content: "How to hire your first Sales Manager in India" type articles
2. Free tools (you already have 8) drive top-of-funnel
3. Existing Sage recruitment clients become platform users
4. Referral program: 1 month free for each referred customer

---

## 9. RISKS & MITIGATIONS

### Risk: Building the wrong product
- **Mitigation**: Pre-launch interview every single waitlist signup. Don't write code for unverified features.

### Risk: Competing with Greenhouse/Lever/Workable
- **Mitigation**: Position as India-specific. Their pricing doesn't fit Indian SMBs. Their compliance doesn't match Indian payroll.

### Risk: Building features faster than customers can absorb
- **Mitigation**: Cap MVP at 7 features. Resist scope creep. Ship the kanban first.

### Risk: AI costs spiraling
- **Mitigation**: Cache aggressively. Use Haiku/GPT-4o-mini for cheap tasks. Charge for AI-heavy features.

### Risk: Burnout (founder running agency + building product)
- **Mitigation**: Time-box product work to specific hours. Don't let it cannibalize agency revenue. Hire help by month 3 if validated.

---

## 10. SUCCESS METRICS

### Pre-launch (waitlist phase)
- 100+ waitlist signups in 30 days
- 30%+ open rate on update emails
- 20+ replies when asked "what feature matters most?"

### Beta (Month 1-3)
- 10 employers actively using
- 50+ candidates added to platform across orgs
- 5+ "this saved me X hours" testimonials

### Launch (Month 6)
- 100+ signups in launch week
- 20+ converting to paid within 30 days of signup
- ₹50K MRR by end of month 6

### Year 1
- 200 paying customers
- ₹5L MRR (= ~₹60L ARR)
- <3% monthly churn
- NPS > 30

---

## 11. WHEN TO START BUILDING

**Don't write code until ALL of these are true:**
- [ ] 50+ waitlist signups
- [ ] 10+ replies to "what's the #1 pain you'd want this to solve?"
- [ ] 5+ replies indicating willingness to pay (even small amounts)
- [ ] You have at least 8 dedicated hours/week to commit
- [ ] You've decided on solo build vs. hiring a co-founder/engineer

If you can check all 5 boxes, **start Month 1 of the roadmap.**

If you can't, **stay on the agency. Keep driving traffic to the landing page. Re-evaluate in 30 days.**

---

## 12. IMMEDIATE NEXT ACTIONS (POST-UPLOAD)

After the trump card is deployed, here are the next 5 things in order:

1. **Create the Google Form** (15 min)
   - Title: "Sage Hire Stack — Early Access"
   - Fields: Name, Work Email, Company, Roles per year, Your role, "What's your #1 hiring pain?"
   - Embed it in sage-hire-stack.html (replace GOOGLE_FORM_URL_HERE)

2. **Write a LinkedIn post** announcing the waitlist (1 hour)
   - Hook: "After placing X people through Sage & Crew Next, I'm building a product"
   - Show pipeline diagram (screenshot the new page)
   - CTA: link to waitlist
   - Post during peak hours (Tue-Thu, 9-11 AM IST)

3. **Send to 20 people personally** via WhatsApp/email (2 hours)
   - Founders, HR people, recruiters you know
   - Personalized message — not blast
   - Ask: "Would this be useful for you? Mind sharing with 1 friend if yes?"

4. **Set up Google Analytics** on the site (15 min)
   - Track which pages get traffic
   - Track where signups come from

5. **Wait 30 days** and review:
   - How many signed up?
   - Who signed up?
   - What did they tell you in the "biggest pain" field?
   - Are these the customers you'd want to build for?

Only THEN start Month 1 of the roadmap.

---

**END OF BLUEPRINT v1.0**

*This document was created May 2026 during the Sage & Crew Next planning phase.
Update as plans evolve. Reference before making major build decisions.*

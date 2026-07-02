# ClipAI — Multi-Language AI Video Clipping Platform

**Stack:** Next.js 14 (App Router) + Tailwind CSS · FastAPI (Python) · PostgreSQL · Redis/Celery

---

## 🚀 Quick Start

### Frontend (Next.js)
```bash
cd clipai
npm install
npm run dev        # → http://localhost:3000
```

### Backend (FastAPI)
```bash
cd clipai/backend
pip install -r requirements.txt
uvicorn main:app --reload  # → http://localhost:8000
```

---

## 📁 Project Structure

```
clipai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page (5-language)
│   │   ├── layout.tsx            # Root layout
│   │   ├── dashboard/            # Main dashboard
│   │   │   ├── layout.tsx        # Sidebar layout
│   │   │   └── page.tsx          # Dashboard home
│   │   ├── upload/               # Video upload
│   │   ├── clips/                # Clips viewer
│   │   ├── credits/              # Credits management
│   │   ├── login/                # Auth
│   │   └── signup/               # Auth
│   ├── components/
│   │   ├── landing/              # Landing page components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   └── platform/             # (Phase 2: editor, transcript)
│   └── lib/
│       └── i18n.ts               # 5-language translations (EN/TR/AR/HI/ID)
└── backend/
    ├── main.py                   # FastAPI app
    ├── api/
    │   ├── videos.py             # Upload + status endpoints
    │   ├── clips.py              # Clips CRUD + download
    │   └── credits.py            # Balance + auto-refund
    ├── core/
    │   └── asr_router.py         # Language → ASR model routing
    └── requirements.txt
```

---

## 🌍 Supported Languages (Phase 1)

| Language    | Code | Notes                                    |
|-------------|------|------------------------------------------|
| Arabic      | `ar` | All dialects: Egyptian, Gulf, Levantine  |
| Hindi       | `hi` | + Hinglish code-switching support        |
| Indonesian  | `id` | Bahasa Indonesia                         |
| Turkish     | `tr` | Agglutinative morphology-aware cuts      |
| English     | `en` | Phase 2                                  |

---

## 🔑 Key Design Decisions

- **Credits never expire** — even after subscription cancellation
- **Auto-refund on failure** — built into the system, not support-dependent
- **Per-video pricing** — not per-minute (competitor pain point)
- **ASR Router** — each language routes to its best-performing model
- **RTL Support** — Arabic pages render with `dir="rtl"` automatically
- **PPP Pricing** — regional price adjustment for TR/AR/HI/ID markets

---

## 🛣 Roadmap

| Phase | Scope |
|-------|-------|
| **MVP (Now)**  | 4 languages, upload→clip→download, credits |
| **Phase 2**    | API, transcript editor, Mandarin/Vietnamese |
| **Phase 3**    | Social scheduling, brand templates, team |

# Claude Code Prompt: Risk Assessment Validation Dashboard (Second-Line Defense)

## Context
Build a **demo web application** for a banking client presentation (15-20 min). This is an **AI-powered Risk Assessment Validation Dashboard** that helps the second-line defense team (6 people) validate and challenge first-line risk self-assessments.

**This is a demo/prototype — not a production app.** Focus on visual impact, storytelling flow, and showing the "art of the possible." No backend needed — use static JSON/sample data.

---

## What to Build

A single-page React application (Next.js or Vite + React) with **Tailwind CSS** and **Recharts/D3** for charts. The app should feel like a premium fintech/regtech SaaS dashboard — dark theme, clean typography, data-dense but not cluttered.

### Page Structure (Scrollable Single Page or Tabbed Dashboard)

#### 1. **Executive Summary Header**
- Large KPI cards at the top showing:
  - Total Entities Assessed: **247**
  - Discrepancies Detected: **38** (with red accent)
  - False Negatives (High Risk missed): **9** (critical highlight — these are the dangerous ones)
  - False Positives (over-flagged): **29**
  - Auto-Validated (no issues): **209** (green)
  - Validation Completion: **84.6%** progress bar
- A small label: "Assessment Cycle: Q4 2025 | Generated: Feb 2026"

#### 2. **Risk Heat Map Section**
- A matrix/grid heat map showing:
  - Y-axis: Business Entities (e.g., "Retail Banking EU", "Trade Finance APAC", "Treasury Operations", "Wealth Management", "Corporate Lending NAM", etc.)
  - X-axis: Risk Categories (Credit Risk, Operational Risk, Compliance Risk, Market Risk, Liquidity Risk, Technology Risk)
  - Cell color = discrepancy severity (green = aligned, yellow = minor deviation, orange = moderate, red = significant discrepancy)
  - On hover/click: show tooltip with "Self-Assessed: Low | System Score: High | Confidence: 87%"

#### 3. **Discrepancy Analysis Panel**
- A scatter plot or bubble chart:
  - X-axis: Self-Assessed Risk Score (1-5)
  - Y-axis: System-Calculated Risk Score (1-5)
  - Diagonal line showing "perfect alignment"
  - Points above the line = False Negatives (under-assessed)
  - Points below the line = False Positives (over-assessed)
  - Color code by entity type, size by confidence score
- Side panel showing top 5 critical discrepancies in card format

#### 4. **Entity Deep Dive (Expandable Cards)**
- Show 3-4 sample entity cards that can be expanded:
  - Entity Name, Region, Business Line
  - Self-Assessment vs System Score comparison (bar chart)
  - Data Sources Used for validation (icons: system data, reports, KRIs, incident history)
  - AI Challenge Narrative: A 2-3 sentence AI-generated explanation like:
    > "Retail Banking EU self-assessed Operational Risk as LOW. However, analysis of 23 incident reports from Q3-Q4 2025 shows a 340% increase in process failures. KRI breach rate is 4.2x above threshold. Recommend reclassification to HIGH with immediate review."
  - Status badge: "Pending Review" / "Challenged" / "Validated"

#### 5. **Validation Workflow Summary**
- A simple horizontal pipeline/funnel visualization:
  - Stage 1: Data Ingestion (247 entities) → Stage 2: Automated Comparison (247) → Stage 3: Anomaly Detection (38 flagged) → Stage 4: AI Challenge Generation (38 reports) → Stage 5: Human Review (24 completed, 14 pending)
- Show time saved: "Estimated manual effort: 312 hours → Automated: 4.2 hours (98.7% reduction)"

#### 6. **Data Source Reconciliation View**
- A simple table or Sankey diagram showing:
  - Source: Risk Self-Assessment System
  - Cross-referenced with: Incident Database, KRI Dashboard, Audit Findings, External Ratings
  - Match rate per source
  - Conflict indicators

### Design Requirements
- **Dark theme** with a professional fintech aesthetic (think Bloomberg Terminal meets modern SaaS)
- Color palette: Dark navy/charcoal background (#0f172a or similar), with accent colors:
  - Green (#10b981) for validated/aligned
  - Amber (#f59e0b) for warnings
  - Red (#ef4444) for critical discrepancies
  - Blue (#3b82f6) for informational
  - Purple (#8b5cf6) for AI-generated content
- Use a clean sans-serif font (DM Sans, Plus Jakarta Sans, or Geist)
- Smooth animations on load (stagger cards, count-up numbers)
- Responsive but optimize for 1920x1080 presentation mode
- Add a subtle "Powered by AI" or "Airo Digital Labs" branding in the footer

### Tech Stack
- **Vite + React + TypeScript**
- **Tailwind CSS** for styling
- **Recharts** for charts (scatter plot, bar charts)
- **Framer Motion** for animations
- **Lucide React** for icons
- All data from local JSON files (provided in `/data` folder)

### Sample Data Files
Use the provided sample JSON files in the `/data` directory:
- `entities.json` — List of 247 business entities with self-assessed and system-calculated scores
- `discrepancies.json` — The 38 flagged discrepancies with details
- `risk_matrix.json` — Heat map data for entity × risk category
- `workflow_stats.json` — Pipeline/funnel stats
- `challenge_reports.json` — AI-generated challenge narratives for top discrepancies

### Important Notes
- This is a **15-20 minute demo presentation**, not a production app
- Everything should work with static data — no API calls needed
- Focus on **visual storytelling** — the client should immediately see the value
- The key message: "Your 6-person team currently does this manually in Excel. This AI system does 98% of the initial screening automatically, letting your team focus on the 38 cases that actually need human judgment."
- Make sure the numbers tell a coherent story across all sections
- Add subtle micro-interactions (hover states, transitions) to feel polished

---

## Run Instructions
```bash
npm create vite@latest risk-validation-dashboard -- --template react-ts
cd risk-validation-dashboard
npm install
npm install recharts framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
npm run dev
```

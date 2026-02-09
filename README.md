# Risk Assessment Validation Dashboard

A premium fintech SaaS dashboard for AI-powered risk assessment validation. Built for banking client presentation to showcase automated second-line defense capabilities.

## 🎯 Key Features

### 1. **Executive Summary Header**
- Real-time KPI cards showing:
  - Total Entities Assessed: **247**
  - Discrepancies Detected: **38** (red accent)
  - False Negatives (Critical): **9**
  - False Positives (Over-flagged): **29**
  - Auto-Validated: **209** (green)
  - Validation Completion: **84.6%** progress bar
- Assessment cycle and timestamp metadata

### 2. **Risk Heat Map**
- Entity × Risk Category matrix visualization
- Color-coded severity levels:
  - 🟢 No Discrepancy
  - 🟡 Minor Deviation
  - 🟠 Moderate Discrepancy
  - 🔴 Significant Discrepancy
- Interactive hover tooltips showing self-assessed vs system scores with confidence levels

### 3. **Discrepancy Analysis**
- Scatter plot showing alignment between self-assessed and system-calculated scores
- False Negatives (above diagonal line) highlighted in red
- False Positives (below diagonal line) highlighted in amber
- Side panel with top 5 critical discrepancies

### 4. **Entity Deep Dive**
- Expandable cards for critical entities
- AI-generated challenge narratives (with 🤖 badge)
- Self vs System score comparison bar charts
- Data sources used for validation
- Status tracking (Pending Review, Challenged, Validated)

### 5. **Validation Workflow**
- 6-stage pipeline visualization:
  1. Data Ingestion (247 entities)
  2. Data Reconciliation (5 sources)
  3. Automated Comparison
  4. Anomaly Detection (38 flagged)
  5. AI Challenge Generation
  6. Human Review (24 completed, 14 pending)
- Time savings: **312h → 4.2h (98.7% reduction)**
- Team performance dashboard with individual stats

### 6. **Data Source Reconciliation**
- 5 integrated data sources:
  - Risk Self-Assessment System (92% match)
  - Incident Database (88% match)
  - KRI Dashboard (95% match)
  - Audit Findings (84% match)
  - External Rating Feeds (79% match)
- Real-time connection status monitoring
- Overall data quality health indicator

## 🎨 Design System

**Dark Theme (Premium Fintech Aesthetic)**
- Background: `#0f172a` (slate-950)
- Primary Colors:
  - Blue: `#3b82f6` (Information, primary actions)
  - Green: `#10b981` (Validated, success)
  - Red: `#ef4444` (Critical, false negatives)
  - Amber: `#f59e0b` (Warnings, false positives)
  - Purple: `#8b5cf6` (AI-generated content)

**Typography**
- Font: DM Sans (clean, professional sans-serif)
- Hierarchy: Bold headers, regular body text, light metadata

**Components**
- Glass-morphism cards with blur effects
- Smooth animations on load (stagger cards, count-up numbers)
- Hover states and transitions for interactivity
- Progress bars with animated fills

## 🚀 Quick Start

```bash
cd D:/Projects/risk-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## 📊 Demo Data

All data is static JSON from the `/Data` directory:
- `entities.json` - 247 business entities with risk scores
- `discrepancies.json` - 38 flagged discrepancies
- `risk_matrix.json` - Heat map data
- `workflow_stats.json` - Pipeline and efficiency metrics
- `challenge_reports.json` - AI-generated narratives

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts (scatter, bar, responsive)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: JSX (JavaScript XML)

## 📝 Components

```
src/
├── App.jsx                           # Main app orchestrator
├── components/
│   ├── Header.jsx                    # Sticky navigation header
│   ├── ExecutiveSummary.jsx          # KPI cards & progress bar
│   ├── RiskHeatmap.jsx               # Interactive heat map
│   ├── DiscrepancyAnalysis.jsx       # Scatter plot & top discrepancies
│   ├── EntityDeepDive.jsx            # Expandable entity cards
│   ├── ValidationWorkflow.jsx        # Pipeline & team performance
│   ├── DataSourceReconciliation.jsx  # Source integration status
│   ├── CountUp.jsx                   # Animated number counter
│   └── Footer.jsx                    # Branding & links
└── index.css                         # Global styles & animations
```

## 💡 Key Selling Points

### For the Client (6-Person Second-Line Defense Team)
✅ **98.7% Automation**: Manual 312h of work → 4.2h automated
✅ **Focus on What Matters**: Team focuses on the 38 cases needing judgment (not 247)
✅ **AI Confidence**: Every challenge backed by evidence & confidence scores
✅ **Cost Savings**: ~$26K estimated savings per cycle
✅ **Real-time Visibility**: See exactly what changed, why, and who's reviewing

### For the Dashboard
🎯 **Visual Storytelling**: Numbers tell a coherent story across all sections
🎯 **Premium Feel**: Dark theme, smooth animations, professional typography
🎯 **Data-Dense**: Shows complexity without clutter
🎯 **Interactive**: Hover tooltips, expandable cards, animated transitions

## 🎬 Presentation Flow (15-20 min)

1. **Open Dashboard** (Slide into view)
2. **Executive Summary** - "Look at these KPIs: 247 entities, 38 need review, 209 validated"
3. **Heat Map** - "Here's where the discrepancies are concentrated"
4. **Discrepancy Analysis** - "False negatives are critical, false positives waste time"
5. **Entity Deep Dive** - "Here's the AI narrative on a specific case"
6. **Workflow** - "From raw data to human review in hours, not weeks"
7. **Data Sources** - "All validated against 5 cross-referenced sources"
8. **Summary** - "Your 6-person team focuses only on the 38 that matter"

## 📦 Build for Production

```bash
npm run build
npm run preview
```

Output will be in `dist/` directory, ready for deployment.

## 🔗 File Structure

```
risk-dashboard/
├── Data/                    # Static JSON data files
│   ├── entities.json
│   ├── discrepancies.json
│   ├── risk_matrix.json
│   ├── workflow_stats.json
│   └── challenge_reports.json
├── src/                     # React components
├── public/                  # Static assets
├── index.html               # Entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
└── package.json             # Dependencies
```

## 💬 Questions?

This is a **demo/prototype** optimized for presentation impact, not production. All data is simulated. No backend APIs needed.

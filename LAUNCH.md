# 🚀 Risk Assessment Validation Dashboard - Launch Guide

## Quick Start (60 seconds)

### 1. Navigate to project
```bash
cd D:/Projects/risk-dashboard
```

### 2. Start development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

You should see the dashboard load with animated KPI cards and transitions.

---

## 📊 What You'll See

### On First Load
- **Animated header** with Shield icon and cycle info
- **Executive Summary** section with 5 KPI cards (animated count-up)
- Progress bar showing 84.6% validation completion
- Cost savings indicator ($26,163 saved)

### Scroll Down
- **Risk Heat Map** with interactive cells (hover to see tooltip)
- **Discrepancy Analysis** with scatter plot showing false negatives/positives
- **Entity Deep Dive** expandable cards with AI challenge narratives
- **Validation Workflow** pipeline showing 6 stages + team performance
- **Data Source Reconciliation** with 5 integrated data sources
- **Premium footer** with branding

---

## 🎯 Presentation Tips

### Opening (2-3 min)
1. Start with Executive Summary
2. Point out: "247 entities, 38 need review, 209 already validated"
3. Highlight: "Your 6-person team currently does this manually in Excel"

### Middle (8-10 min)
1. Show the Heat Map - "Here's where discrepancies are concentrated"
2. Click a cell to see the tooltip - "Self-assessed: X | System Score: Y | Confidence: Z%"
3. Expand an Entity card - "This is what AI reveals about the discrepancy"
4. Read the narrative - "AI shows evidence from 5 data sources"

### End (3-5 min)
1. Scroll to Validation Workflow - "This entire process took 4.2 hours of automation"
2. Show Data Source Reconciliation - "95% match on KRI Dashboard, 88% on Incident DB"
3. Finish with cost savings - "$26K+ saved per validation cycle"

---

## 🎨 Interactive Elements to Demo

**Heat Map Cells**
- Hover over any colored cell
- Tooltip appears showing comparison
- Colors indicate severity (green → yellow → orange → red)

**Entity Cards**
- Click/tap to expand
- Shows bar chart of risk scores
- Displays AI narrative (🤖 badge)
- Lists data sources used

**Animations**
- Numbers count up on load
- Progress bars fill smoothly
- Cards stagger in order
- Smooth transitions on all hovers

---

## 📱 Responsive Design

- **Optimized for 1920x1080** (presentation mode)
- Responsive on smaller screens
- Charts adapt to container size
- Mobile-friendly for demos on laptop

---

## 📊 Data Sources

All data is **completely static** - no API calls:

```
Data/
├── entities.json (247 entities)
├── discrepancies.json (38 flagged)
├── risk_matrix.json (heat map cells)
├── workflow_stats.json (pipeline + team)
└── challenge_reports.json (AI narratives)
```

Data files are imported as JSON in the React app.

---

## 🛠 If You Need to Modify

### Change a Number
Edit `Data/workflow_stats.json`:
```json
"total_entities": 247,  // Change this
"flagged_for_review": 38,
etc.
```

### Change Colors
Edit `src/components/*.jsx` files and look for Tailwind classes:
```jsx
className="bg-red-900/30"  // Red tint
className="bg-green-400"   // Green text
className="border-blue-700/30"  // Blue border
```

### Add a New Section
1. Create new component in `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to main `<main>` element

---

## 🚨 Troubleshooting

**Port already in use?**
```bash
npx vite --port 3000
```

**Build errors?**
```bash
npm install
npm run build
```

**Need to rebuild?**
```bash
npm run build
npm run preview  # View production build locally
```

---

## 📦 Production Deployment

```bash
npm run build
# Output is in dist/ folder - ready for hosting
```

The built app is static - works on any web server or CDN.

---

## ⏱ Typical Demo Duration: **15-20 minutes**

- 2-3 min: Intro + Executive Summary
- 8-10 min: Navigate sections (demo interactive elements)
- 3-5 min: Close with impact metrics + Q&A

---

## 💡 Key Messages to Emphasize

1. **Automation at Scale**: "247 entities analyzed in 4.2 hours (vs 312 hours manual)"
2. **Intelligent Filtering**: "Only 38 discrepancies need human review"
3. **AI with Confidence**: "Every challenge backed by evidence + confidence score"
4. **Multi-Source Validation**: "Cross-referenced against 5 data sources"
5. **Team Productivity**: "Your 6-person team focuses on what matters"
6. **Cost Impact**: "$26K+ saved per cycle, 98.7% time reduction"

---

**Good luck with your presentation! 🎯**

*Remember: This is a demo optimized for visual impact and storytelling. All data is simulated.*

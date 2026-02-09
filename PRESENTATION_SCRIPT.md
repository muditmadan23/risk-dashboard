# 📋 Risk Dashboard - Presentation Script (15-20 min)

## Opening (1 min)

**"Today we're going to show you the future of your second-line defense operation."**

*[Open dashboard - let it load with animations]*

"What you're looking at is an AI-powered risk assessment validation system. Your 6-person team currently spends hundreds of hours manually comparing risk assessments in Excel. This system does 98% of that work automatically."

---

## Section 1: Executive Summary (3 min)

*[Point to top of dashboard]*

**"Let's start with the numbers that matter:"**

- **247 entities assessed** - That's every unit in scope
- **209 auto-validated** - These passed without issues
- **38 discrepancies detected** - These need review
- **84.6% complete** - We're deep into the cycle

**"But here's what's critical:"**

- **9 false negatives** - This is dangerous. High-risk entities that self-assessed as low.
- **29 false positives** - This wastes your team's time on over-flagged cases.

*[Scroll down slightly]*

**"The ROI is immediate:"**
- Manual effort: **312 hours**
- Automated: **4.2 hours**
- **Time reduction: 98.7%**
- **Cost savings: $26,163 per cycle**

---

## Section 2: Risk Heat Map (4 min)

*[Scroll to heat map]*

**"Now let's look at where the discrepancies are concentrated."**

"This matrix shows each business entity (left) against risk categories (top). The colors tell you severity:
- 🟢 Green = Aligned (no discrepancy)
- 🟡 Yellow = Minor deviation
- 🟠 Orange = Moderate
- 🔴 Red = Significant"

*[Hover over a red cell]*

"Watch what happens when I hover over a discrepancy:
- **Self-Assessed Score**: What they said
- **System Score**: What our analysis shows
- **Confidence**: How sure the system is (87% example)"

*[Hover over 2-3 cells to show variety]*

**"You can see patterns immediately:**
- Certain units are consistently under-assessing operational risk
- Others over-flag technology risk
- This visual guides where to focus first"

---

## Section 3: Discrepancy Analysis (3 min)

*[Scroll to scatter plot]*

**"This is the heart of the validation:"**

"Each dot represents an entity's overall risk profile:
- **Red dots above the diagonal** = False negatives (they under-assessed)
- **Amber dots below the diagonal** = False positives (they over-assessed)
- **Green dots on the line** = Perfect alignment"

*[Point at the diagonal line]*

"The green dashed line is perfect alignment. We're looking for cases that drift away from that line."

*[Point to top-right cards]*

**"The top 5 critical discrepancies are here on the right:**

Let me show you the most critical one..." [Expand a false negative card]

---

## Section 4: Entity Deep Dive (5 min)

*[Click/tap to expand a critical entity card]*

**"Let's zoom into a specific case - this is where the AI gets involved:"**

**1. Risk Score Comparison**
"First, we see the bar chart - self-assessed vs system score side-by-side. Clear visual of where they diverged."

**2. AI Challenge Narrative** *[Point to 🤖 section]*
"This is AI-generated. It's not a black box - the system shows exactly WHY it's challenging:

> 'Retail Banking EU self-assessed Operational Risk as LOW. However, analysis of 23 incident reports from Q3-Q4 2025 shows a 340% increase in process failures. KRI breach rate is 4.2x above threshold. Recommend reclassification to HIGH with immediate review.'

Notice: Confidence: 87%. Your team isn't working blind - you have quantified confidence in every challenge."

**3. Data Sources Used**
"The AI backed this up by analyzing 5 data sources:
- 📋 Risk Self-Assessment System
- 📊 Incident Database
- 📈 KRI Dashboard
- ✓ Audit Findings
- ★ External Ratings"

**4. Status & Ownership**
"Status: Pending Review. Assigned to: [Analyst]. Review deadline: [Date].

This keeps everyone accountable."

---

## Section 5: Validation Workflow (3 min)

*[Scroll to pipeline]*

**"Here's the entire process flow:"**

"**Stage 1: Data Ingestion** → 247 entities loaded (0.3h)
**Stage 2: Data Reconciliation** → Cross-referenced 5 sources (0.8h)
**Stage 3: Automated Comparison** → Scoring completed (1.2h)
**Stage 4: Anomaly Detection** → 38 discrepancies flagged (0.9h)
**Stage 5: AI Challenge Generation** → Reports generated (1.0h)
**Stage 6: Human Review** → 24 completed, 14 pending (ongoing)"

Total: **4.2 hours automated**, leaving your team to focus on the judgment calls.

*[Scroll down to team performance]*

**"And here's how your team is tracking:"**

"Each analyst has:
- Assigned review count
- Completed count
- Progress bar

This gives you real-time visibility into team capacity and velocity."

---

## Section 6: Data Source Reconciliation (2 min)

*[Scroll to data sources]*

**"One of the biggest advantages: validation across data sources."**

"Your risk self-assessment system is the source of truth, but we cross-reference it against:

- **Incident Database**: 88% match rate (some incidents unreported)
- **KRI Dashboard**: 95% match rate (most reliable)
- **Audit Findings**: 84% match rate
- **External Ratings**: 79% match rate

If a source shows 88% match, that 12% gap is worth investigating. The system flags that for you."

*[Point to green health indicator]*

"Overall: Data Quality Status = HEALTHY. All sources connected, all performing above threshold."

---

## Closing (2 min)

*[Scroll back to top]*

**"Let me tie this together for your team:"**

**Before this system:**
- 6 analysts
- 247 assessments to review manually
- ~312 hours per cycle
- Excel spreadsheets
- Inconsistent challenge logic
- High error rate (missing false negatives)

**With this system:**
- 6 analysts (same team)
- 38 cases to genuinely review
- ~4.2 hours of setup/automation
- Structured, evidence-based challenges
- AI consistency + human judgment
- 98.7% time savings

**Bottom line:**
"Your team shifts from data gathering and comparison to *actual risk judgment*. That's where your expertise adds value."

---

## Q&A Prompts to Be Ready For

**"How does the AI generate these narratives?"**
- It analyzes historical patterns across 5 data sources
- Uses statistical anomaly detection
- Compares to peer group baselines
- Confidence score reflects statistical significance

**"What if the AI is wrong?"**
- Human review is the final step - analysts can override
- Confidence scores help identify uncertain cases
- False positives aren't costly (analyst spends 15 min reviewing)
- False negatives (missed risks) are caught by the AI layer

**"Can we customize which entities we review?"**
- Yes - dashboard can filter by region, business line, risk category
- Analysts can set their own thresholds for review
- Fully flexible workflow

**"How often do you re-run this?"**
- This was Q4 2025 cycle (quarterly)
- Can run monthly, ad-hoc, or after major incidents
- Takes 4.2 hours each time

**"What's the cost?"**
- Depends on licensing model (per-entity, per-cycle, per-team-member)
- ROI is immediate if even one false negative catches a high-risk situation

---

## Closing Statement

**"This isn't about replacing your team. It's about liberating them."**

*[Pause]*

**"Right now, your analysts spend 90% of their time on validation - confirming things they probably don't need to confirm. This gives them back 312 hours per cycle to do what they actually trained for: *making risk judgments*."**

**"You have 38 cases that deserve expert human attention. With this system, that's exactly where your team will spend their time."**

---

## Visual Cues for Delivery

- 👆 Point at numbers when citing
- 🖱️ Click/hover on interactive elements to show responsiveness
- ⏸️ Pause at the AI narrative - let it sink in
- 👀 Make eye contact when explaining ROI
- 🎬 Let animations play - they build confidence in the tool

---

**Duration Check:**
- Opening: 1 min ✓
- Executive Summary: 3 min ✓
- Heat Map: 4 min ✓
- Discrepancy Analysis: 3 min ✓
- Entity Deep Dive: 5 min ✓
- Validation Workflow: 3 min ✓
- Data Sources: 2 min ✓
- Closing: 2 min ✓
- **Total: 23 minutes** (trim back to 15-18 by moving through smoothly)

---

## Backup Topics (if running short)

**"Let me show you one more thing..."**
- Expand a second entity card to show another use case
- Show the progress bar filling up in real-time
- Demonstrate filtering by region (if enabled)
- Show team member performance cards

---

**Good luck! You've got this. 🚀**

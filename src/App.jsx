import React from 'react'
import Header from './components/Header'
import ExecutiveSummary from './components/ExecutiveSummary'
import RiskHeatmap from './components/RiskHeatmap'
import DiscrepancyAnalysis from './components/DiscrepancyAnalysis'
import EntityDeepDive from './components/EntityDeepDive'
import ValidationWorkflow from './components/ValidationWorkflow'
import DataSourceReconciliation from './components/DataSourceReconciliation'
import Footer from './components/Footer'

import workflowStatsData from '../Data/workflow_stats.json'
import discrepanciesData from '../Data/discrepancies.json'
import entitiesData from '../Data/entities.json'
import riskMatrixData from '../Data/risk_matrix.json'
import challengeReportsData from '../Data/challenge_reports.json'

export default function App() {
  const stats = workflowStatsData.efficiency_metrics || {}
  const allStats = {
    ...stats,
    efficiency_metrics: stats,
    pipeline: workflowStatsData.pipeline,
    team: workflowStatsData.team,
    data_sources: workflowStatsData.data_sources
  }

  // Transform entities data for RiskHeatmap
  const transformedRiskData = entitiesData.map(entity => ({
    entity_name: entity.name,
    risks: [
      'Credit Risk',
      'Operational Risk',
      'Compliance Risk',
      'Market Risk',
      'Liquidity Risk',
      'Technology Risk'
    ].map(riskCat => ({
      risk_category: riskCat,
      self_assessed_score: entity.self_assessed_scores[riskCat],
      system_calculated_score: entity.system_calculated_scores[riskCat],
      confidence: 0.85 + Math.random() * 0.15,
      severity: Math.abs(
        (entity.self_assessed_scores[riskCat] || 0) - (entity.system_calculated_scores[riskCat] || 0)
      ) === 0 ? 'No Discrepancy' :
        Math.abs((entity.self_assessed_scores[riskCat] || 0) - (entity.system_calculated_scores[riskCat] || 0)) === 1 ? 'Minor' :
        Math.abs((entity.self_assessed_scores[riskCat] || 0) - (entity.system_calculated_scores[riskCat] || 0)) === 2 ? 'Moderate' : 'Significant'
    }))
  }))

  return (
    <div style={{ background: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        <ExecutiveSummary stats={allStats} />

        <div style={{ marginTop: '60px' }}>
          <RiskHeatmap data={transformedRiskData} entities={entitiesData} />
        </div>

        <div style={{ marginTop: '60px' }}>
          <DiscrepancyAnalysis entities={entitiesData} discrepancies={discrepanciesData} />
        </div>

        <div style={{ marginTop: '60px' }}>
          <EntityDeepDive
            discrepancies={discrepanciesData}
            challengeReports={challengeReportsData}
            entities={entitiesData}
          />
        </div>

        <div style={{ marginTop: '60px' }}>
          <ValidationWorkflow stats={allStats} />
        </div>

        <div style={{ marginTop: '60px' }}>
          <DataSourceReconciliation stats={allStats} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

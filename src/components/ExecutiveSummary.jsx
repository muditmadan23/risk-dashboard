import React from 'react'
import CountUp from './CountUp'

export default function ExecutiveSummary({ stats }) {
  const metrics = stats.efficiency_metrics

  const kpis = [
    { label: 'Total Entities Assessed', value: metrics.total_entities, color: '#000000' },
    { label: 'Discrepancies Detected', value: metrics.flagged_for_review, color: '#dc2626' },
    { label: 'False Negatives (Critical)', value: metrics.false_negatives, color: '#b91c1c' },
    { label: 'False Positives', value: metrics.false_positives, color: '#dc2626' },
    { label: 'Auto-Validated', value: metrics.auto_validated, color: '#dc2626' },
  ]

  return (
    <section>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
          Executive Summary
        </h2>
        <p style={{ color: '#666666', margin: 0 }}>
          Real-time validation metrics across all assessed entities
        </p>
      </div>

      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            style={{
              background: '#f5f5f5',
              border: '2px solid #000000',
              borderRadius: '8px',
              padding: '24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#dc2626'
              e.currentTarget.style.background = '#fff5f5'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#000000'
              e.currentTarget.style.background = '#f5f5f5'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <p style={{ color: '#666666', fontSize: '12px', fontWeight: '500', margin: '0 0 8px 0' }}>
              {kpi.label}
            </p>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: kpi.color, margin: 0 }}>
              <CountUp end={kpi.value} />
            </p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{
        background: '#f5f5f5',
        border: '2px solid #000000',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#000000', margin: 0 }}>
            Validation Completion
          </h3>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>
            <CountUp end={metrics.validation_completion_pct} decimals={1} />%
          </span>
        </div>
        <div style={{
          width: '100%',
          background: '#e5e5e5',
          borderRadius: '8px',
          height: '12px',
          overflow: 'hidden',
          border: '1px solid #333333',
          marginBottom: '12px'
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(to right, #dc2626, #b91c1c)',
            width: `${metrics.validation_completion_pct}%`,
            transition: 'width 1.5s ease-out'
          }}></div>
        </div>
        <p style={{ fontSize: '12px', color: '#666666', margin: 0 }}>
          {metrics.reviews_completed} of {metrics.reviews_completed + metrics.reviews_pending} reviews completed
        </p>
      </div>

      {/* Cost Savings */}
      <div style={{
        background: '#fff5f5',
        border: '2px solid #dc2626',
        borderRadius: '8px',
        padding: '24px'
      }}>
        <p style={{ color: '#dc2626', fontSize: '12px', fontWeight: '600', margin: '0 0 16px 0', textTransform: 'uppercase' }}>
          Time & Cost Savings
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 4px 0' }}>Manual Effort (Estimated)</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: 0 }}>
              {metrics.estimated_manual_hours}h
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 4px 0' }}>Automated Processing</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc2626', margin: 0 }}>
              {metrics.actual_automated_hours}h
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 4px 0' }}>Time Reduction</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#b91c1c', margin: 0 }}>
              {metrics.time_reduction_pct}%
            </p>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: '#dc2626', margin: 0, fontWeight: 'bold' }}>
          Estimated cost savings: ${metrics.estimated_cost_saving.toLocaleString()}
        </p>
      </div>
    </section>
  )
}

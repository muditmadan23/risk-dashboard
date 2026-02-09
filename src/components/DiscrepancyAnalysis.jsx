import React from 'react'

export default function DiscrepancyAnalysis({ entities, discrepancies }) {
  const topDiscrepancies = discrepancies.slice(0, 5)

  return (
    <section>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
          Discrepancy Analysis
        </h2>
        <p style={{ color: '#666666', margin: 0 }}>
          Top 5 Critical Discrepancies Requiring Review
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {topDiscrepancies.map((disc, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff5f5',
              border: '2px solid #dc2626',
              borderRadius: '8px',
              padding: '16px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#b91c1c'
              e.currentTarget.style.background = '#fef2f2'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#dc2626'
              e.currentTarget.style.background = '#fff5f5'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '12px' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '12px', color: '#666666', margin: 0 }}>
                  {disc.entity_name.split(' ').slice(0, 3).join(' ')}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#000000', margin: '4px 0 0 0' }}>
                  {disc.risk_category}
                </p>
              </div>
            </div>

            <div style={{ fontSize: '12px', marginBottom: '12px' }}>
              <span style={{ color: '#666666' }}>Self: </span>
              <span style={{ color: '#000000', fontWeight: 'bold' }}>{disc.self_assessed_score}</span>
              <span style={{ color: '#999999' }}> → </span>
              <span style={{ color: '#666666' }}>Sys: </span>
              <span style={{ color: '#000000', fontWeight: 'bold' }}>{disc.system_calculated_score}</span>
            </div>

            <div style={{
              background: '#f0f0f0',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '11px',
              color: '#000000',
              marginBottom: '12px'
            }}>
              Confidence: {Math.round(disc.confidence_score * 100)}%
            </div>

            <p style={{ fontSize: '11px', color: '#666666', margin: 0 }}>
              Status: <span style={{ color: '#dc2626', fontWeight: 'bold' }}>{disc.status}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

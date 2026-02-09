import React, { useState } from 'react'

export default function EntityDeepDive({ discrepancies, challengeReports, entities }) {
  const [expanded, setExpanded] = useState(0)
  const criticalEntities = discrepancies.slice(0, 4)

  return (
    <section>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
          Entity Deep Dive
        </h2>
        <p style={{ color: '#666666', margin: 0 }}>
          AI-generated challenge narratives with supporting evidence
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {criticalEntities.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: '#f5f5f5',
              border: '2px solid #000000',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#dc2626'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#000000'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Header */}
            <button
              onClick={() => setExpanded(expanded === idx ? -1 : idx)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '16px',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(100, 116, 139, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
                  {item.entity_name}
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: '#fef2f2',
                    color: '#dc2626',
                    fontWeight: '600'
                  }}>
                    {item.status}
                  </span>
                  <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', background: '#f0f0f0', color: '#000000' }}>
                    {item.risk_category}
                  </span>
                </div>
              </div>
              <span style={{ fontSize: '18px', transition: 'transform 0.2s', transform: expanded === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </span>
            </button>

            {/* Expanded Content */}
            {expanded === idx && (
              <div style={{ borderTop: '2px solid #000000', padding: '16px' }}>
                {/* AI Narrative */}
                <div style={{
                  background: '#fff5f5',
                  border: '1px solid #dc2626',
                  borderRadius: '8px',
                  padding: '12px',
                  marginBottom: '16px'
                }}>
                  <p style={{ fontSize: '12px', color: '#dc2626', fontWeight: '600', margin: '0 0 8px 0' }}>
                    AI CHALLENGE NARRATIVE
                  </p>
                  <p style={{ fontSize: '13px', color: '#333333', lineHeight: '1.6', margin: 0 }}>
                    {item.challenge_narrative}
                  </p>
                </div>

                {/* Details */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ background: '#f0f0f0', padding: '12px', borderRadius: '4px', border: '1px solid #000000' }}>
                    <p style={{ fontSize: '11px', color: '#666666', margin: '0 0 4px 0' }}>Self-Assessed</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000', margin: 0 }}>
                      {item.self_assessed_score}
                    </p>
                  </div>
                  <div style={{ background: '#f0f0f0', padding: '12px', borderRadius: '4px', border: '1px solid #000000' }}>
                    <p style={{ fontSize: '11px', color: '#666666', margin: '0 0 4px 0' }}>System Score</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc2626', margin: 0 }}>
                      {item.system_calculated_score}
                    </p>
                  </div>
                </div>

                {/* Data Sources */}
                <div>
                  <p style={{ fontSize: '12px', color: '#000000', fontWeight: '600', margin: '0 0 8px 0' }}>
                    Data Sources Used
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Self-Assessment', 'Incident DB', 'KRI', 'Audit', 'External'].map((src, i) => (
                      <span key={i} style={{
                        fontSize: '11px',
                        background: '#ffffff',
                        color: '#000000',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        border: '1px solid #000000'
                      }}>
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

import React, { useState } from 'react'

export default function RiskHeatmap({ data, entities }) {
  const [tooltip, setTooltip] = useState(null)
  const riskCategories = ['Credit Risk', 'Operational Risk', 'Compliance Risk', 'Market Risk', 'Liquidity Risk', 'Technology Risk']
  const topEntities = data.slice(0, 8)

  const getSeverityColor = (severity) => {
    const colors = {
      'No Discrepancy': '#065f46',
      'Minor': '#78350f',
      'Moderate': '#7c2d12',
      'Significant': '#7f1d1d'
    }
    return colors[severity] || '#065f46'
  }

  return (
    <section>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
          Risk Heat Map
        </h2>
        <p style={{ color: '#666666', margin: 0 }}>
          Entity × Risk Category discrepancy severity
        </p>
      </div>

      <div style={{
        background: '#f5f5f5',
        border: '2px solid #000000',
        borderRadius: '8px',
        padding: '24px',
        overflowX: 'auto'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '150px repeat(6, 100px)', gap: '8px', minWidth: 'min-content' }}>
          {/* Header */}
          <div></div>
          {riskCategories.map((cat) => (
            <div key={cat} style={{ fontSize: '11px', fontWeight: 'bold', color: '#000000', textAlign: 'center', padding: '8px' }}>
              {cat.split(' ')[0]}
            </div>
          ))}

          {/* Grid */}
          {topEntities.map((entityData, idx) => (
            <React.Fragment key={idx}>
              <div style={{ fontSize: '12px', color: '#000000', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: '500' }}>
                {entityData.entity_name.substring(0, 20)}
              </div>
              {riskCategories.map((cat) => {
                const cellData = entityData.risks.find(r => r.risk_category === cat)
                return (
                  <div
                    key={cat}
                    style={{
                      background: getSeverityColor(cellData.severity),
                      border: '1px solid #000000',
                      borderRadius: '4px',
                      padding: '8px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontSize: '11px'
                    }}
                    onMouseEnter={() => setTooltip({ entity: entityData.entity_name, risk: cat, ...cellData })}
                    onMouseLeave={() => setTooltip(null)}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ color: 'white', fontWeight: 'bold' }}>
                      {cellData.self_assessed_score}→{cellData.system_calculated_score}
                    </div>
                    <div style={{ color: '#ffffff', fontSize: '10px', marginTop: '4px' }}>
                      {Math.round(cellData.confidence * 100)}%
                    </div>
                  </div>
                )
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          background: '#000000',
          border: '2px solid #dc2626',
          borderRadius: '8px',
          padding: '16px',
          marginTop: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px'
        }}>
          <div>
            <p style={{ fontSize: '12px', color: '#999999', margin: '0 0 4px 0' }}>Entity</p>
            <p style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold', margin: 0 }}>
              {tooltip.entity.substring(0, 25)}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999999', margin: '0 0 4px 0' }}>Self-Assessed</p>
            <p style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold', margin: 0 }}>{tooltip.self_assessed_score}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999999', margin: '0 0 4px 0' }}>System Score</p>
            <p style={{ fontSize: '14px', color: '#dc2626', fontWeight: 'bold', margin: 0 }}>{tooltip.system_calculated_score}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999999', margin: '0 0 4px 0' }}>Confidence</p>
            <p style={{ fontSize: '14px', color: '#dc2626', fontWeight: 'bold', margin: 0 }}>
              {Math.round(tooltip.confidence * 100)}%
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

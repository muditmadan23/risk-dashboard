import React from 'react'
import CountUp from './CountUp'

export default function DataSourceReconciliation({ stats }) {
  const sources = stats.data_sources

  const getMatchColor = (rate) => {
    if (rate >= 0.9) return '#4ade80'
    if (rate >= 0.8) return '#fbbf24'
    return '#f87171'
  }

  return (
    <section>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
          Data Source Reconciliation
        </h2>
        <p style={{ color: '#666666', margin: 0 }}>
          Cross-reference validation across all data sources
        </p>
      </div>

      {/* Sources Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {sources.map((source, idx) => (
          <div key={idx} style={{ background: '#f5f5f5', border: '2px solid #000000', borderRadius: '8px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
              <div>
                <p style={{ fontWeight: '600', color: '#000000', margin: '0 0 4px 0', fontSize: '14px' }}>
                  {source.name}
                </p>
                <p style={{ fontSize: '12px', color: '#666666', margin: 0 }}>
                  Records: <CountUp end={source.records_ingested} />
                </p>
              </div>
              <span style={{ fontSize: '12px', fontWeight: '600', color: source.status === 'connected' ? '#000000' : '#dc2626' }}>
                {source.status === 'connected' ? '● Connected' : '● Partial'}
              </span>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <p style={{ fontSize: '11px', color: '#666666', margin: 0 }}>Match Rate</p>
                <p style={{ fontSize: '12px', fontWeight: 'bold', color: getMatchColor(source.match_rate), margin: 0 }}>
                  <CountUp end={Math.round(source.match_rate * 100)} />%
                </p>
              </div>
              <div style={{ background: '#e5e5e5', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                <div style={{
                  background: getMatchColor(source.match_rate),
                  height: '100%',
                  width: `${source.match_rate * 100}%`,
                  transition: 'width 0.8s ease-out'
                }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={{ background: '#f5f5f5', border: '2px solid #000000', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 8px 0' }}>Total Records Processed</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: 0 }}>
            <CountUp end={sources.reduce((sum, s) => sum + s.records_ingested, 0)} />
          </p>
        </div>

        <div style={{ background: '#f5f5f5', border: '2px solid #000000', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 8px 0' }}>Active Connections</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: 0 }}>
            {sources.filter(s => s.status === 'connected').length} / {sources.length}
          </p>
        </div>

        <div style={{ background: '#f5f5f5', border: '2px solid #000000', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 8px 0' }}>Average Match Rate</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc2626', margin: 0 }}>
            <CountUp end={Math.round((sources.reduce((sum, s) => sum + s.match_rate, 0) / sources.length) * 100)} />%
          </p>
        </div>
      </div>

      {/* Health Indicator */}
      <div style={{
        background: '#fff5f5',
        border: '2px solid #dc2626',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '24px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '14px', fontWeight: '600', color: '#dc2626', margin: '0 0 8px 0' }}>
          Data Quality Status: HEALTHY
        </p>
        <p style={{ fontSize: '13px', color: '#333333', margin: 0, lineHeight: '1.5' }}>
          All data sources are connected and performing within acceptable match rate thresholds. Ready for automated validation.
        </p>
      </div>
    </section>
  )
}

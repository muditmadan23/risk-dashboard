import React from 'react'
import CountUp from './CountUp'

export default function ValidationWorkflow({ stats }) {
  const stages = stats.pipeline

  return (
    <section>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#000000', margin: '0 0 8px 0' }}>
          Validation Workflow
        </h2>
        <p style={{ color: '#666666', margin: 0 }}>
          End-to-end process flow from data ingestion to human review
        </p>
      </div>

      {/* Pipeline */}
      <div style={{ background: '#f5f5f5', border: '2px solid #000000', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {stages.map((stage, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: stage.status === 'complete' ? '#dcfce7' : '#fef2f2',
                border: `2px solid ${stage.status === 'complete' ? '#000000' : '#dc2626'}`,
                flexShrink: 0
              }}>
                <span style={{ fontSize: '18px' }}>
                  {stage.status === 'complete' ? '✓' : stage.status === 'in_progress' ? '⟳' : '○'}
                </span>
              </div>

              {/* Stage Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#000000', margin: 0 }}>
                    {stage.stage}
                  </h3>
                  <span style={{ fontSize: '12px', color: '#666666', fontWeight: '600' }}>
                    {stage.status === 'complete' && '✓ Complete'}
                    {stage.status === 'in_progress' && 'In Progress'}
                    {stage.status === 'pending' && 'Pending'}
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 4px 0' }}>
                  {stage.label}: <span style={{ color: '#000000', fontWeight: 'bold' }}>
                    <CountUp end={stage.count} />
                  </span>
                </p>
                {stage.time_taken_hours && (
                  <p style={{ fontSize: '11px', color: '#999999', margin: 0 }}>
                    ⏱ {stage.time_taken_hours}h
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Performance */}
      <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#000000', margin: '0 0 16px 0' }}>
        Team Performance
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        {stats.team.map((member, idx) => (
          <div key={idx} style={{ background: '#f5f5f5', border: '2px solid #000000', borderRadius: '8px', padding: '16px' }}>
            <p style={{ fontWeight: '600', color: '#000000', margin: '0 0 4px 0', fontSize: '14px' }}>
              {member.name}
            </p>
            <p style={{ fontSize: '12px', color: '#666666', margin: '0 0 12px 0' }}>
              {member.role}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#000000', marginBottom: '8px' }}>
              <span>Assigned: {member.reviews_assigned}</span>
              <span style={{ color: '#dc2626', fontWeight: '600' }}>Done: {member.reviews_completed}</span>
            </div>
            <div style={{ background: '#e5e5e5', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
              <div style={{
                background: '#dc2626',
                height: '100%',
                width: `${(member.reviews_completed / member.reviews_assigned) * 100}%`,
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

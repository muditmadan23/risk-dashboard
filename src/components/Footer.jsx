import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '3px solid #dc2626',
      background: '#ffffff',
      padding: '48px 16px',
      marginTop: '48px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontWeight: '600', color: '#000000', margin: '0 0 8px 0', fontSize: '14px' }}>
              Risk Assessment Validation
            </h3>
            <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6', margin: 0 }}>
              AI-powered second-line defense dashboard for comprehensive risk assessment validation
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: '600', color: '#000000', margin: '0 0 12px 0', fontSize: '13px' }}>
              Key Features
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ fontSize: '12px', color: '#666666', marginBottom: '6px' }}>Automated Risk Comparison</li>
              <li style={{ fontSize: '12px', color: '#666666', marginBottom: '6px' }}>AI-Generated Narratives</li>
              <li style={{ fontSize: '12px', color: '#666666', marginBottom: '6px' }}>Real-time Validation Tracking</li>
              <li style={{ fontSize: '12px', color: '#666666' }}>Multi-Source Reconciliation</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: '600', color: '#000000', margin: '0 0 12px 0', fontSize: '13px' }}>
              Impact
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ fontSize: '12px', color: '#666666', marginBottom: '6px' }}>98.7% time reduction</li>
              <li style={{ fontSize: '12px', color: '#666666', marginBottom: '6px' }}>$26K+ cost savings per cycle</li>
              <li style={{ fontSize: '12px', color: '#666666', marginBottom: '6px' }}>Focus on 38 critical cases</li>
              <li style={{ fontSize: '12px', color: '#666666' }}>Zero high-risk cases missed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          borderTop: '1px solid #e5e5e5',
          paddingTop: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ fontSize: '12px', color: '#999999', margin: 0 }}>
              © {currentYear} Risk Validation System. All rights reserved.
            </p>
          </div>

          <p style={{ fontSize: '11px', color: '#999999', margin: 0, textAlign: 'center' }}>
            This is a demonstration dashboard for banking risk assessment validation. All data is simulated for presentation purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}

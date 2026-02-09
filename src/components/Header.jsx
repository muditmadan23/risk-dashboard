import React from 'react'

export default function Header() {
  return (
    <header style={{
      background: 'white',
      borderBottom: '3px solid #dc2626',
      padding: '16px',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Logo */}
          <img src="/images.png" alt="Logo" style={{ height: '60px', width: 'auto' }} />

          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000', margin: '0' }}>
              Risk Assessment Validation
            </h1>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '14px', color: '#000000', margin: '0 0 4px 0' }}>
            Assessment Cycle: <span style={{ color: '#dc2626', fontWeight: 'bold' }}>Q4 2025</span>
          </p>
          <p style={{ fontSize: '12px', color: '#666666', margin: 0 }}>Generated: Feb 2026</p>
        </div>
      </div>
    </header>
  )
}

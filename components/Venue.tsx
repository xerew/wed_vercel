const venues = [
  {
    name: 'Τελετή',
    address: '123 Οδός Γάμου\nΑθήνα 10000\nΕλλάδα',
    phone: 'Τηλ: (123) 456-7890',
    mobile: 'Κιν: (123) 456-7890',
    email: 'info@venue-ceremony.gr',
  },
  {
    name: 'Δεξίωση',
    address: '456 Οδός Δεξίωσης\nΑθήνα 10000\nΕλλάδα',
    phone: 'Τηλ: (123) 456-7890',
    mobile: 'Κιν: (123) 456-7890',
    email: 'info@venue-reception.gr',
  },
];

export default function Venue() {
  return (
    <section id="venue" style={{ background: '#9e7878', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 300,
            color: '#fff',
            marginBottom: '48px',
            letterSpacing: '-0.5px',
          }}
        >
          Contact Details
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
        >
          {venues.map((v) => (
            <div
              key={v.name}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '4px',
                padding: '32px 28px',
              }}
            >
              {/* Rings icon */}
              <svg
                width="40"
                height="28"
                viewBox="0 0 40 28"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                style={{ marginBottom: '16px' }}
              >
                <circle cx="14" cy="14" r="10" />
                <circle cx="26" cy="14" r="10" />
              </svg>

              <h3
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '22px',
                  color: '#fff',
                  marginBottom: '12px',
                  fontWeight: 400,
                }}
              >
                {v.name}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  marginBottom: '16px',
                }}
              >
                {v.address}
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>
                {v.phone}<br />
                {v.mobile}<br />
                {v.email}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          #venue > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
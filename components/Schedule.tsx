const events = [
  { time: '06:00 PM', title: 'Wedding Ceremony' },
  { time: '09:00 PM', title: 'Dinner' },
  { time: '11:00 PM', title: 'Cocktails & Party' },
];

export default function Schedule() {
  return (
    <section id="schedule" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 300,
            color: '#2d1f1f',
            marginBottom: '8px',
            letterSpacing: '-0.5px',
          }}
        >
          Schedule of Events
        </h2>
        <p
          style={{
            fontSize: '13px',
            color: '#9e7878',
            letterSpacing: '0.1em',
            marginBottom: '48px',
          }}
        >
          September 19, 2026
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left — church illustration */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <svg
              width="180"
              height="200"
              viewBox="0 0 180 200"
              fill="none"
              stroke="#9e7878"
              strokeWidth="1.4"
            >
              {/* Main building */}
              <rect x="40" y="90" width="100" height="100" />
              {/* Roof */}
              <polygon points="20,90 90,30 160,90" />
              {/* Cross */}
              <line x1="90" x2="90" y1="30" y2="10" />
              <line x1="82" x2="98" y1="18" y2="18" />
              {/* Door */}
              <path d="M74 190 L74 150 Q90 138 106 150 L106 190" />
              {/* Windows */}
              <rect x="50" y="110" width="22" height="28" rx="11" />
              <rect x="108" y="110" width="22" height="28" rx="11" />
              {/* Bell tower details */}
              <line x1="40" x2="160" y1="90" y2="90" />
              {/* Birds */}
              <path d="M10 20 Q15 16 20 20" />
              <path d="M25 12 Q30 8 35 12" />
            </svg>
          </div>

          {/* Right — timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((event, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '18px 0',
                  borderBottom: i < events.length - 1 ? '1px solid #e8d8d8' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '14px',
                    color: '#9e7878',
                    minWidth: '80px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {event.time}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '20px',
                    color: '#2d1f1f',
                  }}
                >
                  {event.title}
                </span>
              </div>
            ))}

            {/* Decorative glasses icon */}
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#9e7878" strokeWidth="1.2">
                <path d="M8 36 Q12 20 20 24 Q24 26 24 24 Q24 26 28 24 Q36 20 40 36" />
                <line x1="4" x2="8" y1="28" y2="36" />
                <line x1="44" x2="40" y1="28" y2="36" />
                <path d="M16 36 Q20 42 24 40 Q28 42 32 36" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #schedule > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
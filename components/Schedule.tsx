const events = [
  { time: '06:00 PM', title: 'Wedding Ceremony' },
  { time: '09:00 PM', title: 'Dinner' },
  { time: '11:00 PM', title: 'Cocktails & Party' },
];

export default function Schedule() {
  return (
    <section id="schedule" style={{ position: 'relative', background: '#fff', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 40px', overflow: 'hidden' }}>
      <img
        src="/champagne_section_4.png"
        alt=""
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '300px',
          height: 'auto',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Header — top left, above the grid */}
        <div style={{ marginBottom: '52px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(48px, 7vw, 82px)',
              fontWeight: 300,
              color: '#2d1f1f',
              marginBottom: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            Schedule of Events
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', color: '#9e3030', letterSpacing: '0.06em' }}>
            September 19, 2026
          </p>
        </div>

        {/* 2-column grid: church left, schedule right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '160px',
            alignItems: 'center',
          }}
        >
          {/* Left — church illustration, full column width */}
          <img
            src="/canva-church.png"
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Right — event timeline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {events.map((event, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '44px',
                  padding: '40px 0',
                  borderBottom: '1px solid #e8d8d8',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(17px, 1.6vw, 22px)',
                    color: '#3d1f1f',
                    minWidth: '120px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {event.time}
                </span>
                <span
                  style={{
                    fontFamily: "'Sloop Script Pro', cursive",
                    fontSize: 'clamp(32px, 3.8vw, 52px)',
                    color: '#2d1f1f',
                  }}
                >
                  {event.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #schedule .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
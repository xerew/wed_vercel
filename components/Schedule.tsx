const events = [
  { time: '06:00 PM', title: 'Wedding Ceremony' },
  { time: '09:00 PM', title: 'Dinner' },
  { time: '11:00 PM', title: 'Cocktails & Party' },
];

export default function Schedule() {
  return (
    <section id="schedule" style={{ background: '#fff', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 24px' }}>
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
        <p style={{ fontSize: '13px', color: '#9e3030', letterSpacing: '0.05em', marginBottom: '48px' }}>
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
          <img
            src="/canva-church.png"
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Right — timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '16px' }}>
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
                    color: '#3d1f1f',
                    minWidth: '80px',
                  }}
                >
                  {event.time}
                </span>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: '22px', color: '#2d1f1f' }}>
                  {event.title}
                </span>
              </div>
            ))}
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
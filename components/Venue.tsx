const contacts = [
  {
    name: 'Τελετή',
    address: '123 Οδός Γάμου\nΑθήνα 10000\nΕλλάδα',
    mapSrc: 'https://maps.google.com/maps?q=37.758934,24.0781474&z=14&output=embed',
  },
  {
    name: 'Δεξίωση',
    address: '456 Οδός Δεξίωσης\nΑθήνα 10000\nΕλλάδα',
    mapSrc: 'https://maps.google.com/maps?q=37.849247,23.938608&z=14&output=embed',
  },
];

export default function Venue() {
  return (
    <section id="venue" style={{ position: 'relative', background: '#9e7878', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 40px', overflow: 'hidden' }}>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — big title + rings image absolute below */}
        <div style={{ position: 'relative' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(56px, 8vw, 100px)',
              fontWeight: 300,
              color: '#fff',
              letterSpacing: '-0.5px',
              lineHeight: 1.05,
              marginBottom: '0',
            }}
          >
            Contact<br />Details
          </h2>

          {/* Rings image — absolute, sits below title without pushing layout */}
          <img
            src="/rings_section_5.png"
            alt=""
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '260px',
              height: 'auto',
              marginTop: '32px',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Right — two contact entries */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {contacts.map((c, i) => (
            <div key={c.name}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  padding: '52px 0',
                  alignItems: 'stretch',
                }}
              >
                {/* Name + address — height matches map */}
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Sloop Script Pro', cursive",
                      fontSize: 'clamp(40px, 4.5vw, 62px)',
                      color: '#fff',
                      marginBottom: '20px',
                    }}
                  >
                    {c.name}
                  </div>
                  <p
                    style={{
                      fontFamily: "'TT Hoves', var(--font-sans)",
                      fontSize: 'clamp(16px, 1.6vw, 22px)',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.9,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {c.address}
                  </p>
                </div>

                {/* Map — bigger, rounder corners */}
                <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <iframe
                    src={c.mapSrc}
                    width="100%"
                    height="320"
                    style={{ display: 'block', border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Divider between entries */}
              {i < contacts.length - 1 && (
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.35)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #venue > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
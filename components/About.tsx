const items = [
  { src: '/canva-icon-ceremony.png', alt: 'Εκκλησία' },
  { src: '/canva-icon-party.png', alt: 'Το πάρτυ' },
  { src: '/canva-icon-parking.png', alt: 'Parking Options' },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#fff', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 300,
            textAlign: 'center',
            color: '#3d1f1f',
            marginBottom: '60px',
            letterSpacing: '-0.5px',
          }}
        >
          About the Wedding
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          {items.map((item) => (
            <div key={item.alt}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
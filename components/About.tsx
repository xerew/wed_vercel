const items = [
  {
    src: '/Church_section_2.png',
    alt: 'Η Εκκλησία',
    title: 'Η Εκκλησία',
    description: 'Σε μια εκκλησία δίπλα στη θάλασσα, θα μοιραστούμε αυτή τη στιγμή μαζί σας.',
    scale: 1.2,
  },
  {
    src: '/party_section_2.png',
    alt: 'Το Πάρτυ',
    title: 'Το Πάρτυ',
    description: 'Μετά την τελετή, ετοιμαστείτε για μια βραδιά γεμάτη μουσική, χορό και ατελείωτα χαμόγελα.',
    scale: 1,
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#fff', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2
          style={{
            fontFamily: "'Amiable Song', var(--font-serif)",
            fontSize: 'clamp(34px, 5vw, 56px)',
            fontWeight: 400,
            textAlign: 'center',
            color: '#3d1f1f',
            marginBottom: '64px',
            letterSpacing: '-0.5px',
          }}
        >
          About the Wedding
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            textAlign: 'center',
          }}
        >
          {items.map((item) => (
            <div key={item.alt}>
              <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', overflow: 'hidden' }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    transform: `scale(${item.scale})`,
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Sloop Script Pro', cursive",
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 400,
                  color: '#3d1f1f',
                  marginBottom: '18px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  color: '#555',
                  lineHeight: 1.8,
                  maxWidth: '440px',
                  margin: '0 auto',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about { padding: 48px 20px !important; }
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about > div > h2 { margin-bottom: 24px !important; }
          #about > div > div:last-child > div > div:first-child { height: 220px !important; margin-bottom: 16px !important; }
        }
      `}</style>
    </section>
  );
}
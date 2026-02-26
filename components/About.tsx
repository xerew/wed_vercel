const items = [
  {
    src: '/Church_section_2.png',
    alt: 'Εκκλησία',
    title: 'Εκκλησία',
    description: 'Μοιραστείτε λεπτομέρειες για την τελετή σας, τη δεξίωση ή οποιοδήποτε άλλο πρόγραμμα της ημέρας.',
  },
  {
    src: '/party_section_2.png',
    alt: 'Το πάρτυ',
    title: 'Το πάρτυ',
    description: 'Μοιραστείτε λεπτομέρειες για τη δεξίωση, το γλέντι και ό,τι άλλο περιλαμβάνει η βραδιά σας.',
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#fff', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(34px, 5vw, 56px)',
            fontWeight: 300,
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
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '32px',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-script)',
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
        @media (max-width: 700px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
const items = [
  {
    title: 'Τελετή',
    description: 'Μοιραστείτε λεπτομέρειες για την τελετή, τη δεξίωση ή οποιοδήποτε άλλο πρόγραμμα της ημέρας.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#9e7878" strokeWidth="1.5">
        <rect x="10" y="28" width="44" height="30" rx="1" />
        <polygon points="4,30 32,8 60,30" />
        <line x1="32" x2="32" y1="8" y2="2" />
        <line x1="28" x2="36" y1="4" y2="4" />
        <rect x="26" y="42" width="12" height="16" />
      </svg>
    ),
  },
  {
    title: 'Το γλέντι',
    description: 'Μοιραστείτε λεπτομέρειες για τη δεξίωση, το γλέντι και ό,τι άλλο περιλαμβάνει η βραδιά σας.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#9e7878" strokeWidth="1.5">
        <circle cx="22" cy="10" r="5" />
        <circle cx="42" cy="10" r="5" />
        <path d="M14 30 Q22 18 30 26 Q38 34 46 22 L50 32" />
        <line x1="22" x2="18" y1="15" y2="32" />
        <line x1="42" x2="46" y1="15" y2="32" />
        <line x1="18" x2="12" y1="32" y2="44" />
        <line x1="18" x2="24" y1="32" y2="44" />
        <line x1="46" x2="40" y1="32" y2="44" />
        <line x1="46" x2="52" y1="32" y2="44" />
      </svg>
    ),
  },
  {
    title: 'Πρόσβαση & Parking',
    description: 'Πληροφορίες για το πάρκινγκ και την πρόσβαση στον χώρο τελετής και δεξίωσης.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#9e7878" strokeWidth="1.5">
        <ellipse cx="32" cy="16" rx="16" ry="10" />
        <line x1="16" x2="12" y1="16" y2="52" />
        <line x1="48" x2="52" y1="16" y2="52" />
        <line x1="32" x2="32" y1="6" y2="52" />
        <path d="M12 28 Q32 36 52 28" />
        <path d="M12 40 Q32 48 52 40" />
        <line x1="12" x2="52" y1="52" y2="52" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 300,
            textAlign: 'center',
            color: '#2d1f1f',
            marginBottom: '60px',
            letterSpacing: '-0.5px',
          }}
        >
          About the Wedding
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            textAlign: 'center',
          }}
        >
          {items.map((item) => (
            <div key={item.title}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#2d1f1f',
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
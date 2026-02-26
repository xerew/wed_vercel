export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#3a2e2e',
      }}
    >
      <img
        src="/section_1.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />

      <div style={{ position: 'absolute', inset: 0, background: 'rgba(40, 20, 20, 0.45)' }} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: '#fff',
          padding: '0 24px',
        }}
      >
        <p
          style={{
            fontFamily: "'Sloop Script Pro', 'Cormorant Garamond', cursive",
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontStyle: 'italic',
            marginBottom: '20px',
            opacity: 0.95,
            letterSpacing: '0.02em',
          }}
        >
          Όλα ξεκίνησαν από ένα <span style={{ fontFamily: "var(--font-dancing), cursive", fontStyle: 'normal' }}>N-AI</span> και κάπως έτσι... έγινε για πάντα..
        </p>

        <h1
          style={{
            fontFamily: "'Sloop Script Pro', 'Cormorant Garamond', cursive",
            fontSize: 'clamp(72px, 11vw, 150px)',
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: '24px',
            letterSpacing: '0.01em',
          }}
        >
          Νάκης &amp; Αιμιλία
        </h1>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero { min-height: 50vh !important; }
        }
      `}</style>
    </section>
  );
}
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#3a2e2e',
      }}
    >
      {/* Background photo — replace src with your couple photo */}
      <img
        src="/rsvp-photo.jpg"
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

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(40, 20, 20, 0.52)',
        }}
      />

      {/* Content */}
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
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            fontStyle: 'italic',
            marginBottom: '24px',
            opacity: 0.92,
            letterSpacing: '0.02em',
          }}
        >
          Όλα ξεκίνησαν από ένα ΝΑΙ και κάπως έτσι... έγινε για πάντα.
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(56px, 9vw, 110px)',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '0.01em',
          }}
        >
          Νίκος &amp; Αμελία
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            opacity: 0.85,
          }}
        >
          Ν-ΑΙ
        </p>
      </div>
    </section>
  );
}
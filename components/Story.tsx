export default function Story() {
  return (
    <section
      id="story"
      style={{ background: '#c9aaaa', padding: '80px 24px' }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left — illustration + text */}
        <div>
          {/* Dancing couple illustration */}
          <svg
            width="120"
            height="140"
            viewBox="0 0 120 140"
            fill="none"
            stroke="#5c3a3a"
            strokeWidth="1.8"
            style={{ marginBottom: '24px', display: 'block' }}
          >
            <circle cx="44" cy="14" r="8" />
            <circle cx="76" cy="18" r="8" />
            <path d="M44 22 C40 38 36 52 38 70" />
            <path d="M76 26 C80 42 82 56 78 72" />
            <path d="M38 70 C30 85 28 100 32 115" />
            <path d="M38 70 C46 82 52 88 50 102" />
            <path d="M78 72 C72 86 68 96 70 112" />
            <path d="M78 72 C86 82 90 94 88 108" />
            <path d="M44 22 C52 30 62 34 76 26" />
            <path d="M36 45 C48 55 64 52 80 48" />
          </svg>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 300,
              color: '#2d1414',
              marginBottom: '20px',
              letterSpacing: '-0.3px',
            }}
          >
            Our Love Story
          </h2>
          <p style={{ fontSize: '15px', color: '#3d2020', lineHeight: 1.8 }}>
            Γράψτε μια παράγραφο που να αφηγείται την ιστορία σας ως ζευγάρι. Μπορείτε να συμπεριλάβετε λεπτομέρειες όπως το πώς γνωριστήκατε, το ταξίδι σας μαζί και τι κάνει τη σχέση σας μοναδική. Αυτή είναι η ευκαιρία σας να μοιραστείτε την ιστορία σας με τους αγαπημένους σας.
          </p>
        </div>

        {/* Right — photo */}
        <div
          style={{
            aspectRatio: '3/4',
            background: '#b09090',
            overflow: 'hidden',
            borderRadius: '2px',
          }}
        >
          <img
            src="/story-photo.jpg"
            alt="Our story"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 640px) {
          #story > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
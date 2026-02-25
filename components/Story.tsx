export default function Story() {
  return (
    <section id="story" style={{ background: '#c9aaaa', padding: '80px 24px' }}>
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
          <img
            src="/canva-story-illustration.png"
            alt=""
            style={{ width: '140px', height: 'auto', display: 'block', marginBottom: '24px' }}
          />
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
        <div style={{ overflow: 'hidden', borderRadius: '2px' }}>
          <img
            src="/canva-story-photo.png"
            alt="Our story"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #story > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
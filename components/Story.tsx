export default function Story() {
  return (
    <section
      id="story"
      style={{
        position: 'relative',
        background: '#c9aaaa',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Illustration — absolutely anchored to section top-left, never touches the grid */}
      <img
        src="/couple_section_3.png"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '300px',
          height: 'auto',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Decoration — bottom right of section */}
      <img
        src="/melina_section_3.png"
        alt=""
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '300px',
          height: 'auto',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Grid content sits above the illustration */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1300px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
        }}
      >
        {/* Left — heading + text only, illustration is separate */}
        <div>
          <h2
            style={{
              fontFamily: "'Amiable Song', var(--font-serif)",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              color: '#2d1414',
              marginBottom: '24px',
              letterSpacing: '-0.3px',
            }}
          >
            Our Love Story
          </h2>

          <p
            style={{
              fontFamily: "'TT Hoves', var(--font-sans)",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: '#3d2020',
              lineHeight: 1.85,
            }}
          >
            Γράψτε μια παράγραφο που να αφηγείται την ιστορία σας ως ζευγάρι.
            Μπορείτε να συμπεριλάβετε λεπτομέρειες όπως το πώς γνωριστήκατε,
            το ταξίδι σας μαζί και τι κάνει τη σχέση σας μοναδική. Αυτή είναι
            η ευκαιρία σας να μοιραστείτε την ιστορία σας με τους αγαπημένους σας.
          </p>
        </div>

        {/* Right — photo centered with outline */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '75%',
              paddingRight: '20px',
              paddingBottom: '20px',
            }}
          >
            <img
              src="/couple_pic_section_3.JPG"
              alt="Our story"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                borderRadius: '20px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: 0,
                bottom: 0,
                border: '5px solid #2d1414',
                zIndex: 0,
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #story > div:last-child { grid-template-columns: 1fr !important; gap: 52px !important; }
          #story > img { width: 160px !important; }
        }
      `}</style>
    </section>
  );
}
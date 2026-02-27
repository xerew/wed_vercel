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
              fontFamily: "'Noteworthy', var(--font-sans)",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: '#3d2020',
              lineHeight: 1.85,
              textAlign: 'justify',
            }}
          >
            Γνωριστήκαμε πριν 11 χρόνια στην σχολή (υποτίθεται για να σπουδάσουμε).
            Ανάμεσα σε μαθήματα, καφέδες και ατελείωτα γέλια, μάθαμε κάτι πιο σημαντικό.
            Η ομαδική εργασία, τελικά μας έκανε, ομάδα για την ζωή. 
            Από συμφοιτητές, γίναμε αχώριστοι... και κάπως έτσι το "μαζί" έγινε η πιο όμορφη συνήθειά μας.
            Και τώρα, 11 χρόνια μετά, λέμε το πιο σίγουρο Ν-ΑΙ της ζωής μας ♥
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
          <div style={{ position: 'relative', width: '75%' }}>
            <img
              src="/couple_pic_section_3.JPG"
              alt="Our story"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #story { padding: 48px 20px !important; }
          #story > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #story > img { width: 120px !important; }
          /* Text aligns right on mobile, with top margin to clear the illustration */
          #story > div > div:first-child { text-align: right !important; padding-top: 100px !important; }
          /* Space between title and paragraph */
          #story > div > div:first-child h2 { margin-bottom: 20px !important; }
          /* Hide the offset outline on mobile */
          #story > div > div:last-child > div > div { display: none !important; }
          /* Remove the outline-offset padding from the wrapper */
          #story > div > div:last-child > div { padding-right: 0 !important; padding-bottom: 0 !important; }
          /* Photo aligns left on mobile */
          #story > div > div:last-child { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
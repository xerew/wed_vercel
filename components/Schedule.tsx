'use client';

import { useState, useRef } from 'react';

const events = [
  { time: '06:00 PM', title: 'Wedding Ceremony' },
  { time: '07:00 PM', title: 'Welcome Drinks' },
  { time: '09:00 PM', title: 'Dinner' },
  { time: '11:00 PM', title: 'Cocktails & Party' },
];

export default function Schedule() {
  const [modalOpen, setModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const openModal = () => {
    const audio = new Audio('/cantina_sw.mp3');
    audio.loop = true;
    audio.currentTime = 0.7;
    audio.play();
    audioRef.current = audio;
    setModalOpen(true);
  };

  const closeModal = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    setModalOpen(false);
  };

  return (
    <section id="schedule" style={{ position: 'relative', background: '#fff', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 40px', overflow: 'hidden' }}>
      <img
        src="/champagne_section_4.png"
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

      {/* Star Wars easter egg — bottom left */}
      <img
        src="/starwars_section_2.png"
        alt="This is the way"
        onClick={openModal}
        style={{
          position: 'absolute',
          bottom: 24,
          left: 32,
          width: '72px',
          height: 'auto',
          zIndex: 2,
          cursor: 'pointer',
          opacity: 0.85,
          transition: 'opacity 0.2s, transform 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLImageElement).style.opacity = '1';
          (e.target as HTMLImageElement).style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLImageElement).style.opacity = '0.85';
          (e.target as HTMLImageElement).style.transform = 'scale(1)';
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Header — top left, above the grid */}
        <div style={{ marginBottom: '52px' }}>
          <h2
            style={{
              fontFamily: "'Amiable Song', var(--font-serif)",
              fontSize: 'clamp(48px, 7vw, 82px)',
              fontWeight: 400,
              color: '#2d1f1f',
              marginBottom: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            Schedule of <br id="schedule-title-br" />Events
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', color: '#9e3030', letterSpacing: '0.06em' }}>
            September 19, 2026
          </p>
        </div>

        {/* 2-column grid: church left, schedule right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '160px',
            alignItems: 'center',
          }}
        >
          {/* Left — church illustration, full column width */}
          <img
            src="/canva-church.png"
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Right — event timeline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {events.map((event, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '44px',
                  padding: '40px 0',
                  borderBottom: '1px solid #e8d8d8',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(17px, 1.6vw, 22px)',
                    color: '#3d1f1f',
                    minWidth: '120px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {event.time}
                </span>
                <span
                  style={{
                    fontFamily: "'Sloop Script Pro', cursive",
                    fontSize: 'clamp(32px, 3.8vw, 52px)',
                    color: '#2d1f1f',
                  }}
                >
                  {event.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          id="schedule-modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            id="schedule-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0d0d0d',
              borderRadius: '16px',
              padding: '48px 40px',
              maxWidth: '420px',
              width: '90%',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <p
              style={{
                fontFamily: "'TT Hoves', var(--font-sans)",
                fontSize: 'clamp(18px, 2vw, 24px)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#ffe81f',
              }}
            >
              This is the way
            </p>

            <img
              src="/starwars_dancing.gif"
              alt="Star Wars"
              style={{ width: '100%', height: 'auto' }}
            />

            <p
              style={{
                fontFamily: "'TT Hoves', var(--font-sans)",
                fontSize: 'clamp(14px, 1.4vw, 17px)',
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.06em',
                fontStyle: 'italic',
              }}
            >
              May the force be with you.. and keep your lightsabers ready for the dance floor!
            </p>

            <button
              onClick={closeModal}
              style={{
                marginTop: '8px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.5)',
                padding: '8px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: "'TT Hoves', var(--font-sans)",
                fontSize: '13px',
                letterSpacing: '0.1em',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        #schedule-title-br { display: none; }
        @media (max-width: 768px) {
          #schedule-title-br { display: block !important; }
          #schedule { padding: 48px 20px !important; }
          #schedule > div { padding-bottom: 80px !important; }
          #schedule > div > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          /* Church image: aligned to the right of the title */
          #schedule > div:not(#schedule-modal-overlay) > div:last-child > img {
            position: absolute !important;
            top: 0 !important;
            right: -20px !important;
            width: 220px !important;
            display: block !important;
            z-index: 0 !important;
          }
          /* Header text sits on top of the church image */
          #schedule > div:not(#schedule-modal-overlay) > div:first-child {
            position: relative !important;
            z-index: 1 !important;
            margin-bottom: 32px !important;
          }
          /* Same font as "Our Love Story" */
          #schedule > div:not(#schedule-modal-overlay) > div:first-child h2 {
            font-family: 'Amiable Song', var(--font-serif) !important;
            font-weight: 400 !important;
          }
          #schedule > img[src*="champagne"] { width: 160px !important; bottom: 0 !important; right: -10px !important; }
          #schedule > img[src*="starwars"] { width: 52px !important; bottom: 16px !important; left: 16px !important; }
          /* Modal: centered, scrollable if content is taller than viewport */
          #schedule-modal-overlay { overflow-y: auto !important; align-items: center !important; }
        }
      `}</style>
    </section>
  );
}
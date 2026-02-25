'use client';

import { useState } from 'react';

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '600px',
      }}
    >
      {/* Left — couple photo */}
      <div
        style={{
          background: '#7a6060',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src="/rsvp-photo.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Right — RSVP content */}
      <div
        style={{
          background: '#f5ede0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 40px',
          textAlign: 'center',
        }}
      >
        {submitted ? (
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 300,
                color: '#2d1f1f',
                letterSpacing: '0.05em',
              }}
            >
              Ευχαριστούμε!
            </h2>
            <p style={{ color: '#9e7878', marginTop: '12px', fontSize: '14px' }}>
              Λάβαμε την απάντησή σας.
            </p>
          </div>
        ) : (
          <>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: 700,
                color: '#2d1f1f',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                lineHeight: 1.4,
                marginBottom: '32px',
              }}
            >
              Please RSVP by<br />August 15, 2026
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', width: '100%', maxWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#3d2020' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9e7878" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.57A2 2 0 0 1 3.68 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.62a16 16 0 0 0 5.47 5.47l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.78 16z" />
                </svg>
                6979898176
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#3d2020' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9e7878" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@mreallygreatsite.com
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '280px' }}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: '#2d1f1f',
                  color: '#fff',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '2px',
                }}
              >
                RSVP
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #rsvp { grid-template-columns: 1fr !important; }
          #rsvp > div:first-child { min-height: 280px; }
        }
      `}</style>
    </section>
  );
}
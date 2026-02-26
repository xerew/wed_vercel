'use client';

import { useState } from 'react';

// ── After deploying your Google Apps Script, paste the URL here ──
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzU4OJKLEjKQkAhKkSN6HEOK7g6Warhs6cdPT6-adOuM4FBLZpWujs7f3oym_u9HkD1/exec';

export default function RSVP() {
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('');
  const [guestCount, setGuestCount] = useState<0 | 1 | 2>(0);
  const [childrenCount, setChildrenCount] = useState<0 | 1 | 2>(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | null)?.value || '';

    const guestNames = [
      getValue('guest1'),
      getValue('guest2'),
    ].filter(Boolean).join(', ');

    const data = {
      timestamp: new Date().toISOString(),
      fullName: getValue('fullName'),
      email: getValue('email'),
      phone: getValue('phone'),
      attending,
      guests: guestCount,
      guestNames,
      children: childrenCount > 0 ? childrenCount : 'No',
      dietary: getValue('dietary'),
      songRequest: getValue('songRequest'),
      message: getValue('message'),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setError('Κάτι πήγε στραβά. Προσπαθήστε ξανά.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #c9aaaa',
    padding: '10px 0',
    fontSize: 'clamp(14px, 1.4vw, 17px)',
    fontFamily: "'TT Hoves', var(--font-sans)",
    color: '#2d1414',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#9e7878',
    marginBottom: '4px',
    fontFamily: "'TT Hoves', var(--font-sans)",
  };

  return (
    <section
      id="rsvp"
      style={{
        background: '#f5ede0',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center',
        }}
      >
        {/* Left — couple photo with offset outline */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: '85%',
              paddingRight: '20px',
              paddingBottom: '20px',
            }}
          >
            <img
              src="/couple_section_5.png"
              alt="Νάκης & Αιμιλία"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                borderRadius: '20px',
              }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
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

        {/* Right — RSVP form */}
        <div>
          {submitted ? (
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontFamily: "'Amiable Song', var(--font-serif)",
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: 400,
                  color: '#2d1414',
                  marginBottom: '16px',
                }}
              >
                Ευχαριστούμε!
              </h2>
              <p style={{ fontFamily: "'TT Hoves', var(--font-sans)", color: '#9e7878', fontSize: '17px' }}>
                Λάβαμε την απάντησή σας. Ανυπομονούμε να σας δούμε!
              </p>
            </div>
          ) : (
            <>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  fontWeight: 300,
                  color: '#2d1414',
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}
              >
                RSVP
              </h2>
              <p
                style={{
                  fontFamily: "'TT Hoves', var(--font-sans)",
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  color: '#9e7878',
                  letterSpacing: '0.06em',
                  marginBottom: '44px',
                }}
              >
                Παρακαλούμε απαντήστε έως 15 Αυγούστου 2026
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                {/* Full Name */}
                <div>
                  <label style={labelStyle}>Ονοματεπώνυμο</label>
                  <input name="fullName" required style={inputStyle} placeholder="Το όνομά σας" />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" required style={inputStyle} placeholder="email@example.com" />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label style={labelStyle}>Τηλέφωνο (προαιρετικό)</label>
                  <input name="phone" type="tel" style={inputStyle} placeholder="+30 6900 000000" />
                </div>

                {/* Will you attend */}
                <div>
                  <label style={labelStyle}>Θα παραστείτε;</label>
                  <select
                    name="attending"
                    required
                    value={attending}
                    onChange={(e) => {
                      setAttending(e.target.value as 'yes' | 'no');
                      setGuestCount(0);
                      setChildrenCount(0);
                    }}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Επιλέξτε...</option>
                    <option value="yes">Ναι, θα παραστώ</option>
                    <option value="no">Δυστυχώς δεν μπορώ</option>
                  </select>
                </div>

                {/* ── Conditional: only if attending YES ── */}
                {attending === 'yes' && (
                  <>
                    {/* Number of Guests */}
                    <div>
                      <label style={labelStyle}>Αριθμός συνοδών</label>
                      <select
                        name="guests"
                        value={guestCount}
                        onChange={(e) => {
                          setGuestCount(Number(e.target.value) as 0 | 1 | 2);
                        }}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value={0}>0 — Έρχομαι μόνος/η</option>
                        <option value={1}>1 συνοδός</option>
                        <option value={2}>2 συνοδοί</option>
                      </select>
                    </div>

                    {/* Names of Additional Guests — dynamic */}
                    {guestCount >= 1 && (
                      <div>
                        <label style={labelStyle}>Όνομα 1ου συνοδού</label>
                        <input name="guest1" style={inputStyle} placeholder="Ονοματεπώνυμο" />
                      </div>
                    )}
                    {guestCount >= 2 && (
                      <div>
                        <label style={labelStyle}>Όνομα 2ου συνοδού</label>
                        <input name="guest2" style={inputStyle} placeholder="Ονοματεπώνυμο" />
                      </div>
                    )}

                    {/* Children */}
                    <div>
                      <label style={labelStyle}>Θα έχετε μαζί παιδιά; Αν ναι, πόσα;</label>
                      <select
                        name="children"
                        value={childrenCount}
                        onChange={(e) => setChildrenCount(Number(e.target.value) as 0 | 1 | 2)}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value={0}>Όχι</option>
                        <option value={1}>1 παιδί</option>
                        <option value={2}>2 παιδιά</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Dietary */}
                <div>
                  <label style={labelStyle}>Αλλεργίες / Διατροφικές προτιμήσεις (προαιρετικό)</label>
                  <input
                    name="dietary"
                    style={inputStyle}
                    placeholder="π.χ. χορτοφαγία, αλλεργία στους ξηρούς καρπούς..."
                  />
                </div>

                {/* Song request */}
                <div>
                  <label style={labelStyle}>Αίτημα τραγουδιού για το πάρτι 🎶</label>
                  <input name="songRequest" style={inputStyle} placeholder="π.χ. Dancing Queen - ABBA" />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Μήνυμα στο ζευγάρι (προαιρετικό)</label>
                  <textarea
                    name="message"
                    rows={3}
                    style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Γράψτε ένα μήνυμα..."
                  />
                </div>

                {error && (
                  <p style={{ color: '#c0392b', fontSize: '13px', fontFamily: "'TT Hoves', var(--font-sans)" }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    marginTop: '8px',
                    padding: '16px 0',
                    background: '#2d1414',
                    color: '#fff',
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(13px, 1.3vw, 16px)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    opacity: submitting ? 0.6 : 1,
                    borderRadius: '2px',
                  }}
                >
                  {submitting ? 'Αποστολή...' : 'Αποστολή'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        #rsvp input::placeholder, #rsvp textarea::placeholder { color: #c9aaaa; }
        #rsvp select option { background: #f5ede0; color: #2d1414; }
        @media (max-width: 700px) {
          #rsvp > div { grid-template-columns: 1fr !important; gap: 52px !important; }
        }
      `}</style>
    </section>
  );
}
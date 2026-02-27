'use client';

import dynamic from 'next/dynamic';

const MapLeaflet = dynamic(() => import('./MapLeaflet'), { ssr: false });

const contacts = [
  {
    name: 'Τελετή',
    label: 'Ιερός Ναός Προφήτη Ηλία Θορικού Κερατέας',
    lat: 37.758934,
    lng: 24.0781474,
    zoom: 15,
    address: 'Ιερός Ναός Προφήτη Ηλία Θορικού\nΛεωφ. Περιγιάλι\nΚερατέα\n190 01',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Church+of+Prophet+Elias+Mikrolimano+190+01+Greece',
  },
  {
    name: 'Πάρτυ',
    label: 'Πολυχώρος Ονείρων',
    lat: 37.849247,
    lng: 23.938608,
    zoom: 13,
    address: 'Πολυχώρος Ονείρων\n34ο χλμ Λεωφ. Μαρκοπούλου - Λαυρίου\nΜαρκόπουλο Αττικής 190 10',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=37.849247,23.938608',
  },
];

export default function Venue() {
  return (
    <section id="venue" style={{ position: 'relative', background: '#9e7878', minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '60px 40px', overflow: 'hidden' }}>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — big title + rings image absolute below */}
        <div style={{ position: 'relative' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(56px, 8vw, 100px)',
              fontWeight: 300,
              color: '#fff',
              letterSpacing: '-0.5px',
              lineHeight: 1.05,
              marginBottom: '0',
            }}
          >
            Contact<br />Details
          </h2>

          {/* Rings image — absolute, sits below title without pushing layout */}
          <img
            src="/rings_section_5.png"
            alt=""
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '260px',
              height: 'auto',
              marginTop: '32px',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Right — two contact entries */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {contacts.map((c, i) => (
            <div key={c.name}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  padding: '52px 0',
                  alignItems: 'stretch',
                }}
              >
                {/* Name + address — height matches map */}
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Sloop Script Pro', cursive",
                      fontSize: 'clamp(40px, 4.5vw, 62px)',
                      color: '#fff',
                      marginBottom: '20px',
                    }}
                  >
                    {c.name}
                  </div>
                  <a
                    href={c.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <p
                      style={{
                        fontFamily: "'TT Hoves', var(--font-sans)",
                        fontSize: 'clamp(16px, 1.6vw, 22px)',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.9,
                        whiteSpace: 'pre-line',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLParagraphElement).style.color = '#fff'; }}
                      onMouseLeave={(e) => { (e.target as HTMLParagraphElement).style.color = 'rgba(255,255,255,0.85)'; }}
                    >
                      {c.address}
                    </p>
                  </a>
                </div>

                {/* Map — Leaflet with heart marker */}
                <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <MapLeaflet lat={c.lat} lng={c.lng} zoom={c.zoom} label={c.label} height={320} />
                </div>
              </div>

              {/* Divider between entries */}
              {i < contacts.length - 1 && (
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.35)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #venue { padding: 48px 20px !important; }
          #venue > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          /* Rings image: pull to top-right next to Contact Details, behind text */
          #venue > div > div:first-child > img {
            display: block !important;
            position: absolute !important;
            top: 12px !important;
            right: 0 !important;
            left: auto !important;
            margin-top: 0 !important;
            width: 160px !important;
            z-index: 0 !important;
          }
          /* Contact Details heading stays on top */
          #venue > div > div:first-child {
            position: relative !important;
            z-index: 1 !important;
          }
          #venue > div > div:last-child > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 32px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

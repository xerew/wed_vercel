'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnvelopeIntro from '@/components/Envelope';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Story from '@/components/Story';
import Schedule from '@/components/Schedule';
import Venue from '@/components/Venue';
import RSVP from '@/components/RSVP';
import MusicBar from '@/components/MusicBar';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const musicWasPlayingRef = useRef(false);

  // Try to autoplay on mount (works on desktop, silently fails on mobile)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  // Called when user first taps the envelope screen
  const handleFirstTap = () => {
    audioRef.current?.play().catch(() => {});
  };

  const handleModalOpen = () => {
    musicWasPlayingRef.current = !audioRef.current?.paused;
    audioRef.current?.pause();
  };

  const handleModalClose = () => {
    if (musicWasPlayingRef.current) {
      audioRef.current?.play().catch(() => {});
    }
  };

  return (
    <>
      {/* Background music — always in DOM so it persists */}
      <audio ref={audioRef} src="/sw_theme_across_the_stars.mp3" loop preload="auto" />

      {!opened && (
        <EnvelopeIntro
          coupleName="Νάκης & Αιμιλία"
          onFinish={() => {
            setOpened(true);
            // iOS releases the audio session when video ends — restart music here
            audioRef.current?.play().catch(() => {});
          }}
          videoSrc="/final_video_fixed.mp4"
          onFirstTap={handleFirstTap}
        />
      )}

      <motion.main
        initial={{ opacity: 0 }}
        animate={opened ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Hero />
        {[About, Story].map((Section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <Section />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <Schedule
            onModalOpen={handleModalOpen}
            onModalClose={handleModalClose}
          />
        </motion.div>
        {[Venue, RSVP].map((Section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <Section />
          </motion.div>
        ))}
        <footer style={{
          textAlign: 'center',
          padding: '10px',
          background: '#f5ede0',
          fontFamily: "'TT Hoves', var(--font-sans)",
          fontSize: '12px',
          color: '#c9aaaa',
          letterSpacing: '0.08em',
        }}>
          made with ♥ by the groom
        </footer>
      </motion.main>

      {opened && <MusicBar audioRef={audioRef} />}
    </>
  );
}

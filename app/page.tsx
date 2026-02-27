'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnvelopeIntro from '@/components/Envelope';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Story from '@/components/Story';
import Schedule from '@/components/Schedule';
import Venue from '@/components/Venue';
import RSVP from '@/components/RSVP';

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <EnvelopeIntro
          coupleName="Νάκης & Αιμιλία"
          onFinish={() => setOpened(true)}
          videoSrc="/wedding_19_09_opening.mp4"
        />
      )}

      <motion.main
        initial={{ opacity: 0 }}
        animate={opened ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Hero />
        <About />
        <Story />
        <Schedule />
        <Venue />
        <RSVP />
        <footer style={{
          textAlign: 'center',
          padding: '10px',
          background: '#f5ede0',
          fontFamily: "'TT Hoves', var(--font-sans)",
          fontSize: '12px',
          color: '#c9aaaa',
          letterSpacing: '0.08em',
        }}>
          made with ♥ by Xerew
        </footer>
      </motion.main>
    </>
  );
}
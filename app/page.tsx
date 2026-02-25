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
import Footer from '@/components/Footer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <EnvelopeIntro
          coupleName="Νίκος & Αμελία"
          onFinish={() => setOpened(true)}
          videoSrc="/envelope-video.mp4"
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
        <Footer />
      </motion.main>
    </>
  );
}
'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface EnvelopeIntroProps {
  coupleName: string;
  onFinish: () => void;
  imageSrc?: string;
  videoSrc?: string;
}

export default function EnvelopeIntro({
  onFinish,
  videoSrc = '/envelope-video.mp4',
}: EnvelopeIntroProps) {
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClick = () => {
    if (playing) return;
    setPlaying(true);
    videoRef.current?.play();
  };

  const handleVideoEnd = () => {
    setDone(true);
    onFinish();
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          onClick={handleClick}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#000',
            overflow: 'hidden',
            cursor: playing ? 'default' : 'pointer',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <video
            ref={videoRef}
            onEnded={handleVideoEnd}
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.15)',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState, useEffect, RefObject } from 'react';
import { motion } from 'framer-motion';

interface MusicBarProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function MusicBar({ audioRef }: MusicBarProps) {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    // Sync initial state with actual audio element
    if (audioRef.current) {
      setPlaying(!audioRef.current.paused);
      setVolume(audioRef.current.volume);
    }
  }, [audioRef]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(255, 252, 248, 0.88)',
        backdropFilter: 'blur(12px)',
        borderRadius: '50px',
        padding: '8px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 2px 24px rgba(61, 31, 31, 0.13)',
        border: '1px solid rgba(201, 170, 170, 0.35)',
      }}
    >
      <button
        onClick={toggle}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
          padding: 0,
          lineHeight: 1,
          color: '#3d1f1f',
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '⏸' : '▶'}
      </button>

      <span
        style={{
          fontSize: '11px',
          color: '#7a5050',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '0.04em',
        }}
      >
        ♪ Across the Stars
      </span>

      <input
        type="range"
        min="0"
        max="1"
        step="0.02"
        value={volume}
        onChange={handleVolume}
        style={{
          width: '58px',
          accentColor: '#c9aaaa',
          cursor: 'pointer',
        }}
        aria-label="Volume"
      />
    </motion.div>
  );
}

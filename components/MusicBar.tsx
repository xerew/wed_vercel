'use client';

import { useState, useEffect, RefObject } from 'react';
import { motion } from 'framer-motion';

interface MusicBarProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

const isIOS = typeof navigator !== 'undefined' &&
  (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

const PlayIcon = () => (
  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" style={{ display: 'block' }}>
    <path d="M1 1.2L10 6.5L1 11.8V1.2Z" />
  </svg>
);

const PauseIcon = () => (
  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" style={{ display: 'block' }}>
    <rect x="0.5" y="0.5" width="3.5" height="12" rx="1" />
    <rect x="7" y="0.5" width="3.5" height="12" rx="1" />
  </svg>
);

const SoundWave = ({ playing }: { playing: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '16px' }}>
    {[0.6, 1.0, 0.7, 0.9].map((speed, i) => (
      <motion.div
        key={i}
        animate={playing
          ? { height: ['4px', '14px', '6px', '12px', '4px'] }
          : { height: '5px' }
        }
        transition={playing
          ? { duration: speed * 0.9, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 }
          : { duration: 0.25 }
        }
        style={{ width: '3px', background: '#7a5050', borderRadius: '2px' }}
      />
    ))}
  </div>
);

export default function MusicBar({ audioRef }: MusicBarProps) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      setPlaying(!audioRef.current.paused);
      setVolume(audioRef.current.volume);
    }
  }, [audioRef]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onClick={() => setMinimized((m) => !m)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(255, 252, 248, 0.88)',
        backdropFilter: 'blur(12px)',
        borderRadius: '50px',
        padding: minimized ? '10px 14px' : '8px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 2px 24px rgba(61, 31, 31, 0.13)',
        border: '1px solid rgba(201, 170, 170, 0.35)',
        touchAction: 'none',
        cursor: 'grab',
        userSelect: 'none',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {minimized ? (
        <SoundWave playing={playing} />
      ) : (
        <>
          <button
            onClick={toggle}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              lineHeight: 1,
              color: '#3d1f1f',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label={playing ? 'Pause music' : 'Play music'}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          <span style={{
            fontSize: '11px',
            color: '#7a5050',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.04em',
          }}>
            ♪ Across the Stars
          </span>

          {!isIOS && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={volume}
              onChange={handleVolume}
              onClick={(e) => e.stopPropagation()}
              style={{ width: '58px', accentColor: '#c9aaaa', cursor: 'pointer' }}
              aria-label="Volume"
            />
          )}
        </>
      )}
    </motion.div>
  );
}

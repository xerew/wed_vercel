'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  weddingDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ weddingDate }: CountdownProps) {
  const calculateTime = () => {
    const diff = weddingDate.getTime() - new Date().getTime();
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    return {
      days: Math.floor(diff / day),
      hours: Math.floor((diff % day) / hour),
      minutes: Math.floor((diff % hour) / minute),
      seconds: Math.floor((diff % minute) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <p className="text-gray-600 font-light uppercase tracking-widest text-sm">{label}</p>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-16"
      >
        The Big Day Awaits
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-gray-600 text-lg"
      >
        <p>June 14, 2025 — Athens, Greece</p>
      </motion.div>
    </div>
  );
}

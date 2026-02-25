'use client';

import { motion } from 'framer-motion';

interface DayDetailsProps {
  venueName: string;
  address: string;
  startTime: string;
  endTime: string;
}

export default function DayDetails({
  venueName = 'The Grand Ballroom',
  address = '123 Wedding Lane, Athens, Greece',
  startTime = '4:00 PM',
  endTime = '11:00 PM',
}: DayDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-12 text-center"
      >
        Wedding Day Details
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center space-y-6 mb-12"
      >
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600 font-medium mb-2">Venue</p>
          <p className="text-2xl text-gray-900 font-light">{venueName}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600 font-medium mb-2">Address</p>
          <p className="text-lg text-gray-700">{address}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600 font-medium mb-2">Time</p>
          <p className="text-lg text-gray-700">
            {startTime} — {endTime}
          </p>
        </div>
      </motion.div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12 h-96 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden"
      >
        <div className="text-center">
          <p className="text-gray-500 text-lg">Map Placeholder</p>
          <p className="text-gray-400 text-sm mt-2">
            Replace with embed.google.com/maps or a similar service
          </p>
        </div>
      </motion.div>

      {/* Add to Calendar Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <a
          href="https://www.addevent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
        >
          Add to Calendar
        </a>
      </motion.div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Gifts() {
  return (
    <div className="max-w-2xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8"
      >
        Gifts & Honeymoon
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6 text-gray-700 mb-12"
      >
        <p className="text-lg leading-relaxed font-light">
          Your presence is the greatest gift we could receive. If you wish to celebrate our love with a monetary gift
          towards our honeymoon, we would be delighted.
        </p>

        <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
          <p className="text-sm uppercase tracking-widest text-gray-600 font-medium mb-3">Bank Transfer</p>
          <p className="font-mono text-lg text-gray-900">ES12 3456 7890 1234 5678 9012</p>
        </div>

        <p className="text-gray-600 text-sm italic">
          Alternatively, you can bring a gift card or leave your present at the reception.
        </p>
      </motion.div>
    </div>
  );
}

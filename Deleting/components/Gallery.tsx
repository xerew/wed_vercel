'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { id: 1, title: 'Engagement' },
    { id: 2, title: 'Getting Ready' },
    { id: 3, title: 'First Look' },
    { id: 4, title: 'The Ceremony' },
    { id: 5, title: 'Celebration' },
    { id: 6, title: 'First Dance' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-12 text-center"
      >
        Gallery
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="aspect-square bg-gray-100 border border-gray-200 flex items-center justify-center group hover:border-black transition-colors cursor-pointer"
          >
            <div className="text-center">
              <p className="text-gray-500 group-hover:text-gray-900 transition-colors text-lg font-light">
                {image.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 p-6 bg-gray-50 border border-gray-200 text-center rounded-sm"
      >
        <p className="text-gray-600">Photos coming soon. Check back after the wedding for our complete gallery.</p>
      </motion.div>
    </div>
  );
}

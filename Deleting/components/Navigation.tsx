'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="#" className="text-xl font-semibold text-black">
          A + N
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#about" className="text-sm text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          <Link href="#story" className="text-sm text-gray-700 hover:text-black transition-colors">
            Our Story
          </Link>
          <Link href="#events" className="text-sm text-gray-700 hover:text-black transition-colors">
            Events
          </Link>
          <Link href="#gallery" className="text-sm text-gray-700 hover:text-black transition-colors">
            Gallery
          </Link>
          <Link href="#venue" className="text-sm text-gray-700 hover:text-black transition-colors">
            Venue
          </Link>
          <Link href="#rsvp" className="text-sm text-gray-700 hover:text-black transition-colors">
            RSVP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            <Link href="#about" className="text-sm text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="#story" className="text-sm text-gray-700 hover:text-black transition-colors">
              Our Story
            </Link>
            <Link href="#events" className="text-sm text-gray-700 hover:text-black transition-colors">
              Events
            </Link>
            <Link href="#gallery" className="text-sm text-gray-700 hover:text-black transition-colors">
              Gallery
            </Link>
            <Link href="#venue" className="text-sm text-gray-700 hover:text-black transition-colors">
              Venue
            </Link>
            <Link href="#rsvp" className="text-sm text-gray-700 hover:text-black transition-colors">
              RSVP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

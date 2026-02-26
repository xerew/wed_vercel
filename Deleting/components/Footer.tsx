export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Nikos & Emilia</h3>
            <p className="text-gray-400 font-light">
              Together in love, creating a lifetime of memories.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#countdown" className="hover:text-white transition-colors">Countdown</a></li>
              <li><a href="#details" className="hover:text-white transition-colors">Details</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#rsvp" className="hover:text-white transition-colors">RSVP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4">Contact</h4>
            <p className="text-gray-400 mb-2 font-light">hello@nikosmellia.com</p>
            <p className="text-gray-400 font-light">June 14, 2025</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Nikos & Emilia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


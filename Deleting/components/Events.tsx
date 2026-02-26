export default function Events() {
  const events = [
    {
      time: '16:00',
      title: 'Ceremony',
      location: 'The Grand Chapel'
    },
    {
      time: '17:30',
      title: 'Cocktail Hour',
      location: 'Garden Terrace'
    },
    {
      time: '18:30',
      title: 'Dinner Reception',
      location: 'Main Ballroom'
    },
    {
      time: '20:30',
      title: 'First Dance',
      location: 'Main Ballroom'
    },
    {
      time: '21:00',
      title: 'Dancing & Celebration',
      location: 'Main Ballroom'
    }
  ];

  return (
    <section id="events" className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-serif font-light text-black mb-20 text-center">
          Wedding Day Schedule
        </h2>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <div className="sm:w-24 flex-shrink-0">
                  <p className="text-2xl font-serif text-black">{event.time}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black mb-1">{event.title}</h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

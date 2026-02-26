'use client';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export default function Timeline() {
  const events: TimelineEvent[] = [
    {
      time: '4:00 PM',
      title: 'Ceremony Begins',
      description: 'Say "I do" at the beautiful chapel',
      icon: '💍',
    },
    {
      time: '5:00 PM',
      title: 'Cocktail Hour',
      description: 'Celebrate with drinks and appetizers',
      icon: '🥂',
    },
    {
      time: '6:00 PM',
      title: 'Dinner Service',
      description: 'Enjoy a delicious multi-course meal',
      icon: '🍽️',
    },
    {
      time: '8:00 PM',
      title: 'Toasts & Cake',
      description: 'Heartfelt speeches and cake cutting',
      icon: '🎂',
    },
    {
      time: '9:00 PM',
      title: 'Dancing & Celebration',
      description: 'First dance, dancing, and fun!',
      icon: '💃',
    },
  ];

  return (
    <section id="timeline" className="py-24 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-amber-950 mb-4">Wedding Day Timeline</h2>
          <p className="text-amber-700 text-lg">Saturday, June 14th, 2025</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300"></div>
            <div className="text-amber-600">✦</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 to-amber-100"></div>

          {/* Events */}
          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right">
                  <div className="bg-white p-6 rounded-lg border-2 border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                    <p className="text-amber-600 font-serif text-2xl font-bold mb-2">
                      {event.time}
                    </p>
                    <h3 className="text-2xl font-serif text-amber-950 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-amber-700">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center md:block">
                  <div className="w-16 h-16 bg-amber-100 border-4 border-amber-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0 text-2xl">
                    {event.icon}
                  </div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

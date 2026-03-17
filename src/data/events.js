// Centralized static dataset for all event listings and booking options.
export const events = [
  {
    id: 'mv-101',
    category: 'Movie',
    title: 'Starlight City',
    language: 'English',
    venue: 'CineDome Downtown',
    dateOptions: ['2026-03-05', '2026-03-06', '2026-03-07'],
    timeOptions: ['11:00 AM', '03:30 PM', '08:45 PM'],
    seatTypes: [
      { label: 'Regular', price: 180 },
      { label: 'Premium', price: 280 },
      { label: 'Recliner', price: 420 }
    ],
    duration: '2h 12m',
    rating: '8.4/10',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
    description:
      'A sci-fi drama where a young engineer uncovers a secret power grid beneath the city and must choose between loyalty and truth.'
  },
  {
    id: 'mv-102',
    category: 'Movie',
    title: 'Echoes of Rain',
    language: 'Hindi',
    venue: 'Golden Screen Mall',
    dateOptions: ['2026-03-08', '2026-03-09', '2026-03-10'],
    timeOptions: ['12:15 PM', '05:00 PM', '09:20 PM'],
    seatTypes: [
      { label: 'Regular', price: 150 },
      { label: 'Premium', price: 240 },
      { label: 'Recliner', price: 390 }
    ],
    duration: '2h 05m',
    rating: '8.1/10',
    image:
      'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80',
    description:
      'A heartfelt musical romance that follows two artists reconnecting during monsoon season after a decade apart.'
  },
  {
    id: 'cn-201',
    category: 'Concert',
    title: 'Neon Nights Live',
    language: 'English',
    venue: 'Skyline Arena',
    dateOptions: ['2026-03-12', '2026-03-13'],
    timeOptions: ['06:30 PM', '09:00 PM'],
    seatTypes: [
      { label: 'Silver Zone', price: 899 },
      { label: 'Gold Zone', price: 1499 },
      { label: 'Fan Pit', price: 2299 }
    ],
    duration: '3h 00m',
    rating: '4.7/5',
    image:
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=900&q=80',
    description:
      'An energetic electronic pop concert featuring immersive visuals, live synth sets, and surprise artist collaborations.'
  },
  {
    id: 'cn-202',
    category: 'Concert',
    title: 'Soul Strings Unplugged',
    language: 'Hindi',
    venue: 'Riverfront Amphitheatre',
    dateOptions: ['2026-03-15', '2026-03-16'],
    timeOptions: ['07:00 PM'],
    seatTypes: [
      { label: 'Open Lawn', price: 599 },
      { label: 'Front Rows', price: 1099 },
      { label: 'VIP Lounge', price: 1899 }
    ],
    duration: '2h 30m',
    rating: '4.6/5',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
    description:
      'A stripped-back evening of acoustic melodies and storytelling by award-winning indie vocalists and instrumentalists.'
  },
  {
    id: 'sp-301',
    category: 'Sports',
    title: 'Premier Cricket Clash',
    language: 'English',
    venue: 'National Cricket Ground',
    dateOptions: ['2026-03-18', '2026-03-19'],
    timeOptions: ['04:00 PM', '07:30 PM'],
    seatTypes: [
      { label: 'East Stand', price: 499 },
      { label: 'West Stand', price: 899 },
      { label: 'Corporate Box', price: 2499 }
    ],
    duration: '3h 45m',
    rating: '4.8/5',
    image:
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80',
    description:
      'A high-stakes league face-off featuring top players, halftime entertainment, and an electric stadium atmosphere.'
  },
  {
    id: 'sp-302',
    category: 'Sports',
    title: 'City Marathon Finals',
    language: 'English',
    venue: 'Central Boulevard',
    dateOptions: ['2026-03-22'],
    timeOptions: ['05:30 AM'],
    seatTypes: [
      { label: 'General Access', price: 199 },
      { label: 'Grandstand', price: 499 },
      { label: 'Finish Line Deck', price: 999 }
    ],
    duration: '4h 00m',
    rating: '4.5/5',
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80',
    description:
      'Witness elite runners race through iconic city routes with live commentary, hydration zones, and fan activities.'
  }
];

// Helper for route-based event lookup.
export const getEventById = (eventId) => events.find((event) => event.id === eventId);
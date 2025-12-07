import { Product, ServiceItem, FAQItem, Hours } from './types';

export const INVENTORY: Product[] = [
  {
    id: 'surron-lbx',
    name: 'Sur-Ron Light Bee X',
    brand: 'Sur-Ron',
    condition: 'New',
    price: 4500,
    description: 'The ultimate electric dirt bike. Lightweight, powerful, and ready for any terrain.',
    specs: ['60V Battery', '6kW Peak Power', '45mph Top Speed', 'Range: 50 miles'],
    // Slimmer, black frame electric bike style
    imageUrl: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=800&q=80',
    tags: ['e-bike', 'electric motorcycle', 'surron', 'dirt bike']
  },
  {
    id: 'surron-ultra-bee',
    name: 'Sur-Ron Ultra Bee',
    brand: 'Sur-Ron',
    condition: 'New',
    price: 6500,
    description: 'The middleweight champion. Significantly more power and size than the Light Bee, yet nimble.',
    specs: ['74V 55Ah Battery', '12.5kW Peak Power', '56mph Top Speed', 'Range: 87 miles'],
    // Beefier off-road stance, distinct from light bee
    imageUrl: 'https://images.unsplash.com/photo-1596706782352-73a874776104?auto=format&fit=crop&w=800&q=80',
    tags: ['surron', 'ultra bee', 'mid-size', 'electric dirt bike']
  },
  {
    id: 'talaria-sting-r',
    name: 'Talaria Sting R MX4',
    brand: 'Talaria',
    condition: 'New',
    price: 4800,
    description: 'More power, better suspension. The Sting R is built for the aggressive rider.',
    specs: ['60V 45Ah Battery', '8kW Peak Power', '53mph Top Speed', 'Regenerative Braking'],
    // Aggressive trail riding shot
    imageUrl: 'https://images.unsplash.com/photo-1695642647700-1c64eb3ee2a7?auto=format&fit=crop&w=800&q=80',
    tags: ['ebike', 'talaria', 'mx4', 'electric moto']
  },
  {
    id: 'surron-lbx-used',
    name: 'Sur-Ron Light Bee X (Upgraded)',
    brand: 'Sur-Ron',
    condition: 'Used',
    price: 3800,
    description: 'Pre-owned Sur-Ron with upgraded controller and peg bracket. Serviced by Emotos.',
    specs: ['Aftermarket Controller', 'Pro Taper Bars', 'Low Miles', 'Fresh Tires'],
    // Workshop/Garage aesthetic for used bike
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    tags: ['used e-bike', 'surron', 'modded']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'upgrade',
    title: 'Performance Upgrades',
    description: 'Controller installs (BAC4000/8000, Torp), Battery upgrades (72V), and suspension tuning.',
    priceRange: 'Contact for quote',
    icon: 'Zap'
  },
  {
    id: 'repair',
    title: 'General Repair & Service',
    description: 'Tire changes, belt replacements, brake bleeds, and electrical diagnostics.',
    priceRange: '$80/hr labor',
    icon: 'Wrench'
  },
  {
    id: 'custom',
    title: 'Custom Builds',
    description: 'Full custom builds from frame up. Supermoto conversions and off-road setups.',
    priceRange: 'Variable',
    icon: 'Hammer'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need a license to ride these?",
    answer: "In Texas, laws vary based on how the bike is registered and used. Generally, Sur-Rons and Talarias are sold for off-road use. If registered as a moped or motorcycle, a license is required for street use."
  },
  {
    question: "Do you offer financing?",
    answer: "We work with third-party financing partners. Contact us in store for details."
  },
  {
    question: "Do you buy used e-bikes?",
    answer: "Yes! We occasionally flip used bikes. Bring your bike in for an appraisal if you are looking to sell or trade up."
  },
  {
    question: "Where are you located?",
    answer: "We are located in Grand Prairie, Texas. Check the 'Info' section for details."
  }
];

export const BUSINESS_HOURS: Hours[] = [
  { day: 'Monday - Friday', open: '10:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '10:00 AM', close: '4:00 PM' },
  { day: 'Sunday', open: 'Closed', close: '' },
];
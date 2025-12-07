export interface Product {
  id: string;
  name: string;
  brand: 'Sur-Ron' | 'Talaria' | 'Other';
  condition: 'New' | 'Used';
  price: number;
  description: string;
  specs: string[];
  imageUrl: string;
  tags: string[]; // for SEO/Filtering: e-bike, electric motorcycle, etc.
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Hours {
  day: string;
  open: string;
  close: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

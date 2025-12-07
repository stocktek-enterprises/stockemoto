import React from 'react';
import { SERVICES } from '../constants';
import { Zap, Wrench, Hammer } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Zap': <Zap className="h-8 w-8 text-brand-neon" />,
  'Wrench': <Wrench className="h-8 w-8 text-brand-neon" />,
  'Hammer': <Hammer className="h-8 w-8 text-brand-neon" />
};

const Services: React.FC = () => {
  return (
    <div className="bg-brand-darker py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Service & <span className="text-brand-neon">Upgrades</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Expert maintenance and performance modifications for your e-moto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-brand-gray/20 p-8 rounded-2xl border border-white/5 hover:border-brand-neon/30 transition-colors">
              <div className="bg-brand-darker w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 min-h-[3rem]">{service.description}</p>
              <div className="flex items-center text-sm font-semibold text-brand-neon">
                Starting at: {service.priceRange}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-gray/30 to-brand-darker p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10">
            <Zap className="w-64 h-64 text-brand-neon -mr-16 -mt-16" />
          </div>
          <div className="relative z-10 md:w-2/3">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to go faster?</h3>
            <p className="text-gray-300 mb-6">
              We specialize in 72V battery and aftermarket controller upgrades. 
              Turn your stock Sur-Ron or Talaria into a beast.
            </p>
            <a href="#/contact" className="inline-block bg-brand-neon text-brand-darker font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors">
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

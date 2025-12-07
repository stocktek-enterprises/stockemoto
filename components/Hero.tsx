import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-darker overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1574175688327-14227847c2c6?auto=format&fit=crop&w=1920&q=80" 
          alt="Dirt Bike Action Shot" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          <span className="block text-brand-neon drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">ELECTRIC</span>
          <span className="block">PERFORMANCE</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300">
          DFW's premier dealer for Sur-Ron, Talaria, and high-performance e-bikes. 
          New sales, used inventory, expert service, and upgrades.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/inventory"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-neon hover:bg-brand-neon/90 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            Shop Bikes
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
          >
            Service & Upgrades <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        {/* SEO Keywords hidden in plain sight or small text */}
        <p className="mt-12 text-sm text-gray-500 uppercase tracking-widest">
          Sur-Ron • Talaria • E-Bike • Electric Moto • DFW
        </p>
      </div>
    </div>
  );
};

export default Hero;
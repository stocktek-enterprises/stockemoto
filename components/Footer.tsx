import React from 'react';
import { Bike } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0 group">
            <div className="relative p-2">
                {/* Simulated Wheelie - Steep Rotation */}
                <Bike className="h-10 w-10 text-brand-neon transform -rotate-[45deg] origin-bottom-right transition-transform group-hover:-rotate-[55deg]" />
            </div>
            <span className="font-bold text-xl text-white italic tracking-tighter">EMOTOS<span className="text-brand-neon">DFW</span></span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Emotos DFW. All rights reserved.
          </p>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Sur-Ron, Talaria, and E-Bike Sales & Service in Grand Prairie, Dallas Fort Worth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
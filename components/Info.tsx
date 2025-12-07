import React from 'react';
import { BUSINESS_HOURS, FAQS } from '../constants';
import { MapPin, Clock, HelpCircle } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Hours & Location */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-3">
            <Clock className="text-brand-neon" /> Hours & Location
          </h2>
          
          <div className="bg-brand-gray/20 rounded-2xl p-6 border border-white/10 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Operating Hours</h3>
            <div className="space-y-4">
              {BUSINESS_HOURS.map((item, idx) => (
                <div key={idx} className="flex justify-between text-gray-300">
                  <span className="font-medium">{item.day}</span>
                  <span className={item.open === 'Closed' ? 'text-red-400' : 'text-brand-neon'}>
                    {item.open === 'Closed' ? 'Closed' : `${item.open} - ${item.close}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-gray/20 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="text-brand-neon h-5 w-5" /> Visit Us
            </h3>
            <p className="text-gray-300 mb-4">
              Grand Prairie, Texas<br />
              (Contact us for full address)<br />
              Dallas-Fort Worth Area
            </p>
            {/* Mock Map Placeholder */}
            <div className="w-full h-48 bg-zinc-800 rounded-lg flex items-center justify-center text-gray-500">
              [Google Maps Embed Placeholder: Grand Prairie]
            </div>
          </div>
        </div>

        {/* Right Column: FAQ */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-3">
            <HelpCircle className="text-brand-neon" /> FAQ
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-brand-gray/10 rounded-xl p-6 border border-white/5 hover:bg-brand-gray/20 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
            
            {/* SEO Text Block */}
            <div className="mt-8 p-6 text-sm text-gray-500 bg-brand-darker rounded-xl border border-white/5">
              <p>
                Emotos DFW is your local hub for all things electric moto. Whether you call it an e-bike, ebike, electric dirt bike, or moped, we service and sell the best brands including Sur-Ron and Talaria.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Info;
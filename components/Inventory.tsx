import React from 'react';
import { INVENTORY } from '../constants';
import { Tag } from 'lucide-react';

const Inventory: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Current <span className="text-brand-neon">Inventory</span>
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          New and Used Sur-Ron & Talaria Electric Motorcycles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INVENTORY.map((bike) => (
          <div key={bike.id} className="bg-brand-gray/30 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-neon/50 transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={bike.imageUrl}
                alt={bike.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-brand-darker/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-white border border-white/10">
                {bike.condition}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{bike.name}</h3>
                <span className="text-brand-neon font-bold text-xl">${bike.price.toLocaleString()}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{bike.description}</p>
              
              <div className="space-y-2 mb-6">
                {bike.specs.slice(0, 3).map((spec, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon mr-2"></div>
                    {spec}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                 {bike.tags.map(tag => (
                   <span key={tag} className="text-[10px] uppercase bg-white/5 text-gray-400 px-2 py-0.5 rounded">
                     {tag}
                   </span>
                 ))}
              </div>

              <button className="w-full py-3 bg-white/10 hover:bg-brand-neon hover:text-brand-darker text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                <Tag className="h-4 w-4" />
                Inquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center bg-brand-gray/20 p-8 rounded-2xl border border-white/5">
        <h3 className="text-xl font-bold text-white mb-2">Don't see what you're looking for?</h3>
        <p className="text-gray-400 mb-4">We can source new bikes or help you find a specific used model.</p>
        <a href="#/contact" className="text-brand-neon hover:underline">Contact us today</a>
      </div>
    </div>
  );
};

export default Inventory;

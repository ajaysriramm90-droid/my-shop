import React from 'react';
import { _ } from '@evershop/evershop/lib/locale/translate/_';

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden mb-12 rounded-3xl shadow-2xl mt-4">
      {/* Dynamic Background Image with Zoom Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-left px-8 sm:px-16 w-full max-w-7xl mx-auto flex flex-col justify-center">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase mb-4 animate-bounce">
          {_('New Collection 2026')}
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          {_('Discover Your')}<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {_('True Style')}
          </span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
          {_('Elevate your wardrobe with our premium selection of exclusive, high-quality fashion. Designed for those who demand the best.')}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="/men" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300">
            {_('Shop Men')}
          </a>
          <a href="/women" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full shadow-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
            {_('Shop Women')}
          </a>
          <a href="/kids" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full shadow-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
            {_('Shop Kids')}
          </a>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};

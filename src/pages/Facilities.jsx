import React from 'react';
import { FACILITIES_CATEGORIES } from '../data';
import { Check } from 'lucide-react';

export default function Facilities() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="py-20 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Facilities & Services</h1>
        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-16 text-lg">
           At Hotel Paradise, we provide a wide range of premium facilities to make your stay comfortable and convenient. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FACILITIES_CATEGORIES.map((category, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay - Gradient by default for visibility, Darkens on interaction */}
              <div className={`absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent ${activeIndex === idx ? 'bg-black/80 backdrop-blur-sm' : 'group-hover:bg-black/80 group-hover:backdrop-blur-sm'}`}></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Title - Moves up on interaction */}
                <h3 className={`text-2xl font-bold !text-white mb-2 transform transition-all duration-500 ${activeIndex === idx ? '-translate-y-2' : 'translate-y-0 group-hover:-translate-y-2'}`}>
                  {category.name}
                </h3>

                {/* List - Hidden initially, reveals on interaction */}
                <div className={`transition-all duration-700 delay-100 overflow-hidden ${activeIndex === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100'}`}>
                   <div className="w-12 h-1 bg-amber-500 rounded-full mb-4"></div>
                   <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-200">
                        <Check size={14} className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

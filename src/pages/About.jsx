import React from 'react';
import { HOTEL_INFO } from '../data';

export default function About() {
  return (
    <div className="py-20 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-display font-bold mb-10 text-center text-[var(--text-primary)]">About Our Property</h1>
        
        <div className="prose lg:prose-xl mx-auto text-[var(--text-secondary)] space-y-8">
          <p className="lead text-2xl font-light leading-relaxed text-[var(--text-primary)]">
             {HOTEL_INFO.description}
          </p>
          
          <div className="glass-card p-8 rounded-2xl border border-[var(--text-secondary)]/10">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Commitment</h3>
            <p className="leading-relaxed">
              At Hotel Paradise, we pride ourselves on delivering exceptional value and service. 
              With a 24-hour front desk and high hygiene protocols, your comfort and safety are our top priorities.
              Our guests consistently rate us 9.2/10 for value for money and cleanliness.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Family vacations seeking comfort</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Couples looking for a romantic retreat</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Business travelers needing essentials</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Nature lovers exploring Amboli Ghat</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 mt-8 rounded-r-xl">
            <h4 className="font-bold text-blue-500 mb-2">Health & Safety</h4>
            <p className="text-sm text-[var(--text-primary)] opacity-80">
              In response to global health standards, additional safety and sanitation measures are constantly in effect at this property 
              to ensure the well-being of our guests and staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

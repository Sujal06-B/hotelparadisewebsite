import React from 'react';
import { GALLERY_IMAGES } from '../data';
import { Coffee, Utensils, Clock, Check } from 'lucide-react';

export default function Dining() {
  const diningImage = GALLERY_IMAGES.find(img => img.category === 'Dining') || GALLERY_IMAGES[0];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero */}
      <div className="relative h-[40vh]">
        <img src={diningImage.src} alt="Dining" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-5xl font-display font-bold !text-white drop-shadow-lg text-center px-4">Dining Experience</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
             <h2 className="text-4xl font-display font-bold mb-6 text-[var(--text-primary)]">On-site Restaurant</h2>
             <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-lg">
               The family-friendly restaurant serves authentic Indian cuisine for lunch and dinner. 
               Guests can enjoy a fresh continental breakfast each morning to start their day right.
               Our ambiance is perfect for families and couples alike.
             </p>

             <div className="glass-card p-6 rounded-2xl mb-8 border border-[var(--text-secondary)]/10">
               <h3 className="font-bold text-xl mb-4 flex items-center text-[var(--text-primary)]">
                 <Coffee className="mr-3 text-amber-500" size={24}/> Breakfast Options
               </h3>
               <ul className="space-y-3 text-[var(--text-secondary)]">
                 <li className="flex items-center"><Check size={18} className="text-green-500 mr-2"/> Continental breakfast (included in some rates)</li>
                 <li className="flex items-center"><Check size={18} className="text-green-500 mr-2"/> Optional breakfast: ₹80 per person</li>
               </ul>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="border border-[var(--text-secondary)]/20 p-6 rounded-2xl text-center bg-[var(--bg-secondary)]">
                  <Utensils className="mx-auto mb-3 text-amber-500" size={28} />
                  <div className="font-bold text-lg mb-1">Cuisine</div>
                  <div className="text-sm text-[var(--text-secondary)]">Authentic Indian</div>
                </div>
                <div className="border border-[var(--text-secondary)]/20 p-6 rounded-2xl text-center bg-[var(--bg-secondary)]">
                  <Clock className="mx-auto mb-3 text-amber-500" size={28} />
                  <div className="font-bold text-lg mb-1">Open For</div>
                  <div className="text-sm text-[var(--text-secondary)]">Breakfast • Lunch • Dinner</div>
                </div>
             </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
             <img src="images/792820429.jpg" className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover transform hover:scale-105 transition duration-500" alt="Dining 1" />
             <img src="images/792820421.jpg" className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover md:translate-y-8 transform hover:scale-105 transition duration-500" alt="Dining 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

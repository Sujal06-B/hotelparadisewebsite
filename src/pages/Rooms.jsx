import React from 'react';

import { ROOMS, BOOKING_URL } from '../data';
import { User, Check } from 'lucide-react';

export default function Rooms() {
  return (
    <div className="pb-20 pt-8 bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-display font-bold mb-2">Available Rooms</h1>
        <p className="text-[var(--text-secondary)] mb-8">Select your perfect stay</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6">
            {ROOMS.map((room) => (
              <div key={room.id} className="glass-card rounded-2xl overflow-hidden border border-[var(--text-secondary)]/10">
                <div className="flex flex-col md:flex-row">
                  {/* Image Side */}
                  <div className="md:w-2/5 relative h-64 md:h-auto group cursor-pointer">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                    {room.discount && (
                       <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                         {room.discount}
                       </div>
                    )}
                  </div>
                  
                  {/* Details Side */}
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                         <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">{room.name}</h2>
                         <div className="text-right">
                           <span className="block text-2xl font-bold text-amber-500">₹{room.price}</span>
                           {room.originalPrice && <span className="text-sm text-[var(--text-secondary)] line-through">₹{room.originalPrice}</span>}
                         </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)] mb-6">
                         <span className="flex items-center"><User size={14} className="mr-1" /> Max {room.occupancy} Guests</span>
                         <span>•</span>
                         <span>{room.size}</span>
                         <span>•</span>
                         <span>{room.bed}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {room.amenities.slice(0, 6).map((am, i) => (
                          <span key={i} className="flex items-center text-xs text-[var(--text-secondary)]">
                            <Check size={12} className="mr-2 text-green-500" /> {am}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[var(--text-secondary)]/10">
                      <div className="text-xs text-[var(--text-secondary)]">
                        <span className="block text-green-500 font-medium">Free Cancellation</span>
                        No Prepayment Needed
                      </div>
                      <button 
                        onClick={() => window.open(BOOKING_URL, '_blank')} 
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg hover:shadow-amber-500/20"
                      >
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-[var(--text-secondary)]/10">
                 <h3 className="font-display font-bold mb-4 text-[var(--text-primary)]">Why book with us?</h3>
                 <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                   <li className="flex items-start"><Check size={16} className="text-amber-500 mr-3 mt-0.5" /> Best Price Guarantee</li>
                   <li className="flex items-start"><Check size={16} className="text-amber-500 mr-3 mt-0.5" /> No Booking Fees</li>
                   <li className="flex items-start"><Check size={16} className="text-amber-500 mr-3 mt-0.5" /> Secure Booking</li>
                   <li className="flex items-start"><Check size={16} className="text-amber-500 mr-3 mt-0.5" /> Instant Confirmation</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

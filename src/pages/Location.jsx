import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';
import { HOTEL_INFO } from '../data';

export default function Location() {
  const mapUrl = `https://maps.google.com/maps?q=Super%20Collection%20O%20Ajara%20Amboli%20Ghat&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="bg-[var(--bg-secondary)] py-16 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-display font-bold mb-4 text-[var(--text-primary)]">Location & Surroundings</h1>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto flex items-center justify-center text-lg">
              <MapPin size={24} className="mr-2 text-amber-500" />
              {HOTEL_INFO.address}
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
           {/* Map */}
           <div className="lg:w-2/3 h-[500px] bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-lg relative border border-[var(--text-secondary)]/10">
             <iframe 
               src={mapUrl}
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen="" 
               loading="lazy"
               title="Hotel Location"
               className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
             ></iframe>
           </div>

           {/* Nearby Info */}
           <div className="lg:w-1/3 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-[var(--text-secondary)]/10">
                <h3 className="font-bold text-lg mb-4 border-b border-[var(--text-secondary)]/10 pb-2 text-[var(--text-primary)]">What's nearby</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Lokmanya Tilak Udhyan</span>
                    <span className="text-[var(--text-primary)] font-medium">2.8 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Rajarshi Shahu Udhaan</span>
                    <span className="text-[var(--text-primary)] font-medium">2.9 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Lokamany Tilak Udhyan</span>
                    <span className="text-[var(--text-primary)] font-medium">2.9 km</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[var(--text-secondary)]/10">
                <h3 className="font-bold text-lg mb-4 border-b border-[var(--text-secondary)]/10 pb-2 text-[var(--text-primary)]">Restaurants & cafes</h3>
                <ul className="space-y-4 text-sm">
                   <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Sankalp Restaurant</span>
                    <span className="text-[var(--text-primary)] font-medium">2.9 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Tanvi Restaurant</span>
                    <span className="text-[var(--text-primary)] font-medium">3.2 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Dolphin Restaurant</span>
                    <span className="text-[var(--text-primary)] font-medium">3.4 km</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[var(--text-secondary)]/10">
                <h3 className="font-bold text-lg mb-4 border-b border-[var(--text-secondary)]/10 pb-2 text-[var(--text-primary)]">Closest airports</h3>
                 <ul className="space-y-4 text-sm">
                   <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)] flex items-center"><Navigation size={14} className="mr-2 text-amber-500"/> Belgaum Airport</span>
                    <span className="text-[var(--text-primary)] font-medium">67 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)] flex items-center"><Navigation size={14} className="mr-2 text-amber-500"/> Kolhapur Airport</span>
                    <span className="text-[var(--text-primary)] font-medium">73 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--text-secondary)] flex items-center"><Navigation size={14} className="mr-2 text-amber-500"/> Mopa Airport (Goa)</span>
                    <span className="text-[var(--text-primary)] font-medium">81 km</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-xs text-[var(--text-secondary)] mt-4 text-center opacity-60">
                Distance in property description is calculated using © OpenStreetMap
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

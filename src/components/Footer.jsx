import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { HOTEL_INFO } from '../data';

export default function Footer({ setPage }) {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--text-primary)]/5 text-[var(--text-secondary)] pt-16 pb-8 font-sans transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold font-display tracking-tight text-[var(--text-primary)] mb-4">
              Hotel<span className="text-amber-500">Paradise</span>.
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
              Escape to the heights of luxury. Where nature meets elegance in the heart of Amboli Ghat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--text-secondary)] hover:text-amber-500 transition"><Facebook size={20} /></a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-amber-500 transition"><Instagram size={20} /></a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-amber-500 transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-6 text-[var(--text-primary)] text-lg">Detailed</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setPage('home')} className="hover:text-amber-500 transition">Home</button></li>
              <li><button onClick={() => setPage('rooms')} className="hover:text-amber-500 transition">Suites</button></li>
              <li><button onClick={() => setPage('facilities')} className="hover:text-amber-500 transition">Amenities</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-amber-500 transition">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-6 text-[var(--text-primary)] text-lg">Find Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-3 flex-shrink-0 text-amber-500" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-amber-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-amber-500" />
                <span>info@hotelparadise.com</span>
              </li>
            </ul>
          </div>

          {/* Brand Promise */}
          <div>
            <h4 className="font-display font-bold mb-6 text-[var(--text-primary)] text-lg">Our Promise</h4>
            <div className="glass-card p-6 rounded-xl text-sm border border-[var(--text-primary)]/10">
              <p className="mb-3 text-[var(--text-primary)]">Best Rate Guarantee when you book directly with us.</p>
              <button 
                onClick={() => setPage('rooms')} 
                className="text-amber-500 hover:text-amber-600 font-bold flex items-center"
              >
                Check Availability <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--text-primary)]/5 pt-8 text-center text-[var(--text-secondary)] text-sm">
          <p>&copy; 2026 Hotel Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

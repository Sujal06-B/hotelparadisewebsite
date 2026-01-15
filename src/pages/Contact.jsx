import React from 'react';
import { HOTEL_INFO } from '../data';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will contact you shortly.");
  };

  return (
    <div className="py-20 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-display font-bold mb-10 text-center text-[var(--text-primary)]">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="md:w-1/3 glass-card p-8 rounded-2xl h-fit border border-[var(--text-secondary)]/10">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-amber-500 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Address</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{HOTEL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-amber-500 mr-3" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Phone</h4>
                  <p className="text-[var(--text-secondary)] text-sm">+91 98765 43210</p>
                </div>
              </div>

               <div className="flex items-center">
                <Mail className="text-amber-500 mr-3" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Email</h4>
                  <p className="text-[var(--text-secondary)] text-sm">info@hotelparadise.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--text-secondary)]/10">
               <h4 className="font-bold text-[var(--text-primary)] mb-2">Office Hours</h4>
               <p className="text-green-500 text-sm font-medium">24-hour front desk service available</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 glass-card p-8 rounded-2xl border border-[var(--text-secondary)]/10">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Your Name</label>
                   <input type="text" required className="w-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 rounded-xl p-3 focus:outline-none focus:border-amber-500 text-[var(--text-primary)]" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email Address</label>
                   <input type="email" required className="w-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 rounded-xl p-3 focus:outline-none focus:border-amber-500 text-[var(--text-primary)]" />
                 </div>
               </div>
               
               <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Subject</label>
                  <select className="w-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 rounded-xl p-3 focus:outline-none focus:border-amber-500 text-[var(--text-primary)]">
                    <option>Booking Inquiry</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
               </div>

               <div>
                 <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
                 <textarea required rows="5" className="w-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 rounded-xl p-3 focus:outline-none focus:border-amber-500 text-[var(--text-primary)]"></textarea>
               </div>

               <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition w-full md:w-auto shadow-lg hover:shadow-amber-500/20">
                 Send Message
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

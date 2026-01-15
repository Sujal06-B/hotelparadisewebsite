import React from 'react';
import { HOTEL_INFO, REVIEWS } from '../data';
import { Star, User, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const { ratings } = HOTEL_INFO;

  return (
    <div className="py-20 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-display font-bold mb-10 text-center md:text-left">Guest Reviews</h1>

        <div className="flex flex-col md:flex-row gap-12 mb-12">
           {/* Overall Score */}
           <div className="md:w-1/3 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-500 text-white text-4xl font-bold rounded-2xl mb-4 shadow-lg shadow-amber-500/20">
                {ratings.overall}
              </div>
              <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{ratings.label}</div>
              <p className="text-[var(--text-secondary)] mb-4">Based on {ratings.count} reviews</p>
              <div className="inline-block bg-[var(--text-secondary)]/10 text-[var(--text-secondary)] px-4 py-2 rounded-lg text-sm font-medium">
                We aim for 100% real reviews
              </div>
           </div>

           {/* Categories */}
           <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {Object.entries(ratings.categories).map(([key, val]) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="capitalize font-medium text-[var(--text-secondary)]">{key}</span>
                    <span className="font-bold text-[var(--text-primary)]">{val}</span>
                  </div>
                   <div className="w-full bg-[var(--text-secondary)]/10 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${val * 10}%` }}></div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Filter Section (Visual) */}
        <div className="border-y border-[var(--text-secondary)]/10 py-6 mb-8 flex flex-wrap gap-4">
           {['All reviewers', 'Families', 'Couples', 'Groups of friends', 'Solo travellers'].map(filter => (
             <button key={filter} className="border border-[var(--text-secondary)]/20 px-5 py-2 rounded-full text-sm hover:bg-[var(--text-secondary)]/10 transition text-[var(--text-secondary)]">
               {filter}
             </button>
           ))}
        </div>

        {/* Individual Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-[var(--text-secondary)]/10">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center">
                   <div className="w-10 h-10 bg-[var(--text-secondary)]/10 rounded-full flex items-center justify-center mr-3">
                     <User size={20} className="text-[var(--text-secondary)]" />
                   </div>
                   <div>
                     <div className="font-bold text-[var(--text-primary)]">{review.name}</div>
                     <div className="text-xs text-[var(--text-secondary)]">{review.role}</div>
                   </div>
                 </div>
                 <div className="text-sm text-[var(--text-secondary)]">{review.date}</div>
               </div>

               <div className="flex items-center mb-4">
                 <div className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded mr-3">
                   {review.score}
                 </div>
                 <div className="text-sm font-medium text-[var(--text-primary)]">
                   {review.room}
                 </div>
               </div>
                
               <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-2">"{review.headline}"</h4>
                  <p className="text-[var(--text-secondary)] italic text-sm leading-relaxed">"{review.text}"</p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import { HOTEL_INFO, GALLERY_IMAGES, FACILITIES, REVIEWS, FAQ_ITEMS, FEATURED_SNIPPET } from '../data';
import { Star, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Home({ setPage }) {
  const [showGallery, setShowGallery] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="min-h-screen font-sans selection:bg-amber-500 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative h-screen min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="images/792820431.jpg" 
            alt="Hotel Paradise Exterior" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.95]" 
          />
          {/* Text Contrast Scrim (Left to Right) - Always dark to support white text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:via-black/20"></div>
          
          {/* Theme Transition Fade (Bottom to Top) - Matches theme bg */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:mt-20">
          <div className="hidden lg:flex w-full justify-start">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
              <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase">Gateway to Serenity</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold font-display leading-tight mb-3 md:mb-6 !text-white animate-fade-in-up delay-100 drop-shadow-xl">
            Escape to the <br className="hidden md:block"/>Heights of Luxury
          </h1>
          
          <p className="text-sm md:text-xl text-white max-w-2xl leading-relaxed mb-6 md:mb-10 animate-fade-in-up delay-200 drop-shadow-lg font-medium mx-auto px-4">
            <span className="md:hidden">Your gateway to serenity in the mist-covered peaks of Amboli Ghat. Experience luxury amidst nature.</span>
            <span className="hidden md:inline">{HOTEL_INFO.description}</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <button onClick={() => window.open(BOOKING_URL, '_blank')} className="group relative px-6 py-3 md:px-8 md:py-4 bg-amber-500 text-white rounded-full font-bold overflow-hidden hover:bg-amber-600 transition shadow-lg hover:shadow-amber-500/25">
              <span className="relative z-10 flex items-center">
                Reserve Your Stay <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
              </span>
            </button>
            <button onClick={() => setShowGallery(true)} className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition flex items-center font-medium">
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Narrative & Stats Section */}
      <section className="py-24 relative overflow-hidden bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors duration-300">
         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Where Nature Meets <span className="text-amber-500 italic">Elegance</span>.</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-8">
                Hotel Paradise isn't just a building; it's a curated experience designed to reconnect you with the sublime beauty of Amboli Ghat while wrapping you in modern comfort.
              </p>
              
              <div className="glass p-6 rounded-2xl border-l-4 border-amber-500">
                <p className="text-sm font-medium italic">"{FEATURED_SNIPPET}"</p>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4">
               {HOTEL_INFO.highlights.map((h, i) => (
                 <div key={i} className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                   <h.icon className="w-8 h-8 text-amber-500 mb-4" />
                   <p className="font-medium text-sm">{h.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-2">Visual Journeys</h2>
              <p className="text-[var(--text-secondary)]">Glimpses of paradise</p>
            </div>
             <button onClick={() => setShowGallery(true)} className="text-amber-500 hover:text-amber-600 flex items-center transition font-medium">View All <ArrowRight className="ml-2 w-4 h-4" /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[250px] md:auto-rows-auto md:h-[600px]">
             {/* Large Main item */}
             <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl cursor-pointer" onClick={() => setShowGallery(true)}>
               <img src={GALLERY_IMAGES[2].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                 <h3 className="text-xl font-bold text-white">Lobby & Lounge</h3>
               </div>
             </div>
             
             {/* Secondary items */}
             <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer" onClick={() => setShowGallery(true)}>
                <img src={GALLERY_IMAGES[0].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur border border-white/20">Exterior</div>
             </div>
             <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer" onClick={() => setShowGallery(true)}>
                <img src={GALLERY_IMAGES[3].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur border border-white/20">Suites</div>
             </div>
             
             {/* Wide bottom item */}
             <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer" onClick={() => setShowGallery(true)}>
                <img src={GALLERY_IMAGES[6].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur border border-white/20">Fine Dining</div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Interactivity */}
      <section className="py-24 bg-[var(--bg-secondary)] transition-colors duration-300">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-display font-bold mb-16 text-center text-[var(--text-primary)]">Curated Amenities</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {FACILITIES.map((fac, idx) => (
               <div key={idx} className="group glass-card p-8 rounded-3xl cursor-pointer hover:bg-[var(--bg-primary)] transition-all duration-500 border border-[var(--text-secondary)]/10">
                 <div className="w-14 h-14 bg-[var(--bg-primary)] rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all duration-300">
                   <fac.icon size={28} />
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{fac.name}</h3>
                 <p className="text-[var(--text-secondary)] text-sm transition-all duration-500 ease-in-out opacity-100 max-h-20 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-20">
                   Experience world-class {fac.name.toLowerCase()} designed for your ultimate comfort.
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Hero Testimonial */}
      <section className="py-24 relative bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
         <div className="absolute inset-0 bg-amber-500/5 skew-y-3 transform origin-bottom-right z-0"></div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <Star className="w-12 h-12 text-amber-500 mx-auto mb-8 fill-current" />
            <blockquote className="text-3xl md:text-5xl font-display font-medium leading-normal mb-8 text-[var(--text-primary)]">
              "{REVIEWS[0].text}"
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-amber-500 rounded-full mb-4"></div>
              <p className="font-bold text-lg">{REVIEWS[0].name}</p>
              <p className="text-amber-500 text-sm">{REVIEWS[0].headline}</p>
            </div>
         </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[var(--bg-secondary)] transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--text-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="glass rounded-xl overflow-hidden border border-[var(--text-secondary)]/10">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[var(--bg-primary)]/50 transition text-[var(--text-primary)]"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <ChevronRight className={`transform transition-transform duration-300 ${activeFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out px-6 ${activeFaq === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                  <p className="text-[var(--text-secondary)]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {showGallery && <ImageGallery images={GALLERY_IMAGES} onClose={() => setShowGallery(false)} />}
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-amber-500 text-white shadow-lg z-40 transition-all duration-300 hover:scale-110 hover:bg-amber-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <ArrowUpRight size={24} className="-rotate-45" />
    </button>
  );
}


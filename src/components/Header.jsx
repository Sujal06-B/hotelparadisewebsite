import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Header({ currentPage, setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggle Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = ['Home', 'Rooms', 'Facilities', 'Dining', 'Contact'];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold font-display tracking-tight cursor-pointer flex items-center" 
            onClick={() => setPage('home')}
          >
            <span className={(scrolled || currentPage !== 'home') ? 'text-[var(--text-primary)]' : 'text-white dark:text-white'}>
              Hotel
            </span>
            <span className="text-amber-500 italic">Paradise</span>.
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => setPage(item.toLowerCase())}
                className={`group relative text-sm font-medium transition-colors hover:text-amber-500 ${
                  (scrolled || currentPage !== 'home') ? 'text-[var(--text-primary)]' : 'text-white/90 hover:text-white dark:text-gray-200'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${(scrolled || currentPage !== 'home') ? 'hover:bg-gray-100 dark:hover:bg-white/10 text-[var(--text-primary)]' : 'text-white hover:bg-white/10'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={() => window.open(BOOKING_URL, "_blank")}
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-md"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${(scrolled || currentPage !== 'home') ? 'text-[var(--text-primary)]' : 'text-white'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${(scrolled || currentPage !== 'home') ? 'text-[var(--text-primary)]' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-[var(--bg-primary)] transform transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button 
            key={item}
            onClick={() => { setPage(item.toLowerCase()); setIsOpen(false); }}
            className="text-2xl font-display font-medium text-[var(--text-primary)] py-4 border-b border-[var(--text-secondary)]/10 text-left"
          >
            {item}
          </button>
        ))}
         <button 
            onClick={() => window.open("https://www.booking.com/hotel/in/oyo-73079-paradise.en-gb.html?aid=2127562&label=metagha-link-MRIN-hotel-15330350_dev-desktop_los-1_bw-7_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260122_ppt-GBd&sid=00e67883849ba1932122fd822070391c&all_sr_blocks=1533035001_424836970_2_2_0&checkin=2026-01-22&checkout=2026-01-23&dest_id=15330350&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1533035001_424836970_2_2_0&hpos=1&map=1&matching_block_id=1533035001_424836970_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1533035001_424836970_2_2_0__105875&srepoch=1768477851&srpvid=dab55345b8b40813&type=total&ucfs=1&#map_opened", "_blank")}
            className="mt-8 bg-amber-500 text-white py-4 rounded-xl font-bold text-lg w-full shadow-lg"
          >
            Book Your Stay
          </button>
      </div>
    </>
  );
}

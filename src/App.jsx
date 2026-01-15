import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import Dining from './pages/Dining';
import Location from './pages/Location';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'rooms': return <Rooms />;
      case 'facilities': return <Facilities />;
      case 'dining': return <Dining />;
      case 'location': return <Location />;
      case 'reviews': return <Reviews />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className={`flex-grow ${currentPage === 'home' ? '' : 'pt-24'}`}>
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}

export default App;

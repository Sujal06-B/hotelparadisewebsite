import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery({ images, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex flex-col items-center justify-center backdrop-blur-sm">
      <button 
        onClick={onClose} 
        className="fixed top-6 right-6 z-[120] text-white bg-black/60 p-4 rounded-full hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg border border-white/10"
        aria-label="Close Gallery"
      >
        <X size={28} />
      </button>

      <div className="relative w-full max-w-5xl h-[80vh] px-12 flex items-center justify-center">
        <button onClick={prevImage} className="absolute left-4 text-white hover:bg-white/10 p-2 rounded-full transition">
          <ChevronLeft size={48} />
        </button>
        
        <img 
          src={images[currentIndex].src} 
          alt={`Gallery ${currentIndex + 1}`} 
          className="max-h-full max-w-full object-contain" 
        />
        
        <button onClick={nextImage} className="absolute right-4 text-white hover:bg-white/10 p-2 rounded-full transition">
          <ChevronRight size={48} />
        </button>
      </div>

      <div className="mt-4 text-white font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      <div className="mt-4 flex space-x-2 overflow-x-auto max-w-2xl px-4 scrollbar-hide">
        {images.map((img, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
              currentIndex === idx ? 'border-white' : 'border-transparent opacity-50'
            }`}
          >
            <img src={img.src} alt="Thumbnail" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

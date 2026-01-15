import React, { useState } from 'react';
import { Calendar, User, Search } from 'lucide-react';

export default function BookingWidget({ className = "" }) {
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showguestMenu, setShowGuestMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${dates.checkIn} to ${dates.checkOut}, ${guests.adults} Adults, ${guests.children} Children`);
    // In real app, redirect to rooms page with params
  };

  return (
    <div className={`bg-secondary-gold p-1 rounded-lg shadow-xl ${className} bg-[#FEBB02]`}>
      <form onSubmit={handleSearch} className="bg-white p-4 rounded grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        
        {/* Check In */}
        <div className="flex flex-col">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="date" 
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={dates.checkIn}
              onChange={(e) => setDates({...dates, checkIn: e.target.value})}
              required
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex flex-col">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="date" 
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={dates.checkOut}
              onChange={(e) => setDates({...dates, checkOut: e.target.value})}
              required
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative flex flex-col">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Guests</label>
          <button 
            type="button"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-left flex items-center bg-white"
            onClick={() => setShowGuestMenu(!showguestMenu)}
          >
            <User className="absolute left-3 text-gray-400" size={18} />
            <span className="truncate text-sm text-gray-700">
              {guests.adults} adults · {guests.children} children · {guests.rooms} room
            </span>
          </button>

          {showguestMenu && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl border border-gray-200 mt-2 p-4 z-20 rounded min-w-[250px]">
              {['adults', 'children', 'rooms'].map((type) => (
                <div key={type} className="flex justify-between items-center mb-3 last:mb-0">
                  <span className="capitalize text-sm font-medium">{type}</span>
                  <div className="flex items-center space-x-3">
                    <button 
                      type="button"
                      className="w-8 h-8 rounded border border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-50"
                      onClick={() => setGuests({...guests, [type]: Math.max(0, guests[type] - 1)})}
                    >
                      -
                    </button>
                    <span className="w-4 text-center">{guests[type]}</span>
                    <button 
                      type="button"
                      className="w-8 h-8 rounded border border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-50"
                      onClick={() => setGuests({...guests, [type]: guests[type] + 1})}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Btn */}
        <button 
          type="submit" 
          className="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 transition flex items-center justify-center text-lg h-[42px]"
        >
          Check Availability
        </button>

      </form>
    </div>
  );
}

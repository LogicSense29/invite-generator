import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

const GuestListModal = ({ onClose }) => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/guests`);
        if (response.ok) {
          const data = await response.json();
          setGuests(data);
        }
      } catch (error) {
        console.error("Failed to fetch guests", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-[#1a1a1a] border border-gold-500/30 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gold-900/10">
          <h2 className="text-gold-500 font-serif text-xl tracking-widest uppercase">Guest List</h2>
          <button 
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {loading ? (
            <div className="text-center text-white/30 py-8 animate-pulse">Loading Access List...</div>
          ) : guests.length === 0 ? (
            <div className="text-center text-white/30 py-8">No guests generated yet.</div>
          ) : (
            guests.map((guest) => (
              <div 
                key={guest.key} 
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  guest.scanned 
                    ? 'bg-emerald-900/20 border-emerald-500/30' 
                    : 'bg-white/5 border-white/5'
                }`}
              >
                <div>
                  <p className={`font-medium ${guest.scanned ? 'text-emerald-400' : 'text-white'}`}>
                    {guest.guest_name}
                  </p>
                  <p className="text-[10px] text-white/30 font-mono mt-1">
                    {guest.key}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {guest.scanned ? (
                    <span className="flex items-center gap-1 text-emerald-500 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Scanned
                    </span>
                  ) : (
                    <span className="text-white/20 text-xs font-medium uppercase tracking-wider px-2">
                      Pending
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Stats */}
        <div className="p-3 bg-black/40 border-t border-white/10 text-center">
            <p className="text-xs text-gold-500/60 font-mono">
                Total: {guests.length} • Scanned: {guests.filter(g => g.scanned).length}
            </p>
        </div>
      </div>
    </div>
  );
};

export default GuestListModal;

import React from 'react';

const InvitationCard1 = ({ attendeeName }) => {
  return (
    <div className="max-w-4xl w-full relative group animate-fade-in mx-auto">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 via-ochre/20 to-gold-600/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      
      {/* The Card */}
      <div className="relative bg-[#0d1a14] border-2 border-gold-500/30 rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* Border Pattern Header */}
        <div className="h-6 w-full african-pattern opacity-40 border-b border-gold-500/20"></div>

        <div className="p-8 md:p-20 relative">
          {/* Elegant Corner Motifs */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold-500/40 rounded-tl-2xl"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold-500/40 rounded-tr-2xl"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold-500/40 rounded-bl-2xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold-500/40 rounded-br-2xl"></div>

          <div className="relative z-10">
            <div className="mb-12 text-center">
              <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full text-gold-400 text-xs tracking-[0.3em] uppercase mb-8 font-sans">
                Exclusive Invitation
              </div>
              
              <h1 className="text-5xl md:text-8xl mb-6 gold-gradient font-bold leading-none tracking-tight">
                GUEST <br/> CONFIRMED
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gold-500/30"></div>
                <span className="text-ochre font-serif text-2xl md:text-4xl italic px-4">Celebrating 50 Years</span>
                <div className="h-[1px] w-12 bg-gold-500/30"></div>
              </div>
            </div>

            {/* Guest Profile Section */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 mb-12 gold-glow text-center">
              <span className="text-champagne/40 text-xs uppercase tracking-[0.4em] block mb-4 font-sans">Honored Guest</span>
              <h2 className="text-4xl md:text-7xl text-white font-serif font-bold leading-tight drop-shadow-lg">
                {attendeeName}
              </h2>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-12 text-champagne/70 font-serif text-lg md:text-xl border-t border-white/5 pt-12 text-center md:text-left">
              <div className="space-y-3">
                <p className="text-gold-500/60 uppercase tracking-[0.3em] text-[10px] font-sans">The Occasion</p>
                <p className="text-white font-semibold">Tuesday, 13th January</p>
                <p className="italic">Doors open at 5:00 PM</p>
              </div>
              <div className="space-y-3">
                <p className="text-gold-500/60 uppercase tracking-[0.3em] text-[10px] font-sans">The Venue</p>
                <p className="text-white font-semibold">JAGZ Hall</p>
                <p className="italic">Ibadan, Nigeria</p>
              </div>
            </div>

            <div className="mt-10 lg:mt-20 flex flex-col items-center">
              <div className="w-12 h-12 border border-gold-500/20 rounded-full flex items-center justify-center mb-6">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-champagne/20 text-[9px] uppercase tracking-[0.5em] font-sans">
                {/* ★ A Timeless Afro-Luxury Legacy ★ */}
                ★ IYKE AGWU 50TH BIRTHDAY ★
              </p>
            </div>
          </div>
        </div>
        
        {/* Border Pattern Footer */}
        <div className="h-4 w-full african-pattern opacity-20 mt-auto border-t border-gold-500/10"></div>
      </div>
    </div>
  );
};

export default InvitationCard1;

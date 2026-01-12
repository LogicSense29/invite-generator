import React from 'react';

const InvitationCard6 = ({ attendeeName }) => {
  return (
    <div className="max-w-4xl w-full relative group animate-fade-in mx-auto">
      {/* Outer Glow Effect - Warm Gold for Light Theme */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-300/40 via-gold-200/40 to-gold-300/40 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      
      {/* The Card - Cream/Light Background */}
      <div className="relative bg-[#FFFAF0] border-2 border-gold-500/30 rounded-[2rem] overflow-hidden shadow-2xl text-emerald-dark">
        
        {/* Border Pattern Header - Darker Pattern for Contrast */}
        <div className="h-6 w-full african-pattern opacity-10 border-b border-gold-500/20 filter invert"></div>

        <div className="p-8 md:p-20 relative">
          {/* Elegant Corner Motifs */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold-600/40 rounded-tl-2xl"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold-600/40 rounded-tr-2xl"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold-600/40 rounded-bl-2xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold-600/40 rounded-br-2xl"></div>

          <div className="relative z-10">
            <div className="mb-12 text-center">
              <div className="inline-block px-4 py-1 border border-gold-600/30 rounded-full text-gold-700 text-xs tracking-[0.3em] uppercase mb-8 font-sans font-semibold">
                Exclusive Invitation
              </div>
              
              <h1 className="text-5xl md:text-8xl mb-6 text-gold-700 font-bold leading-none tracking-tight drop-shadow-sm font-serif">
                GOLDEN <br/> JUBILEE
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gold-600/30"></div>
                <span className="text-emerald-dark/80 font-serif text-2xl md:text-4xl italic px-4">Celebrating 50 Years</span>
                <div className="h-[1px] w-12 bg-gold-600/30"></div>
              </div>
            </div>

            {/* Guest Profile Section - Light Glass Effect */}
            <div className="bg-white/40 backdrop-blur-sm border border-gold-900/5 rounded-2xl p-8 mb-12 shadow-lg text-center">
              <span className="text-gold-800/60 text-xs uppercase tracking-[0.4em] block mb-4 font-sans font-semibold">Honored Guest</span>
              <h2 className="text-4xl md:text-7xl text-emerald-dark font-serif font-bold leading-tight">
                {attendeeName}
              </h2>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-emerald-dark/80 font-serif text-lg md:text-xl border-t border-gold-900/10 pt-12 text-center md:text-left">
              <div className="space-y-3">
                <p className="text-gold-700/80 uppercase tracking-[0.3em] text-[10px] font-sans font-bold">The Occasion</p>
                <p className="text-emerald-dark font-bold">Saturday, 14th June</p>
                <p className="italic">Doors open at 6:00 PM</p>
              </div>
              <div className="space-y-3">
                <p className="text-gold-700/80 uppercase tracking-[0.3em] text-[10px] font-sans font-bold">The Venue</p>
                <p className="text-emerald-dark font-bold">JAGZ Hall</p>
                <p className="italic">Lagos</p>
                <p className="text-xs uppercase tracking-widest text-[#995c14] mt-2 font-bold">Dress Code: All White</p>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center">
              <div className="w-12 h-12 border border-gold-600/20 rounded-full flex items-center justify-center mb-6">
                <div className="w-2 h-2 bg-gold-600 rounded-full animate-pulse"></div>
              </div>
              <p className="text-emerald-dark/30 text-[9px] uppercase tracking-[0.5em] font-sans">
                ★ A Timeless Afro-Luxury Legacy ★
              </p>
            </div>
          </div>
        </div>
        
        {/* Border Pattern Footer */}
        <div className="h-4 w-full african-pattern opacity-10 mt-auto border-t border-gold-500/10 filter invert"></div>
      </div>
    </div>
  );
};

export default InvitationCard6;

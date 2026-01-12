import React from 'react';

const InvitationCard2 = ({ attendeeName }) => {
  return (
    <div className="max-w-4xl w-full relative group animate-fade-in mx-auto">
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gold-500/10 rounded-[2.5rem] blur-3xl opacity-50"></div>
      
      <div className="relative bg-[#080808] border border-gold-500/20 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col min-h-[700px]">
        
        {/* TOP PATTERN SECTION */}
        <div 
          className="h-32 w-full relative flex items-center justify-center border-b border-gold-500/10"
          style={{ 
            backgroundImage: 'url("/assets/pattern.png")',
            backgroundSize: '200px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/10 via-[#080808]/60 to-[#080808]"></div>
          <div className="relative z-10 px-6 py-1 bg-gold-600 rounded-full text-black text-[10px] font-bold uppercase tracking-[0.5em]">
            Royal Invitation
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-grow p-8 md:p-16 flex flex-col items-center justify-center relative">
          {/* Subtle Mask Overlay */}
          <div className="absolute inset-0 opacity-5 african-pattern pointer-events-none"></div>

          <div className="relative z-10 text-center space-y-8 w-full">
            <div className="space-y-2">
              <p className="text-gold-500 font-serif italic text-2xl">The Golden</p>
              <h1 className="text-6xl md:text-9xl font-bold gold-gradient tracking-tighter leading-none">
                50th
              </h1>
              <p className="text-ochre uppercase tracking-[0.8em] text-xs font-sans font-semibold">Celebration</p>
            </div>

            <div className="w-16 h-[2px] bg-gold-500/50 mx-auto"></div>

            <div className="space-y-4">
              <p className="text-champagne/40 text-[10px] uppercase tracking-[0.6em font-sans]">You are invited</p>
              <div className="relative inline-block py-2">
                <h2 className="text-4xl md:text-7xl text-white font-serif font-bold relative z-10">
                  {attendeeName}
                </h2>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gold-600 rounded-full blur-[1px]"></div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-4 max-w-sm mx-auto text-center font-serif text-champagne/60 italic text-sm md:text-base border-t border-white/5">
              <div className="border-r border-white/10 pr-2">
                <p className="text-gold-500/80 not-italic uppercase text-[8px] tracking-widest mb-1">When</p>
                <p>June 14</p>
                <p>6 PM</p>
              </div>
              <div className="pl-2">
                <p className="text-gold-500/80 not-italic uppercase text-[8px] tracking-widest mb-1">Where</p>
                <p>Heritage Hall</p>
                <p>Lagos</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PATTERN SECTION */}
        <div 
          className="h-32 w-full relative mt-auto border-t border-gold-500/10"
          style={{ 
            backgroundImage: 'url("/assets/pattern.png")',
            backgroundSize: '200px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 via-[#080808]/70 to-[#080808]"></div>
          <div className="absolute inset-0 flex items-center justify-center px-8">
             <span className="text-gold-500/30 text-[9px] uppercase tracking-[1em] font-sans">Timeless Legacy</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvitationCard2;

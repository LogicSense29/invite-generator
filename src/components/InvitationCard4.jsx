import React from 'react';

const InvitationCard4 = ({ attendeeName }) => {
  return (
    <div className="max-w-4xl w-full relative group animate-fade-in mx-auto">
      {/* Outer Shadow */}
      <div className="absolute -inset-2 bg-black/50 rounded-[20px] blur-xl opacity-80"></div>
      
      <div className="relative bg-[#050505] rounded-[20px] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-gold-900/30">
        
        {/* LEFT ART SECTION (Swirls) */}
        <div 
          className="w-full md:w-[35%] h-64 md:h-auto relative"
          style={{ 
            backgroundImage: 'url("/assets/gold-swirl.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        >
          {/* Overlay to blend edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] md:hidden"></div>
          
          <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-80">
             <div className="w-12 h-12 border-l border-t border-gold-400/50 rounded-tl-xl"></div>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full md:w-[65%] p-8 md:p-16 flex flex-col justify-center text-left relative">
           {/* Decor Elements */}
           <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold-500/20 rounded-tr-xl"></div>
           <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold-500/20 rounded-br-xl"></div>

           <div className="space-y-8 relative z-10 pl-4 md:pl-8">
              <div className="mb-10">
                <p className="text-gold-300/60 font-serif tracking-[0.2em] text-[10px] uppercase mb-4 transform translate-x-1">You are invited to a</p>
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl text-white font-serif font-thin leading-[0.85] tracking-tight">
                    <span className="block text-gold-400 mb-2 italic pr-4">Surprise</span>
                    <span className="block text-8xl md:text-[10rem] font-medium text-white tracking-tighter gold-gradient mix-blend-overlay opacity-90">50<sup className="text-4xl md:text-6xl align-top ml-2 font-light text-gold-200">th</sup></span>
                    <span className="block font-light text-3xl md:text-4xl text-gold-100/90 tracking-wide mt-2">Birthday Party</span>
                  </h2>
                </div>
              </div>

              <div className="py-8 border-t border-gold-500/10 border-b border-gold-500/10 my-10 relative">
                 <div className="absolute top-0 left-0 w-8 h-[1px] bg-gold-500"></div>
                 <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-gold-500"></div>
                 
                 <p className="text-gold-500/50 text-[9px] uppercase tracking-[0.6em] mb-4 text-center md:text-left">Honoring</p>
                 <h1 className="text-4xl md:text-6xl text-white font-serif font-medium leading-tight tracking-wide text-center md:text-left">
                   {attendeeName}
                 </h1>
              </div>

              <div className="grid grid-cols-2 gap-12 text-champagne/70 font-serif font-light text-sm md:text-base">
                <div className="space-y-1">
                   <p className="text-gold-500/40 text-[9px] uppercase tracking-[0.3em] mb-2">Date</p>
                   <p className="text-2xl text-white">June 14th</p>
                   <p className="text-lg italic text-gold-200/60">Saturday</p>
                   <p className="text-xs tracking-widest mt-1 opacity-50">AT 6:00 PM</p>
                </div>
                <div className="space-y-1">
                   <p className="text-gold-500/40 text-[9px] uppercase tracking-[0.3em] mb-2">Location</p>
                   <p className="text-xl text-white">Royal Heritage Hall</p>
                   <p className="text-sm opacity-60">Victoria Island</p>
                   <p className="text-xs tracking-widest mt-1 opacity-40">LAGOS</p>
                </div>
              </div>

              <div className="mt-12 pt-6">
                 <p className="text-gold-500/30 text-[8px] uppercase tracking-[0.8em] font-sans">
                   Golden Jubilee Celebration
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default InvitationCard4;

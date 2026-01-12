import React from 'react';

const InvitationCard7 = ({ attendeeName }) => {
  return (
    <div className="max-w-xl w-full relative bg-[#F9F9F9] shadow-2xl overflow-hidden animate-fade-in mx-auto" style={{ aspectRatio: '1/1.5' }}>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" 
          //  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
           >
      </div>

      {/* Top Left Decoration - Gold & Black Swirls */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none z-0">
          <svg viewBox="0 0 500 500" className="w-full h-full opacity-90">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#f3e5ab" />
                <stop offset="100%" stopColor="#aa6c39" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Black strokes */}
            <path d="M-100,-50 C-50,150 150,50 250,250 C300,350 100,450 -100,300 Z" fill="#1a1a1a" opacity="0.8" />
            <path d="M-50,-20 C50,100 200,-50 350,100 L0,0 Z" fill="#000" opacity="0.9" />
            
            {/* Gold strokes */}
            <path d="M-20,50 C100,150 200,50 350,180 C400,220 200,300 -50,200" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
            <path d="M-50,0 C50,80 250,20 400,200 L-50,-50" fill="url(#goldGrad)" opacity="0.6"  />
            <path d="M0,0 C100,120 250,50 450,250 L0,0" fill="url(#goldGrad)" opacity="0.4" />
            
            {/* Glitter particles (circles) */}
            <circle cx="150" cy="100" r="2" fill="#daa520" />
            <circle cx="200" cy="80" r="3" fill="#ffd700" />
            <circle cx="280" cy="150" r="2" fill="#f0e68c" />
            <circle cx="100" cy="180" r="2" fill="#daa520" />
          </svg>
      </div>
      
      {/* Bottom Right Decoration - Mirrored Style */}
      <div className="absolute bottom-0 right-0 w-[80%] sm:w-full h-1/2 overflow-hidden pointer-events-none z-0 transform rotate-180">
          <svg viewBox="0 0 500 500" className="w-full h-full opacity-90">
             {/* Black strokes */}
            <path d="M-100,-50 C-50,150 150,50 250,250 C300,350 100,450 -100,300 Z" fill="#1a1a1a" opacity="0.8" />
             {/* Gold strokes */}
            <path d="M-20,50 C100,150 200,50 350,180 C400,220 200,300 -50,200" stroke="url(#goldGrad)" strokeWidth="4" fill="none" />
            <path d="M-50,0 C50,80 250,20 400,200 L-50,-50" fill="url(#goldGrad)" opacity="0.6" />
             {/* Glitter */}
            <circle cx="200" cy="200" r="2" fill="#daa520" />
            <circle cx="300" cy="100" r="3" fill="#ffd700" />
          </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        
        {/* Header */}
        <p className="font-serif italic text-gold-900/90 lg:mb-6 text-sm md:text-base tracking-wide">
          {/* Please join us in honoring {attendeeName} */}
          Guest Confirmed
        </p>

        {/* Main Title 50 wrapped */}
        <div className="relative mb-0 leading-none">
          <div className="flex items-start justify-center text-gold-600 drop-shadow-sm">
            <span className="font-serif text-[120px] md:text-[180px] leading-none" style={{ background: 'linear-gradient(135deg, #cf9f46, #eebb5c, #b4832ebd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              50
            </span>
            <span className="font-serif text-4xl md:text-6xl mt-8 ml-0 text-gold-700">th</span>
          </div>
        </div>

        {/* Birthday Script */}
        <h2 className="font-script text-6xl md:text-8xl text-gold-800 -mt-4 mb-8 transform -rotate-2 relative z-10" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          Birthday!
        </h2>

        {/* Subtext */}
        <p className="font-sans uppercase text-[10px] md:text-xs tracking-[0.3em] text-gray-600 mb-5 lg:mb-10 font-semibold">
          IT'S A MILESTONE WORTH CELEBRATING!
        </p>

        {/* Date Section */}
        <div className="flex items-center justify-center w-full max-w-xs mb-5 lg:mb-10 relative">
          <div className="border-t border-gold-400/50 flex-grow mx-2"></div>
          <div className="flex items-center gap-6 px-2">
            <span className="font-serif text-xl text-gray-600">January</span>
            <span className="font-serif text-5xl text-gold-700">13</span>
            <span className="font-serif text-xl text-gray-600">Tuesday</span>
          </div>
          <div className="border-t border-gold-400/50 flex-grow mx-2"></div>
        </div>

        {/* Location & Time */}
        <div className="space-y-4 mb-10">
          <p className="font-serif italic text-gold-800 uppercase tracking-widest text-xs">LOCATION:</p>
          <div className="font-serif text-gold-800 text-xl md:text-2xl tracking-wide uppercase">
            THE JAGZ HALL :
          </div>
          <p className="font-serif text-gold-800 text-lg">Time: 17:00pm</p>
        </div>

        {/* Footer / Dress Code */}
        <div className="mt-auto">
             <div className="flex items-center justify-center gap-2 text-gold-500/60 mb-2">
                 <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                 <div className="w-2 h-2 rotate-45 border border-gold-400"></div>
                 <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
             </div>
             <p className="font-serif text-gold-900 uppercase tracking-widest text-xs mb-1">DRESS CODE:</p>
             <p className="font-serif text-2xl text-gold-700 italic">All White</p>
               <div className="flex items-center justify-center gap-2 text-gold-500/60 mt-2">
                 <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                 <div className="w-1 h-1 rotate-45 bg-gold-400"></div>
                 <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
             </div>
        </div>

      </div>
      
       {/* Inner Border Line */}
      <div className="absolute inset-4 border border-gold-500/30 rounded pointer-events-none"></div>
       <div className="absolute inset-5 border border-gold-500/10 rounded pointer-events-none"></div>

    </div>
  );
};

export default InvitationCard7;

import React from 'react';

const InvitationCard5 = ({ attendeeName }) => {
  return (
    <div className="max-w-4xl w-full relative group animate-fade-in mx-auto text-[#634433]">
      {/* Outer Glow - Subtle Luxury Champagne */}
      <div className="absolute -inset-2 bg-gold-200/40 rounded-[10px] blur-2xl opacity-60"></div>
      
      {/* Main Card Container */}
      <div className="relative bg-[#FFFAF0] rounded-[4px] shadow-2xl overflow-hidden min-h-screen md:min-h-[750px] w-full flex flex-col items-center justify-center p-4 md:p-12">
        
        {/* CSS-Generated Luxury Paper Texture + Damask Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.6'%3E%3Cpath d='M40 40c0-8.8-7.2-16-16-16S8 31.2 8 40s7.2 16 16 16 16-7.2 16-16zm0 0c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM0 0c0 8.8 7.2 16 16 16S32 8.8 32 0 24.8-16 16-16 0-8.8 0 0zm80 0c0 8.8-7.2 16-16 16S48 8.8 48 0s7.2-16 16-16 16 7.2 16 16zm0 80c0 8.8-7.2 16-16 16S48 88.8 48 80s7.2-16 16-16 16 7.2 16 16zM0 80c0 8.8 7.2 16 16 16S32 88.8 32 80s-7.2-16-16-16S0 71.2 0 80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}></div>
        <div className="absolute inset-0 opacity-60 pointer-events-none mix-blend-overlay"
             style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
                filter: 'contrast(170%) brightness(100%)'
             }}></div>

        {/* PURE CSS/SVG GOLD FOIL BORDER */}
        <div className="absolute inset-4 md:inset-8 border-4 border-transparent pointer-events-none"
             style={{
               borderImage: 'linear-gradient(45deg, #bf7613, #ffd054, #bf7613, #ffd054, #bf7613) 1',
               maskImage: 'linear-gradient(black, black)',
             }}>
           {/* Inner Border Line */}
           <div className="absolute inset-1 border border-[#bf7613]/30"></div>
           
           {/* Corner Ornaments (SVG) - KEEPING SAME SVG CODE AS BEFORE */}
           {/* Top Left */}
           <svg className="absolute -top-2 -left-2 w-16 h-16 md:w-24 md:h-24 text-[#bf7613]" viewBox="0 0 100 100" fill="none">
             <path d="M2 2 L98 2 M2 2 L2 98" stroke="url(#goldGrad)" strokeWidth="2" />
             <path d="M10 10 Q 50 10 50 50 Q 10 50 10 10" stroke="url(#goldGrad)" strokeWidth="1" fill="none"/>
             <path d="M10 10 L 30 10 L 30 30 L 10 30 Z" fill="url(#goldGrad)" opacity="0.2"/>
             <circle cx="2" cy="2" r="3" fill="#ffd054" />
           </svg>
           {/* Top Right */}
           <svg className="absolute -top-2 -right-2 w-16 h-16 md:w-24 md:h-24 text-[#bf7613] transform scale-x-[-1]" viewBox="0 0 100 100" fill="none">
             <path d="M2 2 L98 2 M2 2 L2 98" stroke="url(#goldGrad)" strokeWidth="2" />
             <path d="M10 10 Q 50 10 50 50 Q 10 50 10 10" stroke="url(#goldGrad)" strokeWidth="1" fill="none"/>
             <path d="M10 10 L 30 10 L 30 30 L 10 30 Z" fill="url(#goldGrad)" opacity="0.2"/>
             <circle cx="2" cy="2" r="3" fill="#ffd054" />
           </svg>
           {/* Bottom Left */}
           <svg className="absolute -bottom-2 -left-2 w-16 h-16 md:w-24 md:h-24 text-[#bf7613] transform scale-y-[-1]" viewBox="0 0 100 100" fill="none">
             <path d="M2 2 L98 2 M2 2 L2 98" stroke="url(#goldGrad)" strokeWidth="2" />
             <path d="M10 10 Q 50 10 50 50 Q 10 50 10 10" stroke="url(#goldGrad)" strokeWidth="1" fill="none"/>
             <path d="M10 10 L 30 10 L 30 30 L 10 30 Z" fill="url(#goldGrad)" opacity="0.2"/>
             <circle cx="2" cy="2" r="3" fill="#ffd054" />
           </svg>
           {/* Bottom Right */}
           <svg className="absolute -bottom-2 -right-2 w-16 h-16 md:w-24 md:h-24 text-[#bf7613] transform scale-[-1]" viewBox="0 0 100 100" fill="none">
             <path d="M2 2 L98 2 M2 2 L2 98" stroke="url(#goldGrad)" strokeWidth="2" />
             <path d="M10 10 Q 50 10 50 50 Q 10 50 10 10" stroke="url(#goldGrad)" strokeWidth="1" fill="none"/>
             <path d="M10 10 L 30 10 L 30 30 L 10 30 Z" fill="url(#goldGrad)" opacity="0.2"/>
             <circle cx="2" cy="2" r="3" fill="#ffd054" />
           </svg>

           {/* Gradients Definition */}
           <svg width="0" height="0">
             <defs>
               <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#bf7613" />
                 <stop offset="50%" stopColor="#ffd054" />
                 <stop offset="100%" stopColor="#bf7613" />
               </linearGradient>
             </defs>
           </svg>
        </div>

        {/* Content Area - centered within the border with padding for mobile */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-5 md:space-y-8 max-w-lg w-full py-8 md:py-12 px-8 md:px-12">
          
          {/* Top Ornament - SVG Code */}
          <div className="text-[#bf7613] mb-2 animate-pulse opacity-80">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
               <path d="M12 2L14.5 9L22 9L16 14L18.5 21L12 17L5.5 21L8 14L2 9L9.5 9L12 2Z" />
            </svg>
          </div>

          <div className="space-y-2">
             <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#995c14] font-semibold">cordially inviting you</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <p className="font-sans text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-[#995c14]">to celebrate the</p>
            <div className="relative inline-block py-2">
               <span className="absolute -top-4 -left-6 md:-top-6 md:-left-8 text-5xl md:text-7xl text-gold-200/40 font-serif opacity-60 select-none">50</span>
               <h3 className="font-serif text-5xl md:text-7xl text-[#bf7613] italic tracking-tight font-medium drop-shadow-sm">
                 Golden Jubilee
               </h3>
               <span className="absolute -bottom-2 -right-3 md:-bottom-4 md:-right-4 text-5xl md:text-7xl text-gold-200/40 font-serif opacity-60 select-none">th</span>
            </div>
            <p className="font-serif text-2xl md:text-3xl italic text-[#7d4c15]">Birthday Celebration</p>
          </div>

          <div className="w-full border-t border-b border-[#bf7613]/20 py-6 md:py-8 my-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                 <div className="text-center">
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-[#995c14] mb-2">When</p>
                    <p className="font-serif text-xl md:text-2xl text-[#634433] font-bold">June 14</p>
                    <p className="font-serif text-sm italic text-[#995c14]">6:00 PM</p>
                 </div>
                 <div className="text-center md:border-l md:border-r border-[#bf7613]/20">
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-[#995c14] mb-2">Venue</p>
                    <p className="font-serif text-xl md:text-2xl text-[#634433] font-bold">JAGZ Hall</p>
                    <p className="font-serif text-sm italic text-[#995c14]">Lagos</p>
                 </div>
                 <div className="text-center">
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-[#995c14] mb-2">Dress Code</p>
                    <p className="font-serif text-xl md:text-2xl text-[#634433] font-bold">All White</p>
                    <p className="font-serif text-sm italic text-[#995c14]">Strictly</p>
                 </div>
             </div>
          </div>

          <div className="pt-4">
             <p className="font-serif text-lg md:text-xl text-[#bf7613] opacity-80 italic">RSVP Requested</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvitationCard5;

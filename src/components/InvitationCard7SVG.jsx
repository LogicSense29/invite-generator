import React from 'react';

const InvitationCard7SVG = ({ attendeeName }) => {
  // Constants for layout
  const width = 600;
  const height = 960;
  
  return (
    <div className="w-full max-w-lg md:max-w-xl mx-auto animate-fade-in">
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold Gradient */}
          <linearGradient id="goldGradSVG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#f3e5ab" />
            <stop offset="100%" stopColor="#aa6c39" />
          </linearGradient>
          
          {/* Text Gold Gradient */}
          <linearGradient id="textGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cf9f46" />
            <stop offset="50%" stopColor="#eebb5c" />
            <stop offset="100%" stopColor="#b4832e" />
          </linearGradient>

          {/* Noise Filter for Texture */}
          <filter id="noiseFilterSVG">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0"/>
             {/* Composite with a white rect would be better, but we'll apply it to a rect */}
          </filter>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width={width} height={height} fill="#F9F9F9" />
        <rect x="0" y="0" width={width} height={height} filter="url(#noiseFilterSVG)" opacity="0.4" style={{ mixBlendMode: 'multiply' }} pointerEvents="none"/>

        {/* Top Left Decoration */}
        <g opacity="0.9">
             {/* We need to scale the 500x500 path to fit nicely in the corner */}
             <g transform="scale(0.8)">
                {/* Black strokes */}
                <path d="M-100,-50 C-50,150 150,50 250,250 C300,350 100,450 -100,300 Z" fill="#1a1a1a" opacity="0.8" />
                <path d="M-50,-20 C50,100 200,-50 350,100 L0,0 Z" fill="#000" opacity="0.9" />
                
                {/* Gold strokes */}
                <path d="M-20,50 C100,150 200,50 350,180 C400,220 200,300 -50,200" stroke="url(#goldGradSVG)" strokeWidth="3" fill="none" />
                <path d="M-50,0 C50,80 250,20 400,200 L-50,-50" fill="url(#goldGradSVG)" opacity="0.6"  />
                <path d="M0,0 C100,120 250,50 450,250 L0,0" fill="url(#goldGradSVG)" opacity="0.4" />
                
                {/* Glitter */}
                <circle cx="150" cy="100" r="2" fill="#daa520" />
                <circle cx="200" cy="80" r="3" fill="#ffd700" />
                <circle cx="280" cy="150" r="2" fill="#f0e68c" />
                <circle cx="100" cy="180" r="2" fill="#daa520" />
             </g>
        </g>

        {/* Bottom Right Decoration (Rotated) */}
        <g transform={`translate(${width}, ${height}) rotate(180)`} opacity="0.9">
             <g transform="scale(0.8)">
                <path d="M-100,-50 C-50,150 150,50 250,250 C300,350 100,450 -100,300 Z" fill="#1a1a1a" opacity="0.8" />
                <path d="M-20,50 C100,150 200,50 350,180 C400,220 200,300 -50,200" stroke="url(#goldGradSVG)" strokeWidth="4" fill="none" />
                <path d="M-50,0 C50,80 250,20 400,200 L-50,-50" fill="url(#goldGradSVG)" opacity="0.6" />
                <circle cx="200" cy="200" r="2" fill="#daa520" />
                <circle cx="300" cy="100" r="3" fill="#ffd700" />
             </g>
        </g>

        {/* Content Group - Centered Horizontal */}
        <g textAnchor="middle" fontFamily="'Cormorant Garamond', serif">
            
            {/* Header */}
            <text x={width/2} y="120" fontSize="24" fontStyle="italic" fontWeight='bold' fill="#7d4c15" opacity="0.9">
                {/* Please join us in honoring {attendeeName} */}
                Guest Confirmed!
            </text>

            {/* 50 th */}
            <text x={width/2 - 20} y="320" fontSize="220" fill="url(#textGold)" fontWeight="400">
                50
            </text>
            <text x={width/2 + 90} y="280" fontSize="60" fill="#bf7613" fontWeight="400">
                th
            </text>

            {/* Birthday! (Script) */}
            <text x={width/2} y="390" fontFamily="'Great Vibes', cursive" fontSize="100" fill="#995c14" transform={`rotate(-2, ${width/2}, 390)`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
                Birthday!
            </text>

            {/* Subtext */}
            <text x={width/2} y="460" fontFamily="'Montserrat', sans-serif" fontSize="14" letterSpacing="0.3em" fill="#4b5563" fontWeight="600">
                IT'S A MILESTONE WORTH CELEBRATING!
            </text>

            {/* Date Section */}
            <line x1={width/2 - 160} y1="520" x2={width/2 - 100} y2="520" stroke="#ffd054" strokeWidth="1" strokeOpacity="0.5" />
            <text x={width/2 - 60} y="525" fontSize="24" fill="#4b5563">January</text>
            <text x={width/2} y="528" fontSize="56" fill="#bf7613">13</text>
            <text x={width/2 + 60} y="525" fontSize="24" fill="#4b5563">Tuesday</text>
            <line x1={width/2 + 100} y1="520" x2={width/2 + 160} y2="520" stroke="#ffd054" strokeWidth="1" strokeOpacity="0.5" />

            {/* Location */}
            <text x={width/2} y="600" fontSize="14" fontStyle="italic" fill="#995c14" letterSpacing="0.1em">LOCATION:</text>
            <text x={width/2} y="640" fontSize="28" fill="#995c14" letterSpacing="0.05em">THE JAGZ HALL :</text>
            <text x={width/2} y="670" fontSize="22" fill="#995c14">Time: 17:00pm</text>

            {/* Footer */}
            <g transform={`translate(${width/2}, 840)`}>
                <line x1="-30" y1="-25" x2="30" y2="-25" stroke="#fcb92c" strokeWidth="1" />
                <rect x="-3" y="-28" width="6" height="6" transform="rotate(45)" fill="none" stroke="#fcb92c" strokeWidth="1" />
                
                <text y="0" fontSize="14" fill="#7d4c15" letterSpacing="0.1em">DRESS CODE:</text>
                <text y="35" fontSize="28" fontStyle="italic" fill="#bf7613">All White</text>
                
                <line x1="-20" y1="55" x2="20" y2="55" stroke="#fcb92c" strokeWidth="1" />
                <rect x="-2" y="53" width="4" height="4" transform="rotate(45)" fill="#fcb92c" />
            </g>

        </g>

        {/* Inner Borders */}
        <rect x="20" y="20" width={width-40} height={height-40} fill="none" stroke="#fcb92c" strokeOpacity="0.3" rx="4" />
        <rect x="30" y="30" width={width-60} height={height-60} fill="none" stroke="#fcb92c" strokeOpacity="0.1" rx="4" />

      </svg>
    </div>
  );
};

export default InvitationCard7SVG;

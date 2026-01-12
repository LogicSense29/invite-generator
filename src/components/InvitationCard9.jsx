import React from 'react';

const InvitationCard9 = ({ attendeeName }) => {
  return (
    <div className="w-full max-w-sm mx-auto relative shadow-2xl overflow-hidden animate-fade-in" 
         style={{ 
           height: 'min(85vh, 600px)', 
           aspectRatio: '1/1.55',
           backgroundColor: '#e6d2b5', // Light beige/paper bg
           borderRadius: '20px',
           color: '#4a2511'
         }}>
      
      <svg viewBox="0 0 400 620" className="w-full h-full absolute inset-0">
        <defs>
          <filter id="paperNoise">
             <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
             <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0"/>
          </filter>
        </defs>
        
        {/* Background Texture */}
        <rect width="100%" height="100%" filter="url(#paperNoise)" opacity="0.4" />
        
        {/* Main Border */}
        <rect x="15" y="15" width="370" height="590" rx="15" fill="none" stroke="#5c2e15" strokeWidth="4" />

        {/* --- Top Section --- */}
        {/* ZigZag Pattern */}
        <g transform="translate(20, 20)">
            <rect width="360" height="40" fill="#5c2e15" rx="10" />
            <path d="M0,20 L10,10 L20,20 L30,10 L40,20 L50,10 L60,20 L70,10 L80,20 L90,10 L100,20 L110,10 L120,20 L130,10 L140,20 L150,10 L160,20 L170,10 L180,20 L190,10 L200,20 L210,10 L220,20 L230,10 L240,20 L250,10 L260,20 L270,10 L280,20 L290,10 L300,20 L310,10 L320,20 L330,10 L340,20 L350,10 L360,20" 
                  stroke="#c76a28" strokeWidth="3" fill="none" />
             <path d="M0,30 L10,20 L20,30 L30,20 L40,30 L50,20 L60,30 L70,20 L80,30 L90,20 L100,30 L110,20 L120,30 L130,20 L140,30 L150,20 L160,30 L170,20 L180,30 L190,20 L200,30 L210,20 L220,30 L230,20 L240,30 L250,20 L260,30 L270,20 L280,30 L290,20 L300,30 L310,20 L320,30 L330,20 L340,30 L350,20 L360,30" 
                  stroke="#c76a28" strokeWidth="3" fill="none" />
        </g>
        
        {/* Dots Pattern */}
        <rect x="20" y="65" width="360" height="15" fill="#c76a28" />
        <g fill="#5c2e15">
            {Array.from({ length: 18 }).map((_, i) => (
                <circle key={i} cx={30 + i * 20} cy="72.5" r="3" />
            ))}
        </g>

        {/* --- Text Content --- */}
        <text x="200" y="120" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="28" fill="#5c2e15" letterSpacing="0.05em">
            ACCESS CARD
        </text>

        <text x="200" y="190" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="56" fill="#4a2511">
            JIREH
        </text>
        <text x="200" y="235" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="32" fill="#4a2511" fontStyle="italic">
            &
        </text>
        <text x="200" y="285" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="56" fill="#4a2511">
            IFEANYI
        </text>

        <text x="200" y="340" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="32" fill="#5c2e15" letterSpacing="0.05em">
            IGBA NKWU
        </text>

        <text x="200" y="380" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="24" fill="#5c2e15">
            19.12.2025
        </text>
        
        {/* Use Attendee Name if provided, else use Default */}
        <text x="200" y="410" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#5c2e15" opacity="0.8">
            {attendeeName !== "Guest" ? attendeeName : ""}
        </text>


        {/* --- Icons --- */}
        
        {/* Top Left: Gourd/Shaker */}
        <g transform="translate(40, 150) scale(0.6)">
            <path d="M30,0 C45,0 50,20 45,40 C40,60 30,70 30,90 C30,110 50,115 50,140 C50,170 30,180 10,160 C-10,140 0,110 10,90 C20,70 15,40 15,20 C15,5 20,0 30,0 Z" fill="#a03d15" />
            <circle cx="28" cy="60" r="3" fill="#5c2e15" />
            <circle cx="28" cy="80" r="3" fill="#5c2e15" />
            <circle cx="28" cy="100" r="3" fill="#5c2e15" />
            <circle cx="28" cy="120" r="3" fill="#5c2e15" />
        </g>

        {/* Top Right: Head 1 */}
        <g transform="translate(310, 150) scale(0.6)">
             <path d="M10,0 H40 V20 H10 Z" fill="#c76a28" /> {/* Hat */}
             <path d="M10,20 Q-10,40 5,80 Q-5,110 25,120 Q55,110 45,80 Q60,40 40,20 Z" fill="#c76a28" />
             <path d="M15,50 Q25,55 35,50" stroke="#5c2e15" strokeWidth="2" fill="none" /> {/* Eyes */}
             <path d="M25,50 V70" stroke="#5c2e15" strokeWidth="2" fill="none" /> {/* Nose */}
             <path d="M15,90 Q25,100 35,90" stroke="#5c2e15" strokeWidth="2" fill="none" /> {/* Mouth */}
        </g>

        {/* Bottom Left: Cowrie/Abstract */}
        <g transform="translate(40, 360) scale(0.6)">
            <path d="M25,0 C45,10 50,30 40,50 C50,70 45,90 25,100 C5,90 0,70 10,50 C0,30 5,10 25,0 Z" fill="#5c2e15" />
            <circle cx="25" cy="25" r="8" fill="none" stroke="#c76a28" strokeWidth="3" />
            <circle cx="25" cy="75" r="8" fill="none" stroke="#c76a28" strokeWidth="3" />
        </g>

        {/* Bottom Right: Head 2 (Taller hat) */}
        <g transform="translate(300, 340) scale(0.6)">
             <path d="M25,0 L45,40 H5 L25,0 Z" fill="#c76a28" /> {/* Hat */}
             <path d="M10,40 Q-10,60 5,100 Q-5,130 25,140 Q55,130 45,100 Q60,60 40,40 Z" fill="#c76a28" />
             <circle cx="18" cy="70" r="4" fill="#a03d15" />
             <circle cx="32" cy="70" r="4" fill="#a03d15" />
             <path d="M25,70 V90" stroke="#a03d15" strokeWidth="2" />
             <path d="M15,110 H35" stroke="#a03d15" strokeWidth="2" />
        </g>

        {/* Bottom Center: Shield/Circle */}
        <g transform="translate(130, 420) scale(0.9)">
            <circle cx="70" cy="70" r="70" fill="#5c2e15" />
            <circle cx="70" cy="70" r="60" fill="none" stroke="#c76a28" strokeWidth="5" />
            <circle cx="70" cy="70" r="40" fill="none" stroke="#a03d15" strokeWidth="8" />
             {/* Radiating lines */}
             <g stroke="#c76a28" strokeWidth="4">
                 <line x1="70" y1="30" x2="70" y2="10" />
                 <line x1="70" y1="110" x2="70" y2="130" />
                 <line x1="30" y1="70" x2="10" y2="70" />
                 <line x1="110" y1="70" x2="130" y2="70" />
                 <line x1="42" y1="42" x2="28" y2="28" />
                 <line x1="98" y1="42" x2="112" y2="28" />
                 <line x1="42" y1="98" x2="28" y2="112" />
                 <line x1="98" y1="98" x2="112" y2="112" />
             </g>
             <circle cx="70" cy="70" r="10" fill="#c76a28" />
        </g>
        
        {/* --- Bottom Section --- */}
        <g transform="translate(20, 520)">
            <rect width="360" height="70" fill="#5c2e15" rx="5" />
            {/* Geometric Patterns in footer */}
            <path d="M0,50 L20,20 L40,50 L60,20 L80,50 L100,20 L120,50 L140,20 L160,50 L180,20 L200,50 L220,20 L240,50 L260,20 L280,50 L300,20 L320,50 L340,20 L360,50" 
                  stroke="#c76a28" strokeWidth="3" fill="none" opacity="0.5" />
            <path d="M0,70 L20,40 L40,70 L60,40 L80,70 L100,40 L120,70 L140,40 L160,70 L180,40 L200,70 L220,40 L240,70 L260,40 L280,70 L300,40 L320,70 L340,40 L360,70" 
                  stroke="#c76a28" strokeWidth="3" fill="none" opacity="0.3" />
        </g>
        
        <rect x="20" y="500" width="360" height="15" fill="#c76a28" />

      </svg>
    </div>
  );
};

export default InvitationCard9;

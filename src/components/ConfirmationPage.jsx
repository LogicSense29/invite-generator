import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import InvitationCard1 from './InvitationCard1';
import InvitationCard2 from './InvitationCard2';
import InvitationCard4 from './InvitationCard4';
import InvitationCard5 from './InvitationCard5';
import InvitationCard6 from './InvitationCard6';
import InvitationCard7 from './InvitationCard7';
import InvitationCard7SVG from './InvitationCard7SVG';
import InvitationCard9 from './InvitationCard9';

const ConfirmationPage = ({ attendeeName = "Guest", style = "1", stats }) => {
  const [statsPos, setStatsPos] = React.useState({ x: 20, y: window.innerHeight - 80 });
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartOffset = React.useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Re-adjust initial position if needed or just leave as static bottom default until moved?
    // Using 75% height to be safer on mobile (above nav bars)
    setStatsPos({ x: window.innerWidth / 2 - 80, y: window.innerHeight * 0.75 });
  }, []);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      setStatsPos({
        x: e.clientX - dragStartOffset.current.x,
        y: e.clientY - dragStartOffset.current.y
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#fcb92c', '#B87333', '#013220', '#F7E7CE']; // Gold, Ochre, Emerald, Champagne

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        shapes: ['square', 'circle'],
        scalar: 1.2
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        shapes: ['square', 'circle'],
        scalar: 1.2
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 text-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern for whole page */}
      {style === "1" && (
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none grayscale"
          style={{ 
            backgroundImage: 'url("/assets/pattern.png")',
            backgroundSize: '400px',
            backgroundRepeat: 'repeat'
          }}
        />
      )}
      
      {style === "1" ? (
        <InvitationCard1 attendeeName={attendeeName} />
      ) : style === "2" ? (
        <InvitationCard2 attendeeName={attendeeName} />
      ) : style === "4" ? (
        <InvitationCard4 attendeeName={attendeeName} />
      ) : style === "5" ? (
        <InvitationCard5 attendeeName={attendeeName} />
      ) : style === "6" ? (
        <InvitationCard6 attendeeName={attendeeName} />
      ) : style === "7" ? (
        <InvitationCard7 attendeeName={attendeeName} />
      ) : style === "8" ? (
        <InvitationCard7SVG attendeeName={attendeeName} />
      ) : (
        <InvitationCard9 attendeeName={attendeeName} />
      )}
      
      {stats && (
        <div 
            className="fixed z-50 animate-fade-in touch-none cursor-move"
            style={{ 
                left: statsPos.x, 
                top: statsPos.y,
            }}
            onPointerDown={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                dragStartOffset.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
                setIsDragging(true);
                e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
        >
          <p className="text-[10px] text-white/50 uppercase tracking-widest bg-black/80 inline-block px-4 py-2 rounded-full border border-gold-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(252,185,44,0.2)] select-none">
            Scanned: {stats.scannedCount} <span className="text-gold-500">/</span> {stats.total}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;

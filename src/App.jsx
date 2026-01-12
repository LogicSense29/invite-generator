import React, { useEffect, useState, useRef } from 'react';
import ConfirmationPage from './components/ConfirmationPage';
import AlreadyScanned from './components/AlreadyScanned';
import QRCodePage from './components/QRCodePage';
import LoginPage from './components/LoginPage';

function App() {
  const [status, setStatus] = useState('loading'); // 'loading', 'confirmed', 'invalid', 'generator'
  const [guestName, setGuestName] = useState('Distinguished Guest');
  const [scannedStats, setScannedStats] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  
  // Draggable controls state
  const [controlsPos, setControlsPos] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      setControlsPos({
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
    // Check Admin Login
    if (localStorage.getItem('admin_token')) {
        setIsAdminLoggedIn(true);
    }

    const params = new URLSearchParams(window.location.search);
    const guestToken = params.get('key');
    const nameParam = params.get('name');
    const isGenerator = params.get('admin') === 'true';

    // If just previewing logic
    if (nameParam) {
      setGuestName(nameParam.replace(/_/g, ' '));
    }

    if (isGenerator) {
      setStatus('generator');
      return;
    }

    // Backend Validation Logic
    const validateKey = async () => {
        // If bypassing (Preview Mode), allow access AND fetch stats
        if (params.get('bypass') === 'true') {
             setStatus('confirmed');
             try {
                const res = await fetch('http://localhost:3000/api/stats');
                if (res.ok) {
                    const statsData = await res.json();
                    setScannedStats(statsData);
                }
             } catch (e) { console.error("Could not fetch stats in preview", e); }
             return;
        }

        if (!guestToken) {
             setStatus('invalid'); 
             return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/validate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key: guestToken })
            });

            if (!response.ok) throw new Error('Network error');
            const data = await response.json();

            if (data.valid) {
                setStatus('confirmed');
                setGuestName(data.guestName);
                if (data.stats) setScannedStats(data.stats);
            } else {
                setStatus('invalid');
            }
        } catch (err) {
            console.error("Validation failed", err);
            // Fallback for preview/dev if server off?
            if (params.get('bypass') === 'true') {
                setStatus('confirmed');
            } else {
                setStatus('invalid');
            }
        }
    };

    validateKey();

  }, []);

  const resetSession = () => {
    localStorage.clear();
    window.location.href = '/?admin=true';
  };

  const handleLoginSuccess = () => {
      localStorage.setItem('admin_token', 'true');
      setIsAdminLoggedIn(true);
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-dark">
        <div className="text-gold-500 font-serif animate-pulse text-2xl tracking-widest">Entering The Gala...</div>
      </div>
    );
  }

  return (
    <div className="App selection:bg-gold-500/30">
      {status === 'generator' && (
          isAdminLoggedIn ? <QRCodePage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
      {status === 'confirmed' && (
        <ConfirmationPage 
          attendeeName={guestName} 
          style={new URLSearchParams(window.location.search).get('style') || '1'} 
          stats={scannedStats}
        />
      )}
      {status === 'invalid' && <AlreadyScanned />}
      
      {/* Dev Navigation & Reset */}
      <div className="fixed bottom-4 right-4 flex gap-2 opacity-10 hover:opacity-100 transition-opacity z-50">
        <button 
          onClick={() => window.location.search = '?admin=true'}
          className="bg-white/5 text-white px-3 py-1 rounded text-[10px] border border-white/10"
        >
          Admin Gen
        </button>
        <button 
          onClick={resetSession}
          className="bg-red-500/10 text-red-400 px-3 py-1 rounded text-[10px] border border-red-500/20"
        >
          Reset All
        </button>
      </div>

      {/* Live Test Controls (Only visible with bypass=true) */}
      {new URLSearchParams(window.location.search).get('bypass') === 'true' && (
        <div 
          className="fixed p-4 bg-black/80 backdrop-blur-md border border-gold-500/30 rounded-xl z-50 animate-fade-in shadow-2xl"
          style={{ left: controlsPos.x, top: controlsPos.y, touchAction: 'none' }}
        >
           <div 
             className="cursor-move mb-3 border-b border-white/10 pb-2"
             onPointerDown={(e) => {
               // Calculate offset logic
               const rect = e.currentTarget.closest('div.fixed').getBoundingClientRect();
               dragStartOffset.current = {
                 x: e.clientX - rect.left,
                 y: e.clientY - rect.top
               };
               setIsDragging(true);
               e.currentTarget.setPointerCapture(e.pointerId);
             }}
             onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
           >
              <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold pointer-events-none select-none">
                ::: Preview Controls
              </p>
           </div>
           
           <div className="space-y-3">
             <div className="input-group">
               <label className="text-[9px] text-white/50 block mb-1 uppercase">Guest Name</label>
               <input 
                 type="text" 
                 value={guestName} 
                 onChange={(e) => setGuestName(e.target.value)}
                 className="bg-white/10 border border-white/10 rounded px-2 py-1 text-xs text-white w-full outline-none focus:border-gold-500/50"
               />
             </div>
             <div>
               <label className="text-[9px] text-white/50 block mb-1 uppercase">Card Style</label>
               <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                 {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                   <button
                     key={num}
                     onClick={() => {
                       const url = new URL(window.location);
                       url.searchParams.set('style', num);
                       window.history.pushState({}, '', url);
                       // Force re-render not needed as we can just redirect or relies on React state if we lifted it. 
                       // actually App.jsx reads from URL on render, but not state. 
                       // Let's reload for simplicity or lift state. 
                       // Lifting state is better.
                       window.location.search = url.search;
                     }}
                     className={`text-[10px] py-1 rounded border transition-colors ${
                       (new URLSearchParams(window.location.search).get('style') || '1') === String(num)
                       ? 'bg-gold-500 text-black border-gold-500 font-bold'
                       : 'bg-transparent text-gold-500 border-gold-500/30 hover:bg-gold-500/10'
                     }`}
                   >
                     Style {num}
                   </button>
                 ))}
               </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
}

export default App;

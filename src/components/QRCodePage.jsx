import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import headerImg from '../assets/access-card-iyke-agwu.png';
import GuestListModal from './GuestListModal';

const QRCodePage = () => {
  const [guestName, setGuestName] = useState('');
  const [generatedKey, setGeneratedKey] = useState(null);
  const [cardStyle, setCardStyle] = useState('1');
  const [showGuestList, setShowGuestList] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const qrRef = useRef(null);

  const generateInvite = async () => {
    if (!guestName) return;
    setIsGenerating(true);
    setGeneratedKey(null);
    
    try {
        const response = await fetch('http://localhost:3000/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ guestName })
        });
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to generate invite');
        }
        
        setGeneratedKey(data.key);
    } catch (err) {
        console.error("Error generating invite:", err);
        alert(err.message);
    } finally {
        setIsGenerating(false);
    }
  };

  const inviteUrl = `${window.location.origin}/?key=${generatedKey}&name=${encodeURIComponent(guestName)}&style=${cardStyle}`;
  const infiniteUrl = `${inviteUrl}&bypass=true`;

  const downloadQRCode = async (format) => {
    if (!qrRef.current) return;
    
    try {
      const canvas = await html2canvas(qrRef.current, {
        backgroundColor: '#ffffff',
        scale: 4, 
        useCORS: true,
        logging: true,
        windowWidth: 1200 
      });

      if (format === 'image') {
        const link = document.createElement('a');
        link.download = `${guestName.replace(/\s+/g, '_')}_Invite_QR.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } else if (format === 'pdf') {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a6' 
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${guestName.replace(/\s+/g, '_')}_Invite.pdf`);
      }
    } catch (err) {
      console.error("Download failed:", err);
      alert(`Could not generate download. Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-emerald-dark">
      <div className="max-w-md w-full glass-effect p-8 rounded-2xl border border-gold-400/20 text-center">
        <h2 className="text-3xl font-serif gold-gradient mb-6 font-bold uppercase tracking-widest leading-tight">
          50th Birthday <br/> Invite Generator
        </h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <label className="text-xs text-gold-500/60 uppercase tracking-widest block mb-2 text-left px-1">Guest Name or Number</label>
            <input
              type="text"
              placeholder="Enter Full Name or Number"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-champagne focus:outline-none focus:border-gold-500/50 transition-colors"
            />
          </div>

          <button
            onClick={generateInvite}
            disabled={!guestName || isGenerating}
            className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed text-emerald-dark font-bold rounded-lg transition-all transform active:scale-95 uppercase tracking-widest font-sans shadow-lg shadow-gold-900/20 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
                <>
                    <svg className="animate-spin h-4 w-4 text-emerald-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                </>
            ) : (
                'Generate Invite'
            )}
          </button>
        </div>

        {generatedKey && (
          <div className="animate-fade-in space-y-6 pt-6 border-t border-white/5">
            
            {/* 1. Visible UI (Simplified) */}
            <div 
                className="p-6 rounded-xl inline-block shadow-[0_0_30px_rgba(252,185,44,0.4)]"
                style={{ backgroundColor: '#ffffff' }}
            >
                <QRCodeCanvas value={inviteUrl} size={200} />
                <p 
                    className="font-serif mt-2 font-bold uppercase tracking-widest text-xs pt-2"
                    style={{ color: '#000000', borderTop: '1px solid #e5e7eb' }}
                >
                    {guestName}
                </p>
                <p 
                    className="text-[8px] uppercase tracking-widest mt-1"
                    style={{ color: '#9ca3af' }}
                >
                    Valid for One Entry
                </p>
            </div>

            {/* 2. Hidden Off-Screen Capture Container (The actual download design) */}
            {/* Positioned fixed off-screen so user doesn't see it, but html2canvas can capture it */}
            <div 
                ref={qrRef}
                style={{
                  position: 'fixed',
                  left: '-9999px',
                  top: '-9999px',
                  backgroundColor: '#ffffff',
                  width: '350px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                  border: '1px solid #e5e7eb'
                }}
            >
                 <img 
                    src={headerImg} 
                    alt="Birthday Celebration" 
                    style={{ width: '120px', height: 'auto', borderRadius: '4px' }} 
                 />

                 <QRCodeCanvas 
                    value={inviteUrl} 
                    size={600} 
                    style={{ width: '150px', height: '150px' }}
                 />

                 <div style={{ textAlign: 'center', width: '100%' }}>
                     <p style={{ 
                        fontFamily: 'serif', 
                        fontWeight: 'bold', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.1em',
                        fontSize: '18px',
                        color: '#000000',
                        margin: '0 0 5px 0'
                     }}>
                        {guestName}
                     </p>
                     <p style={{ 
                        fontSize: '10px', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.1em',
                        color: '#6b7280',
                        margin: '0 0 15px 0'
                     }}>
                        Valid for One Entry
                     </p>
                     
                     <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb', marginBottom: '15px' }}></div>
                     
                     <p style={{ 
                        fontFamily: 'serif', 
                        fontStyle: 'italic',
                        fontSize: '16px',
                        color: '#d4af37', 
                        fontWeight: 'bold' 
                     }}>
                        Dress Code - All White
                     </p>
                 </div>
            </div>
            
            <div className="text-center">
              <p className="text-gold-300 font-serif mb-2 italic text-lg">Invitation for {guestName}</p>
              {/* <p className="text-[10px] text-champagne/40 mb-4 uppercase tracking-widest">
                Style: {cardStyle === '1' ? 'Classic' : cardStyle === '2' ? 'Afrocentric' : cardStyle === '7' ? '50th Swirls' : cardStyle === '8' ? '50th SVG' : 'Standard'}
              </p> */}
              <div className="text-[10px] text-champagne/30 break-all select-all p-3 bg-black/40 rounded border border-white/5">
                {inviteUrl}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={() => downloadQRCode('image')}
                    className="py-3 border border-gold-400/30 text-gold-400 rounded-lg hover:bg-gold-400/10 transition-colors text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Save Image
                </button>
                 <button
                    onClick={() => downloadQRCode('pdf')}
                    className="py-3 bg-gold-600/20 border border-gold-500/50 text-gold-300 rounded-lg hover:bg-gold-600/30 transition-colors text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    Save PDF
                </button>
            </div>

            <button
               onClick={() => window.open(inviteUrl, '_blank')}
               className="w-full py-3 border border-white/10 text-white/50 rounded-lg hover:bg-white/5 transition-colors text-[10px] uppercase tracking-widest"
            >
              Preview & Mark as Scanned
            </button>
            
            <div className="pt-4 border-t border-white/5 mt-4">
              <p className="text-[9px] text-emerald-400 mb-2 uppercase tracking-tight">Permanent Link (Won't get blocked)</p>
              <div className="text-[9px] text-emerald-500/50 break-all select-all p-2 bg-emerald-900/10 rounded cursor-pointer hover:bg-emerald-900/20 transition-colors"
                   onClick={() => window.open(infiniteUrl, '_blank')}>
                {infiniteUrl}
              </div>
            </div>
          </div>
        )}

        <p className="mt-8 text-champagne/20 text-[9px] uppercase tracking-[0.3em] font-serif italic">
          {/* Designed for a Golden Jubilee Legacy */}
          Designed by Oluwabukola Odunsi
        </p>
      </div>

      {/* Guest List FAB */}
      <button 
        onClick={() => setShowGuestList(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gold-500 rounded-full shadow-[0_0_20px_rgba(252,185,44,0.3)] hover:shadow-[0_0_30px_rgba(252,185,44,0.6)] flex items-center justify-center text-emerald-900 transition-all transform hover:scale-110 z-50 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>

      {/* Guest List Modal */}
      {showGuestList && <GuestListModal onClose={() => setShowGuestList(false)} />}
    </div>
  );
};

export default QRCodePage;

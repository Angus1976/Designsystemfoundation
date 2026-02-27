import React from 'react';
import { Logo, LogoIcon } from './Logo';

export const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-12 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Brand Identity System</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The SuperInsight (问视间) visual identity embodies high-end technology, business precision, and intelligent energy.
          </p>
        </div>

        {/* Primary Logo Construction */}
        <section className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Primary Lockup</h2>
          <div className="flex flex-col items-center justify-center py-12">
            <Logo className="scale-150" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-100">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">Symbol</span>
              <p className="text-sm text-slate-600">
                The "Wi" monogram represents "Winsai" / "问 (Wen) i". The metallic body signifies robust enterprise infrastructure, while the glowing blue orb represents the spark of Artificial Intelligence.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">Typography</span>
              <p className="text-sm text-slate-600">
                Modern sans-serif typography with a bilingual lockup. "SuperInsight" serves as the international identifier, grounded by "问视间".
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">Palette</span>
              <div className="flex gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-slate-500 shadow-sm" title="Warm Silver Metal"></div>
                <div className="w-8 h-8 rounded-full bg-[#38bdf8] shadow-sm ring-2 ring-white" title="Energy Blue"></div>
                <div className="w-8 h-8 rounded-full bg-slate-900 shadow-sm" title="Deep Space"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Variations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vertical Stack */}
          <section className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[300px]">
             <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest absolute top-8 left-8">Vertical Stack</h2>
             <Logo layout="vertical" />
          </section>

          {/* Dark Mode */}
          <section className="bg-slate-900 rounded-3xl p-12 shadow-xl flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
             <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest absolute top-8 left-8 z-10">Dark Mode / Inverted</h2>
             <div className="relative z-10">
               <Logo theme="dark" />
             </div>
          </section>
        </div>

        {/* Brand Assets */}
        <section className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-12">Asset Library</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            
            <div className="text-center space-y-4">
              <div className="h-24 w-24 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100">
                <LogoIcon className="w-16 h-16" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Icon Only</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-24 w-40 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100 px-4">
                <div className="flex flex-col items-start leading-none">
                  <span className="font-bold tracking-tight text-lg text-slate-900">
                    SuperInsight
                  </span>
                  <span className="text-[0.6rem] font-medium tracking-widest uppercase text-slate-500">
                    问视间
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-mono">Wordmark</p>
            </div>

             <div className="text-center space-y-4">
              <div className="h-24 w-24 flex items-center justify-center bg-slate-900 rounded-xl shadow-inner">
                <LogoIcon className="w-16 h-16" />
              </div>
              <p className="text-xs text-slate-500 font-mono">Icon (Dark Bg)</p>
            </div>

            <div className="text-center space-y-4">
               <div className="h-24 w-24 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100">
                 <LogoIcon className="w-8 h-8" />
               </div>
               <p className="text-xs text-slate-500 font-mono">Favicon Size</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

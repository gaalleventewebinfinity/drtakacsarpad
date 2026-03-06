"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const cities = [
    "Békéscsaba",
    "Csabaszabadi",
    "Csorvás",
    "Gerendás",
    "Kétegyháza",
    "Kétsoprony",
    "Kondoros",
    "Szabadkígyós",
    "Telekgerendás",
    "Újkígyós"
  ];

  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % cities.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [cities.length]);

  const navItems = ["Életút", "Támogatók", "Választókerület", "Kapcsolat"];

  return (
    <nav className="fixed top-3 sm:top-6 left-0 right-0 mx-auto w-[96%] max-w-[1600px] z-50 transition-all duration-300">
      <div className="bg-[#053787] backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl px-4 sm:px-10 py-2 sm:py-4 relative overflow-visible group/nav">
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>

        <div className="flex items-center justify-between relative z-10">
          
          {/* Logo - Left Aligned */}
          <div className="flex items-center gap-0 flex-shrink-0">
            <a href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/takacsarpad_logo.svg" 
                alt="Dr. Takács Árpád Logo" 
                className="h-20 sm:h-36 w-auto sm:-my-6"
              />
            </a>
            {/* Vertical Divider - hidden on small mobile */}
            <div className="hidden sm:block h-8 sm:h-10 w-[1px] bg-white/30 mx-4 sm:mx-6"></div>
            {/* City rotator - hidden on small mobile */}
            <div className="hidden sm:flex flex-col justify-center min-w-[140px] sm:min-w-[220px] h-10 overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                <motion.span 
                  key={cities[currentCityIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xs sm:text-base font-bold text-white uppercase tracking-widest sm:tracking-[0.2em] leading-relaxed opacity-90 block absolute whitespace-nowrap"
                >
                  {cities[currentCityIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6 -translate-x-12">
            {navItems.map((item) => {
              const href = `/#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="relative group py-2 text-base font-black uppercase tracking-wide text-gray-200/90 hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc107] transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          {/* Right Side - CTA / Social (desktop) */}
          <div className="hidden lg:flex items-center gap-4 flex-none">
            <a href="https://www.facebook.com/dr.takacsarpad" target="_blank" className="text-white/60 hover:text-[#ffc107] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.youtube.com/@takacs_arpad" target="_blank" className="text-white/60 hover:text-[#ffc107] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@takacs.arpad" target="_blank" className="text-white/60 hover:text-[#ffc107] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
            </a>
            <a 
              href="/#kapcsolat"
              className="group relative px-5 py-2 bg-gradient-to-r from-[#ffc107] via-[#ffe082] to-[#ffc107] bg-[length:200%_auto] animate-shine text-[#053787] font-black text-base uppercase rounded-lg shadow-[0_0_20px_rgba(255,193,7,0.6)] hover:shadow-[0_0_35px_rgba(255,193,7,1)] transition-all transform hover:scale-105 border border-[#ffc107]/50 overflow-hidden whitespace-nowrap"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                ÚJ BÉKÉSCSABA TERV
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                MEGTEKINTEM
              </span>
            </a>
          </div>
          
          {/* Mobile: social ikonok + hamburger */}
          <div className="lg:hidden flex items-center gap-3 flex-none">
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/dr.takacsarpad" target="_blank" className="text-white/70 hover:text-[#ffc107] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@takacs_arpad" target="_blank" className="text-white/70 hover:text-[#ffc107] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@takacs.arpad" target="_blank" className="text-white/70 hover:text-[#ffc107] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              </a>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white px-2 py-1.5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-xs font-bold uppercase tracking-wide">Menü</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  <span className="text-xs font-bold uppercase tracking-wide">Menü</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/10 mt-3"
            >
              <div className="flex flex-col gap-1 py-4">
                {navItems.map((item) => {
                  const href = `/#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                  return (
                    <a
                      key={item}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-center py-3 text-base font-black uppercase tracking-wide text-gray-200 hover:text-[#ffc107] hover:bg-white/5 rounded-xl transition-all"
                    >
                      {item}
                    </a>
                  );
                })}
                <div className="flex justify-center pt-3 pb-1">
                  <a 
                    href="/#kapcsolat"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-8 py-3 bg-gradient-to-r from-[#ffc107] via-[#ffe082] to-[#ffc107] bg-[length:200%_auto] animate-shine text-[#053787] font-black text-sm uppercase rounded-lg shadow-lg"
                  >
                    ÚJ BÉKÉSCSABA TERV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}

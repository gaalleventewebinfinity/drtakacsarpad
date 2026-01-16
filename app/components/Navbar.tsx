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

  return (
    <nav className="fixed top-6 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50 transition-all duration-300">
      <div className="bg-[#07245f]/70 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl px-6 py-4 relative overflow-hidden group/nav">
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="flex items-center justify-between relative z-10">
          
          {/* Logo - Left Aligned */}
          <div className="flex-1 md:flex-none flex items-center gap-0">
             <a href="/" className="relative h-16 w-36">
               <Image 
                 src="/takacslogo.png" 
                 alt="Dr. Takács Árpád Logo" 
                 fill
                 className="object-contain object-right"
                 priority
               />
             </a>
             {/* Vertical Divider */}
             <div className="block h-8 sm:h-10 w-[1px] bg-white/30 mx-2 sm:mx-4"></div>
             <div className="flex flex-col justify-center min-w-[110px] sm:min-w-[140px] h-10 overflow-hidden relative">
               <AnimatePresence mode="popLayout">
                 <motion.span 
                   key={cities[currentCityIndex]}
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: -20, opacity: 0 }}
                   transition={{ duration: 0.5, ease: "easeOut" }}
                   className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest sm:tracking-[0.2em] leading-relaxed opacity-90 block absolute whitespace-nowrap"
                 >
                   {cities[currentCityIndex]}
                 </motion.span>
               </AnimatePresence>
             </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            {["Rólam", "Hírek", "Galéria", "Kapcsolat"].map((item) => {
              const href = item === "Hírek" 
                ? "/hirek" 
                : `/#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                
              return (
                <a
                  key={item}
                  href={href}
                  className="relative group py-2 text-sm font-bold uppercase tracking-wide text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffcc00] transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          {/* Right Side - CTA / Social */}
          <div className="hidden lg:flex items-center gap-4 flex-none">
              <a href="https://facebook.com" target="_blank" className="text-white/60 hover:text-[#ffcc00] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                  href="/#kapcsolat"
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-[#ffcc00] via-white to-[#ffcc00] bg-[length:200%_auto] animate-shine animate-glow text-[#07245f] font-black text-sm uppercase rounded-lg shadow-[0_0_20px_rgba(255,204,0,0.6)] hover:shadow-[0_0_30px_rgba(255,204,0,0.9)] transition-all transform hover:scale-105 border border-[#ffcc00]/50 overflow-hidden"
              >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                      ÚJ BÉKÉSCSABA TERV
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      MEGTEKINTEM
                  </span>
              </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-none flex justify-end">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
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
              className="md:hidden overflow-hidden border-t border-white/10 mt-4"
            >
              <div className="flex flex-col gap-4 py-4">
                {["Rólam", "Hírek", "Galéria", "Kapcsolat"].map((item) => {
                  const href = item === "Hírek" 
                    ? "/hirek" 
                    : `/#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                    
                  return (
                    <a
                      key={item}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-center py-2 text-sm font-bold uppercase tracking-wide text-gray-200 hover:text-[#ffcc00] transition-colors"
                    >
                      {item}
                    </a>
                  );
                })}
                <div className="flex justify-center pt-2">
                   <a 
                      href="/#kapcsolat"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-6 py-3 bg-[#ffcc00] text-[#07245f] font-black text-sm uppercase rounded-lg shadow-lg hover:bg-white transition-colors"
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


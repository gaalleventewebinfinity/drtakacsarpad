"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ nev: "", email: "", telefon: "", uzenet: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kapcsolat" className="scroll-mt-24 py-24 text-white relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto px-4 relative z-10" ref={ref}>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
            Lépjen kapcsolatba velünk!
          </h2>
          <div className="w-24 h-2 bg-[#ffc107] mx-auto mb-6 shadow-[0_0_10px_#ffc107]"></div>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Kérdése van, vagy csatlakozna kezdeményezéseinkhez? Keressen minket bizalommal.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#ffc107]/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#ffc107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Köszönjük!</h3>
              <p className="text-blue-200">Üzenetét megkaptuk, hamarosan visszajelzünk.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 space-y-4">
              <div>
                <label className="block text-xs text-blue-300 uppercase tracking-wider mb-2">Név *</label>
                <input
                  type="text"
                  required
                  value={formData.nev}
                  onChange={(e) => setFormData({ ...formData, nev: e.target.value })}
                  placeholder="Az Ön neve"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-[#ffc107] focus:bg-white/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-blue-300 uppercase tracking-wider mb-2">E-mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="pelda@email.hu"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-[#ffc107] focus:bg-white/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-blue-300 uppercase tracking-wider mb-2">Telefonszám</label>
                <input
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  placeholder="+36 XX XXX XXXX"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-[#ffc107] focus:bg-white/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-blue-300 uppercase tracking-wider mb-2">Üzenet *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.uzenet}
                  onChange={(e) => setFormData({ ...formData, uzenet: e.target.value })}
                  placeholder="Írja le üzenetét..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-[#ffc107] focus:bg-white/15 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#ffc107] text-[#053787] font-black uppercase tracking-wider rounded-lg hover:bg-[#ffe082] transition-all shadow-xl transform hover:scale-[1.02]"
              >
                Üzenet küldése
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}

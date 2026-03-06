"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hirlevel" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      {/* Newsletter Section */}
      <motion.div
        ref={ref}
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[053787] to-[#053787] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffc107_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    Nem akarsz lemaradni semmiről?
                </h3>
                <p className="text-blue-100 text-lg">
                    Iratkozz fel hírlevelünkre, és értesülj első kézből a térség legfrissebb híreiről és eseményeiről!
                </p>
            </div>
            
            <div className="w-full lg:w-auto flex-shrink-0">
                <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Az Ön e-mail címe..." 
                        className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-[#ffc107] transition-all min-w-[280px]"
                    />
                    <button className="px-8 py-3 bg-[#ffc107] hover:bg-[#ffe082] text-[#053787] font-bold uppercase rounded-full shadow-[0_0_15px_rgba(255,193,7,0.4)] hover:shadow-[0_0_25px_rgba(255,193,7,0.6)] transition-all transform hover:-translate-y-0.5">
                        Feliratkozás
                    </button>
                </form>
            </div>
        </div>
      </motion.div>
    </section>
  );
}

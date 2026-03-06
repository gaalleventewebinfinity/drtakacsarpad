"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, className = "", delay = 0, direction = "up" }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const initial = direction === "left" ? { opacity: 0, x: -50 } : direction === "right" ? { opacity: 0, x: 50 } : { opacity: 0, y: 40 };
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Valasztokerulet() {
  const telepulesek = [
    "Békéscsaba", "Csabaszabadi", "Csorvás", "Gerendás",
    "Kétegyháza", "Kétsoprony", "Kondoros", "Szabadkígyós",
    "Telekgerendás", "Újkígyós"
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="valasztokeruletem" className="scroll-mt-24 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Fejléc */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
            Választókerületem
          </h2>
          <div className="w-24 h-2 bg-[#ffc107] mx-auto mb-6 shadow-[0_0_10px_#ffc107]"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Békés 01. számú Országgyűlési Egyéni Választókerület
          </p>
        </motion.div>

        {/* Tartalom */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Térkép */}
          <FadeIn direction="left">
            <div className="relative">
              <img
                src="/valasztokerulet.png"
                alt="Békés 01. OEVK térkép"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>

          {/* Szöveg + települések */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-[053787]/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <p className="text-lg text-blue-100 leading-loose mb-8">
                A Békés 01. számú választókerület Békéscsabát és a környező településeket foglalja magában. Ez a térség az otthonom — itt nőttem fel, itt dolgoztam, és itt szeretném képviselni az itt élők érdekeit.
              </p>

              <h3 className="text-xl font-black text-white uppercase tracking-wider mb-4">
                A kerület települései
              </h3>
              <div className="w-16 h-1 bg-[#ffc107] mb-6"></div>

              <div className="grid grid-cols-2 gap-3">
                {telepulesek.map((t, i) => (
                  <motion.div
                    key={t}
                    className="flex items-center gap-2 text-blue-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffc107] flex-shrink-0"></span>
                    <span className="font-medium">{t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

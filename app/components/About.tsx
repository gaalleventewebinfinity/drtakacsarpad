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

export default function About() {
  return (
    <section id="eletut" className="scroll-mt-24 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-24">

        {/* 1. blokk: szöveg bal, kép jobb */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <div className="bg-[053787]/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">
                Életút
              </h2>
              <div className="w-24 h-2 bg-[#ffc107] mb-8 shadow-[0_0_10px_#ffc107]"></div>
              <div className="space-y-6 text-lg text-blue-100 leading-loose">
                <p>
                  Dr. Takács Árpád vagyok, 53 éves, házas, családapa. Békéscsaba és térsége az otthonom. Újkígyóson nőttem fel. 1993-ban a Kossuth Lajos Katonai Főiskolán út- és hídépítő mérnöki szakon diplomáztam. Ezt követően, 2005-ben az ELTE Állam- és Jogtudományi Karán jogászdoktorként végeztem. Emellett katasztrófa- és tűzvédelmi szervezői, mentésvezetői, valamint tűzszerészi vizsgát tettem.
                </p>
                <p>
                  Több mint két évtizedet töltöttem a katasztrófavédelemben, ahol számos hazai és nemzetközi bevetésen vettem részt. Mentésirányítóként ott voltam az 1999-es törökországi földrengésnél, a Békés megyei belvízkároknál, 2000-ben a közép-tiszai árvíznél, valamint a 2010-es vörösiszap-katasztrófánál is. 2014-ben dandártábornoknak neveztek ki. 2017 óta a Békés Vármegyei Kormányhivatal vezetője vagyok.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
                <img src="/drtakacsarpad.png" alt="Dr. Takács Árpád" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#ffc107]/20 rounded-2xl -z-0"></div>
            </div>
          </FadeIn>
        </div>

        {/* 2. blokk: kép bal, szöveg jobb (tükrözött) */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left" delay={0.1} className="relative order-2 md:order-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <img src="/drtakacsarpad_katasztrofavedelem.jpg" alt="Dr. Takács Árpád katasztrófavédelmi egyenruhában" className="w-full h-full object-cover" style={{objectPosition: '60% top'}} />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#ffc107]/20 rounded-2xl -z-0"></div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="order-1 md:order-2">
            <div className="bg-[053787]/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <div className="w-24 h-2 bg-[#ffc107] mb-8 shadow-[0_0_10px_#ffc107]"></div>
              <div className="space-y-6 text-lg text-blue-100 leading-loose">
                <p>
                  A terepen, katasztrófák idején tanultam meg igazán, mit jelent felelősséget viselni emberek élete, otthona, megélhetése iránt. Már ott megértettem, hogy egyetlen döntésnek azonnali következménye van a családokra, a vállalkozókra, az idősekre és a fiatalokra egyaránt. Ez a tapasztalat formálta bennem azt a meggyőződést, hogy szolgálni nem teher, hanem dicsőség.
                </p>
                <p>
                  Azért kívánom megmérettetni magam Békés 01. számú választókerületében, mert hiszek a térségünkben rejlő erőben. Hiszek az itt élők szorgalmában, és abban, hogy a Körösök vidéke nemcsak múltjában, hanem jövőjében is gazdag. Egy biztonságos, élhető és versenyképes körzetet vizionálok: ahol jó úton halad a gazdaság, az oktatás, a turizmus, elérhetőek a közszolgáltatások, megbecsült a munka, erős a családok hátországa, és a fiatalok nem elmennek, hanem hazajönnek. Ehhez, ezekben az időkben fegyelmezett és következetes érdekképviseletre van szükség. Mérnöki, jogi és közigazgatási ismereteim, valamint a válsághelyzetekben szerzett vezetői tapasztalatom a szavaim fedezete.
                </p>
              </div>
              <div className="mt-6 -mb-4 overflow-hidden">
                <span className="font-black text-2xl text-[#ffc107] opacity-90">Dr. Takács Árpád</span>
                <img
                  src="/1.png"
                  alt="Dr. Takács Árpád aláírása"
                  className="h-36 sm:h-48 w-auto -mt-10 sm:-mt-14 -ml-8 sm:-ml-12"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

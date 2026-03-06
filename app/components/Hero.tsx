"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Memoized Post Component to prevent unnecessary re-renders
const FacebookPost = memo(({ src, index, width }: { src: string, index: number, width: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Stagger loading to prevent network congestion
    // Increased delay for smoother initial load
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 800 + (index * 400));
    return () => clearTimeout(timer);
  }, [index]);

  return (
    // pointer-events-none by default for smooth scrolling
    // group-hover:pointer-events-auto to enable interaction when paused
    <div className="w-full h-full bg-white relative pointer-events-none group-hover:pointer-events-auto">
        {/* Loading Skeleton */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10 transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[053787] rounded-full animate-spin mb-3"></div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {shouldRender && (
            <iframe 
                src={src}
                width={width}
                height="500" 
                style={{border:'none', overflow:'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
                loading="lazy"
            ></iframe>
        )}
    </div>
  );
});

FacebookPost.displayName = "FacebookPost";

export default function Hero() {
  const posts = [
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdr.takacsarpad%2Fposts%2Fpfbid029uhbT2VTUjE2F9GPE4nWPjDtve96XVHS1pVfLxq6f5e65acqUhBf6YxGT76iKJpil&show_text=true&width=350",
      width: 350
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdr.takacsarpad%2Fposts%2Fpfbid02wMhse4AjNm2zaTGG1JJfWqXUu78VuGNmKNZ7YAQFH2acaSK7K3o12X4ZhX26beMql&show_text=true&width=350",
      width: 350
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=500&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2245882989213848%2F&show_text=true&width=280&t=0",
      width: 280
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=500&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1663679637933378%2F&show_text=true&width=280&t=0",
      width: 280
    }
  ];

  return (
    <div className="relative flex flex-col gap-8 md:gap-16">
        {/* MOBIL layout */}
        <section className="lg:hidden relative pt-32 px-6 w-full z-10 flex flex-col">
          <motion.div
            className="space-y-4 pt-4 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ffc107] font-bold text-xs uppercase tracking-wider shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tapasztalat • Stabilitás • Biztonság
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dr. Takács Árpád: <br/>
              <span className="text-[#ffc107]">A biztos választás</span>
            </motion.h1>
            <motion.p
              className="text-base text-blue-100 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Dr. Takács Árpád hivatalos weboldala. Hírek, események és információk a térség fejlődéséről és közösségi életéről.
            </motion.p>
            <motion.div
              className="flex gap-3 pt-2 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#hirek" className="px-5 py-3 rounded-lg text-[#053787] font-bold uppercase tracking-wide bg-[#ffc107] hover:bg-[#ffe082] transition-all flex items-center gap-2 shadow-xl text-sm">
                Legfrissebb Hírek
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#kapcsolat" className="px-5 py-3 rounded-lg font-bold uppercase tracking-wide bg-transparent border-2 border-white/30 text-white hover:border-[#ffc107] hover:text-[#ffc107] transition-all text-sm">
                Kapcsolatfelvétel
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* DESKTOP layout */}
        <section className="hidden lg:flex relative pt-48 pl-16 max-w-7xl mx-auto w-full min-h-[700px] flex-row items-end gap-20 z-10">
          {/* Szöveg bal oldal */}
          <motion.div
            className="space-y-8 w-[65%] pb-16 pt-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ffc107] font-bold text-sm uppercase tracking-wider mb-2 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tapasztalat • Stabilitás • Biztonság
            </motion.div>
            <motion.h1
              className="text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Dr. Takács Árpád: <br/>
              <span className="text-[#ffc107]">A biztos választás</span>
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 leading-relaxed font-medium max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dr. Takács Árpád hivatalos weboldala. Hírek, események és információk a térség fejlődéséről és közösségi életéről.
            </motion.p>
            <motion.div
              className="flex gap-4 pt-2 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a href="#hirek" className="px-8 py-4 rounded-lg text-[#053787] font-bold uppercase tracking-wide bg-[#ffc107] hover:bg-[#ffe082] hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-xl text-base">
                Legfrissebb Hírek
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#kapcsolat" className="px-8 py-4 rounded-lg font-bold uppercase tracking-wide bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#ffc107] hover:text-[#ffc107] transition-all text-base">
                Kapcsolatfelvétel
              </a>
            </motion.div>
          </motion.div>
          {/* Figura desktop */}
          <motion.div
            className="absolute bottom-[-58%] right-[-20%] h-[240%] w-[117%] pointer-events-none"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 30%)'
            }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/drtakacsarpad_arnyek.png"
              alt="Dr. Takács Árpád"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </motion.div>
        </section>

        {/* Moving Facebook Posts Section */}
        <div className="w-full overflow-hidden pb-12 relative z-10">
            {/* 
                Structure for seamless loop: 
                Container (animate-scroll) -> [Set 1 Wrapper] [Set 2 Wrapper]
                Each Wrapper has padding-right equal to gap to ensure seamless spacing.
            */}
            <div className="flex animate-scroll w-max group items-center">
                 {/* Set 1 Wrapper */}
                 <div className="flex gap-8 pr-8">
                     {posts.map((post, i) => (
                        <div key={i} className="flex-shrink-0 h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 relative transition-all" style={{ width: post.width }}>
                           <FacebookPost src={post.src} index={i} width={post.width} />
                        </div>
                     ))}
                 </div>
                 {/* Set 2 Wrapper (Duplicate for seamless loop) */}
                 <div className="flex gap-8 pr-8">
                     {posts.map((post, i) => (
                        <div key={`dup-${i}`} className="flex-shrink-0 h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 relative transition-all" style={{ width: post.width }}>
                           <FacebookPost src={post.src} index={i + posts.length} width={post.width} />
                        </div>
                     ))}
                 </div>
            </div>
        </div>
    </div>
  );
}

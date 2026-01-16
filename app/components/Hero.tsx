"use client";

import React, { useState, useEffect, memo } from "react";

import Image from "next/image";

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
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[#07245f] rounded-full animate-spin mb-3"></div>
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
        <section className="pt-44 md:pt-48 px-4 max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
          <div className="space-y-6 md:space-y-8 w-full">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ffcc00] font-bold text-sm uppercase tracking-wider mb-2 shadow-lg backdrop-blur-sm">
              Közösség • Szolgálat • Fejlődés
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
              A közösségért <br/>
              <span className="text-[#ffcc00]">
                dolgozunk
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-medium">
              Dr. Takács Árpád hivatalos weboldala. Hírek, események és információk a térség fejlődéséről és közösségi életéről.
            </p>
            <div className="flex gap-4 pt-2 flex-wrap">
              <a
                href="#hirek"
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg text-[#07245f] font-bold uppercase tracking-wide bg-[#ffcc00] hover:bg-white hover:shadow-[0_0_20px_rgba(255,204,0,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-xl text-sm md:text-base"
              >
                Legfrissebb Hírek
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#kapcsolat"
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold uppercase tracking-wide bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#ffcc00] hover:text-[#ffcc00] transition-all text-sm md:text-base"
              >
                Kapcsolatfelvétel
              </a>
            </div>
          </div>
          <div className="relative w-full h-[400px] lg:h-full lg:min-h-[500px]">
             <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/10 relative">
                {/* Hero Image */}
                <div className="absolute inset-0">
                   <Image 
                     src="/kep.jpg" 
                     alt="Kiemelt hír képe" 
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                     priority
                   />
                </div>
                
                {/* Overlay Gradient similar to the image provided */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07245f] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-8 text-white">
                   <div className="text-[#ffcc00] font-black uppercase text-sm tracking-widest mb-2">Kiemelt</div>
                   <h3 className="text-2xl font-bold leading-tight drop-shadow-md">Köszönjük a szolgálatot!</h3>
                   <p className="text-gray-300 mt-2 text-sm">Megalakult a Fényes és Térsége Polgárőr Egyesület</p>
                </div>
             </div>
          </div>
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

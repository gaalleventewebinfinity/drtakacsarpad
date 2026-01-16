import Image from "next/image";

export default function About() {
  return (
    <section id="rolam" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="bg-[#07245f]/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">
                Rólam
              </h2>
              <div className="w-24 h-2 bg-[#ffcc00] mb-8 shadow-[0_0_10px_#ffcc00]"></div>
              <div className="space-y-6 text-lg text-blue-100 leading-loose">
                <p>
                  Dr. Takács Árpád vagyok, elkötelezett a helyi közösség és a térség fejlesztése iránt. Célom, hogy munkámmal hozzájáruljak a biztonságosabb, élhetőbb és összetartóbb környezet megteremtéséhez.
                </p>
                <p>
                  Fontosnak tartom a párbeszédet és az együttműködést, hiszen közös sikereket csak összefogással érhetünk el.
                </p>
              </div>
              <div className="mt-10">
                 <img src="/signature.png" alt="" className="h-16 opacity-70 invert" /> 
                 {/* Placeholder for signature */}
                 <span className="font-handwriting text-2xl text-[#ffcc00] opacity-90">Dr. Takács Árpád</span>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-[3/4] rounded-lg bg-white/5 overflow-hidden shadow-2xl relative z-10 border border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#07245f]/60 to-transparent"></div>
                 <div className="h-full w-full flex items-center justify-center text-white/20">
                    <span className="text-8xl">👤</span>
                 </div>
              </div>
              {/* Decorative rectangle */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#ffcc00]/20 rounded-lg -z-0"></div>
           </div>
        </div>
      </div>
    </section>
  );
}


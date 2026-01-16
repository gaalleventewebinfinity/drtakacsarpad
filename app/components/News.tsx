export default function News() {
  return (
    <section id="hirek" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
         <h2 className="text-3xl md:text-4xl font-black mb-4 text-white drop-shadow-md">Hírek és Események</h2>
         <p className="text-blue-200 text-lg">A legfontosabb történések a térségből.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Main Featured Item matching the user image */}
        <div className="md:col-span-2 group relative rounded-xl overflow-hidden shadow-2xl hover:shadow-[#ffcc00]/20 transition-all duration-300 border border-white/10">
           <div className="aspect-video bg-gray-900 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-[#020d24] via-transparent to-transparent opacity-90"></div>
               <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="inline-block px-3 py-1 bg-[#ffcc00] text-[#07245f] text-xs font-black uppercase tracking-wider mb-3 rounded-sm shadow-md">
                     Kiemelt
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                     Megalakult a Fényes és Térsége Polgárőr Egyesület
                  </h3>
                  <p className="text-blue-100 font-medium mb-4">
                     Köszönjük a szolgálatot! Együtt a biztonságért.
                  </p>
                  <span className="text-[#ffcc00] text-sm font-bold uppercase tracking-widest border-b border-[#ffcc00] pb-1">Bővebben</span>
               </div>
               {/* Placeholder for the user's specific image */}
               <div className="absolute inset-0 -z-10 bg-[#1a2d4d] flex items-center justify-center">
                  <span className="text-white text-opacity-10 text-4xl font-bold">KÉP</span>
               </div>
           </div>
        </div>

        {/* Secondary News Items */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col bg-[#07245f]/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl hover:bg-[#07245f]/60 transition-all group">
            <div className="h-48 bg-white/5 relative transition-colors">
                <div className="absolute bottom-0 left-0 bg-[#ffcc00] text-[#07245f] text-xs font-bold px-3 py-1">
                   2023. 12. {10 + i}.
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ffcc00] transition-colors">
                  Közösségi esemény beszámoló {i}
              </h3>
              <p className="text-blue-200 text-sm mb-4 flex-1">
                Rövid összefoglaló a legutóbbi eseményről, fontosabb részletekkel és eredményekkel.
              </p>
              <a href="#" className="text-[#ffcc00] font-bold text-sm uppercase flex items-center gap-1 hover:gap-2 transition-all">
                Olvass tovább <span>→</span>
              </a>
            </div>
          </div>
        ))}

        {/* "More Articles" Card */}
        <a href="#" className="flex flex-col items-center justify-center bg-[#ffcc00] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all group min-h-[300px] relative">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="w-16 h-16 rounded-full bg-[#07245f] text-[#ffcc00] flex items-center justify-center mb-4 group-hover:rotate-90 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            <h3 className="text-2xl font-black text-[#07245f] uppercase tracking-wide">További cikkek</h3>
            <p className="text-[#07245f]/80 font-medium mt-2">Böngésszen archívumunkban</p>
        </a>

      </div>

      {/* Newsletter Section */}
      <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07245f] to-[#1e4b8a] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffcc00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        
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
                        className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-[#ffcc00] transition-all min-w-[280px]"
                    />
                    <button className="px-8 py-3 bg-[#ffcc00] hover:bg-white text-[#07245f] font-bold uppercase rounded-full shadow-[0_0_15px_rgba(255,204,0,0.4)] hover:shadow-[0_0_25px_rgba(255,204,0,0.6)] transition-all transform hover:-translate-y-0.5">
                        Feliratkozás
                    </button>
                </form>
            </div>
        </div>
      </div>

    </section>
  );
}

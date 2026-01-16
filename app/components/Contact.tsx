export default function Contact() {
  return (
    <section id="kapcsolat" className="py-24 text-white relative overflow-hidden z-10">
       <div className="max-w-4xl mx-auto px-4 text-center relative z-10 bg-[#07245f]/30 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md text-white">
             Lépjen kapcsolatba velünk!
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
             Kérdése van, vagy csatlakozna kezdeményezéseinkhez? Keressen minket bizalommal.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
             <a href="mailto:info@takacsarpad.hu" className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all border border-white/10 group">
                <span className="group-hover:scale-110 transition-transform">✉️</span>
                <span className="font-bold text-blue-50">info@takacsarpad.hu</span>
             </a>
             <a href="tel:+3612345678" className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all border border-white/10 group">
                <span className="group-hover:scale-110 transition-transform">📞</span>
                <span className="font-bold text-blue-50">+36 1 234 5678</span>
             </a>
          </div>

          <button className="px-10 py-4 bg-[#ffcc00] text-[#07245f] font-black uppercase tracking-wider rounded-lg hover:bg-white hover:text-[#07245f] transition-all shadow-xl shadow-black/20 transform hover:scale-105">
             Üzenet küldése
          </button>
       </div>
    </section>
  );
}


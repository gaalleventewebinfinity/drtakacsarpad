import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HirekPage() {
  const newsItems = [
    {
      id: 1,
      title: "Megalakult a Fényes és Térsége Polgárőr Egyesület",
      date: "2023. 12. 12.",
      excerpt: "Köszönjük a szolgálatot! Együtt a biztonságért. A térség biztonsága mindannyiunk közös érdeke.",
      category: "Kiemelt",
      image: "/placeholder-news-1.jpg"
    },
    {
      id: 2,
      title: "Közösségi esemény beszámoló 2",
      date: "2023. 12. 11.",
      excerpt: "Rövid összefoglaló a legutóbbi eseményről, fontosabb részletekkel és eredményekkel.",
      category: "Esemény"
    },
    {
      id: 3,
      title: "Közösségi esemény beszámoló 3",
      date: "2023. 12. 10.",
      excerpt: "Sikeresen lezajlott az éves közgyűlés, ahol meghatároztuk a jövő évi célokat.",
      category: "Esemény"
    },
    {
      id: 4,
      title: "Új fejlesztések a városban",
      date: "2023. 12. 08.",
      excerpt: "Megkezdődtek a felújítási munkálatok a főtéren, várhatóan tavaszra készül el.",
      category: "Fejlesztés"
    },
    {
      id: 5,
      title: "Adventi ünnepségsorozat",
      date: "2023. 12. 05.",
      excerpt: "Szeretettel várunk mindenkit a városi adventi gyertyagyújtásra.",
      category: "Kultúra"
    },
    {
      id: 6,
      title: "Lakossági fórum",
      date: "2023. 12. 01.",
      excerpt: "Kérdezzen bátran a képviselőktől! Minden vélemény számít.",
      category: "Közélet"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#ffcc00] selection:text-[#07245f] pt-24">
      {/* Background with halftone pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
           backgroundSize: '24px 24px',
           maskImage: 'linear-gradient(to bottom, transparent, transparent)'
        }}>
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16">
           <h1 className="text-5xl font-black mb-6 text-white drop-shadow-md">Hírek és Aktualitások</h1>
           <p className="text-blue-200 text-xl max-w-2xl mx-auto">
             Kövesse nyomon Békéscsaba és térsége legfrissebb eseményeit, fejlesztéseit és híreit.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col bg-[#07245f]/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl hover:bg-[#07245f]/60 transition-all group h-full">
              <div className="h-56 bg-white/5 relative transition-colors overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07245f] to-transparent opacity-60"></div>
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-black">
                      KÉP
                  </div>
                  
                  <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#ffcc00] text-[#07245f] text-xs font-bold uppercase tracking-wide rounded-full shadow-md">
                          {item.category}
                      </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 bg-[#07245f]/80 backdrop-blur px-4 py-2 text-white text-xs font-bold border-t border-r border-white/10 rounded-tr-lg">
                     {item.date}
                  </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ffcc00] transition-colors leading-tight">
                    {item.title}
                </h3>
                <p className="text-blue-200 text-sm mb-6 flex-1 leading-relaxed">
                  {item.excerpt}
                </p>
                <a href={`/hirek/${item.id}`} className="mt-auto inline-flex items-center gap-2 text-[#ffcc00] font-bold text-sm uppercase hover:gap-3 transition-all">
                  Teljes cikk <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section Reused */}
        <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#07245f] to-[#1e4b8a] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffcc00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      Nem akarsz lemaradni semmiről?
                  </h3>
                  <p className="text-blue-100 text-lg">
                      Iratkozz fel hírlevelünkre, és értesülj első kézből a térség legfrissebb híreiről!
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

      </main>

      <Footer />
    </div>
  );
}


import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - in a real app this would come from a database or CMS
const newsItems = [
  {
    id: 1,
    title: "Megalakult a Fényes és Térsége Polgárőr Egyesület",
    date: "2023. 12. 12.",
    category: "Kiemelt",
    content: `
      <p class="mb-4">Örömmel jelentjük be, hogy megalakult a Fényes és Térsége Polgárőr Egyesület. A szervezet célja a lakosság biztonságérzetének növelése, a bűnmegelőzés és a közrend fenntartása a településrészen.</p>
      <p class="mb-4">Az alakuló ülésen részt vettek a helyi lakosok, a rendőrség képviselői és az önkormányzat delegáltjai is. A közös munka azonnal megkezdődik, elsődleges feladatként a járőrszolgálat megszervezését és a helyi problémák feltérképezését tűzték ki célul.</p>
      <h3 class="text-2xl font-bold text-white mt-8 mb-4">Miért fontos ez?</h3>
      <p class="mb-4">A polgárőrség jelenléte bizonyítottan csökkenti a bűnözést és növeli a közösség összetartását. A tagok önkéntes alapon, szabadidejükben végzik tevékenységüket, amiért külön köszönet illeti őket.</p>
      <blockquote class="border-l-4 border-[#ffcc00] pl-4 italic my-8 text-blue-200">
        "Együtt, közös erővel biztonságosabbá tehetjük otthonunkat. Minden támogatást megadunk az új egyesületnek." - nyilatkozta Dr. Takács Árpád.
      </blockquote>
      <p>A jövőben várjuk további önkéntesek jelentkezését is, akik szívesen tennének környezetük biztonságáért.</p>
    `,
  },
  {
    id: 2,
    title: "Közösségi esemény beszámoló 2",
    date: "2023. 12. 11.",
    category: "Esemény",
    content: `
      <p class="mb-4">Sikeresen lezajlott a második nagy közösségi eseményünk, ahol a helyi lakosok és vállalkozók találkozhattak.</p>
      <p>A rendezvény célja a kapcsolatépítés és a helyi gazdaság élénkítése volt. Számos új ötlet és együttműködés született, amelyek a jövőben hozzájárulhatnak a térség fejlődéséhez.</p>
    `,
  },
  {
    id: 3,
    title: "Közösségi esemény beszámoló 3",
    date: "2023. 12. 10.",
    category: "Esemény",
    content: `
      <p class="mb-4">Az éves közgyűlés keretében értékeltük az elmúlt év eredményeit és elfogadtuk a jövő évi költségvetést.</p>
      <p>A tagság egyhangúlag támogatta a vezetőség beszámolóját, és új célokat tűzött ki a következő időszakra, különös tekintettel a fiatalok bevonására.</p>
    `,
  },
  {
    id: 4,
    title: "Új fejlesztések a városban",
    date: "2023. 12. 08.",
    category: "Fejlesztés",
    content: `
      <p class="mb-4">Nagy örömmel tájékoztatjuk a lakosságot, hogy megkezdődtek a régóta várt felújítási munkálatok a főtéren.</p>
      <p>A projekt keretében megújul a burkolat, új utcabútorokat helyezünk ki, és bővül a zöldfelület is. A munkálatok várhatóan tavaszra fejeződnek be.</p>
    `,
  },
  {
    id: 5,
    title: "Adventi ünnepségsorozat",
    date: "2023. 12. 05.",
    category: "Kultúra",
    content: `
      <p class="mb-4">Idén is megrendezésre kerül a hagyományos adventi ünnepségsorozat a város főterén.</p>
      <p>Minden vasárnap közös gyertyagyújtással, forralt borral és kulturális műsorral várjuk az érdeklődőket. Hangolódjunk együtt az ünnepekre!</p>
    `,
  },
  {
    id: 6,
    title: "Lakossági fórum",
    date: "2023. 12. 01.",
    category: "Közélet",
    content: `
      <p class="mb-4">Köszönjük mindenkinek, aki részt vett a legutóbbi lakossági fórumon.</p>
      <p>Számos fontos kérdés merült fel, többek között a közlekedés, a közvilágítás és a köztisztaság témakörében. Az elhangzott javaslatokat beépítjük a következő évi tervekbe.</p>
    `,
  }
];

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const newsItem = newsItems.find((item) => item.id === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen selection:bg-[#ffcc00] selection:text-[#07245f] pt-32">
      {/* Background with halftone pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
           backgroundSize: '24px 24px',
           maskImage: 'linear-gradient(to bottom, transparent, transparent)'
        }}>
      </div>

      <Navbar />

      <main className="mx-auto w-[95%] max-w-7xl px-0 pb-12 pt-0 relative z-10">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8 px-6">
            <Link href="/hirek" className="inline-flex items-center gap-2 text-[#ffcc00] font-bold text-sm uppercase hover:gap-3 transition-all group">
                <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Vissza a hírekhez
            </Link>
        </div>

        <article className="bg-[#07245f]/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-8 md:p-12 mb-12">
            {/* Header */}
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-[#ffcc00] text-[#07245f] text-xs font-bold uppercase tracking-wide rounded-full shadow-md">
                        {newsItem.category}
                    </span>
                    <span className="text-blue-200 text-sm font-medium">
                        {newsItem.date}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg mb-8">
                    {newsItem.title}
                </h1>
                
                {/* Featured Image Placeholder */}
                <div className="aspect-video bg-[#07245f]/50 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative mb-12 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07245f] to-transparent opacity-40"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">
                      KÉP
                    </div>
                </div>
            </header>

            {/* Content Body */}
            <div 
                className="prose prose-lg prose-invert max-w-none prose-p:text-blue-100 prose-headings:text-white prose-a:text-[#ffcc00] prose-blockquote:text-blue-200 prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />

            {/* Share / Tags Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-400 text-sm">
                    Tetszett a cikk? Ossza meg másokkal is!
                </p>
                <div className="flex gap-4">
                     <button className="px-4 py-2 bg-white/5 hover:bg-[#ffcc00] hover:text-[#07245f] border border-white/10 rounded-lg text-white text-sm font-bold transition-all">
                        Megosztás Facebookon
                     </button>
                     <button className="px-4 py-2 bg-white/5 hover:bg-[#ffcc00] hover:text-[#07245f] border border-white/10 rounded-lg text-white text-sm font-bold transition-all">
                        Link másolása
                     </button>
                </div>
            </div>
        </article>

        {/* Read Next Section */}
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-[#ffcc00]">További hírek</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].filter(i => i !== id).slice(0, 3).map((item) => (
                    <Link key={item} href={`/hirek/${item}`} className="group bg-[#07245f]/40 backdrop-blur-sm rounded-xl border border-white/5 p-5 hover:bg-[#07245f]/60 transition-all shadow-lg">
                        <div className="h-40 bg-white/5 rounded-lg mb-4 relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-t from-[#07245f] to-transparent opacity-60"></div>
                             <div className="absolute bottom-2 left-2 text-xs font-bold text-white bg-[#ffcc00] text-[#07245f] px-2 py-0.5 rounded-sm">
                                Esemény
                             </div>
                        </div>
                        <h3 className="text-white font-bold mb-2 group-hover:text-[#ffcc00] transition-colors line-clamp-2">
                            További érdekes cikk címe {item}
                        </h3>
                        <p className="text-blue-200 text-xs line-clamp-2">
                            Rövid leírás a cikk tartalmából, hogy felkeltse az érdeklődést...
                        </p>
                    </Link>
                ))}
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Valasztokerulet from "./components/Valasztokerulet";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[#ffc107] selection:text-[#053787]">
      {/* Background with halftone pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
           backgroundSize: '24px 24px',
           maskImage: 'linear-gradient(to bottom, transparent, transparent)'
        }}>
        </div>

      <Navbar />
      <Hero />
      <About />
      <Valasztokerulet />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

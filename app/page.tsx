import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-[#ffcc00] selection:text-[#07245f]">
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
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

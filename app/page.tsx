import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoStrip from './components/LogoStrip';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#09090B] text-white">
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-[#0B0B0C] to-[#111827]" />
        <div className="absolute top-20 right-0 h-[700px] w-[700px] rounded-full bg-[#FF9D5C]/20 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <Navbar />
      <div className="pt-20">
        <HeroSection />
      </div>

      
      <Testimonials />
      <Footer />
    </div>
  );
}
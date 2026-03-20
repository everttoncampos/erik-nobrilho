import AboutSplit from '../components/AboutSplit';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import Navbar from '../components/Navbar';
import PartnersBanner from '../components/PartnersBanner';
import ServicesGrid from '../components/ServicesGrid';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

function AutomotiveLandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesGrid />
        <AboutSplit />
        <PartnersBanner />
        <TestimonialsCarousel />
        <FinalCTA />
        <section id="contato" className="bg-[#0A0A0A] py-10">
          <div className="mx-auto w-full max-w-7xl px-4 font-body text-sm text-[#E5E5E5] sm:px-6 lg:px-8">
            <p>
              WhatsApp: <span className="font-semibold text-white">(65) 99619-9804</span>
            </p>
            <p className="mt-2">
              Endereço:{' '}
              <span className="font-semibold text-white">
                Avenida Ismael José do Nascimento (Rua 1) 2152-W, Jardim Tangará II, Tangará da Serra
              </span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AutomotiveLandingPage;

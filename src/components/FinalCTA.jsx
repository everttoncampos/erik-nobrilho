import heroBackground from '../assets/hero.png';
import CTAButton from './CTAButton';

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20">
      <img src={heroBackground} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-5xl uppercase text-white sm:text-6xl">Faça Já o Seu Orçamento!</h2>
        <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer" className="mt-6">
          Clique Aqui
        </CTAButton>
      </div>
    </section>
  );
}

export default FinalCTA;

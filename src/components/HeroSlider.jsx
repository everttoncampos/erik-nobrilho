import { useEffect, useState } from 'react';
import heroBackground from '../assets/hero.png';
import CTAButton from './CTAButton';

const slides = [
  {
    title: 'NO BRILHO ESTÉTICA AUTOMOTIVA',
    subtitle: 'Atendimento exclusivo para elevar presença, brilho e sofisticação do seu carro.',
  },
  {
    title: 'DETALHAMENTO COM PADRÃO PREMIUM',
    subtitle: 'Transformação visual com acabamento técnico e cuidado em cada superfície.',
  },
  {
    title: 'AGENDAMENTO PERSONALIZADO',
    subtitle: 'Reserve seu horário e receba atendimento dedicado do início ao acabamento.',
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] pt-24">
      <img src={heroBackground} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.52)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(0,87,255,0.32),transparent_42%),linear-gradient(120deg,rgba(0,0,0,0.75),rgba(0,0,0,0.85))]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl uppercase leading-[1.05] text-white drop-shadow-[0_0_16px_rgba(0,87,255,0.32)] sm:text-5xl lg:text-6xl">
            {slides[current].title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base text-[#E5E5E5] sm:text-lg">{slides[current].subtitle}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer">
              Agendar Seu Horário
            </CTAButton>
            <CTAButton href="#servicos" variant="secondary">
              Conheça Nossos Serviços
            </CTAButton>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-md border border-[#2A2A2A] bg-[#0A0A0A]/70 p-2 text-[#E5E5E5] transition hover:text-[#00A3FF] sm:left-8"
        onClick={prev}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m15 6-6 6 6 6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-md border border-[#2A2A2A] bg-[#0A0A0A]/70 p-2 text-[#E5E5E5] transition hover:text-[#00A3FF] sm:right-8"
        onClick={next}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2 sm:right-10">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ir para slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${index === current ? 'bg-[#00A3FF]' : 'bg-[#A3A3A3]'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;

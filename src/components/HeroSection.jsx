import heroImage from '../assets/hero.png';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_0%_95%,rgba(161,161,170,0.08),transparent_32%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative max-w-2xl">
            <span className="inline-flex rounded-full border border-zinc-600/80 bg-zinc-900/80 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
              Atendimento exclusivo, mediante agendamento
            </span>

            <h1 className="mt-7 text-5xl leading-[1.02] text-zinc-100 sm:text-6xl md:text-7xl">
              O padrão de acabamento que faz seu carro ser notado.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              Na No Brilho Estética Automotiva, cada superfície recebe atenção meticulosa para entregar presença,
              profundidade de brilho e sofisticação real.
            </p>

            <p className="mt-4 text-sm italic text-zinc-200">Reserve seu horário e eleve o nível do seu carro.</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer">
                Agendar agora
              </CTAButton>
              <CTAButton href="#servicos" variant="secondary">
                Explorar serviços
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(113,113,122,0.1),rgba(9,9,11,0.4))] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-700/80 bg-zinc-900/65 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
              <img src={heroImage} alt="Veículo com acabamento premium" className="h-[340px] w-full object-cover sm:h-[500px]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(9,9,11,0.75),transparent_44%,rgba(9,9,11,0.55))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-zinc-600/60 bg-zinc-950/75 p-4 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-300">@no_brilhotga</p>
                <p className="mt-2 text-sm text-zinc-100">Estética automotiva com acabamento premium e presença de showroom.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;

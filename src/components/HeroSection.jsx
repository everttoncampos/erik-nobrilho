import heroImage from '../assets/hero.png';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.16),transparent_42%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <span className="inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-100">
              Atendimento exclusivo, mediante agendamento
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Seu carro com mais <span className="text-sky-300">brilho</span>, presença e sofisticação.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Estética automotiva com acabamento premium para quem valoriza cada detalhe. Reserve seu horário e eleve o nível do seu carro.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer">
                Agendar via WhatsApp
              </CTAButton>
              <CTAButton href="#servicos" variant="secondary">
                Ver serviços
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_210deg_at_50%_50%,rgba(14,116,144,0.45),rgba(59,130,246,0.08),rgba(148,163,184,0.25),rgba(14,116,144,0.45))] opacity-75 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/75 shadow-[0_25px_90px_rgba(14,165,233,0.22)] backdrop-blur-xl">
              <img
                src={heroImage}
                alt="Carro com acabamento premium"
                className="h-[320px] w-full object-cover object-center sm:h-[460px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.72),transparent_45%,rgba(2,6,23,0.5))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">@no_brilhotga</p>
                <p className="mt-2 text-sm text-slate-200">Acabamento de alto padrão para destacar o que seu carro tem de melhor.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;

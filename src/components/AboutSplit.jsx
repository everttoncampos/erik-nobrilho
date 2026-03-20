import heroBackground from '../assets/hero.png';

function AboutSplit() {
  return (
    <section id="sobre" className="bg-[#0A0A0A] py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h2 className="border-l border-[#00A3FF] pl-4 font-display text-5xl uppercase text-white sm:text-6xl">Sobre a No Brilho</h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-[#E5E5E5] sm:text-base">
            A No Brilho Estética Automotiva entrega atendimento especializado para quem busca alto padrão de acabamento no veículo.
            Unimos técnica, atenção aos detalhes e processos criteriosos para um resultado premium.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#E5E5E5] sm:text-base">
            Atendimento exclusivo, mediante agendamento. Reserve seu horário e eleve o nível do seu carro.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#121212] shadow-[0_12px_30px_rgba(0,87,255,0.22)]">
          <img src={heroBackground} alt="No Brilho" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.45),rgba(0,0,0,0.2))]" />
          <button
            type="button"
            aria-label="Reproduzir vídeo"
            className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#00A3FF] text-white shadow-[0_10px_25px_rgba(0,87,255,0.45)]"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M8 5v14l11-7-11-7Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSplit;

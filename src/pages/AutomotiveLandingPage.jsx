import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero.png';

const services = [
  'Lavagem',
  'Higienizacao',
  'Detalhamento',
  'Polimento',
  'Vitrificacao',
  'Insulfilm',
  'Higienizacao de estofados',
];

const brandNames = ['No Brilho', 'Vitrificacao', 'Polimento', 'Insulfilm', 'Detalhamento'];

function ServiceTile({ title }) {
  return (
    <article className="group relative overflow-hidden border border-zinc-800 bg-zinc-950">
      <img src={heroImage} alt={title} className="h-56 w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-80 sm:h-64" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.2))]" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <h3 className="text-3xl leading-none text-zinc-100">{title}</h3>
        <button className="inline-flex items-center gap-2 border-l-2 border-blue-500 bg-zinc-900/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-200">
          + Ver Mais
        </button>
      </div>
    </article>
  );
}

function TestimonialCard({ origin }) {
  return (
    <article className="rounded-sm border border-zinc-800 bg-zinc-900/70 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{origin}</p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
        Espaco reservado para depoimento real de cliente, com nome, foto e avaliacao oficial.
      </p>
    </article>
  );
}

function AutomotiveLandingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar />

      <main>
        <section id="inicio" className="relative overflow-hidden border-b border-zinc-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(48,79,254,0.42),transparent_42%),linear-gradient(130deg,rgba(0,0,0,0.74),rgba(0,0,0,0.84))]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-blue-300">No Brilho Estetica Automotiva</p>
              <h1 className="mt-6 text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">ACABAMENTO PREMIUM</h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-200 sm:text-base">
                Atendimento exclusivo, mediante agendamento. Seu carro com mais brilho, presenca e sofisticacao.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer">
                  Entrar em contato
                </CTAButton>
                <CTAButton href="#servicos" variant="secondary">
                  Ver servicos
                </CTAButton>
              </div>
            </div>

            <div className="relative z-10">
              <img src={heroImage} alt="No Brilho Estetica Automotiva" className="w-full object-cover drop-shadow-[0_18px_48px_rgba(48,79,254,0.35)]" />
            </div>
          </div>
        </section>

        <section id="servicos" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl leading-none text-zinc-100 sm:text-6xl">CONHECA NOSSOS SERVICOS</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
              Solucoes premium para transformar visual, protecao e valorizacao do seu veiculo com execucao profissional.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <ServiceTile key={service} title={service} />
            ))}
          </div>
        </section>

        <section id="sobre" className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="border-l-2 border-blue-500 pl-4 text-5xl leading-none text-zinc-100 sm:text-6xl">
              SOBRE A NO BRILHO
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-300">
              A No Brilho Estetica Automotiva oferece servicos de cuidado completo para o seu carro. Com foco em acabamento premium, nossa entrega une limpeza tecnica, brilho refinado e protecao visual.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Atendimento exclusivo, mediante agendamento, para garantir atencao total em cada detalhe do veiculo.
            </p>
          </div>
          <div className="relative overflow-hidden border border-zinc-800">
            <img src={heroImage} alt="Acabamento premium automotivo" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.45),rgba(0,0,0,0.25))]" />
          </div>
        </section>

        <section className="bg-blue-700 py-8">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-8 px-4 text-sm font-semibold uppercase tracking-[0.16em] text-white sm:px-6 lg:px-8">
            {brandNames.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-5xl leading-none text-zinc-100 sm:text-6xl">DEPOIMENTOS</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <TestimonialCard origin="Google" />
            <TestimonialCard origin="Instagram" />
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-zinc-800 bg-zinc-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(48,79,254,0.3),transparent_40%)]" />
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-5 px-4 py-12 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <h2 className="text-5xl leading-none text-white sm:text-6xl">FACA JA O SEU ORCAMENTO!</h2>
            <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer">
              Clique aqui
            </CTAButton>
          </div>
        </section>

        <section id="contato" className="mx-auto w-full max-w-7xl px-4 py-14 text-sm text-zinc-300 sm:px-6 lg:px-8">
          <p>
            WhatsApp: <span className="font-semibold text-zinc-100">(65) 99619-9804</span>
          </p>
          <p className="mt-2">
            Endereco:{' '}
            <span className="font-semibold text-zinc-100">
              Avenida Ismael Jose do Nascimento (Rua 1) 2152-W, Jardim Tangara II, Tangara da Serra
            </span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AutomotiveLandingPage;

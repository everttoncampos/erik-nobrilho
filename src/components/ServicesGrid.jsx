import heroBackground from '../assets/hero.png';

const services = [
  'Lavagem',
  'Higienização',
  'Detalhamento',
  'Polimento',
  'Vitrificação',
  'Insulfilm',
  'Higienização de Estofados',
];

function ServicesGrid() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-[#121212] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(0,163,255,0.1),transparent_36%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-white sm:text-4xl lg:text-5xl">Conheça Nossos Serviços</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-[#A3A3A3] sm:text-base">
            Soluções premium para transformar acabamento, proteção e presença do seu veículo.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="group relative overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#121212]">
              <img src={heroBackground} alt={service} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.2))]" />
              <h3 className="absolute left-5 top-5 font-display text-2xl uppercase text-white sm:text-3xl">{service}</h3>
              <button className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-md border border-[#00A3FF] bg-transparent px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#00A3FF] hover:text-[#0A0A0A]">
                + Ver Mais
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;

import heroBackground from '../../image-background.png';

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
    <section id="servicos" className="bg-[#0A0A0A] py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-5xl uppercase text-white sm:text-6xl">Conheça Nossos Serviços</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-[#A3A3A3] sm:text-base">
            Soluções premium para transformar acabamento, proteção e presença do seu veículo.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="group relative overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#121212]">
              <img src={heroBackground} alt={service} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.2))]" />
              <h3 className="absolute left-5 top-5 font-display text-4xl uppercase text-white">{service}</h3>
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

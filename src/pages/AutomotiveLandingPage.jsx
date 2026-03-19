import ContactCard from '../components/ContactCard';
import CTAButton from '../components/CTAButton';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import heroImage from '../assets/hero.png';

const featureItems = [
  {
    title: 'Acabamento Premium',
    description: 'Cada etapa é pensada para entregar brilho refinado e presença visual de alto padrão.',
  },
  {
    title: 'Atenção Aos Detalhes',
    description: 'Cuidado técnico em cada superfície para um resultado limpo, uniforme e sofisticado.',
  },
  {
    title: 'Proteção e Valorização',
    description: 'Serviços que ajudam a preservar o visual e valorizar a estética do veículo.',
  },
  {
    title: 'Atendimento Exclusivo',
    description: 'Atendimento reservado e organizado para uma experiência personalizada.',
  },
  {
    title: 'Cuidado Interno e Externo',
    description: 'Do acabamento da pintura ao interior, tudo para elevar o nível do seu carro.',
  },
];

const services = [
  {
    title: 'Lavagem',
    description: 'Limpeza cuidadosa para realçar o visual do veículo com aparência impecável.',
  },
  {
    title: 'Higienização',
    description: 'Renove o interior com limpeza técnica para mais conforto e sensação de novo.',
  },
  {
    title: 'Detalhamento',
    description: 'Tratamento minucioso para destacar cada linha e acabamento do carro.',
  },
  {
    title: 'Polimento',
    description: 'Mais brilho, profundidade e sofisticação para a pintura.',
  },
  {
    title: 'Vitrificação',
    description: 'Proteção com acabamento refinado, mantendo o brilho por mais tempo.',
  },
  {
    title: 'Insulfilm',
    description: 'Conforto, estilo e privacidade com aplicação profissional.',
  },
  {
    title: 'Higienização de estofados',
    description: 'Remoção de sujeiras e revitalização para um interior mais elegante.',
  },
];

const experiencePoints = [
  'Brilho com presença e impacto visual',
  'Proteção que preserva a estética',
  'Valorização da aparência do veículo',
  'Sensação de carro novo em cada detalhe',
  'Cuidado profissional do início ao acabamento',
];

const galleryItems = [
  {
    title: 'Acabamento Espelhado',
    subtitle: 'Substitua por foto real do resultado final',
    image: heroImage,
  },
  {
    title: 'Detalhamento Interno',
    subtitle: 'Substitua por foto real do interior',
  },
  {
    title: 'Proteção de Pintura',
    subtitle: 'Substitua por foto real da vitrificação',
  },
  {
    title: 'Finalização Premium',
    subtitle: 'Substitua por foto real de entrega',
    image: heroImage,
  },
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 5 6v5c0 5.2 3.2 8.4 7 10 3.8-1.6 7-4.8 7-10V6l-7-3Z" />
      <path d="m9.5 11.5 1.8 1.8 3.4-3.6" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 13h14l-1.4-4.2a2 2 0 0 0-1.9-1.3H8.3a2 2 0 0 0-1.9 1.3L5 13Z" />
      <path d="M4 13v4h2m12 0h2v-4M7 17a1.5 1.5 0 1 0 0 .01M17 17a1.5 1.5 0 1 0 0 .01" />
    </svg>
  );
}

const iconByIndex = [SparkIcon, ShieldIcon, CarIcon];

function AutomotiveLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(130deg,#020617_0%,#020617_40%,#0f172a_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(59,130,246,0.1),transparent_38%)]" />

      <Navbar />
      <main>
        <HeroSection />

        <section id="diferenciais" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Reveal>
            <SectionTitle
              badge="Diferenciais"
              title="Estética automotiva com padrão de cuidado acima do comum"
              description="Uma experiência pensada para quem exige acabamento sofisticado e atenção real em cada detalhe."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((item, index) => {
              const Icon = iconByIndex[index % iconByIndex.length];
              return (
                <Reveal key={item.title} delay={80 + index * 60}>
                  <FeatureCard icon={<Icon />} title={item.title} description={item.description} />
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="servicos" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Reveal>
            <SectionTitle
              badge="Serviços"
              title="Soluções premium para transformar o visual do seu carro"
              description="Seleção de serviços para elevar brilho, proteção e sofisticação com execução profissional."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconByIndex[index % iconByIndex.length];
              return (
                <Reveal key={service.title} delay={80 + index * 55}>
                  <ServiceCard icon={<Icon />} title={service.title} description={service.description} />
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <SectionTitle
                badge="Experiência"
                title="Mais do que estética: uma sensação de exclusividade ao dirigir"
                description="Quando o acabamento é premium, o resultado aparece na presença, no cuidado e no impacto visual em cada trajeto."
              />
              <div className="mt-7 space-y-3">
                {experiencePoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.9)]" />
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Mensagem Comercial</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Reserve seu horário e eleve o nível do seu carro.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Atendimento exclusivo, mediante agendamento, para entregar acabamento impecável com tempo e atenção dedicados ao seu veículo.
                </p>
                <CTAButton
                  href="https://wa.me/556596199804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full justify-center sm:w-auto"
                >
                  Quero agendar agora
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Reveal>
            <SectionTitle
              badge="Destaques Visuais"
              title="Galeria com identidade premium e acabamento editorial"
              description="Estrutura pronta para fotos reais de antes/depois, vitrificação, polimento e entrega."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={90 + index * 60}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_18px_55px_rgba(2,6,23,0.55)]">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="h-64 w-full bg-[linear-gradient(140deg,rgba(14,165,233,0.18),rgba(15,23,42,0.85),rgba(148,163,184,0.18))] p-6">
                      <div className="h-full rounded-xl border border-dashed border-sky-200/30 bg-black/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.82),rgba(2,6,23,0.15)_60%,transparent)]" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-200">{item.subtitle}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-sky-300/35 bg-[linear-gradient(125deg,rgba(14,165,233,0.22),rgba(2,6,23,0.95)_35%,rgba(30,41,59,0.9)_100%)] p-7 shadow-[0_25px_90px_rgba(14,165,233,0.2)] sm:p-10">
              <div className="pointer-events-none absolute -right-24 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-sky-300/20 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.2em] text-sky-100">Agendamento</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Vagas limitadas para atendimento exclusivo. Garanta seu horário.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Atendimento personalizado para entregar o nível de acabamento que seu carro merece.
              </p>
              <CTAButton
                href="https://wa.me/556596199804"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full justify-center sm:w-auto"
              >
                Reservar horário no WhatsApp
              </CTAButton>
            </div>
          </Reveal>
        </section>

        <section id="contato" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <SectionTitle
                badge="Localização e Contato"
                title="Fale direto com a No Brilho Estética Automotiva"
                description="Instagram, WhatsApp e endereço para você reservar com praticidade e atendimento agendado."
              />
              <div className="mt-7 space-y-3 text-sm text-slate-300">
                <p>
                  Instagram principal: <span className="font-semibold text-white">@no_brilhoesteticaautomotiva</span>
                </p>
                <p>
                  Instagram exibido: <span className="font-semibold text-white">@no_brilhotga</span>
                </p>
                <p>
                  Proprietário: <span className="font-semibold text-white">@erik_oliveira66</span>
                </p>
                <p>
                  Endereço: <span className="font-semibold text-white">Avenida Ismael José do Nascimento (Rua 1) 2152-W, Jardim Tangará II, Tangará da Serra</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactCard />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AutomotiveLandingPage;

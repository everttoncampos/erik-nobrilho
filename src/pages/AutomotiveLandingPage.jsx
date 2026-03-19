import BeforeAfterSlider from '../components/BeforeAfterSlider';
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
    title: 'Refinamento de acabamento',
    description: 'Execução técnica para revelar brilho limpo e uniforme, com leitura premium em cada ângulo.',
  },
  {
    title: 'Atenção a cada superfície',
    description: 'Do painel aos detalhes de pintura, cada etapa recebe cuidado meticuloso e padrão elevado.',
  },
  {
    title: 'Valorização visual do veículo',
    description: 'Uma apresentação mais elegante e impactante para preservar presença e percepção de valor.',
  },
  {
    title: 'Atendimento sob agendamento',
    description: 'Agenda exclusiva para dedicar tempo, precisão e foco total no resultado do seu carro.',
  },
  {
    title: 'Cuidado interno e externo',
    description: 'Harmonia entre cabine e carroceria para entregar um resultado completo, limpo e sofisticado.',
  },
];

const services = [
  {
    title: 'Lavagem',
    description: 'Revitalização cuidadosa para recuperar clareza visual e presença no dia a dia.',
  },
  {
    title: 'Higienização',
    description: 'Tratamento técnico para interior limpo, confortável e com sensação de ambiente renovado.',
  },
  {
    title: 'Detalhamento',
    description: 'Ajustes finos para elevar acabamento, leitura de linhas e elegância do conjunto.',
  },
  {
    title: 'Polimento',
    description: 'Mais profundidade de brilho e acabamento sofisticado para pintura com visual de destaque.',
  },
  {
    title: 'Vitrificação',
    description: 'Proteção refinada com acabamento nobre para manter o visual por mais tempo.',
  },
  {
    title: 'Insulfilm',
    description: 'Aplicação profissional para equilíbrio entre estética, conforto e privacidade.',
  },
  {
    title: 'Higienização de estofados',
    description: 'Limpeza especializada para renovar textura, aparência e conforto da cabine.',
  },
];

const experiencePoints = [
  'Brilho sofisticado e sem aspecto artificial',
  'Proteção estética para rotina urbana',
  'Leitura visual de carro bem cuidado',
  'Sensação de renovação ao entrar e dirigir',
  'Atendimento profissional com foco em resultado',
];

const galleryItems = [
  {
    title: 'Reflexo de pintura',
    subtitle: 'Área pronta para foto real de resultado final',
    image: heroImage,
  },
  {
    title: 'Acabamento de interior',
    subtitle: 'Área pronta para foto real de higienização',
  },
  {
    title: 'Tratamento de proteção',
    subtitle: 'Área pronta para foto real de vitrificação',
  },
  {
    title: 'Entrega premium',
    subtitle: 'Área pronta para foto real de entrega ao cliente',
    image: heroImage,
  },
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 14 8.5 19.5 10.5 14 12.5 12 18l-2-5.5L4.5 10.5 10 8.5 12 3Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 5 6.2V11c0 5.3 3.4 8.6 7 10 3.6-1.4 7-4.7 7-10V6.2L12 3Z" />
      <path d="m9.3 11.8 1.8 1.8 3.7-3.7" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4.8 12.5h14.4l-1.3-3.9a2 2 0 0 0-1.9-1.4H8a2 2 0 0 0-1.9 1.4l-1.3 3.9Z" />
      <path d="M4 12.5v4h2.1m11.8 0H20v-4M7.2 16.5a1.3 1.3 0 1 0 .01 0M16.8 16.5a1.3 1.3 0 1 0 .01 0" />
    </svg>
  );
}

const iconByIndex = [SparkIcon, ShieldIcon, CarIcon];

function AutomotiveLandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(150deg,#09090b_0%,#0b0b0d_45%,#111115_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_5%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_88%_80%,rgba(161,161,170,0.07),transparent_38%)]" />

      <Navbar />

      <main>
        <HeroSection />

        <section id="diferenciais" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Reveal>
            <SectionTitle
              badge="Diferenciais"
              title="Um serviço pensado para quem exige presença e acabamento impecável"
              description="Menos volume, mais critério. Cada carro recebe atenção técnica para um resultado limpo, refinado e memorável."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((item, index) => {
              const Icon = iconByIndex[index % iconByIndex.length];
              return (
                <Reveal key={item.title} delay={70 + index * 60}>
                  <FeatureCard icon={<Icon />} title={item.title} description={item.description} />
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="servicos" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Reveal>
            <SectionTitle
              badge="Serviços"
              title="Soluções premium para elevar o padrão visual do seu veículo"
              description="Da manutenção estética ao acabamento de proteção, serviços organizados para resultados consistentes e sofisticados."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconByIndex[index % iconByIndex.length];
              return (
                <Reveal key={service.title} delay={70 + index * 55}>
                  <ServiceCard icon={<Icon />} title={service.title} description={service.description} />
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="resultado" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal>
              <SectionTitle
                badge="Resultado e Experiência"
                title="A sensação de dirigir um carro com presença de showroom"
                description="Um acabamento premium vai além da estética imediata: ele transmite cuidado, valoriza o veículo e transforma a experiência ao volante."
              />
              <div className="mt-8 space-y-3">
                {experiencePoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-zinc-700/70 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-200"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-zinc-200" />
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <BeforeAfterSlider
                beforeImage={heroImage}
                afterImage={heroImage}
                beforeLabel="Pré-tratamento"
                afterLabel="Pós-tratamento"
              />
              <p className="mt-3 text-xs text-zinc-400">
                Área preparada para aplicar pares reais de antes/depois com consistência de enquadramento e iluminação.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Reveal>
            <SectionTitle
              badge="Galeria"
              title="Composição visual editorial para destacar seus melhores resultados"
              description="Layout pronto para exibir imagens reais de acabamento, textura e brilho com estética de marca premium."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={80 + index * 55}>
                <article className="group relative overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="h-72 w-full bg-[linear-gradient(140deg,rgba(24,24,27,0.9),rgba(39,39,42,0.8),rgba(63,63,70,0.65))] p-6">
                      <div className="h-full rounded-xl border border-dashed border-zinc-500/50 bg-black/25" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,9,11,0.85),rgba(9,9,11,0.2)_58%,transparent)]" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl leading-tight text-zinc-100">{item.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-300">{item.subtitle}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-500/70 bg-[linear-gradient(130deg,rgba(24,24,27,0.96),rgba(39,39,42,0.92),rgba(12,12,14,0.98))] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.5)] sm:p-10">
              <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-300">Agendamento</p>
              <h2 className="mt-3 max-w-2xl text-5xl leading-tight text-zinc-100">
                Agenda limitada para manter padrão elevado em cada atendimento.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Atendimento exclusivo, mediante agendamento. Fale no WhatsApp e reserve seu horário com antecedência.
              </p>
              <CTAButton
                href="https://wa.me/556596199804"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full justify-center sm:w-auto"
              >
                Reservar horário no WhatsApp
              </CTAButton>
            </div>
          </Reveal>
        </section>

        <section id="contato" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <SectionTitle
                badge="Localização e Contato"
                title="Atendimento premium em Tangará da Serra"
                description="Canal direto para informações, agendamento e alinhamento do serviço ideal para seu veículo."
              />

              <div className="mt-8 space-y-3 text-sm text-zinc-300">
                <p>
                  Instagram principal: <span className="font-semibold text-zinc-100">@no_brilhoesteticaautomotiva</span>
                </p>
                <p>
                  Instagram exibido: <span className="font-semibold text-zinc-100">@no_brilhotga</span>
                </p>
                <p>
                  Proprietário: <span className="font-semibold text-zinc-100">@erik_oliveira66</span>
                </p>
                <p>
                  Endereço:{' '}
                  <span className="font-semibold text-zinc-100">
                    Avenida Ismael José do Nascimento (Rua 1) 2152-W, Jardim Tangará II, Tangará da Serra
                  </span>
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

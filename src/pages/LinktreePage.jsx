import LinktreeCard from '../components/LinktreeCard';

const plusCode = '9FCV+VC Tangará da Serra, MT';
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`;

function LinktreePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl items-center px-4 py-10 sm:px-6">
        <div className="w-full">
          <header className="mb-8 text-center">
            <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border border-[#00A3FF]/70 bg-[#121212] font-display text-3xl text-white shadow-[0_10px_30px_rgba(0,87,255,0.3)]">
              NB
            </div>
            <h1 className="mt-4 font-display text-3xl uppercase text-white sm:text-4xl">No Brilho</h1>
            <p className="mt-1 font-body text-sm text-[#A3A3A3] sm:text-base">Estética Automotiva</p>
          </header>

          <div className="space-y-4">
            <LinktreeCard
              title="Agendamento no WhatsApp"
              description="Atendimento exclusivo, mediante agendamento."
              href="https://wa.me/556596199804"
              cta="Agendar Agora"
              target="_blank"
              rel="noopener noreferrer"
            />

            <LinktreeCard
              title="Conhecer a Landing Page"
              description="Veja todos os serviços e diferenciais da No Brilho."
              href="/"
              cta="Abrir Site"
            />

            <LinktreeCard
              title="Localização"
              description={`Plus Code: ${plusCode}`}
              href={mapsLink}
              cta="Abrir no Mapa"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinktreePage;

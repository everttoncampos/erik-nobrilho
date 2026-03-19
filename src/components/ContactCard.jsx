import CTAButton from './CTAButton';

function ContactCard() {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Contato Premium</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">No Brilho Estética Automotiva</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Avenida Ismael José do Nascimento (Rua 1) 2152-W, Jardim Tangará II, Tangará da Serra
      </p>

      <div className="mt-6 space-y-3 text-sm text-slate-200">
        <p>
          WhatsApp: <span className="font-semibold text-white">(65) 99619-9804</span>
        </p>
        <p>
          Instagram: <span className="font-semibold text-white">@no_brilhoesteticaautomotiva</span>
        </p>
        <p>
          Proprietário: <span className="font-semibold text-white">@erik_oliveira66</span>
        </p>
        <p className="text-sky-200">Atendimento exclusivo, mediante agendamento.</p>
      </div>

      <CTAButton
        href="https://wa.me/556596199804"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full justify-center"
      >
        Agendar no WhatsApp
      </CTAButton>
    </aside>
  );
}

export default ContactCard;

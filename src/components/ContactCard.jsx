import CTAButton from './CTAButton';

function ContactCard() {
  return (
    <aside className="rounded-3xl border border-zinc-700/70 bg-zinc-900/65 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8">
      <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-300">Contato</p>
      <h3 className="mt-3 text-4xl leading-tight text-zinc-100">No Brilho Estética Automotiva</h3>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
        Avenida Ismael José do Nascimento (Rua 1) 2152-W, Jardim Tangará II, Tangará da Serra
      </p>

      <div className="mt-7 space-y-3 text-sm text-zinc-200">
        <p>
          WhatsApp: <span className="font-semibold text-zinc-100">(65) 99619-9804</span>
        </p>
        <p>
          Instagram: <span className="font-semibold text-zinc-100">@no_brilhoesteticaautomotiva</span>
        </p>
        <p>
          Proprietário: <span className="font-semibold text-zinc-100">@erik_oliveira66</span>
        </p>
        <p className="text-zinc-300">Atendimento exclusivo, mediante agendamento.</p>
      </div>

      <CTAButton
        href="https://wa.me/556596199804"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 w-full justify-center"
      >
        Agendar no WhatsApp
      </CTAButton>
    </aside>
  );
}

export default ContactCard;

import CTAButton from './CTAButton';

const serviceLinks = ['Lavagem', 'Higienização', 'Detalhamento', 'Polimento', 'Vitrificação', 'Insulfilm'];
const conceptLinks = ['Início', 'Serviços', 'Sobre Nós', 'Contato'];

function Footer() {
  return (
    <footer className="bg-[#0A0A0A]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#00A3FF]/70 bg-[#121212] font-display text-xl text-white">
              NB
            </span>
            <span className="font-display text-xl uppercase text-white sm:text-2xl">No Brilho</span>
          </div>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#E5E5E5]">
            Estética automotiva premium com atendimento exclusivo mediante agendamento.
          </p>
          <p className="mt-4 font-body text-sm text-[#E5E5E5]">(65) 99619-9804</p>
          <p className="mt-2 font-body text-sm text-[#E5E5E5]">
            Avenida Ismael José do Nascimento (Rua 1) 2152-W, Jardim Tangará II, Tangará da Serra
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase text-white sm:text-2xl">Serviços</h3>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((item) => (
              <li key={item}>
                <a href="#servicos" className="font-body text-sm text-[#E5E5E5] transition-colors hover:text-[#00A3FF]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase text-white sm:text-2xl">A Concept</h3>
          <ul className="mt-4 space-y-2">
            {conceptLinks.map((item) => (
              <li key={item}>
                <a href={`#${item === 'Início' ? 'inicio' : item === 'Serviços' ? 'servicos' : item === 'Sobre Nós' ? 'sobre' : 'contato'}`} className="font-body text-sm text-[#E5E5E5] transition-colors hover:text-[#00A3FF]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase text-white sm:text-2xl">Receba Nossa Nova Newsletter</h3>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-md border border-[#A3A3A3] bg-[#121212] px-3 py-2 font-body text-sm text-[#E5E5E5] outline-none placeholder:text-[#A3A3A3] focus:border-[#00A3FF]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-md border border-[#A3A3A3] bg-[#121212] px-3 py-2 font-body text-sm text-[#E5E5E5] outline-none placeholder:text-[#A3A3A3] focus:border-[#00A3FF]"
            />
            <CTAButton href="#inicio" className="w-full justify-center">
              Inscreva-se
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="border-t border-[#121212]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
          <p className="font-body text-xs text-[#A3A3A3]">© 2026 No Brilho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            {['IG', 'FB', 'YT'].map((item) => (
              <a key={item} href="#contato" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#2A2A2A] font-body text-xs text-[#E5E5E5] transition-colors hover:border-[#00A3FF] hover:text-[#00A3FF]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

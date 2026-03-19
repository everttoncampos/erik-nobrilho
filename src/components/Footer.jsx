function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <h3 className="text-3xl leading-tight text-zinc-100">No Brilho</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            Estética automotiva com acabamento premium. Atendimento exclusivo, mediante agendamento.
          </p>
          <p className="text-sm font-semibold text-zinc-100">(65) 99619-9804</p>
        </div>

        <div>
          <h4 className="text-xl text-zinc-100">Serviços</h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>Lavagem</li>
            <li>Detalhamento</li>
            <li>Polimento</li>
            <li>Vitrificação</li>
            <li>Insulfilm</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl text-zinc-100">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>@no_brilhoesteticaautomotiva</li>
            <li>@no_brilhotga</li>
            <li>@erik_oliveira66</li>
            <li>Tangará da Serra - MT</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl text-zinc-100">Receba Novidades</h4>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 focus:border-blue-400"
            />
            <button className="inline-flex items-center justify-center rounded-sm border border-blue-500 bg-blue-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-600">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-5 text-center text-xs text-zinc-500">
        No Brilho Estética Automotiva • Reserve seu horário e eleve o nível do seu carro.
      </div>
    </footer>
  );
}

export default Footer;

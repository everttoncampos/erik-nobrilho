function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">No Brilho Estética Automotiva</h3>
          <p className="mt-2 text-sm text-slate-300">Estética automotiva com acabamento premium.</p>
        </div>
        <div className="space-y-2 text-sm text-slate-300 md:text-right">
          <p>WhatsApp: (65) 99619-9804</p>
          <p>Instagram: @no_brilhoesteticaautomotiva</p>
          <p>Tangará da Serra - MT</p>
          <p className="text-sky-200">Reserve seu horário e eleve o nível do seu carro.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

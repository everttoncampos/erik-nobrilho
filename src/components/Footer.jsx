function Footer() {
  return (
    <footer className="border-t border-zinc-800/90 bg-zinc-950/90">
      <div className="mx-auto grid w-full max-w-7xl gap-7 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-3xl leading-tight text-zinc-100">No Brilho Estética Automotiva</h3>
          <p className="mt-2 text-sm text-zinc-300">Acabamento premium para carros que exigem presença.</p>
        </div>
        <div className="space-y-2 text-sm text-zinc-300 md:text-right">
          <p>WhatsApp: (65) 99619-9804</p>
          <p>Instagram: @no_brilhoesteticaautomotiva</p>
          <p>Tangará da Serra - MT</p>
          <p className="text-zinc-100">Reserve seu horário e eleve o nível do seu carro.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

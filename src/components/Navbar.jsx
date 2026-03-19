import CTAButton from './CTAButton';

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#resultado', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-500/80 bg-zinc-900 text-xs font-bold tracking-[0.22em] text-zinc-100">
            NB
          </span>
          <span className="text-sm tracking-[0.08em] text-zinc-100 sm:text-base">No Brilho Estética Automotiva</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-zinc-300 transition-colors duration-200 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[11px]">
          WhatsApp
        </CTAButton>
      </div>
    </header>
  );
}

export default Navbar;

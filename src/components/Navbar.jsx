import CTAButton from './CTAButton';

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-300/30 bg-sky-300/15 text-xs font-bold tracking-widest text-sky-100">
            NB
          </span>
          <span className="text-sm font-medium tracking-wide text-white sm:text-base">No Brilho Estética Automotiva</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition-colors duration-200 hover:text-sky-200">
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs sm:text-sm">
          WhatsApp
        </CTAButton>
      </div>
    </header>
  );
}

export default Navbar;

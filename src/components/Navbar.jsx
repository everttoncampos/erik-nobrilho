import CTAButton from './CTAButton';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Contato' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-blue-500/70 bg-zinc-900 text-xs font-bold tracking-[0.22em] text-zinc-100">
            NB
          </span>
          <span className="font-display text-lg uppercase tracking-[0.14em] text-zinc-100 sm:text-xl">No Brilho Estética Automotiva</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-lg uppercase tracking-[0.12em] text-zinc-300 transition-colors duration-200 hover:text-blue-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-4 py-2">
          Fale Conosco
        </CTAButton>
      </div>
    </header>
  );
}

export default Navbar;

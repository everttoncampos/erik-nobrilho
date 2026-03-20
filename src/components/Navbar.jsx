import { useEffect, useState } from 'react';
import CTAButton from './CTAButton';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-[#1D1D1D] bg-[#0A0A0A]/95 backdrop-blur-xl' : 'border-transparent bg-[#0A0A0A]/40'}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#00A3FF]/70 bg-[#121212] font-display text-xl text-white">
            NB
          </span>
          <span className="font-display text-2xl uppercase tracking-[0.06em] text-white">No Brilho</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-body text-sm text-[#E5E5E5] transition-colors duration-200 hover:text-[#00A3FF]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer">
            Fale Conosco
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#2A2A2A] text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#1D1D1D] bg-[#0A0A0A] px-4 py-4 md:hidden">
          <nav className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block font-body text-sm text-[#E5E5E5] transition-colors hover:text-[#00A3FF]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <CTAButton href="https://wa.me/556596199804" target="_blank" rel="noopener noreferrer" className="mt-4 w-full">
            Agendar Agora
          </CTAButton>
        </div>
      )}
    </header>
  );
}

export default Navbar;

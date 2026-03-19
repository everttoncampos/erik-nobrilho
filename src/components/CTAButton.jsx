function CTAButton({ href, children, variant = 'primary', className = '', target = '_self', rel }) {
  const baseClasses =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-sm px-6 py-3 font-display text-lg font-semibold uppercase tracking-[0.12em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950';

  const variants = {
    primary:
      'border border-blue-500 bg-[linear-gradient(120deg,#304ffe,#1d2ad6)] text-white shadow-[0_10px_35px_rgba(48,79,254,0.35)] hover:-translate-y-0.5 hover:shadow-[0_15px_42px_rgba(48,79,254,0.45)]',
    secondary:
      'border border-zinc-600/70 bg-zinc-900/75 text-zinc-100 backdrop-blur-md hover:border-blue-400/80 hover:text-blue-100',
  };

  return (
    <a href={href} target={target} rel={rel} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),transparent_55%)] opacity-75 transition-opacity duration-300 group-hover:opacity-95" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default CTAButton;

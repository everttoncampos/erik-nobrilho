function CTAButton({ href, children, variant = 'primary', className = '', target = '_self', rel }) {
  const baseClasses =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950';

  const variants = {
    primary:
      'border border-zinc-200/80 bg-[linear-gradient(120deg,#f3f4f6,#d4d4d8_45%,#fafafa)] text-zinc-900 shadow-[0_12px_40px_rgba(255,255,255,0.14)] hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(255,255,255,0.2)]',
    secondary:
      'border border-zinc-600/70 bg-zinc-900/75 text-zinc-100 backdrop-blur-md hover:border-zinc-400 hover:bg-zinc-900',
  };

  return (
    <a href={href} target={target} rel={rel} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_50%)] opacity-75 transition-opacity duration-300 group-hover:opacity-95" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default CTAButton;

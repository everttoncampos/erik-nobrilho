function CTAButton({ href, children, variant = 'primary', className = '', target = '_self', rel }) {
  const baseClasses =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  const variants = {
    primary:
      'bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 text-slate-950 shadow-[0_12px_50px_rgba(56,189,248,0.35)] hover:scale-[1.02] hover:shadow-[0_14px_60px_rgba(59,130,246,0.45)]',
    secondary:
      'border border-white/20 bg-white/5 text-slate-100 backdrop-blur-md hover:border-sky-300/70 hover:bg-sky-300/10',
  };

  return (
    <a href={href} target={target} rel={rel} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default CTAButton;

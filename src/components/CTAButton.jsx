function CTAButton({ href, children, variant = 'primary', className = '', target = '_self', rel }) {
  const baseClasses =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]';

  const variants = {
    primary:
      'border border-[#00A3FF] bg-[#00A3FF] text-[#0A0A0A] shadow-[0_8px_24px_rgba(0,87,255,0.3)] hover:-translate-y-0.5 hover:bg-[#0095E9] hover:shadow-[0_10px_26px_rgba(0,87,255,0.45)]',
    secondary:
      'border border-[#00A3FF] bg-transparent text-white hover:bg-[#00A3FF] hover:text-[#0A0A0A]',
    ghost:
      'border border-[#2A2A2A] bg-[#121212] text-[#E5E5E5] hover:border-[#00A3FF] hover:text-white',
  };

  return (
    <a href={href} target={target} rel={rel} className={`${baseClasses} ${variants[variant]} ${className}`.trim()}>
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.25),transparent_55%)] opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default CTAButton;

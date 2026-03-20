function LinktreeCard({ title, description, href, cta, target = '_self', rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group block rounded-2xl border border-[#1E1E1E] bg-[#121212] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A3FF]/70 hover:shadow-[0_14px_35px_rgba(0,87,255,0.22)]"
    >
      <h2 className="font-display text-2xl uppercase text-white sm:text-3xl">{title}</h2>
      <p className="mt-2 font-body text-sm text-[#A3A3A3] sm:text-base">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#00A3FF] bg-transparent px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-white transition group-hover:bg-[#00A3FF] group-hover:text-[#0A0A0A]">
        {cta}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

export default LinktreeCard;

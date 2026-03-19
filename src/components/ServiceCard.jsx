function ServiceCard({ icon, title, description }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_14px_40px_rgba(255,255,255,0.07)]">
      <span className="pointer-events-none absolute inset-x-6 -top-24 h-24 rounded-full bg-white/6 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-500/60 bg-zinc-800 text-zinc-200 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-100">
          {icon}
        </div>
        <h3 className="text-2xl leading-tight text-zinc-100">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;

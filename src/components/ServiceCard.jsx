function ServiceCard({ icon, title, description }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/55 hover:shadow-[0_16px_45px_rgba(14,165,233,0.25)]">
      <span className="pointer-events-none absolute inset-x-6 -top-24 h-24 rounded-full bg-sky-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-300/30 bg-sky-300/10 text-sky-100">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;

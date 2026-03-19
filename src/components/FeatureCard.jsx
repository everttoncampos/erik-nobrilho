function FeatureCard({ icon, title, description }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.5)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-slate-900/70">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200/30 bg-sky-300/15 text-sky-200 transition-colors duration-300 group-hover:border-sky-300/60 group-hover:bg-sky-300/25">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
    </article>
  );
}

export default FeatureCard;

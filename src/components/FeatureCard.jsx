function FeatureCard({ icon, title, description }) {
  return (
    <article className="group rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-900/70">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-500/60 bg-zinc-800 text-zinc-200 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-100">
        {icon}
      </div>
      <h3 className="text-2xl leading-tight text-zinc-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
    </article>
  );
}

export default FeatureCard;

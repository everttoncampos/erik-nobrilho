function SectionTitle({ badge, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {badge && (
        <span className="mb-5 inline-flex rounded-full border border-zinc-500/60 bg-zinc-900/80 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-300">
          {badge}
        </span>
      )}
      <h2 className="text-4xl leading-tight text-zinc-100 sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">{description}</p>}
    </div>
  );
}

export default SectionTitle;

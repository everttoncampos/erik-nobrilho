function SectionTitle({ badge, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>}
    </div>
  );
}

export default SectionTitle;

const partnerNames = ['Vitrificação', 'Polimento', 'Insulfilm', 'Detalhamento', 'Higienização'];

function PartnersBanner() {
  const marqueeItems = [...partnerNames, ...partnerNames];

  return (
    <section className="relative overflow-hidden bg-[#0057FF] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0057FF] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0057FF] to-transparent" />

      <div className="partners-marquee">
        <div className="partners-track">
          {marqueeItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center rounded-md border border-white/25 bg-white/10 px-3 py-2 font-display text-base uppercase tracking-[0.06em] text-white shadow-[0_0_18px_rgba(255,255,255,0.15)] backdrop-blur-sm sm:px-4 sm:text-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersBanner;

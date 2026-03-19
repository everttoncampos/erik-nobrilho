import { useMemo, useState } from 'react';

function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Antes', afterLabel = 'Depois' }) {
  const [position, setPosition] = useState(58);
  const clipPath = useMemo(() => `inset(0 ${100 - position}% 0 0)`, [position]);

  return (
    <div className="rounded-3xl border border-zinc-700/70 bg-zinc-900/70 p-4 backdrop-blur-sm">
      <div className="relative overflow-hidden rounded-2xl">
        <img src={beforeImage} alt={`Resultado ${beforeLabel}`} className="h-[300px] w-full object-cover sm:h-[420px]" />
        <div className="absolute inset-0" style={{ clipPath }}>
          <img src={afterImage} alt={`Resultado ${afterLabel}`} className="h-full w-full object-cover" />
        </div>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-zinc-100/90" />
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-100/80 bg-zinc-900/80 text-zinc-100">
            ||
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full border border-zinc-500/60 bg-zinc-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-zinc-300/60 bg-zinc-100/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-900">
          {afterLabel}
        </span>
      </div>

      <label className="mt-4 block" htmlFor="before-after">
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-300">Compare o resultado</span>
        <input
          id="before-after"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-700 accent-zinc-100"
        />
      </label>
    </div>
  );
}

export default BeforeAfterSlider;

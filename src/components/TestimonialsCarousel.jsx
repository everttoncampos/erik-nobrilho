import { useState } from 'react';

const testimonials = [
  {
    name: 'Cliente Google',
    text: 'Atendimento excelente e resultado impecável. O carro ficou com aparência de novo.',
  },
  {
    name: 'Cliente Instagram',
    text: 'Profissionais detalhistas, organização no atendimento e acabamento premium.',
  },
  {
    name: 'Cliente WhatsApp',
    text: 'Agendamento fácil e serviço entregue com muito cuidado em cada detalhe.',
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-[#121212] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_85%,rgba(0,87,255,0.14),transparent_36%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl uppercase text-white sm:text-4xl lg:text-5xl">Depoimentos</h2>

        <div className="mt-10 rounded-xl border border-[#1E1E1E] bg-[#121212] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-body text-base font-semibold text-white">{testimonials[current].name}</p>
              <div className="mt-2 flex gap-1 text-[#00A3FF]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
            </div>
            <span className="font-body text-xs uppercase tracking-[0.12em] text-[#A3A3A3]">Google</span>
          </div>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#E5E5E5]">{testimonials[current].text}</p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button type="button" onClick={prev} className="rounded-md border border-[#2A2A2A] p-2 text-[#E5E5E5] transition hover:text-[#00A3FF]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full ${index === current ? 'bg-[#00A3FF]' : 'bg-[#A3A3A3]'}`}
            />
          ))}
          <button type="button" onClick={next} className="rounded-md border border-[#2A2A2A] p-2 text-[#E5E5E5] transition hover:text-[#00A3FF]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
